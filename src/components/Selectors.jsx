import { Box,  FormControl, InputLabel, Select, MenuItem, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import React from 'react';


export const CurrencySelector = ({ currencyType, onChange }) => {
    const handleCurrencyChange = (event) => {
      onChange(event.target.value);
    };
  
    return (
      <FormControl>
        <InputLabel id="currency-type-label">Currency Type</InputLabel>
        <Select
          labelId="currency-type-label"
          id="currency-type-select"
          value={currencyType}
          onChange={handleCurrencyChange}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
        </Select>
      </FormControl>
    );
  };
  
  export const DecimalPlacesSelector = ({ decimalPlaces, onChangeDecimalPlaces, onChangeMultiplier }) => {
    const handleDecimalPlacesChange = (event) => {
      onChangeDecimalPlaces(Number(event.target.value));
    };
  
    const handleMultiplierChange = (event) => {
      onChangeMultiplier(Number(event.target.value));
    };
  
    return (
      <Box>
       
        <FormControl component="fieldset">
          <RadioGroup row aria-label="multiplier" name="multiplier" defaultValue={1} onChange={handleMultiplierChange}>
            <FormControlLabel value={1} control={<Radio />} label="Decimal" />
            <FormControlLabel value={100} control={<Radio />} label="Percent" />
            {/* <FormControlLabel value={100} control={<Radio />} label="100" /> */}
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };
  