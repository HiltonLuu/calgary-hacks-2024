import React, { createContext, useContext, useState } from "react";

// Define the context
const UserContext = createContext();

// Define a provider component
export const UserProviders = ({ children }) => {
  const [user, setUser] = useState(null); // Example state to hold user data

  // Function to simulate user login
  const logIn = (userData) => {
    setUser(userData);
  };

  // Function to simulate user logout
  const logOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
