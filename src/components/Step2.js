import React, { useState } from 'react';

export default function Step2({ onNext, onBack }) {
  const [form, setForm] = useState({ company: '', industry: '', size: '' });
  const isValid = [form.company, form.industry, form.size].every(s => s.trim() !== '');

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
          Step 2: Business Info
        </h2>

        {/* Company*/}
        <div className="relative">
          <svg
            className="absolute left-3 top-3 h-5 w-5 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 9l3 3-3 3m13-6a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={e => setForm({ ...form, company: e.target.value })}
            className="
              w-full pl-10 pb-1 pt-3 bg-transparent placeholder-gray-500
              border-b-2 border-gray-300 focus:border-indigo-500
              focus:outline-none transition-colors
            "
          />
        </div>

        {/* Industry */}
        <div className="relative">
          <svg
            className="absolute left-3 top-3 h-5 w-5 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 7h18M3 12h18M3 17h18"
            />
          </svg>
          <input
            type="text"
            placeholder="Industry"
            value={form.industry}
            onChange={e => setForm({ ...form, industry: e.target.value })}
            className="
              w-full pl-10 pb-1 pt-3 bg-transparent placeholder-gray-500
              border-b-2 border-gray-300 focus:border-indigo-500
              focus:outline-none transition-colors
            "
          />
        </div>

        {/* Company Size */}
        <div className="relative">
          <svg
            className="absolute left-3 top-3 h-5 w-5 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 8h10M7 12h4m-4 4h10M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <input
            type="text"
            placeholder="Company Size [e.g. 10-100]"
            value={form.size}
            onChange={e => setForm({ ...form, size: e.target.value })}
            className="
              w-full pl-10 pb-1 pt-3 bg-transparent placeholder-gray-500
              border-b-2 border-gray-300 focus:border-indigo-500
              focus:outline-none transition-colors
            "
          />
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
            onClick={() => onNext(form)}
            disabled={!isValid}
            className={`
              flex-1 py-3 rounded-full font-semibold transition-all duration-300
              ${isValid
                ? 'bg-indigo-600 text-white shadow-lg hover:shadow-xl animate-pulse'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
