import React, { useState } from "react";
import "../App.css";
import AdminViewBlog from "../components/AdminViewBlog";
import AdminNavBar from "../components/AdminNavBar";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


const AdminBlog = () => {
	const [query, setQuery] = useState("");

	const setFilter = e => {
		setQuery(e.target.value);
	};

	return (
		<div className="App">
			<div className="site-wrap">
				<AdminNavBar isDashboard={false} page=": Blog" />
				<Container>
					<div className="adglossary-content">
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text>Search</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Start typing to filter posts!"
								onChange={setFilter.bind(this)} />

						</InputGroup>

						<AdminViewBlog query={query} />
					</div>
				</Container>
			</div>
		</div>
	);
};

export default AdminBlog;
