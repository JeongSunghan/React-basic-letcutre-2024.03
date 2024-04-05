import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function TextInputs() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField disabled id="filled-basic" label="Filled" variant="filled" />
      <TextField aria-readonly id="standard-basic" label="Standard" variant="standard" />
      <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
      />
      <TextField
        id="outlined-multiline-static"
        label="댓글을 입력하세요"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="통화선택"
        defaultValue="EUR"
        helperText="통화를 선택하세요"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}