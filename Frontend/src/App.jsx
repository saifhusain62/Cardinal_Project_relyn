// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import FAQ from './pages/FAQ';
import BookNow from './pages/BookNow';
import Contact from './pages/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;