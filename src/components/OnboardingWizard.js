import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ProgressBar from './ProgressBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import { UserContext } from '../context/UserContext';
import { OnboardingContext } from '../context/OnboardingContext';
import { registerUser } from '../api';

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [collectedData, setCollectedData] = useState({});

  const { setUserData, setPreferences } = useContext(UserContext);
  const { updateOnboardingData } = useContext(OnboardingContext);
  const navigate = useNavigate();

  const handleNext = (data) => {
    setCollectedData(prev => ({ ...prev, ...data }));
    updateOnboardingData(data);

    setStep(s => Math.min(s + 1, totalSteps));
  };

  const handleBack = () => {
    setStep(s => Math.max(s - 1, 1));
  };

  const handleSubmit = async (finalStepData) => {
    const allData = { ...collectedData, ...finalStepData };

    try {
      const response = await registerUser(allData);
      setUserData({ ...response, onboarded: true });
      setPreferences({
        theme: finalStepData.theme,
        layout: finalStepData.layout,
      });
      updateOnboardingData(finalStepData);
      navigate('/welcome', { replace: true });
    } 
    catch (err) {
      console.error('Registration failed:', err);
      alert('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 space-y-6">
        {/* Progress */}
        <ProgressBar step={step} total={totalSteps} />

        {step === 1 && <Step1 onNext={handleNext} />}
        {step === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <Step3 onBack={handleBack} onSubmit={handleSubmit} />}
      </div>
    </div>
  );
}
