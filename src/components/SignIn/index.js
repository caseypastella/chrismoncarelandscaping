import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import {PasswordForgetLink} from '../PasswordForget';
import Firebase, { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'react-bootstrap'; 
import 'firebase/app';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
    
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
 
};



class SignInFromBase extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
    
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase 
      .doSignInWithEmailAndPassword(email, password) 
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({error});
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };
  
  render() {
    const {email, password, error} = this.state;
    
    const isInvalid = password === '' || email === '';
   
    return (
      <Form onSubmit = {this.onSubmit}>
        <Form.Group  as= {Col} controlId="formGridEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
          name = "email"
          value={email}
          onChange = {this.onChange}
          type= "email"
          placeholder = "Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId = "formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          name = "password"
          value = {password}
          onChange = {this.onChange}
          type= "password" 
          placeholder = "Password" />
        </Form.Group>
        <Form.Group>
        <Button disabled={isInvalid} variant="primary" type="submit">
          Sign In 
        </Button>
        {error && <p>{error.message}</p>}
        </Form.Group>
      </Form>

    );
  }
}
      /*<form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}*/

const SignInForm = compose(
  withRouter,
  withFirebase,)
  (SignInFromBase);

export default SignInPage;

export {SignInForm};
