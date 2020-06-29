import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/actionsIndex';
import PasswordUpdate from '../../components/User/PasswordUpdate/PasswordUpdate';
import UserDetails from '../../components/User/UserDetails/UserDetails';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

class User extends Component {
  state = {
    showModal: false
  };

  componentDidMount() {}

  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: false
    });
  };

  openModal = () => {
    this.setState({
      ...this.state,
      showModal: true
    });
  };

  render() {
    let form = null;
    if (this.props.loading) {
      form = <Spinner />;
    }

    let authRedirect = null;
    if (!this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    if (this.props.error) {
      form = (
        <p style={{ color: 'red', fontSize: '1.6rem', fontWeight: 'bold' }}>
          {this.props.error}
        </p>
      );
    }

    let icons = './assets/img/icons.svg';
    return (
      <div className="user-view">
        {authRedirect}

        <nav className="user-view__menu">
          <ul className="side-nav">
            <li className="side-nav--active">
              <a href="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <use xlinkHref={`${icons}#icon-settings`}></use>
                </svg>
                Settings
              </a>
            </li>
            <li>
              <a href="/my-tours">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <use xlinkHref={`${icons}#icon-briefcase`}></use>
                </svg>
                My bookings
              </a>
            </li>
            <li>
              <a href="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <use xlinkHref={`${icons}#icon-star`}></use>
                </svg>
                My reviews
              </a>
            </li>
            <li>
              <a href="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <use xlinkHref={`${icons}#icon-credit-card`}></use>
                </svg>
                Billing
              </a>
            </li>
          </ul>
        </nav>
        <div className="user-view__content">
          <Modal show={this.state.showModal} modalClosed={this.closeModal}>
            {form}
          </Modal>
          <UserDetails showModal={this.openModal} />
          <div className="line">&nbsp;</div>
          <PasswordUpdate showModal={this.openModal} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authRed.token !== null,
    authRedirectPath: state.authRed.authRedirectPath,
    loading: state.authRed.loading,
    error: state.authRed.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (email, password) =>
      dispatch(actions.authenticate(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
