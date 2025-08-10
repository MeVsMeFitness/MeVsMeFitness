
import { motion } from 'framer-motion';

const categories = [
  {
    title: "Social Media Integration",
    features: [
      "Instagram, TikTok, YouTube connectivity",
      "Automatic saved content import",
      "Verified exercise database",
      "Smart content categorization",
      "Unified content library",
      "Real-time content sync"
    ]
  },
  {
    title: "AI Workout Planning",
    features: [
      "Personalized daily and weekly plans",
      "Goal-based exercise selection",
      "Progressive difficulty adjustment",
      "Video reference integration",
      "Smart workout variations",
      "Adaptive plan modifications"
    ]
  },
  {
    title: "Premium Features",
    features: [
      "ME Vs ME Compare form analysis",
      "Real-time movement feedback",
      "Side-by-side video comparison",
      "Accuracy scoring system",
      "Unlimited video storage",
      "Advanced progress analytics"
    ]
  },
  {
    title: "Tracking & Analytics",
    features: [
      "Workout completion tracking",
      "Form improvement metrics",
      "Progress visualization",
      "Performance insights",
      "Goal achievement monitoring",
      "Historical data analysis"
    ]
  }
];

const FeatureBreakdownSection: React.FC = () => (
  <section className="py-20">
    <motion.div
      className="max-w-6xl mx-auto px-5"
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Feature Breakdown</h2>
        <p className="text-xl text-gray-600">ME Vs ME's thoughtfully designed features make fitness planning easy, effective, and personalized</p>
      </motion.div>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-8 rounded-xl border-l-4 border-indigo-600"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-gray-600 relative pl-6">
                  <span className="absolute left-0 text-indigo-600 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default FeatureBreakdownSection;
