import React from "react"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Quiz() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'best2') {
      setHelperText('You got it!');
      setError(true);
    } else if (value === 'best3') {
      setHelperText('You got it!');
      setError(true);
    } else if (value === 'best4') {
      setHelperText('You got it!');
      setError(true);
    } else {
      setHelperText('Sorry, you chose poorly');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend">Which one of the following is a functional for loop?</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="best" control={<Radio />} label="for (let i = 0; i < arr.length; i++)" />
          <FormControlLabel value="worst" control={<Radio />} label="for (let 0 = i; i < arr.length; i++)" />
          <FormControlLabel value="worst1" control={<Radio />} label="for (i = 0; i < arr.length; i++)" />
          <FormControlLabel value="worst2" control={<Radio />} label="for (let 0 = 1; i < arr.length; i-+)" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>


      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend">Which one of the following is a functional for loop?</FormLabel>
        <RadioGroup
          aria-label="quiz2"
          name="quiz2"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="best2" control={<Radio />} label="for (let i = 0; i < arr.length; i++)" />
          <FormControlLabel value="worst-" control={<Radio />} label="for (let 0 = i; i < arr.length; i++)" />
          <FormControlLabel value="worst-1" control={<Radio />} label="for (i = 0; i < arr.length; i++)" />
          <FormControlLabel value="worst-2" control={<Radio />} label="for (let 0 = 1; i < arr.length; i-+)" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>


      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend">Which one of the following is a functional for loop?</FormLabel>
        <RadioGroup
          aria-label="quiz3"
          name="quiz3"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="best3" control={<Radio />} label="for (let i = 0; i < arr.length; i++)" />
          <FormControlLabel value="worst--" control={<Radio />} label="for (let 0 = i; i < arr.length; i++)" />
          <FormControlLabel value="worst--1" control={<Radio />} label="for (i = 0; i < arr.length; i++)" />
          <FormControlLabel value="worst--2" control={<Radio />} label="for (let 0 = 1; i < arr.length; i-+)" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>

      
    </form>
  );
  
}





