import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Hardcoded admin credentials for demo
  const adminEmail = 'admin@example.com';
  const adminPassword = 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple authentication check
    if (email === adminEmail && password === adminPassword) {
      navigate('/admin'); // Redirect to the admin page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row>
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4 w-100">
                  Login
                </Button>

                <div className="text-center mt-3">
                  <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
