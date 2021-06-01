import classes from './SideDrawer.module.css';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav>
                    <ul className={classes.NavigationItems}>
                        <li className={classes.NavigationItem}>
                            <NavLink
                                to="/quotes"
                                exact
                                activeClassName={classes.active}>All Quotes</NavLink>
                        </li>
                        <li className={classes.NavigationItem}>
                            <NavLink
                                to="/new-quote"
                                exact
                                activeClassName={classes.active}>Add a Quote</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default SideDrawer;