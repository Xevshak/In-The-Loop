import React from 'react'
import Link from '@mui/material/Link'
import '../Style/Contact.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub';
import bradimg from '../images/Brad.jpg'
import Navbar from '../components/Navbar'

export default function Contact () {



    return(
        <div>
            <Navbar/>
            <Box sx={{m: 1}}>
<Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={bradimg}
        alt="green iguana"
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
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image=''
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
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image=''
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Christopher
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/Xevshak" target="_blank"><GitHubIcon/></Link>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, margin: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image=''
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Keshav
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://github.com/chris79kennard" target="_blank"><GitHubIcon/></Link>
      </CardActions>
    </Card>
    </Box>
        </div>
    )
}