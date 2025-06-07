import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider, UserContext } from './context/UserContext';
import { OnboardingProvider } from './context/OnboardingContext';
import App from './App';
import './index.css';

function ThemeWrapper({ children }) {
  const { preferences } = useContext(UserContext);

  useEffect(() => {
    const root = window.document.documentElement;
    if (preferences.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [preferences.theme]);

  return children;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <OnboardingProvider>
          <ThemeWrapper>
            <App />
          </ThemeWrapper>
        </OnboardingProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
