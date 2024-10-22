import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selects({ menueItems, menueName, onChange, value, iconName }) {
  // Event handler for when the selection changes
  const handleChange = (event) => {
    if (event?.target?.value) {  // Ensure event and target are defined
      onChange(event.target.value);  // Pass selected value back to parent
    } else {
      console.error("Event or target is undefined.");
    }
  };

  return (
    <Box
      sx={{
        width: { md: "100%", xs: "80%" },
        marginLeft: { md: "0px", xs: "10px" },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
         Menu Name
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}  // Use the controlled value
          onChange={handleChange}  // Handle the change event
          label=" menueName"
          className="rounded-4 selectControl"
          // aria-autocomplete={false}
        >
          {menueItems?.map((item) => (
            <MenuItem key={item.optionValue} value={item.optionValue}>
              {item.menueName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
