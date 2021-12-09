import React from "react"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Obsidian from "../images/obsidian.png"
import Nether from "../images/nether.png"

const styles = {
  card: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      
      
  },
  quiz: {
      diplay: "flex",
      textAlign: "center",
      fontSize: '2rem',
      color: 'white'
  }
}

export default function Quiz3() {
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
    } else if (value === 'worst2') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else if (value === 'worst3') {
      setHelperText('Sorry, wrong answer!');
      setError(true);}
      else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <div style={{backgroundImage: `url(${Obsidian})`, width: "95vw", margin: "25px 5px 25px 5px"}}>
    <form onSubmit={handleSubmit}  style={styles.card}>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend" style={styles.quiz}>What does the i++ do in a for loop?</FormLabel>
        <div style={{backgroundImage: `url(${Nether})`, color: "white"}}>
        <RadioGroup style={{backgroundImage: `url(${Nether})`, color: "white", maxWidth: "50vw", width: "87vw", display: "flex", "justifyContent": "center"}}
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
        <FormHelperText style={{color: "white", fontSize: "15px"}}>{helperText}</FormHelperText>
        </div>
        <Button style={{color: "white", fontSize: "17px"}} sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
    </div>
  );
}