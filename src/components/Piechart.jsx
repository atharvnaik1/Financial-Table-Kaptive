// import { Container } from '@mui/material';
// import { useMemo } from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import FinData from "../data/finData.json";

// const data = FinData.Sheet1;
// const months = Object.keys(data[0]).filter(month => month !== "Overhead");

// const calculateTotalRevenue = (data) => {
//   const filteredData = data.filter(entry => entry.Overhead.includes("Revenue"));
//   return filteredData.reduce((sum, entry) => {
//     return sum + months.reduce((monthSum, month) => monthSum + entry[month], 0);
//   }, 0);
// };

// const calculateTotalCOGS = (data) => {
//   const filteredData = data.filter(entry => entry.Overhead.includes("COGS"));
//   return filteredData.reduce((sum, entry) => {
//     return sum + months.reduce((monthSum, month) => monthSum + entry[month], 0);
//   }, 0);
// };

// const calculateGrossProfit = (revenue, cogs) => revenue - cogs;

// export const Piechart = () => {
//   const totalRevenue = useMemo(() => calculateTotalRevenue(FinData.Sheet1), []);
//   const totalCOGS = useMemo(() => calculateTotalCOGS(FinData.Sheet1), []);
//   const totalGrossProfit = useMemo(() => calculateGrossProfit(totalRevenue, totalCOGS), [totalRevenue, totalCOGS]);

//   const chartData = [
//     { name: 'Revenue', value: totalRevenue },
//     { name: 'COGS', value: totalCOGS },
//     { name: 'Gross Profit', value: totalGrossProfit }
//   ];

//   const COLORS = ['#0088FE', '#FF8042', '#FFBB28'];

//   return (
//     <Container sx={{ backgroundColor: 'white', boxShadow: 3, padding: 1, marginLeft: '2px', marginBottom: '2px', height: '310px', width: '47%' }}>
//       <ResponsiveContainer width="100%" height={310}>
//         <PieChart style={{ padding: "10px", zIndex: "1" }}>
//           <Pie
//             data={chartData}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={111}
//             fill="#8884d8"
//             label
//           >
//             {chartData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </Container>
//   );
// };
