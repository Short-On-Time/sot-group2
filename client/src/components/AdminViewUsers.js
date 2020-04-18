import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import AdminEditUser from "./AdminEditUser";
import AdminAddUser from "./AdminAddUser";
import AdminDeleteUser from "./AdminDeleteUser";
import ButtonGroup from "react-bootstrap/ButtonGroup";
// import config from '../config.js';

const AdminViewUsers = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/admin/get_user`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  // deleteUser(e) {
  // 	const id = e.target.value;
  // 	axios.delete(`/api/admin/delete_user/${id}`).then(res => {
  // 		console.log(`Deleted ${res.data.title}!`)
  // 	});
  // 	axios.get(`/api/admin/get_user`).then(res => {
  // 		const users = res.data;
  // 		this.setState({ users });
  // 	});
  // }

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th class="align-middle">User</th>
          <th class="align-middle">Email</th>
          <th class="align-middle">Premium</th>
          <th class="align-middle">Admin</th>
          <th class="align-middle">
            <AdminAddUser />
          </th>
        </tr>
      </thead>
      <tbody>
        {users
          .filter(
            (user) =>
              user.username.toLowerCase().includes(props.query.toLowerCase()) ||
              user.email.toLowerCase().includes(props.query.toLowerCase())
          )
          .map((user) => {
            return (
              <tr key={user._id} name={user.username}>
                <td class="align-middle">{user.username}</td>
                <td class="align-middle">{user.email}</td>
                <td class="align-middle">
                <input
                  type="checkbox"
                  name="is_premium"
                  checked={user.is_premium}
                  disabled
                /></td>
                <td class="align-middle">
                <input
                  type="checkbox"
                  name="is_admin"
                  checked={user.is_admin}
                  disabled
                />
                </td>
                <td class="align-middle">
                <ButtonGroup>
											<AdminEditUser user={user} />
											<AdminDeleteUser
												user={user}
												setUsers={setUsers}
											/>
										</ButtonGroup>
                </td>
                {/*https://stackoverflow.com/questions/34875557/creating-custom-function-in-react-component*/}
                {/* <button
                  class="btn btn-primary text-white px-4"
                  onClick={this.deleteUser.bind(this)}
                  value={user._id}
                >
                  DELETE
                </button> */}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default AdminViewUsers;
