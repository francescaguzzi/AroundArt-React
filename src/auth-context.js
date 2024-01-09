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
    return users[0];
    return users.find((user) => user.username === username);
  };

  const updateRegistrationInfo = (oldUsername, username, email, password) => {
    console.log(oldUsername, username, email, password);
    setUsers(users.map((user) => {
      if (user.username === oldUsername) {
        console.log("ciao");
        let aaa = {
          ...user,
          username: username,
          email: email,
          password: password
        };

        console.table(aaa);
        return aaa;
      }
      return user;
    }));

    setUsername(username);

    console.log(users);
    console.log(username);
  };

  const deleteUser = (username) => {
    setUsers(users.filter((user) => user.username !== username));
  };

  useEffect(() => {
    // Aggiungi un utente admin quando il componente viene montato
    const adminUser = {
      username: 'admin',
      email: 'admin@aroundart.it',
      password: 'admin'
    };
    setUsers([adminUser]);
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, username, users, login, logout, register, getRegistrationInfo , updateRegistrationInfo, deleteUser}}>
      {children}
    </AuthContext.Provider>
  );
};

// esporta un hook personalizzato per utilizzare il contesto
export const useAuth = () => {
  return useContext(AuthContext);
};
