import React, {useState} from "react";
import "../App.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PremiumWarning = (props) => {
	const [show, setShow] = useState(true);
	const handleClose = () => setShow(false);

	const GoBack = (url) => {
		window.location = url;
	}
	
	console.log(props)

	return(
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Get Premium!</Modal.Title>
			</Modal.Header>
			<Modal.Body>Get Premium to view {props.page} and much more!</Modal.Body>
			<Modal.Footer>
			  <Button variant="secondary" onClick={handleClose}>
				Close
			  </Button>
			  <Button variant="primary" onClick={() => {GoBack(props.return)}}>
				Go Back
			  </Button>
			</Modal.Footer>
		</Modal>
	);
}

export default PremiumWarning;
