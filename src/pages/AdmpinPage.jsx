import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Button, Table, Form } from 'react-bootstrap';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]); // Replace with your data fetch logic
  const [flights, setFlights] = useState([]); // Replace with your data fetch logic

  return (
    <Container fluid className="my-5">
      <Tab.Container defaultActiveKey="manageBookings">
        <Row>
          {/* Sidebar with navigation */}
          <Col md={2} className="bg-light">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="manageBookings">Manage Bookings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="manageTimetable">Manage Timetable</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          {/* Main content */}
          <Col md={10}>
            <Tab.Content>
              {/* Manage Bookings Section */}
              <Tab.Pane eventKey="manageBookings">
                <h2>Booking Management</h2>
                <Table striped bordered hover responsive className="mt-4">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Passenger Name</th>
                      <th>Flight Number</th>
                      <th>Seat</th>
                      <th>Booking Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.length > 0 ? bookings.map((booking, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{booking.passengerName}</td>
                        <td>{booking.flightNumber}</td>
                        <td>{booking.seatNumber}</td>
                        <td>{booking.bookingDate}</td>
                        <td>
                          <Button variant="warning" size="sm">
                            Edit
                          </Button>{' '}
                          <Button variant="danger" size="sm">
                            Cancel
                          </Button>
                        </td>
                      </tr>
                    )) : <tr><td colSpan="6" className="text-center">No bookings available</td></tr>}
                  </tbody>
                </Table>
              </Tab.Pane>

              {/* Manage Timetable Section */}
              <Tab.Pane eventKey="manageTimetable">
                <h2>Timetable Management</h2>
                <Table striped bordered hover responsive className="mt-4">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Airline</th>
                      <th>Flight Number</th>
                      <th>Departure</th>
                      <th>Arrival</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flights.length > 0 ? flights.map((flight, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{flight.airline}</td>
                        <td>{flight.flightNumber}</td>
                        <td>{flight.departure}</td>
                        <td>{flight.arrival}</td>
                        <td>{flight.from}</td>
                        <td>{flight.to}</td>
                        <td>
                          <Button variant="warning" size="sm">
                            Edit
                          </Button>{' '}
                          <Button variant="danger" size="sm">
                            Delete
                          </Button>
                        </td>
                      </tr>
                    )) : <tr><td colSpan="8" className="text-center">No flights available</td></tr>}
                  </tbody>
                </Table>

                {/* Add New Flight */}
                <h4 className="mt-4">Add New Flight</h4>
                <Form>
                  <Row>
                    <Col>
                      <Form.Group controlId="formAirline">
                        <Form.Label>Airline</Form.Label>
                        <Form.Control type="text" placeholder="Enter airline" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formFlightNumber">
                        <Form.Label>Flight Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter flight number" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Form.Group controlId="formDeparture">
                        <Form.Label>Departure Time</Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formArrival">
                        <Form.Label>Arrival Time</Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Form.Group controlId="formFrom">
                        <Form.Label>From</Form.Label>
                        <Form.Control type="text" placeholder="Departure location" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formTo">
                        <Form.Label>To</Form.Label>
                        <Form.Control type="text" placeholder="Arrival location" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="success" className="mt-3">
                    Add Flight
                  </Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default AdminPage;
