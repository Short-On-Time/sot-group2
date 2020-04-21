import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import "../App.css";
import AdminNavBar from "../components/AdminNavBar";
import AdminPanelCard from "../components/AdminPanelCard";
import Footer from "../components/Footer";

const Admin = () => {
	return (
		<div className="App">
			<div className="mb-5">
				<AdminNavBar isDashboard={true} />
				<Container>
					<CardDeck>
						<AdminPanelCard
							title="Glossary"
							image="images/Pictures/thumbnail_IMG_6305.jpg"
							description="Add, edit, and delete glossary items."
							link="/admin/glossary_list"
						/>

						<AdminPanelCard
							title="Remedy List"
							image="images/Pictures/thumbnail_IMG_0969.jpg"
							description="Add, edit, and delete remedies."
							link="/admin/remedies_list"
						/>

						<AdminPanelCard
							title="Manage Users"
							image="images/Pictures/thumbnail_IMG_5534.jpg"
							description="Manage users and permissions."
							link="/admin/user_list"
						/>
					</CardDeck>
				</Container>

				<hr />
				<Container>
					<CardDeck>
						<AdminPanelCard
							title="Manage Captions"
							image="images/Pictures/thumbnail_IMG_0715.jpg"
							description="Manage captions across the site."
							link="/admin/captions"
						/>

						<AdminPanelCard
							title="Images"
							image="images/Pictures/thumbnail_IMG_4407.jpg"
							description="Manage images across the site."
							link="/admin/images"
						/>

						<AdminPanelCard
							title="Did You Know"
							image="images/Pictures/thumbnail_IMG_5520.jpg"
							description="Add, edit, and delete blog posts."
							link="/admin/didyouknow"
						/>
					</CardDeck>
				</Container>
				{/* </Row> */}
			</div>
			<Footer />
		</div>
	);
};

export default Admin;
