import React, { useState } from "react";
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';
import AdminViewUsers from '../components/AdminViewUsers';
import AdminNavBar from "../components/AdminNavBar";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const AdminUsers = () => {
	const [query, setQuery] = useState("");

	const setFilter = e => {
		setQuery(e.target.value);
	};

	
		return (
			<div className="App">
				<div className="site-wrap">
				<AdminNavBar isDashboard={false} page=": Users" />	
				<Container>
				<div class="adglossary-content">
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text>Search</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Start typing to filter users!"
								onChange={setFilter.bind(this)} />

						</InputGroup>
					

					<AdminViewUsers query={query} />
					</div>
					</Container>				
				</div>
			</div>
		)
	
}

export default AdminUsers;