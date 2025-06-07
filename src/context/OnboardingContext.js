import React, { createContext, useState } from 'react';

export const OnboardingContext = createContext();

export function OnboardingProvider({ children }) {
  const [onboardingData, setOnboardingData] = useState({});

  const updateOnboardingData = newData =>
    setOnboardingData(prev => ({ ...prev, ...newData }));

  return (
    <OnboardingContext.Provider value={{ onboardingData, updateOnboardingData }}>
      {children}
    </OnboardingContext.Provider>
  );
}
