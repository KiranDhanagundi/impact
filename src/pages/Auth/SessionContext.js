import React, { createContext, useState, useContext } from "react";

const SessionContext = createContext();

export const useSession = () => {
  return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const signIn = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <SessionContext.Provider value={{ isLoggedIn, username, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
};
