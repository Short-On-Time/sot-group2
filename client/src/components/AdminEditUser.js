import "../App.css";
import React, { useState } from "react";
import axios from "axios";
import config from "../config.js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaRegEdit } from "react-icons/fa";

const AdminEditUser = (props) => {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);
  const [isAdmin, setIsAdmin] = useState(props.user.is_admin);
  const [isPremium, setIsPremium] = useState(props.user.is_premium);

  const openModal = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleSubmit = (event) => {
    let data = {
      _id: props.user._id,
      username: username,
      email: email,
      password: password,
      is_admin: isAdmin,
      is_premium: isPremium,
    };
    if (data.username && data.email && data.password) {
      axios
        .put(
          `http://localhost:${config.server_port}/api/admin/update_user/${data._id}`,
          data
        )
        .then((response) => {
          console.log(response);
          window.location.reload(false);
        });

      handleClose();
    };
  };

  return (
    <>
      <Button variant="success" onClick={openModal}>
				<FaRegEdit size={24} />
			</Button>

      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <form>
          <Modal.Body>
		  
            <div class="form-group">
              <label for="email">Email: </label>
              <input
                id="email"
                type="text"
                class="form-control"
                defaultValue={email}
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
                defaultValue={password}
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
                  defaultChecked={isAdmin}
                  onChange={(event) => setIsAdmin(event.target.checked)}
                />
                <label class="form-check-label" for="is_admin">Admin</label>
              </div>
              <div class="form-group form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="is_premium"
                  name="is_premium"
                  defaultChecked={isPremium}
                  onChange={(event) => setIsPremium(event.target.checked)}
                />
                <label class="form-check-label" for="is_premium">Premium</label>
              </div>
            
          </Modal.Body>
          <Modal.Footer>
		  <Button variant="secondary" onClick={handleClose}>
							Cancel
            			</Button>
            <Button
              variant="primary"
              type="submit"              
              onClick={handleSubmit}
            >Save</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default AdminEditUser;
