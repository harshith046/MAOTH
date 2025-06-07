import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const generateWeekData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map((day, idx) => ({ day, progress: Math.min(100, (idx + 1) * 15) }));
};

export default function Dashboard() {
  const { userData, preferences } = useContext(UserContext);
  const isGrid = preferences?.layout === 'grid';
  const chartData = generateWeekData();

  const metrics = [
    { label: 'Team Members', value: userData?.teams?.length || 12, color: 'indigo' },
    { label: 'Active Projects', value: userData?.projects?.filter(p => p.active).length || 5, color: 'green' },
    { label: 'Notifications', value: userData?.notifications || 3, color: 'yellow' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 transition-colors">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <header className="space-y-2 text-gray-900 dark:text-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Hello, {userData?.name ?? 'User'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here’s a snapshot of your activity this week.
          </p>
        </header>

        {/* Profile Info */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow transition-colors overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-red-500 to-red-500" />
          <div className="p-6 text-gray-800 dark:text-gray-200">
            <h2 className="text-lg font-semibold mb-4">Your Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><span className="font-medium">Name:</span> {userData?.name ?? '—'}</p>
              <p><span className="font-medium">Email:</span> {userData?.email ?? '—'}</p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className={`grid gap-6 ${isGrid ? 'md:grid-cols-3' : 'grid-cols-1'}`}>
          {metrics.map(({ label, value, color }) => (
            <div key={label}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all overflow-hidden`}
            >
              <div className={`h-1 bg-${color}-500`} />
              <div className="p-6 flex flex-col items-center text-gray-900 dark:text-gray-100">
                <h3 className="text-sm uppercase tracking-wide">{label}</h3>
                <p className="mt-2 text-3xl font-bold">{value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Weekly Progress Chart */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow transition-colors p-6">
          <div className="flex items-center justify-between mb-4 text-gray-800 dark:text-gray-200">
            <h2 className="text-xl font-semibold">Weekly Progress</h2>
            <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
              Updated just now
            </span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="4 4" stroke={preferences.darkMode ? '#374151' : '#E5E7EB'} />
              <XAxis dataKey="day" tick={{ fill: preferences.darkMode ? '#D1D5DB' : '#6B7280', fontWeight: 600 }} />
              <YAxis tick={{ fill: preferences.darkMode ? '#D1D5DB' : '#6B7280', fontWeight: 600 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: preferences.darkMode ? '#1F2937' : '#FFF',
                  borderRadius: 6,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
                itemStyle={{ color: '#4F46E5' }}
                cursor={{ stroke: '#4F46E5', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#4F46E5"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

      </div>
    </div>
  );
}
