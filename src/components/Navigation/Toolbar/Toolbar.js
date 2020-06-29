import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => (
  <header className="header">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className="nav nav--tours">
      <NavLink to="/" className="nav__el">
        ALl Tours
      </NavLink>
    </nav>
    <div className="header__logo">
      <Logo />
    </div>
    <nav className={classes.DesktopOnly + ' nav nav--user'}>
      <NavigationItems isAuthenticated={props.isAuthenticated} />
    </nav>
  </header>
);

export default toolbar;
