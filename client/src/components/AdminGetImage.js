import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import AdminEditCaption from "./AdminEditCaption";

const AdminGetImage = (props) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get(`/api/image/get_image/${props.name}`).then((res) => {
	  setImage(res.data);
	  console.log(res.data);

    });
  }, []);

  return (
    <div>


    </div>
  );
};

export default AdminGetImage;
