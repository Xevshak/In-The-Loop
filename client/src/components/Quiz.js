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

          {/* <FormLabel component="legend">Which one of the following is a functional for loop?</FormLabel>
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


          <FormLabel component="legend">Lets say we have an array of numbers 1-5. How can we return the even numbers? EX: for(var i=0; i < 5; i++)</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="worst" control={<Radio />} label="if (i === even)" />
          <FormControlLabel value="best" control={<Radio />} label="if (x % 2 === 0)" />
          <FormControlLabel value="worst1" control={<Radio />} label="if (i = even)" />
          <FormControlLabel value="worst2" control={<Radio />} label="if (x % 1 === 2)" />
          </RadioGroup>


          <FormLabel component="legend">What does the i++ do in a for loop?</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="worst2" control={<Radio />} label="subtracts the index position from the current position" />
          <FormControlLabel value="worst" control={<Radio />} label="adds 2 to the end of the array" />
          <FormControlLabel value="worst1" control={<Radio />} label="it doesnt do anything" />
          <FormControlLabel value="best" control={<Radio />} label="increases the index by 1 each loop" />
          </RadioGroup>
          


          <FormLabel component="legend">for (let i = 0; i < ?; i++) What goes in place of the ?</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="worst2" control={<Radio />} label="the number of files in your repository" />
          <FormControlLabel value="worst" control={<Radio />} label="its position in the js" />
          <FormControlLabel value="best" control={<Radio />} label="the length of the array" />
          <FormControlLabel value="worst1" control={<Radio />} label="the min length of the response" />
        </RadioGroup>


        <FormLabel component="legend">for (let i = 0; i < ?; i++) what do we type into the ? if the array is [1, 2, 3 , 4]?</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="worst2" control={<Radio />} label="i < 4" />
          <FormControlLabel value="best" control={<Radio />} label="i < 5" />
          <FormControlLabel value="worst" control={<Radio />} label="i < 1" />
          <FormControlLabel value="worst1" control={<Radio />} label="i < 3" />
        </RadioGroup>

 */}



        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>



      
    </form>
  );
  
}





