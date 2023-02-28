import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const MyVerticallyCenteredModal = (props) => {
  
  return (
    <Modal
      {...props}
      style={{ color: 'success' }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Descriptions</h4>
        <ul>
          {props.description.map((item,i) => 
            <li key={i}>{item.value}</li>
          )}
        </ul>
        <h4>My main responsibilities are</h4>
        <ul>
          {props.responsibilities.map((item,i) => 
            <li key={i}>{item.value}</li>
          )}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
