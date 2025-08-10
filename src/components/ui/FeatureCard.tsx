import React from 'react';

interface FeatureCardProps {
  title: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, features }) => (
  <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-indigo-600">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="text-gray-600 relative pl-6">
          <span className="absolute left-0 text-indigo-600 font-bold">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default FeatureCard;
