import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

const developers = [
  {
    name: 'Rumesha Harshan',
    role: 'Frontend Developer',
    img: './src/assets/rumesh.jpg', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/g-rumesha-harshan-b85409258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/grHarshan '
  },
  {
    name: 'Hasith Ferando',
    role: 'Frontend Developer',
    img: './src/assets/hasith.jpg', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/hasith-fernando-23a00b286',
    github: 'https://github.com/HasithFernando'
  },
  {
    name: 'Harshana Bandara',
    role: 'Frontend Developer',
    img: './src/assets/harshana.png', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/harshana-bandara-991821258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/HarshanaBandaraAg91'
  },
  {
    name: 'Manuka Dandeniya',
    role: 'Frontend Developer',
    img: './src/assets/manuka.jpg', // Reduced image size
    description: 'Specializes in React and modern web design.',
    linkedin: 'https://www.linkedin.com/in/manuka-dandeniya-b28630275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/Manuka27'
  },
  {
    name: 'Dinesh Pethiyagoda',
    role: 'Backend Developer',
    img: './src/assets/dinesh.jpg', // Reduced image size
    description: 'Specializes in Java , C# and modern web design.',
    linkedin: 'https://www.linkedin.com/in/dinesh-pethiyagoda-084710252/',
    github: 'https://github.com/AkalankaDinesh'
  },
  {
    name: 'Tharuka Thilakarathna',
    role: 'UI/UX Designer',
    img: './src/assets/tharuka.jpg', // Reduced image size
    description: 'Expert in UI/UX design and user research.',
    linkedin: 'https://www.linkedin.com/in/tharuka-thilakarathna-065633249?trk=contact-info',
    github: 'https://github.com/thilakarathnaMTM'
  },
  {
    name: 'Sheshani Senevirathna',
    role: 'Backend Developer',
    img: './src/assets/shehani.jpg', // Reduced image size
    description: 'Specializes in server-side logic and database management.',
    linkedin: 'https://www.linkedin.com/in/sheshani-wimarshana-849b76256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/SheshaniWimarshana'
  },
  {
    name: 'Erandhi Rodrigo',
    role: 'Project Manager',
    img: './src/assets/erandi.jpg', // Reduced image size
    description: 'Leads projects and ensures timely delivery.',
    linkedin: 'http://www.linkedin.com/in/erandi-harshani-b8773a302',
    github: 'https://github.com/ErandiHarshani'
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
