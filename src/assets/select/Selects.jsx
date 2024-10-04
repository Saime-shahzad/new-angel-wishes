import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selects() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box 
    sx={{
        width: { md: "100%", xs: "80%" },
        marginLeft: { md: "0px", xs: "10px" },
      }}
    >
      <FormControl fullWidth className='' >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          className='rounded-4 selectControl ' 
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={15}>Fifteen</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={25}>Twentifive</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}