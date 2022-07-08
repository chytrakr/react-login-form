import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    position: {
        position: 'status'
    }
};

function HeaderText(props) {
    const { classes } = props;
    return (
        <div className={classes.position}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                {props.headerText}
            </Typography>
        </div>
    );
}

HeaderText.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderText);
