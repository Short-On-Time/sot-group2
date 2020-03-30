import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config.js";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminEditGlossary from "./AdminEditGlossary";
import { FaRegTrashAlt } from "react-icons/fa";
import {TiDocumentAdd} from "react-icons/ti";

const AdminViewGlossary = props => {
  const [glossary, setGlossary] = useState([]); 
  const [selectedItem, setSelectedItem] = useState([]);  

  useEffect(() => {
    axios
      .get(`http://localhost:${config.server_port}/api/admin/get_glossary`)
      .then(res => {
        setGlossary(res.data);
      });
  }, []);

  const deleteGloss = e => {
    const title = e.target.value;
    axios
      .delete(
        `http://localhost:${config.server_port}/api/admin/delete_glossary/${title}`
      )
      .then(res => {
        console.log(`Deleted ${res.data.title}!`);
      });
    axios
      .get(`http://localhost:${config.server_port}/api/admin/get_glossary`)
      .then(res => {
        setGlossary(res.data);
      });
  };

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Title</th>
            <th>Definition</th>
            <th>Usage</th>
            <th><a><TiDocumentAdd size={32}/></a></th>
          </tr>
        </thead>
        <tbody>
          {glossary
            .filter(glossary =>
              glossary.title.toLowerCase().includes(props.query.toLowerCase())
            )
            .map(glossary => {
              return (
                <tr key={glossary._id} name={glossary.title}>
                  <td class="align-middle">{glossary.title}</td>
                  <td>{glossary.definition}</td>
                  <td>{glossary.usage}</td>
                  <td class="align-middle">
                    <ButtonGroup>
                    <AdminEditGlossary                     
                      item={glossary}/>
                    <Button
                      variant="danger"
                      onclick={deleteGloss}
                      value={glossary.title}
                    >
                      <FaRegTrashAlt color="white" />
                    </Button>
                  </ButtonGroup>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminViewGlossary;
