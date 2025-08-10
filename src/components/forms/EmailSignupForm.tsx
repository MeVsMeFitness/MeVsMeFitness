import React, { useState } from 'react';

interface EmailSignupFormProps {
  onSuccess?: () => void;
}

const EmailSignupForm: React.FC<EmailSignupFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setMessage('Thank you for starting your free trial!');
      setEmail('');
      if (onSuccess) onSuccess();
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
      <input
        type="email"
        name="email"
        className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg"
        placeholder="Enter your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
      >
        Start Free Trial
      </button>
      {message && <p className="text-sm opacity-80 mt-4 w-full">{message}</p>}
    </form>
  );
};

export default EmailSignupForm;
