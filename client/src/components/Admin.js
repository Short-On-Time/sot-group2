import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import "../App.css";
import AdminNavBar from "../components/AdminNavBar";
import AdminPanelCard from "../components/AdminPanelCard";

const Admin = () => {
  return (
    <div className="App">
      <div className="site-wrap">
        <AdminNavBar isDashboard={true}/>
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
              link="/admin/product_list"
            />

            <AdminPanelCard
              title="Forum"
              image="images/img_3.jpg"
              description="Manage the forum."
              link="#"
            />
          </CardDeck>
        </Container>
        {/* temporary break line */}
        <hr />
        <Container>
          <CardDeck>
            <AdminPanelCard
              title="Manage Users"
              image="images/img_5.jpg"
              description="See and manage users."
              link="#"
            />

            <AdminPanelCard
              title="Placeholder"
              image="images/img_6.jpg"
              description="See and manage users."
              link="#"
            />

            <AdminPanelCard
              title="Placeholder"
              image="images/img_6.jpg"
              description="See and manage users."
              link="#"
            />
          </CardDeck>
        </Container>
        {/* </Row> */}
      </div>
    </div>
  );
};

export default Admin;
