import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 
      {Card,
      Grid,
      Paper,
      Avatar} 
      from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import {Typography,Tooltip} from '@material-ui/core';
import {SkipPrevious,Lock,SettingsPhone,CalendarToday,ContactSupport,LocationOn,Email} from '@material-ui/icons';
import {PlayArrow} from '@material-ui/icons';
import {SkipNext} from '@material-ui/icons';
import './profile.css'
const styles = theme => ({
  card: {
    display: 'flex',
    margin:'50px auto',
    maxWidth:'800px',
    height:400,
    backgroundColor:'rgba(0,0,0,0.7)'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft:10,
    marginRight:10
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
    border:'2px solid #f9a825',
  },
  icons:{
    color:'#f9a825',
    width:'100%',
    display:'flex',
    justifyContent:'space-evenly',
  }
});

function MediaControlCard(props) {
  console.log('props|user', props.user);
  
  const [key,setKey]=useState('');
  const { classes, theme } = props;
  const user=Object.entries(props.user);
  console.log(user);

  let color1 = ""

  const handleChange = (name) => {
    setKey(name);
  }
  return (
      
    <Card className={classes.card} 
    style={props.isAnimate?
    {animation:'shake 0.3s',border:'1px solid #f9a825'}
    :null}>
      <Grid container >
        <Grid item xs={12} container justify="center" alignItems="center">
        <Avatar alt="author" src={user[6][1]} className={classes.avatar} 
        style={props.isAnimate?{animation:'rotate 0.3s linear'}:null} />
      </Grid>
        {
          user.filter(info=>info[0]!='picture').map(info=>
          (<Grid item xs={4} key={info[0]} >
          <Paper className={classes.paper} 
          style={info[0]==key?{backgroundColor:'#ffee58 ',transition:'background-color 0.5s ease-in' }:null} >{info[1]}
          </Paper>
        </Grid>)
          )
        }
        <div className={classes.icons}>
          <Tooltip title="Name">
            <ContactSupport onMouseOver={() => { handleChange('name')}}/>
          </Tooltip>
          <Tooltip title="Email">
             <Email onMouseOver={() => { handleChange('email')}}/>
          </Tooltip>
          <Tooltip title="Contact">
            <SettingsPhone onMouseOver={() => { handleChange('contact')}}/>
          </Tooltip>
          <Tooltip title="Location">
            <LocationOn onMouseOver={() => { handleChange('location')}}/>
          </Tooltip>
          <Tooltip title="Date of Birth">
            <CalendarToday onMouseOver={() => { handleChange('dob')}}/>
          </Tooltip>
          <Tooltip title="Password">
            <Lock onMouseOver={() => { handleChange('password')}}/>
          </Tooltip>
   
        
        </div>
        
      </Grid>
       
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
