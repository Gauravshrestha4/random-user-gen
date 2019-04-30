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
import Typography from '@material-ui/core/Typography';
import {SkipPrevious,Lock,SettingsPhone,CalendarToday,ContactSupport,LocationOn,Email} from '@material-ui/icons';
import {PlayArrow} from '@material-ui/icons';
import {SkipNext} from '@material-ui/icons';
import './profile.css'
const styles = theme => ({
  card: {
    display: 'flex',
    margin:'50px auto',
    maxWidth:'800px',
    height:400
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
    
  },
  icon:{
    padding:'0 auto',
    width:'100%'
  },
  icons:{
    width:'100%',
    display:'flex',
    justifyContent:'space-evenly',
  }
});

function MediaControlCard(props) {
  console.log('props|user', props.user);
  
  const [isHoverOn,setIsHoverOn]=useState(false);
  const { classes, theme } = props;
  const user=Object.entries(props.user);
  console.log(user);

  const hoverOn=()=>{
    console.log('hover on')
    setIsHoverOn(true);
  }
  const hoverOff=()=>{
    console.log('hover off')
    setIsHoverOn(false);
  }
  let color1 = ""

  const handleChange = (name) => {
    if(name === 'ContactSupport'){
      color1 = "chocolate"
    }
  }
  return (
      
    <Card className={classes.card} style={props.isAnimate?{animation:'shake 0.3s',border:'1px solid blue'}:null}>
      
      {/* <CardMedia
        className={classes.cover}
        image={user.picture.large}
        title="Live from space album cover"
      /> */}
      {/* <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {`${user.name.first} ${user.name.last}`}
          </Typography>
          <Typography component="h6" variant="h6">
            {user.dob.date}
          </Typography>
          <Typography component="h6" variant="h6">
            {user.login.username}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user.phone}
          </Typography>
        </CardContent>
        
      </div>  */}

      <Grid container >
        <Grid item xs={12} container justify="center" alignItems="center">
        <Avatar alt="author" src={user[6][1]} className={classes.avatar} style={props.isAnimate?{animation:'rotate 0.3s linear'}:null} />
      </Grid>
        {
          user.filter(info=>info[0]!='picture').map(info=>
          (<Grid item xs={4} key={info[0]} style={!isHoverOn?{display:'hidden'}:{display:'block'}}>
          <Paper className={classes.paper} style={{backgroundColor: color1}} key={color1.length}>{info[1]}</Paper>
        </Grid>)
          )
        }
        <div className={classes.icons}>
       
          <ContactSupport onClick={() => { console.log('onClick'); handleChange('ContactSupport')}}/>
        
          <Email/>
      
          <SettingsPhone/>
      
          <CalendarToday/>
       
          <LocationOn/>
      
          <Lock/>
        
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
