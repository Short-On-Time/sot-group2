import '../App.css';
import React from 'react';
import axios from 'axios';
import config from '../config.js';

class AdminAddUser extends React.Component {

  state = {
    username: "",
    email: "",
    password: "",
    is_admin: "",
    is_premium: ""
  }

  componentDidMount() {
    //grab key
    //https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get("new");

    //check to see if it needs to be redirected
    if(! urlParams.has("new")) {
      window.location.replace(`/admin/user_list`);
    } else {
      this.setState({
        username: "",
        email: "",
        password: "",
        is_admin: false,
        is_premium: false
      });
    }
  }

  handleInput(e) {
    var name = e.target.id;
    var value = e.target.value;

    switch(name){
      case 'username':
        this.setState({
          username: value,
          email: this.state.email,
          password: this.state.password,
          is_admin: this.state.is_admin,
          is_premium: this.state.is_premium
        });
        break;
      case 'email':
        this.setState({
          username: this.state.username,
          email: value,
          password: this.state.password,
          is_admin: this.state.is_admin,
          is_premium: this.state.is_premium
        });
        break;
        case 'password':
          this.setState({
            username: this.state.username,
            email: this.state.email,
            password: value,
            is_admin: this.state.is_admin,
            is_premium: this.state.is_premium
          });
          break;
        case 'is_admin':
          this.setState({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            is_admin: e.target.checked,
            is_premium: this.state.is_premium
          });
          break;
        case 'is_premium':
          this.setState({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            is_admin: this.state.is_admin,
            is_premium: e.target.checked
          });
          break;
    }
  }

  makeIt(e) {
    var toSubmit = this.state;
    if(toSubmit.username && toSubmit.email && toSubmit.password) {
      axios.post(`http://localhost:${config.server_port}/api/admin/add_user`, toSubmit);
    } else {
      console.log("not done yet");
    }
  }

  render() {
    return (
      <div className="App">
  
      <div className="site-wrap">
  
        <h1>Add User</h1>
        <a href="/admin/user_list" className="btn btn-primary text-white px-4">go back</a>
        <p/>

        <div>
          <form>
            <label for="username">Username: </label>
            <input id="username" type="text" name="username" value={this.state.username} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <label for="email">Email: </label>
            <input id="email" type="text" name="email" value={this.state.email} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <label for="password">Password: </label>
            <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <input type="checkbox" id="is_admin" name="is_admin" checked={this.state.is_admin} onChange={this.handleInput.bind(this)}/>
            <label for="is_admin">Admin</label>
            <p/>
            <input type="checkbox" id="is_premium" name="is_premium" checked={this.state.is_premium} onChange={this.handleInput.bind(this)}/>
            <label for="is_premium">Premium</label>
            <p/>
            <input type="submit" value="Save" onClick={this.makeIt.bind(this)}/>
          </form>
        </div>

      </div>
      </div>
    );
    }

};

export default AdminAddUser;