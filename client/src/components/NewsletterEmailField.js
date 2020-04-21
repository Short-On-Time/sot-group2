import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import config from './config.js';
import React, { useState, useEffect } from 'react';

const LoginButton = () => {
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	const handleSubmit = (event) => {
		event.preventDefault();
		let data = {
			"email": email
		}
		console.log("email: ", data);
		axios.post(`http://localhost:${config.server_port}/api/admin/add_email_newsleter`, data).then(res => {
			setMessage(`Your e-mail (${email}) is now registered. Thank you!`)
			// setEmail('')
		}).catch(function (error) {
			setMessage(`Error: Your e-mail (${email}) is already registered. Try a different e-mail.`)
		});
		handleShow()
	};

	// render() {
	return (
		<>
		<div className="row mb-5">
			<div className="col-md-12">
				<h3 className="footer-heading mb-4 text-white">Stay up to date</h3>
				<Form className="d-flex footer-subscribe">
					<Form.Control type="text" placeholder="Enter your email" className="form-control rounded-0" id="emailinput" onChange={(event) => setEmail(event.target.value)} />
					<input type="submit" className="btn btn-primary rounded-0" value="Subscribe" onClick={handleSubmit} />
				</Form>
			</div>
		</div>
			<Form>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Newsletter</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						{message}
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
            </Button>
					</Modal.Footer>
				</Modal>
			</Form>
		</>
	);
	// }
}

export default LoginButton;
