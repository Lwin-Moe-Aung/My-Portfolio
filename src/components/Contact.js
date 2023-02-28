import { useState } from "react";
import { Container, Row, Col,Card } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
// import contactImg from "../assets/img/phone.jfif";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Send");
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    // setButtonText("Send");
    // let result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully'});
    // } else {
    //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4 mb-0">
          <Col size={12} sm={11} md={6}>
            <Card style={{ background:'#33274B' }}>
              <Card.Header>Technical Experiences</Card.Header>
              <Card.Body>
                <Card.Title>I have enormous experiences in</Card.Title>
                <Card.Text >
                  <ul>
                    <li>MySQL</li>
                    <li>Client scripting languages JQuery, Javascript, AJAX</li>
                    <li>HTML, CSS, Bootstrap, Tailwind Css</li>
                    <li>RESTful Api, Git</li>
                    <li>Laravel, NodeJs</li>
                    <li>VueJs, ReactJs</li>
                    <li>Vuex, Redux, Vuetify, Inertia js</li>
                  </ul>
                </Card.Text>
                <Card.Title>I have some experience in</Card.Title>
                <Card.Text >
                  <ul>
                    <li>AWS, DigitalOcean</li>
                    <li>Apache, Nginx</li>
                    <li>Mongodb, Postgres</li>
                    <li>Socket io, Redis</li>
                    <li>Docker</li>
                    <li>PHPUnit, Travis CI, CI/CD</li>
                    <li>JIRA, Flutter</li>
                    <li>Waterfall, Agile</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
