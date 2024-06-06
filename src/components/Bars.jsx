import { Container, Typography } from '@mui/material';
import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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

export const Bars = () => {
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
    <Container sx={{ backgroundColor: 'white', boxShadow: 3, padding: 1, marginBottom: 2, height: '280px' }}>
      <Typography variant="h6" sx={{ paddingBottom: 2 }}>Detailed Cashflow Analysis by Month :-</Typography>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 1 }}>
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} style={{ padding: '10px' }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill="purple" />
            <Bar dataKey="COGS" fill="blue" />
            <Bar dataKey="Gross Profit" fill="orange" />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </Container>
  );
};
