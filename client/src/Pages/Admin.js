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
							image="images/img_2.jpg"
							description="Add, edit, and delete glossary items."
							link="/admin/glossary_list"
						/>

						<AdminPanelCard
							title="Remedy List"
							image="images/img_4.jpg"
							description="Add, edit, and delete remedies."
							link="/admin/remedies_list"
						/>

						<AdminPanelCard
							title="Manage Users"
							image="images/img_3.jpg"
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
							image="images/img_5.jpg"
							description="Manage captions across the site."
							link="/admin/captions"
						/>

						<AdminPanelCard
							title="Images"
							image="images/img_6.jpg"
							description="Manage images across the site."
							link="/admin/images"
						/>

						<AdminPanelCard
							title="Did You Know"
							image="images/img_1.jpg"
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
