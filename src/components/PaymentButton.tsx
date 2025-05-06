import React from 'react';

interface PaymentButtonProps {
  onPaymentClick: () => void;
  price: number;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ onPaymentClick, price }) => {
  return (
    <div className="container">
      <h2>Step 2: Purchase and Download</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <button className="button" onClick={onPaymentClick}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentButton; 