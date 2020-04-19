import React, { useState } from "react";
import "../App.css";
// import AdminViewCaptions from "../components/AdminViewCaptions";
import AdminNavBar from "../components/AdminNavBar";
import Container from "react-bootstrap/Container";


const AdminImages = () => {
	const [query, setQuery] = useState("");

	return (
		<div className="App">
			<div className="site-wrap">
				<AdminNavBar isDashboard={false} page=": Images" />
				<Container>
					<div class="adglossary-content">
						{/* <AdminViewCaptions query={query}/>						 */}
					</div>
				</Container>
			</div>
		</div>
	);
};

export default AdminImages;
