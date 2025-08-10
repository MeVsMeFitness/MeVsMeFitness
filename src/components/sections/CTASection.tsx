
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import nhost from '../../utils/nhost';

const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Stricter email regex (RFC 5322 Official Standard)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const handleNotifyMe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    if (!email || !emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    try {
      const result = await nhost.graphql.request(`
        mutation InsertEmail($email: String!) {
          insert_notify_emails(objects: {email: $email}) {
            affected_rows
          }
        }
      `, { email });
      if (result.error) {
        // Nhost may return error as an array (GraphQLError[]) or object (ErrorPayload)
        let isDuplicate = false;
        if (Array.isArray(result.error)) {
          isDuplicate = result.error.some((e: any) => e.message && e.message.includes('Uniqueness violation'));
        } else if (typeof result.error === 'object' && result.error !== null && 'message' in result.error) {
          isDuplicate = (result.error as any).message?.includes('Uniqueness violation');
        }
        if (isDuplicate) {
          setMessage('This email is already registered. We will notify you once it is launched!');
        } else {
          setMessage('There was an error. Please try again.');
        }
      } else if (result.data?.insert_notify_emails?.affected_rows === 1) {
        setMessage('Thank you! You will be notified when we launch.');
        setEmail('');
      } else {
        setMessage('There was an error. Please try again.');
      }
    } catch (err: any) {
      // Also check for uniqueness violation in thrown error
      const isDuplicate = err?.message?.includes('Uniqueness violation');
      if (isDuplicate) {
        setMessage('This email is already registered. We will notify you once it is launched!');
      } else {
        setMessage('There was an error. Please try again.');
      }
    }
  };

  return (
    <section className="py-20 bg-indigo-600 text-white text-center" id="trial">
      <motion.div
        className="max-w-4xl mx-auto px-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Ready to transform your fitness journey with ME Vs ME Fitness?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Join thousands using ME Vs ME Fitness to turn social media inspiration into real results
        </motion.p>
  {/* Start Free Trial form removed for pre-launch state */}
        <div className="mt-6 flex justify-center">
          <form onSubmit={handleNotifyMe} className="w-full max-w-md flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <input
              type="email"
              name="notify-email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg text-gray-900 text-base text-center"
              placeholder="Get notified when we launch"
              aria-label="Get notified when we launch"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-indigo-800 transition-colors"
            >
              Notify Me
            </button>
          </form>
        </div>
        {message && <div className="mt-4 text-white text-sm">{message}</div>}
  {/* Message removed with trial form */}
  {/* Trial offer message removed for pre-launch state */}
      </motion.div>
    </section>
  );
};

export default CTASection;
