import classes from './Backdrop.module.css';
import React from 'react';

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;