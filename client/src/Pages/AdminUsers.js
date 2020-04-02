import React from 'react';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';
import AdminViewUsers from '../components/AdminViewUsers';

class AdminUsers extends React.Component {

  state = {
    query: ""
  }

  setFilter (e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="site-wrap">
          <h1>Users Panel</h1>
          <a href="/admin" className="btn btn-primary text-white px-4">go back</a>
          <p/>

          <input type="text" name="search" placeholder="Search User Here!" onChange={this.setFilter.bind(this)}/>
          <a className="btn btn-primary text-white px-4" href="/admin/add_user?new=true">Add</a>

          <AdminViewUsers query={this.state.query}/>
        </div>
      </div>
    )
  }
}

export default AdminUsers;