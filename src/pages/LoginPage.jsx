import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/');
    } else {
      alert('Şifre veya kullanıcı adı hatalı.');
    }
  };

  return (
    <div className="login-page">
      <h1>Giriş Yap</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Kullanıcı Adı:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
      <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
        Deneme için kullanıcı adı: <strong>furkankarakas</strong>, şifre: <strong>12345</strong>
      </p>
    </div>
  );
}

export default LoginPage;