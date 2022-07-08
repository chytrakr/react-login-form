import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/AutorenewOutlined';

const styles = {
    headerText: {
        fontSize: '24px',
        fontWeight: '600'
    },
    refreshButton: {
        float: 'right',
        cursor: 'pointer',
        paddingTop: 8
    },
    header: {
        height: 50,
        marginTop: 30
    }
};

function Title(props) {
    const { classes } = props;
    return (
        <div className={classes.header}>
            <span className={classes.headerText}>{props.title}</span>
            {props.RefreshAPI ? <div className={classes.refreshButton} onClick={() => props.RefreshAPI()}><RefreshIcon/></div> : ""}
        </div>
    );
}

Title.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Title);
