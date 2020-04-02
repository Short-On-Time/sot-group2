import '../App.css';
import React from 'react';
import axios from 'axios';
import config from '../config.js';

class AdminAddProducts extends React.Component {
    
    state = {
        name: "",
        ailment: "",
        body_part: "",
        is_published: "",
        is_premium: "",
        description: "",
        createdAt: ""
      }

  componentDidMount() {
    //grab key
    //https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get("new");

    //check to see if it needs to be redirected
    if(! urlParams.has("new")) {
      window.location.replace(`/admin/product_list`);
    } else {
      this.setState({
        name: "",
        ailment: "",
        body_part: "",
        is_published: false,
        is_premium: false,
        description: "",
        createdAt: Date.now() //check
      });
    }
  }

  handleInput(e) {
    var title = e.target.id;
    var value = e.target.value;

    switch(title){
        case 'name':
            this.setState({
              name: value,
              ailment: this.state.ailment,
              body_part: this.state.ailment,
              is_published: this.state.is_published,
              is_premium: this.state.is_premium,
              description: this.state.description,
              createdAt: this.state.createdAt
            });
            break;
          case 'ailment':
            this.setState({
                name: this.state.name,
                ailment: value,
                body_part: this.state.ailment,
                is_published: this.state.is_published,
                is_premium: this.state.is_premium,
                description: this.state.description,
                createdAt: this.state.createdAt
            });
            break;
          case 'body_part':
            this.setState({
                name: this.state.name,
                ailment: this.state.ailment,
                body_part: value,
                is_published: this.state.is_published,
                is_premium: this.state.is_premium,
                description: this.state.description,
                createdAt: this.state.createdAt
            });
            break;
          case 'draft':
            this.setState({
                name: this.state.name,
                ailment: this.state.ailment,
                body_part: this.state.body_part,
                is_published: (!(e.target.checked)),
                is_premium: this.state.is_premium,
                description: this.state.description,
                createdAt: this.state.createdAt
              
            });
            break;
        }
  }

  makeIt(e) {
    var toSubmit = this.state;
    if(toSubmit.title && toSubmit.definition && toSubmit.usage) {
      axios.post(`http://localhost:${config.server_port}/api/admin/add_product`, toSubmit);
    } else {
      console.log("not done yet");
    }
  }

  render() {
    return (
      <div className="App">
  
      <div className="site-wrap">
  
        <h1>Add Product</h1>
        <a href="/admin/product_list" className="btn btn-primary text-white px-4">go back</a>
        <p/>

        <div>
          <form>
            <label>Name: {this.state.name}</label>
            <p/>
            <label for="ailment">Ailment: </label>
            <input id="ailment" type="text" name="Ailment" value={this.state.ailment} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <label for="body_part">Body Part: </label>
            <input id="body_part" type="text" name="body_part" value={this.state.body_part} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <input type="checkbox" id="draft" name="draft" checked={!(this.state.is_published)} onChange={this.handleInput.bind(this)}/>
            <label for="draft">Draft</label>
            <p/>
            <input type="checkbox" id="premium" name="premium" checked={!(this.state.is_premium)} onChange={this.handleInput.bind(this)}/>
            <label for="draft">Is it premium?</label>
            <p/>
            <label for="description">Description: </label>
            <input id="description" type="text" name="description" value={this.state.description} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <label for="created_at">Created At: </label>
            <input id="created_at" type="text" name="dcreated_at" value={this.state.created_at} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <input type="submit" value="Save" onClick={this.makeIt.bind(this)}/>
          </form>
        </div>

      </div>
      </div>
    );
    }

};

export default AdminAddProducts;