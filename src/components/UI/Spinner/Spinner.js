import classes from './Spinner.module.css';
import React from 'react';

const Spinner = props => {
    return (
        <div className={classes["lds-ellipsis"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;