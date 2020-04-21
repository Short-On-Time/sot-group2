import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import AdminGetImage from "./AdminGetImage";

const AdminViewImages = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/image/get_image`).then((res) => {
      setImages(res.data);
    });
  }, []);

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th class="align-middle">Name</th>
            <th class="align-middle">Image</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image) => {
            return (
              <tr>
                <td class="align-middle">{image[0]}</td>
                <td class="align-middle"><AdminGetImage name={image[0]}/></td>
                <td class="align-middle">                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminViewImages;
