import React, { useState } from 'react';
import { Box,  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import FinData from "../data/finData.json";
import { CurrencySelector,DecimalPlacesSelector } from './Selectors';

export const CashflowTable = () => {
  const data = FinData.Sheet1;
  const months = Object.keys(data[0]).filter(month => month !== "Overhead");

  // State for currency type, number of decimal places, and multiplier
  const [currencyType, setCurrencyType] = useState('USD');
  const [decimalPlaces, setDecimalPlaces] = useState(2);
  const [multiplier, setMultiplier] = useState(1);

  // Function to handle currency change
  const handleCurrencyChange = (selectedCurrency) => {
    setCurrencyType(selectedCurrency);
  };

  // Function to handle decimal places change
  const handleDecimalPlacesChange = (selectedDecimalPlaces) => {
    setDecimalPlaces(selectedDecimalPlaces);
  };

  // Function to handle multiplier change
  const handleMultiplierChange = (selectedMultiplier) => {
    setMultiplier(selectedMultiplier);
  };

  // Function to format currency
  const formatCurrency = (value) => {
    const adjustedValue = value / multiplier;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyType, minimumFractionDigits: decimalPlaces }).format(adjustedValue);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <CurrencySelector currencyType={currencyType} onChange={handleCurrencyChange} />
        <DecimalPlacesSelector
          decimalPlaces={decimalPlaces}
          onChangeDecimalPlaces={handleDecimalPlacesChange}
          onChangeMultiplier={handleMultiplierChange}
        />
      </Box>
      <Box sx={{ backgroundColor: 'white', boxShadow: 2, padding: 2, height: '289px', overflowY: 'auto' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cashflow</TableCell>
                {months.map((month, index) => (
                  <TableCell key={index} sx={{ color: 'blue.500' }}>{month}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((entry, entryIndex) => (
                <TableRow key={entryIndex}>
                  <TableCell sx={{ color: 'brown' }}>{entry.Overhead}</TableCell>
                  {months.map((month, monthIndex) => (
                    <TableCell key={monthIndex}>{formatCurrency(entry[month])}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
