
import { motion } from 'framer-motion';

const premiumFeatures = [
  "Unlimited video storage and analysis",
  "ME Vs ME Fitness Compare form analysis",
  "Real-time movement correction",
  "Advanced progress analytics",
  "Offline workout plan access",
  "Priority customer support"
];

const PremiumSection: React.FC = () => (
  <section className="py-20 bg-gray-900 text-white" id="premium">
    <motion.div
      className="max-w-6xl mx-auto px-5 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium by design</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Unlock the full potential of AI-powered fitness coaching
        </p>
      </motion.div>
      <motion.div
        className="bg-white text-gray-900 p-12 rounded-xl max-w-md mx-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div className="text-5xl font-bold text-indigo-600 mb-4">$9.99</div>
        <div className="text-gray-600 mb-8">per month</div>
        <ul className="text-left space-y-4 mb-8">
          {premiumFeatures.map((feature, index) => (
            <li key={index} className="border-b border-gray-200 pb-3 relative pl-8 last:border-b-0">
              <span className="absolute left-0 text-indigo-600 font-bold text-lg">✓</span>
              {feature.replace('ME Vs ME Compare', 'ME Vs ME Fitness Compare')}
            </li>
          ))}
        </ul>
        <a href="#trial" className="w-full bg-indigo-700 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-indigo-800 transition-colors block text-center">
          Notify Me
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default PremiumSection;
