import React from "react";
import "../App.css";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { MdExitToApp } from "react-icons/md";

class Logout extends React.Component {
  state = {
    nav: false
  }

  logout = () => {
    localStorage.clear();
    // localStorage.setItem("user_logged", false)
    this.setState({nav: true})
  }

  render() {
    const {nav} = this.state;

    if (this.props.loginData) {
      console.log("LOGIN DATA ====");
      this.props.loginData()
    }

    if (nav) {
      return <ListGroupItem action href="/" onClick={this.logout}>Logout  <MdExitToApp size={16}/></ListGroupItem>
    } else {
      return <ListGroupItem action href="/" onClick={this.logout}>Logout  <MdExitToApp size={16}/></ListGroupItem>
    }

  }
}

export default Logout;
