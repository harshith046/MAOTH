import React from 'react';

export const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center select-text">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-3xl font-bold mt-3 text-gray-700">{value}</p>
    </div>
  );
};
