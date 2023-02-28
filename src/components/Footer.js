import { Container, Row, Col } from "react-bootstrap";

import logoLatest from '../assets/img/logo-latest.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from '../assets/img/navIcon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} >
            <a href="/">
              <img src={logoLatest} style={{ width:'50px' }} alt="Logo"  />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lwin-moe-aung-817955166" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=100009644767880" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://github.com/Lwin-Moe-Aung" target="_blank"><img src={navIcon3} alt=""  style={{color:"white"}}/></a>
            </div>
            <p>Copyright 2019. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
