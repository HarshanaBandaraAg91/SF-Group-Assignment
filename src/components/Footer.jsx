import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer
      className="bg-light mt-5"
      style={{
        boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.15)', // Top shadow
        padding: '30px 0', // Padding for the footer
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>We provide the best Flights booking service with top experience.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/booking">Booking</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Info</h5>
            <p>Email: contact@Flightsbooking.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>© 2024 Flights Booking. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
