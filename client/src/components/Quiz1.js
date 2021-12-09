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
      fontSize: "200px !important"
      
      
  },
  quiz: {
      diplay: "flex",
      textAlign: "center",
      fontSize: '2rem',
      color: 'white'
  }
}

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
    <form onSubmit={handleSubmit} style={styles.card}>
      <FormControl 
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend" style={styles.quiz}>Which one of the following is a functional for loop?</FormLabel>
        <div style={{backgroundImage: `url(${Nether})`, color: "white"}}>
        <RadioGroup style={{backgroundImage: `url(${Nether})`, maxWidth: "50vw", color: "white", width: "87vw", display: "flex", "justifyContent": "center"}}
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

        <FormHelperText style={{color: "white", fontSize: "15px", width: "87vw"}} >{helperText}</FormHelperText>
        </div>
        <Button style={{color: "white", fontSize: "17px"}} sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
      
    </form>
    </div>
  );
  
}
