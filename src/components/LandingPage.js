import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserGroupIcon,
  ChartBarIcon,
  LockClosedIcon,
  ChatAlt2Icon,
} from '@heroicons/react/outline';

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      Icon: UserGroupIcon,
      title: 'Team Management',
      description:
        'Organize teams, assign tasks, and manage roles with a sleek interface.',
    },
    {
      Icon: ChartBarIcon,
      title: 'Productivity Analytics',
      description:
        'Track progress in real time with customizable dashboards and reports.',
    },
    {
      Icon: LockClosedIcon,
      title: 'Enterprise Security',
      description:
        'Protect data with encryption, MFA, and compliance-grade monitoring.',
    },
    {
      Icon: ChatAlt2Icon,
      title: 'Real-Time Collaboration',
      description:
        'Chat, share files, and collaborate seamlessly across your organization.',
    },
  ];

  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-extrabold text-blue-600">MAOTH</div>
          <nav className="space-x-6">
            {['Features', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => navigate('/register')}
              className="ml-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="pt-24 pb-32 bg-gradient-to-br from-blue-600 to-green-500 text-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Welcome to our 
              <span className="text-yellow-300">Company Portal</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              The all-in-one platform for managing teams, securing data, and
              powering productivity.
            </p>
            <button
              onClick={() => navigate('/register')}
              className="mt-4 inline-block px-8 py-4 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors"
            >
              Get Started — It’s Free
            </button>
          </div>
          <div className="animate-fadeIn">

            <img src={"https://resources.workable.com/wp-content/uploads/2019/02/onboarding-featured.jpg"} alt="Onboarding illustration" 
            className="w-full h-84 object-cover rounded-2xl shadow-xl" />

          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 animate-fadeIn">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ Icon, title, description }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow border-l-4 border-blue-600 p-6 flex flex-col space-y-4 animate-fadeIn"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Icon className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="flex-1 text-gray-600 text-sm">{description}</p>
                <button
                  onClick={() => navigate('/register')}
                  className="mt-4 self-start text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold animate-fadeIn">
            Built for Growth
          </h2>
          <p className="text-gray-600 animate-fadeIn delay-200">
            Whether you’re a small startup or a large enterprise, our portal
            scales with your needs—backed by 24/7 support and enterprise-grade
            security.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold animate-fadeIn">
            Get in Touch
          </h2>
          <p className="text-gray-600 animate-fadeIn delay-200">
            Have questions? Reach out to our team at <a href="mailto:support@testmail.com" className="text-blue-600 hover:underline">support@testmail.com</a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-extrabold text-blue-400">Thank You For Visiting.!</div>
          <nav className="space-x-6">
            {['Features', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
