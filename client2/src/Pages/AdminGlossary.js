import React, { useState } from "react";
import "../App.css";
import AdminViewGlossary from "../components/AdminViewGlossary";
import AdminNavBar from "../components/AdminNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";




const AdminGlossary = () => {
  const [query, setQuery] = useState("");
  
  const setFilter = e => {
    setQuery(e.target.value);
  };
  
  return (
    <div className="App">
      <div className="site-wrap">
        <AdminNavBar isDashboard={false} />
        <Container>
        <div class="adglossary-content">
          <InputGroup className="mb-3">
          <InputGroup.Prepend>
          <InputGroup.Text>Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Start typing to filter terms!"
              onChange={setFilter.bind(this)}/>
            
          </InputGroup>

        {/* <a
          className="btn btn-primary text-white px-4"
          href="/admin/add_glossary?new=true"
        >
          Add
        </a> */}

        <AdminViewGlossary query={query} />
        </div>
        </Container>
      </div>
    </div>
  );
};

export default AdminGlossary;
