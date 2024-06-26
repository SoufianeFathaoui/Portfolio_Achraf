import { Container, Row, Col } from "react-bootstrap";

 import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
       
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/achraf-ayadi-developer/"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p>Portfolio Achraf AYADI</p>
            <p>cmh.achraf.ayadi@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}