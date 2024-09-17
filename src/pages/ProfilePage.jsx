import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Form } from 'react-bootstrap';

const ProfilePage = () => {
  // Sample data to simulate the profile information
  const [profile, setProfile] = useState({
    email: 'user@example.com',
    profilePicture: '',
    visaDetails: 'Valid until 2025',
    flightHistory: [
      { flightNumber: 'AA101', destination: 'New York', date: '2024-01-12' },
      { flightNumber: 'BA202', destination: 'London', date: '2024-03-15' }
    ]
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [visaDetails, setVisaDetails] = useState(profile.visaDetails);

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Add logic to update the profile and visa details in the backend
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
    // Add logic to upload the new profile picture
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="shadow-lg">
            <Card.Body className="text-center">
              <h3 className="mb-4">Profile</h3>
              <div className="d-flex justify-content-center mb-4">
                <img
                  src={profile.profilePicture || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="img-fluid rounded-circle border"
                  width="150"
                  height="150"
                  style={{ padding: '10px', borderColor: '#ddd', borderWidth: '2px' }}
                />
              </div>
              {isEditing ? (
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Change Profile Picture</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>
              ) : (
                <Button onClick={() => setIsEditing(true)} variant="outline-primary" className="mb-3">
                  Edit Profile
                </Button>
              )}

              <h5>Email</h5>
              <p>{profile.email}</p>

              {isEditing ? (
                <Form.Group controlId="formVisaDetails" className="mb-3">
                  <Form.Label>Visa Details</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter visa details"
                    value={visaDetails}
                    onChange={(e) => setVisaDetails(e.target.value)}
                  />
                </Form.Group>
              ) : (
                <>
                  <h5>Visa Details</h5>
                  <p>{profile.visaDetails || 'No details available'}</p>
                </>
              )}

              {isEditing && (
                <Button variant="success" onClick={handleSaveProfile} className="mt-2">
                  Save Profile
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 className="mb-4">Flight History</h3>
              <Table striped bordered hover responsive className="mt-4">
                <thead className="bg-light">
                  <tr>
                    <th>#</th>
                    <th>Flight Number</th>
                    <th>Destination</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {profile.flightHistory.map((flight, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{flight.flightNumber}</td>
                      <td>{flight.destination}</td>
                      <td>{flight.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
