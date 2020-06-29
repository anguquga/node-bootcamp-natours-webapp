import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/actionsIndex';

class UserDetails extends Component {
  state = {
    controls: {
      currentPassword: '',
      password: '',
      passwordConfirm: ''
    }
  };

  formValueHandler = (event, inputId) => {
    let orderFormElement = {
      ...this.state.controls,
      [inputId]: event.target.value
    };

    this.setState({ controls: orderFormElement });
  };

  updateUserPassword = (event) => {
    event.preventDefault();
    this.props.showModal();
    this.props.updateUserPassword(
      this.state.controls.currentPassword,
      this.state.controls.password,
      this.state.controls.passwordConfirm
    );
  };

  render() {
    return (
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form
          className="form form-user-password"
          onSubmit={this.updateUserPassword}
        >
          <div className="form__group">
            <label className="form__label">Current password</label>
            <input
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
              onChange={(event) =>
                this.formValueHandler(event, 'currentPassword')
              }
            />
          </div>
          <div className="form__group">
            <label className="form__label">New password</label>
            <input
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
              onChange={(event) => this.formValueHandler(event, 'password')}
            />
          </div>
          <div className="form__group ma-bt-lg">
            <label className="form__label">Confirm password</label>
            <input
              className="form__input"
              type="password"
              placeholder="••••••••"
              required
              minLength="8"
              onChange={(event) =>
                this.formValueHandler(event, 'passwordConfirm')
              }
            />
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green btn--save-password">
              Save password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserPassword: (current, password, confirmPassword) =>
      dispatch(actions.updateUserPassword(current, password, confirmPassword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
