import React, { Component } from 'react';
import './App.module.css';

import Layout from './hoc/Layout/Layout';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/actionsIndex';
import { connect } from 'react-redux';
import Tours from './containers/Tours/Tours';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

const asyncSignup = asyncComponent(() => {
  return import('./containers/Auth/SignUp/Signup');
});

const asyncUser = asyncComponent(() => {
  return import('./containers/User/User');
});

const asyncBookings = asyncComponent(() => {
  return import('./containers/User/Bookings/Bookings');
});

class App extends Component {
  componentDidMount() {
    this.props.authCheckState();
    window.addEventListener('beforeunload', this.onUnmount, false);
  }

  onUnmount = () => {
    //initiate logout
  };

  render() {
    let routes = [
      <Route key="auth" path="/auth" component={asyncAuth} />,
      <Route key="signup" path="/signup" component={asyncSignup} />,
      <Route key="root" path="/" exact component={Tours} />
    ];

    if (this.props.isAuthenticated) {
      routes.push(
        <Route key="bookings" path="/bookings" component={asyncBookings} />
      );
      routes.push(<Route key="user" path="/user" component={asyncUser} />);
      routes.push(<Route key="logout" path="/logout" component={Logout} />);
    }
    return (
      <div>
        <Layout>
          {routes}
          <Redirect to="/" />
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authRed.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authCheckState: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
