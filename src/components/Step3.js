import React, { useState } from 'react';

export default function Step3({ onBack, onSubmit }) {
  const [form, setForm] = useState({ theme: 'light', layout: 'grid' });
  const isValid = form.theme && form.layout;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 px-4">
      <div className="
          relative
          w-full max-w-sm
          bg-white/60 backdrop-blur-md
          rounded-3xl
          shadow-xl
          p-8
          space-y-6
        ">
        <h2 className="text-2xl font-extrabold text-gray-800 text-center">
          Step 3: Preferences
        </h2>

        {/* Theme Select */}
        <div className="relative">
          <select
            value={form.theme}
            onChange={e => setForm({ ...form, theme: e.target.value })}
            className="
              w-full px-4 py-3 bg-transparent placeholder-gray-500
              border-b-2 border-gray-300 focus:border-primary
              focus:outline-none transition-colors
            "
          >
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
          </select>
        </div>

        {/* Layout Select */}
        <div className="relative">
          <select
            value={form.layout}
            onChange={e => setForm({ ...form, layout: e.target.value })}
            className="
              w-full px-4 py-3 bg-transparent placeholder-gray-500
              border-b-2 border-gray-300 focus:border-primary
              focus:outline-none transition-colors
            "
          >
            <option value="grid">Grid Layout</option>
            <option value="list">List Layout</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={onBack}
            className="
              flex-1 py-3 rounded-full font-semibold
              bg-gray-300 text-gray-600
              hover:bg-gray-400 transition-colors
              focus:outline-none focus:ring-2 focus:ring-gray-400
            "
          >
            Back
          </button>
          <button
            onClick={() => onSubmit(form)}
            disabled={!isValid}
            className={`
              flex-1 py-3 rounded-full font-semibold transition-all duration-300
              ${isValid
                ? 'bg-primary text-white shadow-lg hover:shadow-xl animate-pulse'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }
            `}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
