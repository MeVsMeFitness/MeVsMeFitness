import React from 'react';

const PhoneMockup: React.FC = () => (
  <div className="max-w-sm mx-auto">
    <div className="w-72 h-96 bg-gray-900 rounded-3xl p-5 shadow-2xl mx-auto">
      <div className="w-full h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-2xl flex flex-col text-white text-sm">
        <div className="text-center pt-8 pb-6">
          <h3 className="text-lg font-semibold mb-1">Today's AI Plan</h3>
          <p className="text-xs opacity-80">Generated from your saved videos</p>
        </div>
        <div className="px-5 space-y-3">
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4">
            <h4 className="text-sm font-medium mb-1">Push Workout</h4>
            <p className="text-xs opacity-80">6 exercises • Based on @fitfluencer</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4">
            <h4 className="text-sm font-medium mb-1">Form Analysis</h4>
            <p className="text-xs opacity-80">92% accuracy vs reference</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-4">
            <h4 className="text-sm font-medium mb-1">Progress Update</h4>
            <p className="text-xs opacity-80">+15% improvement this week</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PhoneMockup;
