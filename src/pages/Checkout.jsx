import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Container, Table, Button, Form } from 'react-bootstrap';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const { passengerName, flightDate, cart } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);
  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleExpiryDateChange = (e) => setExpiryDate(e.target.value);
  const handleCvvChange = (e) => setCvv(e.target.value);

  const handleConfirmBooking = () => {
    // Redirect to Confirmation page
    navigate('/confirmation', {
      state: { passengerName, flightDate, cart },
    });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Checkout</h2>

      <div className="mt-4">
        <h4>Passenger Information</h4>
        <p><strong>Name:</strong> {passengerName}</p>
        <p><strong>Flight Date:</strong> {flightDate}</p>
      </div>

      <div className="mt-4">
        <h4>Cart Details</h4>
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
            {cart && cart.map((item, index) => (
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

      <div className="mt-4">
        <h4>Select Payment Method</h4>
        <Form>
          <Form.Check 
            type="radio" 
            label="Credit/Debit Card" 
            name="paymentMethod" 
            value="card" 
            checked={paymentMethod === 'card'} 
            onChange={handlePaymentMethodChange} 
          />
          <Form.Check 
            type="radio" 
            label="Google Pay" 
            name="paymentMethod" 
            value="googlePay" 
            checked={paymentMethod === 'googlePay'} 
            onChange={handlePaymentMethodChange} 
          />
          <Form.Check 
            type="radio" 
            label="PayPal" 
            name="paymentMethod" 
            value="paypal" 
            checked={paymentMethod === 'paypal'} 
            onChange={handlePaymentMethodChange} 
          />
        </Form>
      </div>

      {paymentMethod === 'card' && (
        <div className="mt-4">
          <h4>Enter Card Details</h4>
          <Form>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter card number" 
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </Form.Group>
            <Form.Group controlId="formExpiryDate" className="mt-3">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="MM/YY" 
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </Form.Group>
            <Form.Group controlId="formCvv" className="mt-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter CVV" 
                value={cvv}
                onChange={handleCvvChange}
              />
            </Form.Group>
          </Form>
        </div>
      )}

      <Button variant="primary" className="mt-4" onClick={handleConfirmBooking}>
        Confirm Booking
      </Button>
    </Container>
  );
};

export default Checkout;
