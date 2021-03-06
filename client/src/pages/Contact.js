import React from 'react'
import Link from '@mui/material/Link'
import '../Style/Contact.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid'
import Bradimg from '../images/Brad.jpg'
import Chrisimg from '../images/Chris.PNG'
import Keshavimg from '../images/Keshav.PNG'
import  Chamoimg from '../images/Chamo.PNG'
import  Stephimg from '../images/Stephimg.jpg'
import Navbar from '../components/Navbar'
const displayName = localStorage.getItem("username");

export default function Contact () {
    return(
        <div id="backgroundImg">
          <h1 id='username'>{displayName} is In the Loop!</h1>
            <Navbar/>
            <div id="header">This WorkBook was brought to you by these amazing Full Stack Developers!</div>
            <Box id="flexRow"sx={{m: 1}}>
              <Grid>
<Card id="Cards"  sx={{ maxWidth: 150, maxHeight: 300, margin: 1 }} style={{ background: '#C7BCB9', border: 'solid'}}>
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Bradimg}
        alt="picture of Bradley"
      />
      <CardContent style={{backgroundColor:"#023E73"}}>
        <Typography gutterBottom variant="h5" component="div">
          Bradley
        </Typography>
        <Typography id="bio" variant="body2" color="text.secondary">
        Full Stack Developer who will lead this generation into the future of Realism VR.
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor:"#04D939"}}>
        <Link href="https://github.com/BradMW" target="_blank"><GitHubIcon/></Link>
        <Link href="https://www.linkedin.com/in/bradley-o-dell-b3857b96/" target="_blank"><LinkedInIcon/></Link>
      </CardActions>
    </Card>
    </Grid>
    <Card id="Cards" sx={{maxWidth: 150, maxHeight: 300, margin: 1 }} style={{ background: '#C7BCB9', border: 'solid' }}>
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Chamoimg}
        alt="Image of Chamo"
      />
        <CardContent style={{backgroundColor:"#023E73"}}>
        <Typography gutterBottom variant="h5" component="div">
          Chamo
        </Typography>
        <Typography id="bio" variant="body2" color="text.secondary">
         Full Stack Developer who loves to code in the name of Science!
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor:"#04D939"}}>
        <Link href="https://github.com/YamCham0" target="_blank"><GitHubIcon/></Link>
        <Link href="https://www.linkedin.com/in/yamcham0-bab408220/" target="_blank"><LinkedInIcon/></Link>
      </CardActions>
    </Card>
    <Card id="Cards" sx={{ maxWidth: 150, maxHeight: 300, margin: 1 }} style={{ background: '#C7BCB9', border: 'solid' }}>
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Chrisimg}
        alt="image of Christopher"
      />
         <CardContent style={{backgroundColor:"#023E73"}}>
        <Typography gutterBottom variant="h5" component="div">
          Christopher
        </Typography>
        <Typography id="bio" variant="body2" color="text.secondary">
         Full-Stack Web Developer with a passion for front end design and strong attention to detail! 
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor:"#04D939"}}>
        <Link href="https://github.com/chris79kennard" target="_blank"><GitHubIcon/></Link>
        <Link href="https://www.linkedin.com/in/christopher-kennard-13a479213/" target="_blank"><LinkedInIcon/></Link>
      </CardActions>
    </Card>
    <Card id="Cards" sx={{ maxWidth: 150, maxHeight: 300, margin: 1 }} style={{ background: '#C7BCB9', border: 'solid' }}>
      
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Keshavimg}
        alt="Image of Keshav standing under a Cherry Blossom Tree"
      />
        <CardContent style={{backgroundColor:"#023E73"}}>
        <Typography gutterBottom variant="h5" component="div">
          Keshav
        </Typography>
        <Typography id="bio" variant="body2" color="text.secondary">
         Full-Stack Web Developer with Great Hair! 
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor:"#04D939"}}>
        <Link href="https://github.com/Xevshak" target="_blank"><GitHubIcon/></Link>
        <Link href="https://www.linkedin.com/in/keshav-krishnan-ba5a40145/" target="_blank"><LinkedInIcon/></Link>
      </CardActions>
    </Card>
    <Card id="Cards" sx={{ maxWidth: 150, maxHeight: 300, margin: 1 }} style={{ background: '#C7BCB9', border: 'solid' }}>
      
      <CardMedia
        component="img"
        height="250"
        width="100"
        image={Stephimg}
        alt="Image of Stephanie"
      />
         <CardContent style={{backgroundColor:"#023E73"}}>
        <Typography gutterBottom variant="h5" component="div">
          Stephanie
        </Typography>
        <Typography id="bio" variant="body2" color="text.secondary">
        Full-Stack Full-Time MOM Web-Developer with killer CSS knowledge!
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor:"#04D939"}}>
        <Link href="https://github.com/CortezStephanie" target="_blank"><GitHubIcon/></Link>
        <Link href="https://www.linkedin.com/in/stephanie-cortez-660b9821b/" target="_blank"><LinkedInIcon/></Link>
      </CardActions>
    </Card>
    
    </Box>
    
        </div>
    )
}