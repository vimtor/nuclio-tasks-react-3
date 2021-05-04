import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  logged: false,
  email: null,
  lastLogin: null,
  login: ({ email, password }) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState(null);
  const [lastLogin, setLastLogin] = useState(null);

  function login({ email, password }) {
    setEmail(email);
    setLogged(true);
    setLastLogin(new Date());
    // TODO: Make real login
  }

  function logout() {
    setEmail(null);
    setLogged(false);
    // TODO: Make real logout
  }

  return (
    <AuthContext.Provider value={{ logged, email, lastLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
