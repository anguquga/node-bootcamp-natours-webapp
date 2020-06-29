import React, { Component } from 'react';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actionsIndex';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import { checkValidity } from '../../../shared/utility';

class Signup extends Component {
  state = {
    controls: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          className: 'form__input'
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 40
        },
        valid: false,
        touched: false,
        divClass: 'form__group',
        labelClass: 'form__label',
        label: 'Name'
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'you@example.com',
          className: 'form__input'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false,
        divClass: 'form__group',
        labelClass: 'form__label',
        label: 'Email address'
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: '*******',
          className: 'form__input'
        },
        value: '',
        validation: {
          required: true,
          minLength: 8
        },
        valid: false,
        touched: false,
        divClass: 'form__group ma-bt-md',
        labelClass: 'form__label',
        label: 'Password'
      },
      passwordConfirm: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: '*******',
          className: 'form__input'
        },
        value: '',
        validation: {
          required: true,
          minLength: 8
        },
        valid: false,
        touched: false,
        divClass: 'form__group ma-bt-md',
        labelClass: 'form__label',
        label: 'Confirm Password'
      }
    }
  };

  componentDidMount() {
    if (this.props.authRedirectPath !== '/') {
      this.props.setAuthRedirect();
    }
  }

  formValueHandler = (event, inputId) => {
    let orderFormElement = {
      ...this.state.controls,
      [inputId]: {
        ...this.state.controls[inputId],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[inputId].validation
        ),
        touched: true
      }
    };

    this.setState({ controls: orderFormElement });
  };

  signUp = (event) => {
    event.preventDefault();
    this.props.signUp(
      this.state.controls.name.value,
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.controls.passwordConfirm.value
    );
  };

  render() {
    let formElements = [];
    for (let key in this.state.controls) {
      formElements.push({ id: key, config: this.state.controls[key] });
    }

    let form = formElements.map((formElement, key) => {
      return (
        <Input
          id={formElement.id}
          key={key}
          inputtype={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          value={formElement.config.value}
          onChange={(event) => this.formValueHandler(event, formElement.id)}
          divClass={formElement.config.divClass}
          labelClass={formElement.config.labelClass}
          label={formElement.config.label}
        />
      );
    });

    if (this.props.loading) {
      form = <Spinner />;
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p style={{ color: 'red', fontSize: '1.6rem', fontWeight: 'bold' }}>
          {this.props.error}
        </p>
      );
    }

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div className="login-form">
        {authRedirect}
        {errorMessage}
        <h2 className="heading-secondary ma-bt-lg">Create your account!</h2>
        <form onSubmit={this.signUp} className="form form--signup">
          {form}
          <div className="form__group">
            <Button buttonClass="btn btn--green">Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authRed.loading,
    error: state.authRed.error,
    isAuthenticated: state.authRed.token !== null,
    authRedirectPath: state.authRed.authRedirectPath
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (name, email, password, passwordConfirm) =>
      dispatch(actions.signUp(name, email, password, passwordConfirm)),
    setAuthRedirect: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
