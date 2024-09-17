import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

const Confirmation = () => {
  const location = useLocation();
  const { passengerName, flightDate, cart } = location.state || {};

  return (
    <Container className="mt-5">
      <h2 className="text-center">Thank You for Your Purchase!</h2>
      <div className="mt-4">
        <h4>Your Booking Details</h4>
        <p><strong>Name:</strong> {passengerName}</p>
        <p><strong>Flight Date:</strong> {flightDate}</p>
        <p><strong>Total Tickets:</strong> {cart.length}</p>
      </div>

      <div className="mt-4">
        <h4>Receipt</h4>
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Flight</th>
              <th>From</th>
              <th>To</th>
              <th>Seat</th>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
      <Button variant="primary" className="mt-4" href="/">Go to Homepage</Button>
    </Container>
  );
};

export default Confirmation;
