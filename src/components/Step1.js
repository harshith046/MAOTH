import React, { useState } from 'react';
import { UserIcon, MailIcon } from '@heroicons/react/outline';

export default function Step1({ onNext }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const isValid = form.name.trim() !== '' && form.email.trim() !== '';

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
          Step 1: Personal Info
        </h2>

        {/* Name */}
        <div className="relative">
          <UserIcon className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
          <input
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="
              w-full pl-10 pb-1 pt-3 bg-transparent placeholder-gray-500
              border-b-2 border-gray-300 focus:border-indigo-500
              focus:outline-none transition-colors
            "
          />
        </div>

        {/* Email */}
        <div className="relative">
          <MailIcon className="absolute left-3 top-3 h-5 w-5 text-indigo-500" />
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="
              w-full pl-10 pb-1 pt-3 bg-transparent placeholder-gray-500
              border-b-2 border-gray-300 focus:border-indigo-500
              focus:outline-none transition-colors
            "
          />
        </div>

        {/* Next */}
        <button
          onClick={() => onNext(form)}
          disabled={!isValid}
          className={`
            w-full py-3 rounded-full font-semibold
            transition-all duration-300
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
  );
}
