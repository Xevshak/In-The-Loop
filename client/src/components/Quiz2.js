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

export default function Quiz2() {
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
        <FormLabel component="legend" style={styles.quiz}> If the array is [1, 2, 3 , 4], what number do we type in after the i?</FormLabel>
        <div style={{backgroundImage: `url(${Nether})`, color: "white"}}>
        <RadioGroup style={{backgroundImage: `url(${Nether})`, color: "white", width: "87vw", display: "flex", "justifyContent": "center"}}
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="worst2" control={<Radio />} label="i < 3" />
          <FormControlLabel value="best" control={<Radio />} label="i < 4" />
          <FormControlLabel value="worst" control={<Radio />} label="i < 1" />
          <FormControlLabel value="worst1" control={<Radio />} label="i < 5" />
        </RadioGroup>
        <FormHelperText style={{color: "white", fontSize: "15px"}} >{helperText}</FormHelperText>
        </div>
        <Button style={{color: "white", fontSize: "17px"}} sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
      </FormControl>
    </form>
    </div>
  );
}