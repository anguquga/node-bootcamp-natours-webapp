import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !this.state.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar
            isAuthenticated={this.props.isAuthenticated}
            drawerToggleClicked={this.sideDrawerToggleHandler}
            userName={this.props.username}
            userImage={this.props.userimage}
          />
          <SideDrawer
            isAuthenticated={this.props.isAuthenticated}
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
        </div>
        <main className="main">{this.props.children}</main>
        <div className="footer">
          <div className="footer__logo">
            <img src="./assets/img/logo-green.png" alt="Natours logo" />
          </div>
          <ul className="footer__nav">
            <li>
              <a href="/#">About us</a>
            </li>
            <li>
              <a href="/#">Download apps</a>
            </li>
            <li>
              <a href="/#">Become a guide</a>
            </li>
            <li>
              <a href="/#">Careers</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
          <p className="footer__copyright">
            &copy; by Jonas Schmedtmann. All rights reserved.
          </p>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authRed.token ? true : false,
    username: state.authRed.userName,
    userimage: state.authRed.userImage
  };
};

export default connect(mapStateToProps, null)(Layout);
