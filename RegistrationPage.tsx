// RegistrationPage.tsx
import React, { useState } from 'react';

const RegistrationPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = () => {
    // Implement registration logic here (e.g., send data to the backend).
    // For this simplified example, we'll just set registrationSuccess to true.
    setRegistrationSuccess(true);
  };

  return (
    <div>
      {registrationSuccess ? (
        <p>Registration successful! Redirecting...</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegistration}>Register</button>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
