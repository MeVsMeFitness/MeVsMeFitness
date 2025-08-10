import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isActive, onClick }) => (
  <div className="border-b border-gray-200 pb-8 last:border-b-0">
    <button
      onClick={onClick}
      className="w-full text-left flex justify-between items-center text-lg font-semibold text-gray-900 mb-4 cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {question}
      <span className={`text-2xl transition-transform ${isActive ? 'rotate-45' : ''}`}>
        +
      </span>
    </button>
    {isActive && (
      <div className="text-gray-600 leading-relaxed">
        {answer}
      </div>
    )}
  </div>
);

export default FAQItem;
