import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsLoggedIn(true);
      } catch (e) {
        console.error("LocalStorage'dan kullanıcı bilgisi okunurken hata oluştu:", e);
        localStorage.removeItem('currentUser');
      }
    }
  }, []);

  const login = (username, password) => {
    if (username === 'furkankarakas' && password === '12345') {
      const fakeUser = { username: 'furkankarakas', role: 'admin' };
      setIsLoggedIn(true);
      setUser(fakeUser);
      localStorage.setItem('currentUser', JSON.stringify(fakeUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);