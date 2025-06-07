import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import OnboardingWizard from './components/OnboardingWizard';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans text-gray-700 dark:text-gray-200 transition-colors">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register/*" element={<OnboardingWizard />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
