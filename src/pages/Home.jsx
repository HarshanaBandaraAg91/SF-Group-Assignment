import React from 'react';
import { Container, Button, Row, Col, Card, Carousel } from 'react-bootstrap';
import './Home.css';  // Ensure to include your custom CSS

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="mb-4 d-flex justify-content-center" style={{ marginTop: '50px' }}>

        <img
          src="./src/assets/ac13.png" 
          alt="Flight Booking Banner"
          className="img-fluid"
          style={{ maxHeight: '300px', objectFit: 'cover', width: '30%' }}
        />
      </div>

      {/* Welcome Section */}
      <Container className="text-center my-5 px-4">
  <h1>Welcome to FlightBooker</h1>
  <p>Your gateway to seamless flight bookings and travel adventures.</p>
  <Button href="/booking" variant="primary" className="mx-2">Book Now</Button>
  <Button href="/flights" variant="primary" className="mx-2">Time Table</Button>
</Container>


      {/* Features Section */}
      <div className="bg-dark text-light py-5">
        <Container className="px-4">
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="feature-icon mb-3" >
                <img  src="./src/assets/booking.png" alt="Easy Booking" style={{ width: '60px' }} />
              </div>
              <h3>Easy Booking</h3>
              <p>Book your flights in just a few clicks with our user-friendly interface.</p>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-icon mb-3">
                <img src="./src/assets/circular-arrow.png" alt="Real-time Updates" style={{ width: '60px' }} />
              </div>
              <h3>Real-time Updates</h3>
              <p>Stay informed with real-time updates on flight statuses and gate changes.</p>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-icon mb-3">
                <img src="./src/assets/24-7-service.png" alt="24/7 Support" style={{ width: '60px' }} />
              </div>
              <h3>24/7 Support</h3>
              <p>Our customer support team is available around the clock to assist you.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Counters Section */}
      <Container className="text-center my-5 px-4">
        <Row>
          <Col md={4} className="mb-4">
            <h3>1000+</h3>
            <p>Destinations Worldwide</p>
          </Col>
          <Col md={4} className="mb-4">
            <h3>1 Million+</h3>
            <p>Flights Booked</p>
          </Col>
          <Col md={4} className="mb-4">
            <h3>500+</h3>
            <p>Airlines Partnered</p>
          </Col>
        </Row>
      </Container>

      {/* Cards Section */}
      <Container className="text-center my-5 px-4">
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="./src/assets/Exclusive Deals.png" />
              <Card.Body>
                <Card.Title>Exclusive Deals</Card.Title>
                <Card.Text>
                  Explore our exclusive flight deals and save on your next journey.
                </Card.Text>
                <Button variant="primary">Discover Deals</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="./src/assets/Top Destinations.png" />
              <Card.Body>
                <Card.Title>Top Destinations</Card.Title>
                <Card.Text>
                  Check out the most popular travel destinations and start planning.
                </Card.Text>
                <Button variant="primary">Explore Destinations</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="./src/assets/Travel Tips.png" />
              <Card.Body>
                <Card.Title>Travel Tips</Card.Title>
                <Card.Text>
                  Get valuable tips and insights for a smooth and enjoyable travel experience.
                </Card.Text>
                <Button variant="primary">Read Tips</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <div className="bg-dark text-light py-5">
        <Container className="text-center px-4">
          <h2>What Our Customers Say</h2>
          <Carousel className="d-inline-block mx-auto" style={{ maxWidth: '800px' }}>
            <Carousel.Item>
              <blockquote className="blockquote">
                <p>"FlightBooker made my travel plans so much easier! The booking process was smooth, and the customer support was excellent."</p>
                <footer className="blockquote-footer">Sharad.</footer>
              </blockquote>
            </Carousel.Item>
            <Carousel.Item>
              <blockquote className="blockquote">
                <p>"I love the real-time updates and the exclusive deals. I always find the best prices here!"</p>
                <footer className="blockquote-footer">Ajith Kabral.</footer>
              </blockquote>
            </Carousel.Item>
            <Carousel.Item>
              <blockquote className="blockquote">
                <p>"Great experience! The website is user-friendly, and the support team is very responsive."</p>
                <footer className="blockquote-footer">Smith.</footer>
              </blockquote>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      {/* Additional Information Section */}
      <Container className="text-center my-5 px-4">
      <a href="/hotels"><img src="./src/assets/Orange Aesthetic Travel Banner (Landscape).png"/></a>
        <p>For more information, visit our <a href="/info">Information Page</a> or contact us for personalized support.</p>
      </Container>
    </div>
  );
};

export default Home;
