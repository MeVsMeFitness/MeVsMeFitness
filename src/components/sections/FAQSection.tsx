
import { motion } from 'framer-motion';

import React, { useState } from 'react';

const faqData = [
  {
    question: "How is ME Vs ME Fitness different from other fitness apps?",
    answer: "ME Vs ME Fitness is the only app that transforms your existing saved social media fitness content into personalized workout plans using AI."
  },
  {
    question: "Which social media platforms does ME Vs ME Fitness support?",
    answer: "Currently, ME Vs ME Fitness integrates with Instagram, TikTok, and YouTube to import your saved fitness videos."
  },
  {
    question: "How accurate is the AI workout planning?",
    answer: "Our AI uses advanced machine learning algorithms trained on verified fitness content and exercise science principles."
  }
];

const FAQSection: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const handleFAQToggle = (index: number) => setActiveFAQ(activeFAQ === index ? null : index);
  return (
    <section className="py-20" id="faq">
      <motion.div
        className="max-w-4xl mx-auto px-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions about ME Vs ME Fitness</h2>
        </motion.div>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-4 hover:shadow-indigo-200 transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <button
                onClick={() => handleFAQToggle(index)}
                className="w-full text-left flex items-center gap-4 text-lg font-semibold text-gray-900 mb-2 cursor-pointer hover:text-indigo-600 transition-colors focus:outline-none"
                aria-expanded={activeFAQ === index}
              >
                {/* Number Badge */}
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-white font-bold shadow-md mr-2">
                  {index + 1}
                </span>
                <span className="flex-1">{faq.question}</span>
                <span className={`text-2xl transition-transform ${activeFAQ === index ? 'rotate-45 text-indigo-600' : ''}`}>
                  +
                </span>
              </button>
              {activeFAQ === index && (
                <div className="text-gray-600 leading-relaxed mt-2 border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
