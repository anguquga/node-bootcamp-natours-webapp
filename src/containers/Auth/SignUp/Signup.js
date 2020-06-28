import React, { Component } from 'react';
import * as actions from '../../../store/actions/actionsIndex';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authRed.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
