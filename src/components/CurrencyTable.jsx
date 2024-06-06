// import React, { useState } from 'react';
// import { Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, FormControl, InputLabel, Select, MenuItem, RadioGroup, Radio, FormControlLabel } from '@mui/material';
// import FinData from "../data/finData.json";

// const CurrencyTable = () => {
//   const data = FinData.Sheet1;
//   const months = Object.keys(data[0]).filter(month => month !== "Overhead");

//   const [currencyType, setCurrencyType] = useState('USD');
//   const [decimalPlaces, setDecimalPlaces] = useState(2);

//   const handleChangeCurrency = (event) => {
//     setCurrencyType(event.target.value);
//   };

//   const handleChangeDecimalPlaces = (event) => {
//     setDecimalPlaces(Number(event.target.value));
//   };

//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyType, minimumFractionDigits: decimalPlaces }).format(value);
//   };

//   return (
//     <Box sx={{ maxWidth: '100%', overflowX: 'auto', padding: '20px' }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
//         <FormControl>
//           <InputLabel id="currency-type-label">Currency Type</InputLabel>
//           <Select
//             labelId="currency-type-label"
//             id="currency-type-select"
//             value={currencyType}
//             onChange={handleChangeCurrency}
//           >
//             <MenuItem value="USD">USD</MenuItem>
//             <MenuItem value="EUR">EUR</MenuItem>
//             <MenuItem value="GBP">GBP</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl component="fieldset">
//           <RadioGroup row aria-label="decimal-places" name="decimal-places" value={decimalPlaces} onChange={handleChangeDecimalPlaces}>
//             <FormControlLabel value={0} control={<Radio />} label="0" />
//             <FormControlLabel value={1} control={<Radio />} label="1" />
//             <FormControlLabel value={2} control={<Radio />} label="2" />
//           </RadioGroup>
//         </FormControl>
//       </Box>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="financial summary table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Cashflow</TableCell>
//               {months.map((month, index) => (
//                 <TableCell key={index} sx={{ color: 'blue.500' }}>{month}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((entry, entryIndex) => (
//               <TableRow key={entryIndex}>
//                 <TableCell sx={{ color: 'red.500' }}>{entry.Overhead}</TableCell>
//                 {months.map((month, monthIndex) => (
//                   <TableCell key={monthIndex}>{formatCurrency(entry[month])}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default CurrencyTable;
