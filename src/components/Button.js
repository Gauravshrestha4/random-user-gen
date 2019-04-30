
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({

  button: {
    marginLeft:'45%',
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
    const {onHandleSubmit}=props;

  const handleClick=(e)=>{
    e.preventDefault();
    onHandleSubmit();
  }
  const { classes } = props;
  return (
    <React.Fragment>
        <Button variant="contained" color="secondary" className={classes.button} onClick={handleClick}>
        Fetch data
      </Button>
    </React.Fragment>
  
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);