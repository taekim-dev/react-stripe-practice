import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ImageUpload from './components/ImageUpload';
import PaymentButton from './components/PaymentButton';
import SuccessPage from './components/SuccessPage';

const HomePage: React.FC = () => {
  const handleImageUpload = (file: File) => {
    console.log('Image uploaded:', file);
  };

  const handlePaymentClick = () => {
    window.location.href = 'https://buy.stripe.com/hash';
  };

  return (
    <div>
      <h1>3D Model Purchase Demo</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      <PaymentButton onPaymentClick={handlePaymentClick} price={2.00} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success.html" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
