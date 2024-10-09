import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavigationBar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home'; // Home page component
import Login from './pages/Login'; // Login page component
import Signup from './pages/Signup'; // Signup page component
import AboutUs from './pages/AboutUs'; // About Us page component
import Contact from './pages/Contact'; // Contact Us page component
import Booking from './pages/Booking'; // Booking page component
import NotFound from './pages/NotFound'; // 404 page component
import Flights from './pages/Flights';
import AdminPage from './pages/AdmpinPage';
import ProfilePage from './pages/ProfilePage';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Hotels from './pages/Hotel';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <NavigationBar />
      
      {/* Main Content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/flights" element={<Flights />} /> 
          <Route path="/admin" element={<AdminPage />} /> 
          <Route path="/Profile" element={<ProfilePage />} /> 
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/hotels" element={<Hotels />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
