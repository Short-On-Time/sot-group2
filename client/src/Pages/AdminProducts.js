import React, { useState } from "react";
import "../App.css";
import AdminViewProducts from "../components/AdminViewProducts";
import AdminNavBar from "../components/AdminNavBar";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const AdminProducts = () => {
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
            <FormControl
              placeholder="Search for terms"/>
            <InputGroup.Append>
              <Button variant="outline-success">Search</Button>
            </InputGroup.Append>
          </InputGroup>
               
        <AdminViewProducts query={query} />
        </div>
        </Container>
      </div>
    </div>
  );
};

export default AdminProducts;