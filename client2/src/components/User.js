import React, { useState } from 'react';

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UserButton = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<a onClick={handleShow}>
				<Image src="../logo.svg" roundedCircle />
			</a>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>User Info Stuff</Modal.Title>
				</Modal.Header>

				<Modal.Body>It's the body of stuff.</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Close 2.0
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default UserButton;
