import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  header: {
    position: 'relative',
    top: 200
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.headerText}
          </Typography>
          <Button color="inherit" onClick={props.logoutAPI}>Logout</Button>
        </Toolbar>
      </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
