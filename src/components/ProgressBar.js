import React from 'react';

const ProgressBar = ({ step, total = 3 }) => {
  const pct = (step / total) * 100;
  return (
    <div
      className="w-full bg-gray-200 h-3 rounded-full overflow-hidden"
      role="progressbar"
      aria-valuenow={step}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label="Onboarding progress"
    >
      <div
        className="h-3 bg-indigo-600 rounded-full transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

export default ProgressBar;
