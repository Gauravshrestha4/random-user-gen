
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({

  buttonBottom: {
    marginLeft:'45%',
    backgroundColor:'#f9a825',
    color:'black',
  },
  buttonTop:{
    marginLeft:'43%',
    backgroundColor:'#f9a825',
    color:'black',
    position:'relative',
    top:300,
    width:200,
    height:40
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
    const {onHandleSubmit,isShowData}=props;

  const handleClick=(e)=>{
    e.preventDefault();
    onHandleSubmit();
  }
  const { classes } = props;
  return (
    <React.Fragment>
        <Button variant="contained" color="#f9a825" 
          className={isShowData?classes.buttonBottom:classes.buttonTop} 
          onClick={handleClick}>
        Fetch data
      </Button>
    </React.Fragment>
  
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);