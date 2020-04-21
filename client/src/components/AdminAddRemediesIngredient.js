import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AdminAddRemediesIngredient = () => {
	const [isOpen, setIsOpen] = useState(false)
	
	const getInputs = () => {
		if(!isOpen){
			return (<Button onClick={()=> {setIsOpen(false)}}>Add ingredient</Button>);
		}
		else{
			return( 
				<Form.Group >
					<Form.Control as="input" placeholder="Title"></Form.Control>
					<Form.Control as="input" placeholder="Amount"></Form.Control>
					<Form.Control as="input" placeholder="Units"></Form.Control>
					<AdminAddRemediesIngredient />
				</Form.Group >
			);
		}
	}

	return (getInputs())

}

export default AdminAddRemediesIngredient