import { Box} from '@mui/material';
import { useMemo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';
import FinData from "../data/finData.json";

const data = FinData.Sheet1;
const months = Object.keys(data[0]).filter(month => month !== "Overhead");

const calculateTotalRevenue = (data) => {
  const filteredData = data.filter(entry => entry.Overhead.includes("Revenue"));
  const totalRevenue = months.reduce((acc, month) => {
    acc[month] = filteredData.reduce((sum, entry) => sum + entry[month], 0);
    return acc;
  }, {});
  return totalRevenue;
};

const calculateTotalCOGS = (data) => {
  const filteredData = data.filter(entry => entry.Overhead.includes("COGS"));
  const totalCOGS = months.reduce((acc, month) => {
    acc[month] = filteredData.reduce((sum, entry) => sum + entry[month], 0);
    return acc;
  }, {});
  return totalCOGS;
};

const calculateGrossProfit = (revenue, cogs) => {
  return months.reduce((acc, month) => {
    acc[month] = revenue[month] - cogs[month];
    return acc;
  }, {});
};

export const Linechart = () => {
  const revenueData = useMemo(() => calculateTotalRevenue(FinData.Sheet1), []);
  const cogsData = useMemo(() => calculateTotalCOGS(FinData.Sheet1), []);
  const grossProfitData = useMemo(() => calculateGrossProfit(revenueData, cogsData), [revenueData, cogsData]);

  const chartData = months.map(month => ({
    name: month,
    Revenue: revenueData[month] || 0,
    COGS: cogsData[month] || 0,
    'Gross Profit': grossProfitData[month] || 0
  }));

  console.log('chartData:', chartData); // Log the chart data

  return (
    <Box bgcolor="white" boxShadow="rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px" p="4px" ml="2px" mb="4" height={220}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData} margin={{ top: 1, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Revenue" stroke="purple" strokeWidth={3.5} />
          <Line type="monotone" dataKey="COGS" stroke="blue" strokeWidth={3.5} />
          <Line type="monotone" dataKey="Gross Profit" stroke="orange" strokeWidth={3.5} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
