// frontend/src/components/Login.tsx
import React, { useState } from 'react';

interface LoginProps {
  setLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: any) => void;
}

const Login: React.FC<LoginProps> = ({ setLoggedIn, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Placeholder login logic
    setUser({ email });
    setLoggedIn(true);
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}> {/* Center with a max width */}
      <h2>Login</h2>
      {/* Username input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {/* Password input */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {/* Login button */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
