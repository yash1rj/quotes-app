// import classes from './Layout.module.css';
import React, { Fragment, useState } from 'react';
import NavBar from './NavBar/NavBar';
import SideDrawer from './SideDrawer/SideDrawer';

const Layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(true);
    }

    return (
        <Fragment>
            <NavBar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                    open={showSideDrawer} 
                    closed={sideDrawerClosedHandler} />
            <main style={{marginTop: "64px"}} className='centered'>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;