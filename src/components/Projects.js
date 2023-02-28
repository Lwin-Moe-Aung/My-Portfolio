import { Container, Row, Col, Tab, Nav,Button,Card  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useState } from "react";
import { MML } from "../Data/MML";
import { GCA } from "../Data/GCA";
import { Frobom } from "../Data/Frobom";
import { Freelance } from "../Data/Freelance";
import { FaBeer  } from 'react-icons/fa';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Row className="career-history mb-4 justify-content-md-center">
                  <Col size={12} sm={11} md={8}>
                  <Card className="text-center" style={{ background:'#33274B' }}>
                    <Card.Header>
                      <h2>CAREER HISTORY</h2>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <p>2021 – plesent : Freelancer</p>
                        <p>2018 – 2021 : Senior Web Developer in Myanmar Media Linkage</p>
                        <p>2017 – 2018 : Web Developer in Global-Connect Asia Company</p>
                        <p>2016 – 2017 : Web Developer in Frobom Myanmar Company</p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted"><icon></icon>
                      <FaBeer />
                    </Card.Footer>
                  </Card>
                </Col>
                </Row>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" style={{cursor:"pointer"}}>MML</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{cursor:"pointer"}}>GCA</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" style={{cursor:"pointer"}}>Frobom</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth" style={{cursor:"pointer"}}>Freelance</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          MML.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          GCA.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          Frobom.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <Row>
                        {
                          Freelance.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
