import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    setIsValid(!!sessionId);
  }, [searchParams]);

  return (
    <div>
      {isValid ? (
        <div className="success-container">
          <div className="success-icon">✓</div>
          <h1>Payment Successful!</h1>
          <p>Thank you for your purchase. Your 3D model is ready for download.</p>
          <a
            href={process.env.PUBLIC_URL + '/downloads/final_output.stl'}
            className="download-button"
            download
          >
            Download 3D Model
          </a>
        </div>
      ) : (
        <div className="error-message" style={{ display: 'block' }}>
          <h2>Invalid Session</h2>
          <p>We couldn't verify your payment session. Please try the purchase again.</p>
          <a href="/" style={{ color: '#e53e3e' }}>
            Return to Homepage
          </a>
        </div>
      )}
    </div>
  );
};

export default SuccessPage; 