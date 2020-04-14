import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import config from './config.js';

const LoginButton = () => {
	const [show, setShow] = useState(false);
	const [body, setBody] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let logged = localStorage.getItem("user_logged");
	const token = localStorage.getItem("user-token");

	let user_decoded_token = ''
	if (logged) {
		jwt.verify(token, 'herbs', function (err, decoded) {
			user_decoded_token = decoded.user_info
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		let data = {
			message: body
		}
		axios.post(`http://localhost:${config.server_port}/api/users/contact`, data).then(res => {
			if (res.status === 200) {
				alert('Message sent!')
				setShow(false)
			}
		}).catch(function (error) {
			alert('Error sending message.')
		});
	}

	const contact = () => {
		return (
			<>
			<Modal.Body>
				To: <a href="mailto:Dee@ConsiderHerbs.com">Dee@ConsiderHerbs.com</a><br/>
			From: {user_decoded_token.email}
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows="3" onChange={(event) => setBody(event.target.value)} />
			</Form.Group>
		</Modal.Body>
		</>
)
}

return (
	<>
	<a style={{ cursor: "pointer" }} onClick={handleShow}>Contact</a>
	<Modal show={show} onHide={handleClose}>
		<Modal.Header closeButton>
			<Modal.Title>Contact</Modal.Title>
		</Modal.Header>

		{ (logged) ? contact() : <Modal.Body>"You need to be logged first to send a message."</Modal.Body> }


		<Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
				Close
			</Button>
			<Button variant="primary" onClick={handleSubmit}>
				Send
			</Button>
		</Modal.Footer>
	</Modal>
	</>
);
};

export default LoginButton;
