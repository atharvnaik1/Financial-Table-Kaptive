import { Box, Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer } from '@mui/material';
import FinData from "../data/finData.json";


const data = FinData.Sheet1;

// Extract the months dynamically from the first entry
const months = Object.keys(data[0]).filter(month => month !== "Overhead");

const calculateTotal = (data, filter) => {
  return months.reduce((acc, month) => {
    acc[month] = data.filter(entry => entry.Overhead.includes(filter)).reduce((sum, entry) => sum + entry[month], 0);
    return acc;
  }, {});
};

const calculateGrossProfit = (revenue, cogs) => {
  return months.reduce((acc, month) => {
    acc[month] = revenue[month] - cogs[month];
    return acc;
  }, {});
};

export const Report = () => {
  const totalRevenue = calculateTotal(data, "Sales");
  const totalCOGS = calculateTotal(data, "COGS");
  const grossProfit = calculateGrossProfit(totalRevenue, totalCOGS);

  return (
    <Box sx={{ backgroundColor: 'white', boxShadow: 2, padding: 2, height: '289px', overflowY: 'auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Metric</TableCell>
              {months.map(month => (
                <TableCell key={month}>{month}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Total Revenue</TableCell>
              {months.map(month => (
                <TableCell key={month}>{totalRevenue[month].toFixed(2)}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Total COGS</TableCell>
              {months.map(month => (
                <TableCell key={month}>{totalCOGS[month].toFixed(2)}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Gross Profit</TableCell>
              {months.map(month => (
                <TableCell key={month}>{grossProfit[month].toFixed(2)}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
