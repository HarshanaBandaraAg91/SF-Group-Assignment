import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

const developers = [
  {
    name: 'Amal Nimal',
    role: 'Frontend Developer',
    img: 'https://via.placeholder.com/120', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/amal-nimal',
    github: 'https://github.com/amal-nimal'
  },
  {
    name: 'Amal Nimal',
    role: 'Frontend Developer',
    img: 'https://via.placeholder.com/120', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/amal-nimal',
    github: 'https://github.com/amal-nimal'
  },
  {
    name: 'Amal Nimal',
    role: 'Frontend Developer',
    img: 'https://via.placeholder.com/120', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/amal-nimal',
    github: 'https://github.com/amal-nimal'
  },
  {
    name: 'Amal Nimal',
    role: 'Frontend Developer',
    img: 'https://via.placeholder.com/120', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/amal-nimal',
    github: 'https://github.com/amal-nimal'
  },
  {
    name: 'Amal Nimal',
    role: 'Frontend Developer',
    img: 'https://via.placeholder.com/120', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/amal-nimal',
    github: 'https://github.com/amal-nimal'
  },
  {
    name: 'Samira Khan',
    role: 'UI/UX Designer',
    img: 'https://via.placeholder.com/120', // Reduced image size
    description: 'Expert in UI/UX design and user research.',
    linkedin: 'https://www.linkedin.com/in/samira-khan',
    github: 'https://github.com/samira-khan'
  },
  {
    name: 'Alex Smith',
    role: 'Backend Developer',
    img: 'https://via.placeholder.com/120', // Reduced image size
    description: 'Specializes in server-side logic and database management.',
    linkedin: 'https://www.linkedin.com/in/alex-smith',
    github: 'https://github.com/alex-smith'
  },
  {
    name: 'Jamie Lee',
    role: 'Project Manager',
    img: 'https://via.placeholder.com/120', // Reduced image size
    description: 'Leads projects and ensures timely delivery.',
    linkedin: 'https://www.linkedin.com/in/jamie-lee',
    github: 'https://github.com/jamie-lee'
  }
  // Add more team members as needed
];

const AboutUs = () => {
  return (
    <Container className="mt-5" style={{ marginBottom: '5rem' }}>
      <h1 className="text-center mb-5">Meet Our Team</h1>
      <Row>
        {developers.map((developer, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card className="h-100 text-center shadow-lg" style={{ marginBottom: '2rem' }}>
              <Card.Img 
                variant="top" 
                src={developer.img} 
                alt={developer.name} 
                className="rounded-circle mx-auto p-3" // Center the image horizontally
                style={{ width: '100px', height: '100px' }} // Smaller image size
              />
              <Card.Body>
                <Card.Title>{developer.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{developer.role}</Card.Subtitle>
                <Card.Text>{developer.description}</Card.Text>
                <div className="d-flex justify-content-center mt-3">
                  <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaLinkedin size={24} />
                  </a>
                  <a href={developer.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaGithub size={24} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutUs;
