import React, { createContext, useContext, useState } from 'react';

// crea il contesto
const AuthContext = createContext();

// crea il provider
export const AuthProvider = ({ children }) => {

  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  const login = (user) => {
    setAuthenticated(true);
    setUsername(user);
  };

  const logout = () => {
    setAuthenticated(false);
    setUsername('');
  };

  const register = (info) => {
    setUsers([...users, info]); // aggiunge un nuovo utente all'array
  };

  const getRegistrationInfo = () => {
    return users.find((user) => user.username === username);
  };

  return (
    <AuthContext.Provider value={{ authenticated, username, users, login, logout, register, getRegistrationInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

// esporta un hook personalizzato per utilizzare il contesto
export const useAuth = () => {
  return useContext(AuthContext);
};
