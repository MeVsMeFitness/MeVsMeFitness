
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => (
  <section className="relative pt-24 pb-16 px-5 overflow-hidden">
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-60 blur-2xl" />
    <motion.div
      className="max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
  Transform your social media inspiration into real results
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
  AI-powered fitness coaching that creates personalized workout plans from your saved videos. Compare your form with influencers and get real-time feedback.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <a
          href="#trial"
          className="relative bg-indigo-700 text-white px-10 py-5 rounded-xl font-semibold text-xl shadow-lg hover:bg-indigo-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400"
        >
          <span className="animate-glow">Notify Me</span>
        </a>
        <a
          href="#how-it-works"
          className="border-2 border-indigo-600 text-indigo-600 px-10 py-5 rounded-xl font-semibold text-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          See How It Works
        </a>
      </motion.div>
      <motion.div
        className="max-w-sm mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <div className="w-72 h-96 bg-gray-900 rounded-3xl p-5 shadow-2xl mx-auto transition-transform duration-500 hover:scale-105 hover:shadow-indigo-500/40">
          <div className="w-full h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-2xl flex flex-col text-white text-sm">
            <div className="text-center pt-8 pb-6">
              <h3 className="text-lg font-semibold mb-1">Today's AI Plan</h3>
              <p className="text-xs opacity-80">Generated from your saved videos</p>
            </div>
            <div className="px-5 space-y-3">
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 transition-all duration-300 hover:bg-white/25">
                <h4 className="text-sm font-medium mb-1">Push Workout</h4>
                <p className="text-xs opacity-80">6 exercises • Based on @fitfluencer</p>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 transition-all duration-300 hover:bg-white/25">
                <h4 className="text-sm font-medium mb-1">Form Analysis</h4>
                <p className="text-xs opacity-80">92% accuracy vs reference</p>
              </div>
              <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 transition-all duration-300 hover:bg-white/25">
                <h4 className="text-sm font-medium mb-1">Progress Update</h4>
                <p className="text-xs opacity-80">+15% improvement this week</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  {/* Custom CSS moved to global stylesheet */}
  </section>
);

export default HeroSection;
