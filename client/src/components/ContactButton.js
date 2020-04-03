import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import config from './config.js';
import React, { useState, useEffect } from 'react';

const LoginButton = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<a style={{ cursor: "pointer" }} onClick={handleShow}>Contact</a>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Contact</Modal.Title>
				</Modal.Header>

				<Modal.Body>Send us an e-mail: <a href="mailto:Dee@ConsiderHerbs.com">Dee@ConsiderHerbs.com</a></Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
        			</Button>
					<Button variant="primary" onClick={handleClose}>
						Send
        			</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default LoginButton;
