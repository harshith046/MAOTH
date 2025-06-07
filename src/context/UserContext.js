import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Load userData (personal + business) from localStorage
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : {};
  });

  // Load preferences (theme + layout) from localStorage
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem('preferences');
    return saved
      ? JSON.parse(saved)
      : { theme: 'light', layout: 'grid' };
  });

  // Persist userData
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  // Persist preferences
  useEffect(() => {
    localStorage.setItem('preferences', JSON.stringify(preferences));
  }, [preferences]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, preferences, setPreferences }}
    >
      {children}
    </UserContext.Provider>
  );
};
