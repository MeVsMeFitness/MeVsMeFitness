
import { motion } from 'framer-motion';
// ...existing code...

const steps = [
  { 
    number: 1, 
    title: "Connect your accounts", 
    description: "Link your Instagram, TikTok, and YouTube accounts to automatically import your saved fitness videos into your personal content library." 
  },
  { 
    number: 2, 
    title: "Set your goals", 
    description: "Tell us about your fitness objectives, experience level, and preferences. Our AI will analyze your saved content and understand what you want to achieve." 
  },
  { 
    number: 3, 
    title: "Get your AI-generated plan", 
    description: "ME Vs ME creates personalized daily and weekly workout plans using your saved videos, perfectly tailored to your goals and schedule." 
  },
  { 
    number: 4, 
    title: "Train and get feedback", 
    description: "Follow your workouts with video references, record your form for analysis, and receive weekly plan adjustments based on your progress and feedback." 
  }
];

const HowItWorksSection: React.FC = () => (
  <section className="py-20 bg-gray-50" id="how-it-works">
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
        <div className="flex flex-col items-center gap-2 mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">How ME Vs ME Fitness Works</h2>
          <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">Coming Soon</span>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Get a dynamic, AI-powered fitness plan that's perfectly calibrated for you and your goals
        </p>
        {/* Demo video or animated walkthrough */}
        <div className="flex justify-center mb-4">
          <video className="rounded-xl shadow-lg w-full max-w-2xl border-2 border-indigo-200" autoPlay loop muted playsInline poster="/demo-poster.png">
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-sm text-gray-500">Watch a quick walkthrough of how ME Vs ME turns your saved videos into a real plan.</p>
      </motion.div>
      {/* Feedback widget/link */}
      <div className="text-center mb-8">
        <a href="mailto:feedback@mevsme.com" className="inline-block bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-medium shadow hover:bg-indigo-100 transition-colors">
          💡 Have ideas? Tell us!
        </a>
      </div>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        {steps.map((step) => (
          <motion.div
            key={step.number}
            className="relative bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-indigo-200 transition-all duration-300 group hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * step.number, duration: 0.6 }}
          >
            <div className="absolute -top-8 left-0 right-0 flex justify-center">
              {/* Step Icons */}
              {step.number === 1 && (
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 via-indigo-400 to-blue-400 shadow-lg overflow-hidden">
                  <img
                    src="/imgs/SocialConnect.png"
                    alt="Connect your social media accounts"
                    className="w-12 h-12 object-contain border-2 border-green-500"
                  />
                </span>
              )}
              {step.number === 2 && (
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-blue-400 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3"/></svg>
                </span>
              )}
              {step.number === 3 && (
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                </span>
              )}
              {step.number === 4 && (
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                </span>
              )}
            </div>
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold mt-8 shadow-md border-4 border-white">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default HowItWorksSection;
