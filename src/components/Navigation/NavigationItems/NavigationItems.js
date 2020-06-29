import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/Aux/Aux';

class NavigationItems extends Component {
  render() {
    let image =
      './assets/img/users/' +
      (this.props.userImage ? this.props.userImage : 'default.jpg');
    return (
      <Aux>
        {this.props.isAuthenticated ? (
          <Aux>
            <Link
              to="/logout"
              className="nav__el"
              onClick={this.props.isMobile ? this.props.closeSideDrawer : null}
            >
              Logout
            </Link>
            <Link
              to="/user"
              className="nav__el"
              onClick={this.props.isMobile ? this.props.closeSideDrawer : null}
            >
              <img src={`${image}`} alt="User " className="nav__user-img" />
              <span>{this.props.userName}</span>
            </Link>
          </Aux>
        ) : (
          <Aux>
            <Link
              to="/auth"
              className="nav__el"
              onClick={this.props.isMobile ? this.props.closeSideDrawer : null}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              onClick={this.props.isMobile ? this.props.closeSideDrawer : null}
            >
              <button className="nav__el nav__el--cta">Sign up</button>
            </Link>
          </Aux>
        )}
      </Aux>
    );
  }
}

export default NavigationItems;
