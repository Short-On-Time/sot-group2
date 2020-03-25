import React from 'react';
import axios from 'axios';
import config from '../config.js';

export default class AdminViewUsers extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://localhost:${config.server_port}/api/admin/get_user`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  deleteUser(e) {
    const username = e.target.value;
    axios.delete(`http://localhost:${config.server_port}/api/admin/delete_user/${username}`)
      .then(res => {
        console.log(`Deleted ${res.data.title}!`)
      });
    axios.get(`http://localhost:${config.server_port}/api/admin/get_user`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      });
  }

  render() {
    return (
      <div>
        <tr>
          <td>Username</td>
          <td>Email</td>
          <td>Premium</td>
          <td>Admin</td>
        </tr>
          {
            this.state.users.filter(user => user.username.toLowerCase().includes(this.props.query.toLowerCase()) || user.email.toLowerCase().includes(this.props.query.toLowerCase())).map(user => {
              return(
                <tr key={user._id} name={user.username}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <input type="checkbox" name="is_premium" checked={user.is_premium} disabled/>
                  <input type="checkbox" name="is_admin" checked={user.is_admin} disabled/>
                  <a class="btn btn-primary text-white px-4" href={`/admin/edit_user?key=${user._id}`}>EDIT</a>
                  {/*https://stackoverflow.com/questions/34875557/creating-custom-function-in-react-component*/}
                  <button class="btn btn-primary text-white px-4" onClick={this.deleteUser.bind(this)} value={user.username}>DELETE</button>
                </tr>
              )
            })
          }
      </div>
    )
  }
}