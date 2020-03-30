import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import config from "../config.js";
import { FaRegEdit } from "react-icons/fa";

const AdminEditGlossary = props => {
 
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(props.item.title);
  const [definition, setDefinition] = useState(props.item.definition);
  const [usage, setUsage] = useState(props.item.usage);
  const [isPublished, setIsPublished] = useState(props.item.is_published);

  const openModal = () => {
    setModal(true);
    
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleSubmit = event => {
    let data = {
      _id: props.item._id,
      title: title,
      definition: definition,
      usage: usage,
      is_published: isPublished
    };
    console.log("This is data", data);
    axios.put(
      `http://localhost:${config.server_port}/api/admin/update_glossary/${data.title}`,
      data
    ).then(
      response => {
        console.log(response);
        window.location.reload(false);
      }
    )

    setModal(false);
    
  };

  return (
    <>
      <Button variant="success" onClick={openModal}>
        <FaRegEdit color="white" />
      </Button>

      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing: {title}</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                defaultValue={title}
                onChange={event => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Usage</Form.Label>
              <Form.Control
                as="textarea"
                name="usage"
                rows="2"
                defaultValue={usage}
                onChange={event => setUsage(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Definition</Form.Label>
              <Form.Control
                as="textarea"
                name="definition"
                rows="2"
                defaultValue={definition}
                onChange={event => setDefinition(event.target.value)}
              />
            </Form.Group>
            <Form.Check
              type="checkbox"
              name="draft"
              label="Save as Draft"
              defaultChecked={!isPublished}
              onChange={event => setIsPublished(!event.target.checked)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default AdminEditGlossary;
