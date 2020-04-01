import React from "react";
import Card from "react-bootstrap/Card";
import "../App.css";

const AdminPanelCard = props => {
  return (
    <Card>
      <div class="hover-card">
        <Card.Img src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <a href={props.link} className="btn btn-primary text-white px-4">
            GO
          </a>
        </Card.Body>
      </div>
    </Card>
  );
};
export default AdminPanelCard;
