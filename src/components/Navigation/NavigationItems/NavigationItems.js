import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import { Link } from 'react-router-dom';

const navigationItems = (props) => {
  return (
    <Aux>
      {props.isAuthenticated ? (
        <Aux>
          <Link
            to="/bookings"
            class="nav__el"
            onClick={props.isMobile ? props.closeSideDrawer : null}
          >
            My Bookings
          </Link>
          <Link
            to="/user"
            class="nav__el"
            onClick={props.isMobile ? props.closeSideDrawer : null}
          >
            <img src="{props.userimage}" alt="User" class="nav__user-img" />
            <span>{props.username}</span>
          </Link>
          <Link
            to="/logout"
            class="nav__el"
            onClick={props.isMobile ? props.closeSideDrawer : null}
          >
            Logout
          </Link>
        </Aux>
      ) : (
        <Aux>
          <Link
            to="/auth"
            class="nav__el"
            onClick={props.isMobile ? props.closeSideDrawer : null}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            onClick={props.isMobile ? props.closeSideDrawer : null}
          >
            <button class="nav__el nav__el--cta">Sign up</button>
          </Link>
        </Aux>
      )}
    </Aux>
  );
};

export default navigationItems;
