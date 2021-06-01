import classes from './NavBar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton/DrawerToggleButton';

const NavBar = props => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggleButton clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                Quotsagram
            </div>
            <nav className={classes.DesktopOnly}>
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
        </header>
    );
};

export default NavBar;
