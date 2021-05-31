import classes from './DrawerToggleButton.module.css';
import React from 'react';

const DrawerToggleButton = props => {
    return (
        <div className={classes.hamburger} onClick={props.clicked}>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
        </div>
    );
};

export default DrawerToggleButton;