import { Col,Card ,Button } from "react-bootstrap";
import {MyVerticallyCenteredModal} from "./Modal";
import React from "react";


export const ProjectCard = ({ variant, title, description, about, responsibilities }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Col size={12} sm={6} md={4}>
      <Card  bg={variant.toLowerCase()} className="proj-imgbx">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>About</Card.Title>
          <Card.Text >
            <span>
              {about}
            </span>
          </Card.Text>
          <Button className="proj-txtx" variant="primary" onClick={() => setModalShow(true)}>
              Click To View Detail
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            variant = {variant}
            title = {title}
            about = {about}
            description = {description}
            responsibilities = {responsibilities}
          />
        </Card.Body>
      </Card>
    </Col>
  
  )
}
