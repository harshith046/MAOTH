import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { motion } from 'framer-motion';

export default function Welcome() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      navigate('/dashboard', { replace: true });
      return;
    }
    const timer = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-100 px-4">
      <motion.div
        className="
          relative
          w-full max-w-lg
          bg-white/80 backdrop-blur-sm
          rounded-3xl
          shadow-2xl
          p-10
          text-center
        "
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          🎉 Thank you, {userData?.name || 'Friend'}!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We appreciate you—your dashboard will be ready in a moment.
        </p>

        <motion.button
          className={`
            inline-block px-8 py-3 rounded-full font-semibold
            ${count > 1 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-green-500 hover:bg-green-600'}
            text-white shadow-md transition-colors
            focus:outline-none focus:ring-4 focus:ring-indigo-300
          `}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Redirecting in {count}
        </motion.button>
      </motion.div>
    </div>
  );
}
