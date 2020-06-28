import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => (
  <header class="header">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav class="nav nav--tours">
      <NavLink to="/" class="nav__el">
        ALl Tours
      </NavLink>
    </nav>
    <div class="header__logo">
      <Logo />
    </div>
    <nav className={classes.DesktopOnly} class="nav nav--user">
      <NavigationItems isAuthenticated={props.isAuthenticated} />
    </nav>
  </header>
);

export default toolbar;

/*<header class="header">
      <nav class="nav nav--tours">
        <a href="#" class="nav__el">All tours</a>
        <form class="nav__search">
          <button class="nav__search-btn">
            <svg>
              <use xlink:href="img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            class="nav__search-input"
          />
        </form>
      </nav>
      
      
    </header>*/
