import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

const flightsData = [
  {
    id: 1,
    airline: 'Airline A',
    flightNumber: 'AA123',
    departure: '10:00 AM',
    arrival: '12:00 PM',
    from: 'New York (JFK)',
    to: 'Los Angeles (LAX)',
    seats: [
      { id: 1, number: '1A', booked: true },
      { id: 2, number: '1B', booked: false },
      { id: 3, number: '1C', booked: false },
      { id: 4, number: '1D', booked: true },
      { id: 5, number: '2A', booked: false },
      { id: 6, number: '2B', booked: true },
      { id: 7, number: '2C', booked: false },
      { id: 8, number: '2D', booked: false },
      { id: 9, number: '1A', booked: true },
      { id: 10, number: '1B', booked: false },
      { id: 11, number: '1C', booked: false },
      { id: 12, number: '1D', booked: true },
      { id: 13, number: '2A', booked: false },
      { id: 14, number: '2B', booked: true },
      { id: 15, number: '2C', booked: false },
      { id: 16, number: '2D', booked: false },
      { id: 17, number: '1A', booked: true },
      { id: 18, number: '1B', booked: false },
      { id: 19, number: '1C', booked: false },
      { id: 20, number: '1D', booked: true },
      { id: 21, number: '2A', booked: false },
      { id: 22, number: '2B', booked: true },
      { id: 23, number: '2C', booked: false },
      { id: 24, number: '2D', booked: false },
    ],
  },
  {
    id: 2,
    airline: 'Airline B',
    flightNumber: 'BB456',
    departure: '1:00 PM',
    arrival: '3:30 PM',
    from: 'Chicago (ORD)',
    to: 'Miami (MIA)',
    seats: [
      { id: 1, number: '1A', booked: false },
      { id: 2, number: '1B', booked: false },
      { id: 3, number: '1C', booked: true },
      { id: 4, number: '1D', booked: false },
      { id: 5, number: '2A', booked: false },
      { id: 6, number: '2B', booked: false },
      { id: 7, number: '2C', booked: true },
      { id: 8, number: '2D', booked: true },
      { id: 9, number: '3A', booked: true },
      { id: 10, number: '3B', booked: false },
      { id: 11, number: '1A', booked: false },
      { id: 12, number: '1B', booked: false },
      { id: 13, number: '1C', booked: true },
      { id: 14, number: '1D', booked: false },
      { id: 15, number: '2A', booked: false },
      { id: 16, number: '2B', booked: false },
      { id: 17, number: '2C', booked: true },
      { id: 18, number: '2D', booked: true },
      { id: 19, number: '3A', booked: true },
      { id: 20, number: '3B', booked: false },
      { id: 21, number: '1A', booked: false },
      { id: 22, number: '1B', booked: false },
      { id: 23, number: '1C', booked: true },
      { id: 24, number: '1D', booked: false },
      { id: 25, number: '2A', booked: false },
      { id: 26, number: '2B', booked: false },
      { id: 27, number: '2C', booked: true },
      { id: 28, number: '2D', booked: true },
      { id: 29, number: '3A', booked: true },
      { id: 30, number: '3B', booked: false },
    ],
  },
]

const Booking = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [cart, setCart] = useState([]);
  const [passengerName, setPassengerName] = useState('');
  const [flightDate, setFlightDate] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleFlightSelection = (e) => {
    const flightId = parseInt(e.target.value);
    const flight = flightsData.find((f) => f.id === flightId);
    setSelectedFlight(flight);
    setSelectedSeat(null); // Reset seat selection on flight change
  };

  const handleSeatSelection = (seat) => {
    if (!seat.booked) {
      setSelectedSeat(seat);
    }
  };

  const addToCart = () => {
    if (selectedFlight && selectedSeat) {
      const cartItem = {
        flight: selectedFlight.flightNumber,
        from: selectedFlight.from,
        to: selectedFlight.to,
        seat: selectedSeat.number,
      };
      setCart([...cart, cartItem]);
      setSelectedSeat(null); // Reset seat after adding to cart
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handleProceedToCheckout = () => {
    if (passengerName && flightDate && cart.length > 0) {
      navigate('/checkout', {
        state: { passengerName, flightDate, cart },
      });
    } else {
      alert('Please fill all details and select at least one seat before proceeding.');
    }
  };

  return (
    <Container className="mt-5" style={{ marginBottom: '5rem' }}>
      <h2 className="text-center">Flight Booking</h2>
      <Form>
        {/* Passenger Information */}
        <Form.Group controlId="formName" className="mt-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDate" className="mt-3">
          <Form.Label>Flight Date</Form.Label>
          <Form.Control
            type="date"
            value={flightDate}
            onChange={(e) => setFlightDate(e.target.value)}
          />
        </Form.Group>

        {/* Flight Selection */}
        <Form.Group controlId="formFlight" className="mt-3">
          <Form.Label>Select Flight</Form.Label>
          <Form.Control as="select" onChange={handleFlightSelection}>
            <option value="">Select a flight</option>
            {flightsData.map((flight) => (
              <option key={flight.id} value={flight.id}>
                {flight.flightNumber} - {flight.from} to {flight.to}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Show selected flight details in a table */}
        {selectedFlight && (
          <div className="mt-4">
            <h4>Flight Details</h4>
            <Table striped bordered hover responsive className="mt-3">
              <thead className="thead-dark">
                <tr>
                  <th>Airline</th>
                  <th>Flight Number</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Total Seats</th>
                  <th>Available Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedFlight.airline}</td>
                  <td>{selectedFlight.flightNumber}</td>
                  <td>{selectedFlight.departure}</td>
                  <td>{selectedFlight.arrival}</td>
                  <td>{selectedFlight.from}</td>
                  <td>{selectedFlight.to}</td>
                  <td>{selectedFlight.seats.length}</td>
                  <td>
                    {selectedFlight.seats.filter((seat) => !seat.booked).length}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}

        {/* Seat Selection */}
        {selectedFlight && (
          <>
            <h3 className="mt-4">Select Your Seat</h3>
            <Row className="text-center">
              {selectedFlight.seats.map((seat) => (
                <Col key={seat.id} xs={1} className="my-2">
                  <Button
                    variant={seat.booked ? 'danger' : selectedSeat?.id === seat.id ? 'success' : 'outline-primary'}
                    disabled={seat.booked}
                    onClick={() => handleSeatSelection(seat)}
                    className="w-100"
                  >
                    {seat.number}
                  </Button>
                </Col>
              ))}
            </Row>

            {selectedSeat && (
              <div className="mt-3">
                <p>
                  <strong>Selected Seat:</strong> {selectedSeat.number}
                </p>
                <Button variant="primary" onClick={addToCart}>
                  Add to Cart
                </Button>
              </div>
            )}
          </>
        )}

        {/* Cart Section */}
        {cart.length > 0 && (
          <div className="mt-5">
            <h3>Cart</h3>
            <Table striped bordered hover responsive className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Flight</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Seat</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.flight}</td>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                    <td>{item.seat}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button
              variant="success"
              className="mt-3"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default Booking;
