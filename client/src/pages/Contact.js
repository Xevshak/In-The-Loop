import React from 'react'
import Link from '@mui/material/Link'
import '../Style/Contact.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import { Theme } from '@mui/material/styles';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid'
import Bradimg from '../images/Brad.jpg'
import Chrisimg from '../images/Chris.PNG'
import Keshavimg from '../images/Keshav.PNG'
import  Chamoimg from '../images/Chamo.PNG'
import  Stephimg from '../images/Steph.PNG'

import Navbar from '../components/Navbar'

export default function Contact () {



    return(
        <div>
            <Navbar/>
            <Box sx={{m: 1}}>
              <Grid>
<Card sx={{ maxWidth: 345, margin: 1/*, display:grid, gridRow: "1/3", gridColumn: "1/3"*/ }}>
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Bradimg}
        alt="picture of Bradley"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bradley
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/BradMW" target="_blank"><GitHubIcon/></Link>
      </CardActions>
    </Card>
    </Grid>
    <Card sx={{ maxWidth: 345, margin: 1/*, display: grid, gridRow: "1/3", gridColumn: "1/3"*/ }}>
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Chamoimg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chamo
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/" target="_blank"><GitHubIcon/></Link>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, margin: 1/*, display: grid, gridRow: "1/3", gridColumn: "1/3"*/ }}>
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Chrisimg}
        alt="image of Christopher"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Christopher
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Full-Stack Web Developer with a passion for front end design and strong attention to detail! 
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/Xevshak" target="_blank"><GitHubIcon/></Link>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, margin: 1 /*, display: grid, gridRow: "1/3", gridColumn: "1/3",*/}}>
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Keshavimg}
        alt="Image of Keshav standing under a Cherry Blossom Tree"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Keshav
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Full-Stack Web Developer with Great Hair! 
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/chris79kennard" target="_blank"><GitHubIcon/></Link>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, maxHeight:345, margin: 1/*, display: grid, gridRow: "1/3", gridColumn: "1/3"*/}}>
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Stephimg}
        alt="Image of Stephanie"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stephanie
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/" target="_blank"><GitHubIcon/></Link>
      </CardActions>
    </Card>
    </Box>
    
        </div>
    )
}