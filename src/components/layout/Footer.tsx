import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-6xl mx-auto px-5">
      <div className="grid md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <h4 className="text-lg font-semibold mb-4">ME Vs ME Fitness</h4>
          <p className="text-gray-400 leading-relaxed mb-4">
            AI-powered fitness coaching that transforms your social media inspiration into personalized workout plans.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/></svg>
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.2 5 12 5 12 5h-.1s-4.2 0-7.1.1c-.4 0-1.2.1-1.9.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.9.1 6.9.1s4.2 0 7.1-.1c.4 0 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM9.8 15.2V8.8l6.4 3.2-6.4 3.2z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Product</h4>
          <div className="space-y-2">
            <a href="#features" className="block text-gray-400 hover:text-white">Features</a>
            <a href="#premium" className="block text-gray-400 hover:text-white">Premium</a>
            <a href="#trial" className="block text-gray-400 hover:text-white">Notify Me</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <div className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-white">About Us</a>
            <a href="#" className="block text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="block text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <div className="space-y-2">
            <a href="#faq" className="block text-gray-400 hover:text-white">FAQ</a>
            <a href="#" className="block text-gray-400 hover:text-white">Help Center</a>
            <a href="#" className="block text-gray-400 hover:text-white">Contact Support</a>
          </div>
        </div>
        <div className="md:col-span-1 flex md:justify-end items-center mt-8 md:mt-0">
          <div className="flex flex-col space-y-2 w-full md:w-auto">
            <a href="#features" className="text-gray-400 hover:text-white text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm">How It Works</a>
            <a href="#premium" className="text-gray-400 hover:text-white text-sm">Premium</a>
            <a href="#faq" className="text-gray-400 hover:text-white text-sm">FAQ</a>
            <a href="#trial" className="text-indigo-400 hover:text-white text-sm font-bold">Notify Me</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
  <p>&copy; 2025 ME Vs ME Fitness. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
