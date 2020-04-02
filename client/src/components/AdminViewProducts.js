import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config.js";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import AdminEditProducts from "../Pages/AdminEditProducts";
import { FaRegTrashAlt } from "react-icons/fa";
import {TiDocumentAdd} from "react-icons/ti";

  const AdminViewProducts = props => {
    const [products, setProducts] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

    useEffect(() => {
      axios
        .get(`/api/admin/get_product`)
        .then(res => {
          setProducts(res.data);
        });
    }, []);

    const deleteGloss = e => {
      const name = e.target.value;
    axios.delete(`/api/admin/delete_product/${name}`) //this
      .then(res => {
        console.log(`Deleted ${res.data.name}!`)
      });
    axios.get(`/api/admin/get_product`)
      .then(res => {
        setProducts(res.data);
      });
    };

    return(
      <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ailment</th>
            <th>Body Part</th>
            <th>Description</th>
            <th><a><TiDocumentAdd size={32}/></a></th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter(products =>
              products.name.toLowerCase().includes(props.query.toLowerCase())
            )
            .map(products => {
              return (
                <tr key={products._id} name={products.name}>
                  <td class="align-middle">{products.name}</td>
                  <td>{products.ailment}</td>
                  <td>{products.body_part}</td>
                  <td>{products.description}</td>
                  <td class="align-middle">
                    <ButtonGroup>
                    <AdminEditProducts
                      item={products}/>
                    <Button
                      variant="danger"
                      onclick={deleteGloss}
                      value={products.name}
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
export default AdminViewProducts;
