import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alex J.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'ME Vs ME turned my saved Instagram workouts into a real plan. I love the AI feedback and seeing my progress week by week!',
    handle: '@alexjfit',
  },
  {
    name: 'Priya S.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The compare feature is a game changer. I can actually see how my form stacks up to the pros. Highly recommend!',
    handle: '@priyalifts',
  },
  {
    name: 'Chris M.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'I never thought I could get a personalized plan from my favorite TikTok videos. The app is super easy and motivating.',
    handle: '@chris.moves',
  },
];

const TestimonialsSection: React.FC = () => (
  <section className="py-20 bg-white" id="testimonials">
    <motion.div
      className="max-w-5xl mx-auto px-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real results from real people. Join thousands transforming their fitness journey with ME Vs ME.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-indigo-200 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 * i, duration: 0.7 }}
          >
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-4 shadow-md border-2 border-indigo-400" />
            <blockquote className="text-gray-700 italic mb-4">“{t.quote}”</blockquote>
            <div className="font-semibold text-indigo-600">{t.name}</div>
            <div className="text-gray-400 text-sm">{t.handle}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default TestimonialsSection;
