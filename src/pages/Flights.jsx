import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const Flights = () => {
  // Dummy data for available flights
  const flights = [
    {
      id: 1,
      airline: 'Airline A',
      flightNumber: 'AA123',
      departure: '10:00 AM',
      arrival: '12:00 PM',
      from: 'New York (JFK)',
      to: 'Los Angeles (LAX)',
    },
    {
      id: 2,
      airline: 'Airline B',
      flightNumber: 'BB456',
      departure: '1:00 PM',
      arrival: '3:30 PM',
      from: 'Chicago (ORD)',
      to: 'Miami (MIA)',
    },
    {
      id: 3,
      airline: 'Airline C',
      flightNumber: 'CC789',
      departure: '6:30 AM',
      arrival: '9:00 AM',
      from: 'Dallas (DFW)',
      to: 'San Francisco (SFO)',
    },
    // Add more flights as needed
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Available Flights</h2>
      <Table striped bordered hover responsive>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Airline</th>
            <th>Flight Number</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={flight.id}>
              <td>{index + 1}</td>
              <td>{flight.airline}</td>
              <td>{flight.flightNumber}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center mt-4">
        <Button href="/booking" variant="primary">Book a Flight</Button>
      </div>
    </Container>
  );
};

export default Flights;
