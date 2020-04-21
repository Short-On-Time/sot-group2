import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import config from "../config.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegEdit } from "react-icons/fa";

const AdminEditCaption = (props) => {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState(props.caption);

  const openModal = () => {      
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    
  };

  const handleSubmit = (event) => {
    let data = {content: props.caption.content}
    
      axios
        .post(
          `http://localhost:${config.server_port}/api/admin/${props.captionRoute}`,
          data
        )
        .then((response) => {
          console.log(response);
          window.location.reload(false);
        });

      handleClose();
    
  };

  return (
    <>
      <Button variant="success" onClick={openModal}>
				 <FaRegEdit size={24} />
			</Button>

      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing: {props.captionName}</Modal.Title>
        </Modal.Header>

        <form>
          <Modal.Body>
		  
            <div class="form-group">
              <input
                type="texarea"
                class="form-control"
                defaultValue={props.caption.content}
                name="caption"
                onChange={(event) => props.changeCaption(event.target.value)}
                required
              />
            </div>            
            
          </Modal.Body>
          <Modal.Footer>
		  <Button variant="secondary" onClick={handleClose}>
							Cancel
            			</Button>
            <Button
              variant="primary"              
              onClick={handleSubmit}
            >Save</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AdminEditCaption;
