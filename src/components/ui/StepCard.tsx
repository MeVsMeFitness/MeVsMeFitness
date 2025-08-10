import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm text-center">
    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold">
      {number}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default StepCard;
