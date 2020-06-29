import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/actionsIndex';

class UserDetails extends Component {
  state = {
    controls: {
      name: this.props.userName,
      email: this.props.email,
      image: this.props.userImage
    }
  };

  formValueHandler = (event, inputId) => {
    let orderFormElement = {
      ...this.state.controls,
      [inputId]: event.target.value
    };

    this.setState({ controls: orderFormElement });
  };

  fileUploadHandler = (event) => {
    this.setState({
      controls: {
        ...this.state.controls,
        image: event.target.files[0].name
      }
    });
  };

  updateUserDetails = (event) => {
    event.preventDefault();
    this.props.updateUser(
      this.state.controls.email,
      this.state.controls.name,
      this.state.controls.image
    );
  };

  deleteMe = (event) => {
    event.preventDefault();
    this.props.deleteMe();
  };

  render() {
    let image =
      './assets/img/users/' +
      (this.state.controls.image ? this.state.controls.image : 'default.jpg');

    return (
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
        <form className="form form-user-data" onSubmit={this.updateUserDetails}>
          <div className="form__group">
            <label className="form__label">Name</label>
            <input
              className="form__input"
              type="text"
              value={this.state.controls['name']}
              required
              name="name"
              maxLength="40"
              minLength="10"
              onChange={(event) => this.formValueHandler(event, 'name')}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label">Email address</label>
            <input
              className="form__input"
              type="email"
              value={this.state.controls['email']}
              disabled={true}
              name="email"
            />
          </div>
          <div className="form__group form__photo-upload">
            <img className="form__user-photo" src={image} alt="User photo" />
            <input
              id="input_image"
              className="form__upload"
              type="file"
              accept="image/*"
              name="photo"
              onChange={this.fileUploadHandler}
            />
            <label htmlFor="input_image">Choose new photo</label>
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green">Save settings</button>
            <button className="btn btn--small btn--red" onClick={this.deleteMe}>
              Delete Me
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.authRed.userName,
    userImage: state.authRed.userImage,
    email: state.authRed.email
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (email, name, image) =>
      dispatch(actions.updateUser(email, name, image)),
    deleteMe: () => dispatch(actions.deleteMe())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
