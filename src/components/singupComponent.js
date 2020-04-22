import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MISMATCH_PASSWORD_ERROR = "passwordDoNotMatch";
const DUPLICATE_EMAIL_ERROR = "emailExsited";
const EMPTY_ERROR = "empty";

export default function RegisterComponent(props) {
  const {
    email,
    password,
    repeatPassword,
    firstName,
    lastName,
    isValidated,
    onEmailChange,
    onPasswordChange,
    onRepeatPasswordChange,
    onFirstNameChange,
    onLastNameChange,
    onClick,
    emailError,
    passwordError,
    repeatPasswordError,
    firstNameError,
    lastNameError,
    onBackClick
  } = props;

  return (
    <Container>
      <br />
      <br />

      <Form validated={isValidated}>
        <h2>Sing Up Here</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            isInvalid={
              emailError === EMPTY_ERROR || emailError === DUPLICATE_EMAIL_ERROR
            }
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={event => onEmailChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {emailError === DUPLICATE_EMAIL_ERROR && (
              <div>
                <span>
                  there is another user with that email,please choose another
                  one
                </span>
              </div>
            )}
            {emailError === EMPTY_ERROR && (
              <div>
                <span>An E-mail is required</span>
              </div>
            )}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Please enter your email address
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            isInvalid={
              passwordError === EMPTY_ERROR ||
              passwordError === MISMATCH_PASSWORD_ERROR
            }
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => onPasswordChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {passwordError === MISMATCH_PASSWORD_ERROR && (
              <div>
                <span>Passwords do not match</span>
              </div>
            )}
            {passwordError === EMPTY_ERROR && (
              <div>
                <span>Password cannot be empty</span>
              </div>
            )}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            isInvalid={
              repeatPasswordError === EMPTY_ERROR ||
              repeatPasswordError === MISMATCH_PASSWORD_ERROR
            }
            required
            type="password"
            placeholder="please repeat the same Password here!"
            value={repeatPassword}
            onChange={event => onRepeatPasswordChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {repeatPasswordError === MISMATCH_PASSWORD_ERROR && (
              <div>
                <span>Passwords do not match, you idiot!!</span>
              </div>
            )}
            {repeatPasswordError === EMPTY_ERROR && (
              <div>
                <span>
                  Please repeat your password, we neet to know you are sure
                  about it,mougle!
                </span>
              </div>
            )}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            isInvalid={firstNameError === EMPTY_ERROR}
            required
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={event => onFirstNameChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {firstNameError === EMPTY_ERROR && (
              <div>
                <span>First name cannot be empty</span>
              </div>
            )}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            isInvalid={lastNameError === EMPTY_ERROR}
            required
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={event => onLastNameChange(event)}
          />
          <Form.Control.Feedback type="invalid">
            {lastNameError === EMPTY_ERROR && (
              <div>
                <span>we really need your mougle last name</span>
              </div>
            )}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={event => onClick(event)}
        >
          Submit
        </Button>{" "}
        <Button
          variant="primary"
          type="submit"
          onClick={event => onBackClick(event)}
        >
          Back
        </Button>
      </Form>
    </Container>
  );
}
