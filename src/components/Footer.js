import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const d = new Date();
let year = d.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h1 className="nav-head">&lt; SACHIN /&gt;</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/sachin-kumar-7ab3b9216/"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/_artemis_101?igshid=MzRlODBiNWFlZA=="><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
