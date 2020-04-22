import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import config from "../config.js";
import { TiDocumentAdd } from "react-icons/ti";

const AdminAddUser = (props) => {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleSubmit = (event) => {
    console.log("adding user");
    let data = {
      username: username,
      email: email,
      password: password,
      is_admin: isAdmin,
      is_premium: isPremium,
    };
    console.log("This is data", data);
    if (data.username && data.email && data.password) {
      axios
        .post(`/api/admin/add_user`, data)
        .then((response) => {
          console.log(response);
          window.location.reload(false);
        });

      handleClose();
    }
  };

  return (
    <>
      <Button variant="light" onClick={openModal}>
        <TiDocumentAdd size={32} />
      </Button>

      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <form>
          <Modal.Body>
            <div class="form-group">
              <label for="username">Username: </label>
              <input
                id="username"
                type="text"
                class="form-control"
                name="username"
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email: </label>
              <input
                id="email"
                type="text"
                class="form-control"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password: </label>
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div class="form-group form-check-inline">
              <input
                type="checkbox"
                class="form-check-input"
                id="is_admin"
                name="is_admin"
                onChange={(event) => setIsAdmin(event.target.checked)}
              />
              <label class="form-check-label" for="is_admin">
                Admin
              </label>
            </div>
            <div class="form-group form-check-inline">
              <input
                type="checkbox"
                class="form-check-input"
                id="is_premium"
                name="is_premium"
                onChange={(event) => setIsPremium(event.target.checked)}
              />
              <label class="form-check-label" for="is_premium">
                Premium
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AdminAddUser;
