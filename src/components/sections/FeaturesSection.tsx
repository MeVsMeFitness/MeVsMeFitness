
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => (
  <section className="py-20" id="features">
    <motion.div
      className="w-full mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Feature 1: Social Media Integration */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 group justify-center mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-indigo-200 transition-all duration-300 border border-gray-100 group-hover:scale-105">
          <div className="absolute -top-8 left-0 right-0 flex justify-center">
            {/* Social Media Icon */}
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-indigo-400 to-blue-400 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z"/></svg>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight mt-10">
            Connect your social media to import saved fitness content
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            ME Vs ME Fitness seamlessly integrates with Instagram, TikTok, and YouTube to import your saved workout videos. 
            Our verified content database ensures accurate exercise classification and creates a unified library of your fitness inspiration.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Never lose track of that perfect workout video again. All your saved content is automatically organized 
            by muscle groups, difficulty levels, and exercise types for easy access during workout planning.
          </p>
        </div>
        <div className="text-center w-full">
          <div className="relative bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-all duration-300 w-full aspect-[3/2] min-w-0 overflow-hidden p-0 h-auto">
            <img
              src="/imgs/SocialConnect.png"
              alt="Social Media Integration"
              className="w-full h-full object-cover mx-auto"
              style={{ minWidth: 0, minHeight: 0 }}
            />
          </div>
        </div>
      </motion.div>
      {/* Feature 2: AI Workout Planning */}
      <motion.div
        className="grid md:grid-cols-2 gap-16 items-center mb-20 group justify-center mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="md:order-2 relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-indigo-200 transition-all duration-300 border border-gray-100 group-hover:scale-105">
          <div className="absolute -top-8 left-0 right-0 flex justify-center">
            {/* AI Icon */}
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight mt-10">
            AI-powered workout planning algorithms
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Tell us your goals, and ME Vs ME Fitness will design a personalized plan to get you there. Our smart algorithms 
            analyze your saved video content and generate customized daily workout plans based on your fitness objectives and experience level.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Just like having a personal trainer, the app creates progressive training schedules with direct 
            references to your saved videos for each exercise. Check in weekly to get smart adjustments based on your progress and feedback.
          </p>
        </div>
        <div className="text-center md:order-1">
          <div className="w-full max-w-md h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto border-2 border-gray-300 group-hover:shadow-xl transition-all duration-300">
            <span className="text-gray-500 font-medium">AI Workout Planning</span>
          </div>
        </div>
      </motion.div>
      {/* Feature 3: ME Vs ME Compare - Canvas Demo */}
      <motion.div
        className="grid md:grid-cols-2 gap-16 items-center mb-20 group justify-center mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-indigo-200 transition-all duration-300 border border-gray-100 group-hover:scale-105">
          <div className="absolute -top-8 left-0 right-0 flex justify-center">
            {/* Compare Icon */}
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight mt-10">
            Premium Feature: ME Vs ME Compare
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Record your workout sessions and get detailed form analysis powered by computer vision technology. 
            Our advanced algorithms compare your movements with reference videos from fitness influencers and provide real-time feedback on form correction.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Track your progress and improvement over time with side-by-side video comparisons, accuracy scores, and personalized 
            suggestions to perfect your technique and achieve better results.
          </p>
        </div>
        <div className="text-center">
          {/* Animated Canvas Demo */}
          <div className="relative max-w-md mx-auto group-hover:shadow-indigo-400 transition-all duration-300">
            {/* Import and use CanvasDemo component */}
            {/* @ts-ignore */}
            {require('../ui/CanvasDemo').default()}
          </div>
          <p className="text-sm text-gray-500 italic mt-4">
            🎯 Real-time AI analysis • 📊 Instant feedback • 📈 Progress tracking
          </p>
        </div>
      </motion.div>
      {/* Feature 4: Progress Tracking */}
      <motion.div
        className="grid md:grid-cols-2 gap-16 items-center group justify-center mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <div className="md:order-2 relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-indigo-200 transition-all duration-300 border border-gray-100 group-hover:scale-105">
          <div className="absolute -top-8 left-0 right-0 flex justify-center">
            {/* Analytics Icon */}
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight mt-10">
            Comprehensive progress tracking and analytics
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Monitor your fitness journey with detailed analytics and insights. Track workout completion rates, form improvement metrics, and visualize your progress over time with beautiful charts and data reporting.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            ME Vs ME Fitness keeps pace with your ever-changing fitness needs and adapts your workout plans accordingly, ensuring you stay on track toward your goals with data-driven insights.
          </p>
        </div>
        <div className="text-center md:order-1 w-full">
          <div className="relative bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-all duration-300 w-full aspect-[3/2] min-w-0 overflow-hidden p-0 h-auto">
            <img
              src="/imgs/Analytics.png"
              alt="Progress Analytics Dashboard"
              className="w-full h-full object-cover mx-auto"
              style={{ minWidth: 0, minHeight: 0 }}
            />
          </div>
        </div>
      </motion.div>
  </motion.div>
  </section>
);

export default FeaturesSection;
