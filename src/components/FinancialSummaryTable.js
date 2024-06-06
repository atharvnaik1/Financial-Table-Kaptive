// src/components/FinancialSummaryTable.js

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import CurrencySelector from './CurrencySelector';
import DecimalSelector from './DecimalSelector';
import finData from '../data/finData.json';

const FinancialSummaryTable = () => {
  const [currency, setCurrency] = useState('$');
  const [decimals, setDecimals] = useState(2);
  const [data, setData] = useState(finData);

  const formatValue = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency === '$' ? 'USD' : currency === '€' ? 'EUR' : 'GBP',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items);
  };

  return (
    <div style={{ padding: 20 }}>
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <DecimalSelector decimals={decimals} setDecimals={setDecimals} />
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {['Overhead', 'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                <TableCell key={index}>{month}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {data.map((row, index) => (
                      <Draggable key={row.Overhead} draggableId={row.Overhead} index={index}>
                        {(provided) => (
                          <TableRow
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TableCell>
                              <span>::</span>
                            </TableCell>
                            <TableCell>{row.Overhead}</TableCell>
                            <TableCell>{formatValue(row.Jan)}</TableCell>
                            <TableCell>{formatValue(row.Feb)}</TableCell>
                            <TableCell>{formatValue(row.March)}</TableCell>
                            <TableCell>{formatValue(row.April)}</TableCell>
                            <TableCell>{formatValue(row.May)}</TableCell>
                            <TableCell>{formatValue(row.June)}</TableCell>
                            <TableCell>{formatValue(row.July)}</TableCell>
                            <TableCell>{formatValue(row.August)}</TableCell>
                            <TableCell>{formatValue(row.September)}</TableCell>
                            <TableCell>{formatValue(row.October)}</TableCell>
                            <TableCell>{formatValue(row.November)}</TableCell>
                            <TableCell>{formatValue(row.December)}</TableCell>
                          </TableRow>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FinancialSummaryTable;
