import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import config from './config.js';
import Logout from '../components/Logout';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const LoginButton = () => {
  const [show, setShow] = useState(false);
  let [login_message, setMessage] = useState('Login');
  const [logged, setLoginButton] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginSuccess = () => setLoginButton(true);
  const loginError = () => setMessage('E-mail or password does not match. Try again.');
  const registrationOk = () => setMessage('User registred successfully!');
  const registrationError = () => setMessage('Error on registering user. Try again.');

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (event) => {
    // event.preventDefault();
    let data = {
      "email": email,
      "password": pw,
      "username": username
    }
    console.log("username ===>" + !username);
    if (!username) {
      axios.post(`http://localhost:${config.server_port}/api/users/signin`, data)
        .then(res => {
          const token = res.data.token;
          var decoded = jwt_decode(token);
          console.log(`DECODED => ${decoded}`);
          console.log(decoded);
          localStorage.setItem(`user-info-${email}`, decoded);
          localStorage.setItem(`user-token-${email}`, token);
          if (res.status == 200) {
            localStorage.setItem("user_logged", true);
            setShow(false)
            setLoginButton(false)
            window.location.reload(false)
          }
        })
        .catch(function (error) {
          loginError()
        });
    } else {
      console.log(data);
      axios.post(`http://localhost:${config.server_port}/api/users/signup`, data)
        .then(res => {
          const token = res.data.token;
          var decoded = jwt_decode(token);
          console.log(`DECODED => ${decoded}`);
          console.log(decoded);
          if (res.status == 200) {
            registrationOk();
            setShow(false)
            setLoginButton(false)
            window.location.reload(false)
          }
        })
        .catch(function (error) {
          registrationError()
        });
    }
  };

  // render() {
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Login
    </Button>
    <Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ login_message }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="emailinput" onChange = {(event) => setEmail(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="pwinput" onChange = {(event) => setPw(event.target.value)} />
          </Form.Group>

          <hr/>
            <h3>Register</h3>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" id="usernameinput" onChange = {(event) => setUsername(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id="emailinput" onChange = {(event) => setEmail(event.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id="pwinput" onChange = {(event) => setPw(event.target.value)} />
            </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
  // }
}

export default LoginButton;
