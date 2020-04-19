import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import AdminEditCaption from "./AdminEditCaption";

const AdminViewCaptions = (props) => {
  const [premiumCaption, setPremiumCaption] = useState([]);
  const [welcomeCaption, setWelcomeCaption] = useState([]);
  const [disclaimerCaption, setDisclaimerCaption] = useState([]);

  const updatePremium = (newCaption) => {
    setPremiumCaption({content: newCaption});
  }

  const updateWelcome = (newCaption) => {
    setWelcomeCaption({content: newCaption});
  }

  const updateDisclaimer = (newCaption) => {
    setDisclaimerCaption({content: newCaption});
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/admin/get_premium_caption`)
      .then((res) => {
        setPremiumCaption(res.data);
      });
    axios
      .get(`http://localhost:3001/api/admin/get_welcome_caption`)
      .then((res) => {
        setWelcomeCaption(res.data);
      });
    axios
      .get(`http://localhost:3001/api/admin/get_disclaimer_caption`)
      .then((res) => {
        setDisclaimerCaption(res.data);
      });
  }, []);

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th class="align-middle">Caption</th>
            <th class="align-middle">Content</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle">Premium</td>
            <td class="align-middle">{premiumCaption.content}</td>
            <td class="align-middle">
              <AdminEditCaption
                caption={premiumCaption}
                changeCaption={updatePremium}
                captionName="Premium Caption"
                captionRoute="change_premium_caption"
              />
            </td>
          </tr>

          <tr>
            <td class="align-middle">Welcome</td>
            <td class="align-middle">{welcomeCaption.content}</td>
            <td class="align-middle">
              <AdminEditCaption caption={welcomeCaption} changeCaption={updateWelcome} captionName="Welcome Caption"
                captionRoute="change_welcome_caption"/>
            </td>
          </tr>

          <tr>
            <td class="align-middle">Disclaimer</td>
            <td class="align-middle">{disclaimerCaption.content}</td>
            <td class="align-middle">
            <AdminEditCaption caption={disclaimerCaption} changeCaption={updateDisclaimer} captionName="Disclaimer Caption"
                captionRoute="change_disclaimer_caption"/>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminViewCaptions;
