// LoginPage.tsx
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password') {
      setLoginSuccess(true);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      {loginSuccess ? (
        <p>Login successful! Redirecting...</p>
      ) : (
        <div>
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
          {error && <p>{error}</p>}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
