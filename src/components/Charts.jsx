import FinData from "../data/finData.json";
import { Container } from '@mui/material';
import { useMemo } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Bar, Area, ComposedChart } from 'recharts';


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

export const Charts = () => {
  const revenueData = useMemo(() => calculateTotalRevenue(FinData.Sheet1), []);
  const cogsData = useMemo(() => calculateTotalCOGS(FinData.Sheet1), []);
  const grossProfitData = useMemo(() => calculateGrossProfit(revenueData, cogsData), [revenueData, cogsData]);

  const chartData = months.map(month => ({
    name: month,
    Revenue: revenueData[month] || 0,
    COGS: cogsData[month] || 0,
    'Gross Profit': grossProfitData[month] || 0
  }));

  return (
    <Container sx={{ backgroundColor: 'white', boxShadow: 3, padding: 1, marginBottom: 2, height: '310px', width: '50%' }}>
        <ResponsiveContainer width="100%" height={310}>
          <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} style={{ padding: "8px" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" barSize={20} fill="purple" />
            <Line type="monotone" dataKey="COGS" stroke="blue" />
            <Area type="monotone" dataKey="Gross Profit" fill="orange" stroke="#82ca9d" />
          </ComposedChart>
        </ResponsiveContainer>
      </Container>
  );
};
