import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import StripePay from './ConfigStripe.js'
import {loadStripe} from '@stripe/stripe-js';
import React, {useState, useEffect} from 'react';


const ServicesButton = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const stripePromise = loadStripe('pk_test_cKZ9ArATTFDXKwpXTE7SrSB800xveSplrK');

  return (
    <>
      <a style={{cursor: "pointer"}} onClick={() => setLgShow(true)}>Services</a>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg contained-modal-title-vcenter"
        id="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Services
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Card>
            <Card.Header>Professional consulting</Card.Header>
            <Card.Body>
              <Card.Title>Consulting with Dr. Dee</Card.Title>
              <Card.Text>
                Personal consulting with Dr. Dee at scheduled time, for only $50.00.
              </Card.Text>
              <StripePay amount={5000}/>
            </Card.Body>
          </Card>
          <hr/>
          <Card>
            <Card.Header>Premium services</Card.Header>
            <Card.Body>
              <Card.Title>Lifetime subscription</Card.Title>
              <Card.Text>
                In order to unlock herbal recipes for all body symptoms and premium services. Only $100.00.
              </Card.Text>
              <StripePay amount={10000}/>
            </Card.Body>
          </Card>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default ServicesButton;
