// analytics.js
// Simple Google Analytics integration (replace with your GA ID)

export function initAnalytics() {
  if (typeof window === 'undefined') return;
  if (document.getElementById('ga-script')) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with your GA ID
  script.id = 'ga-script';
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA ID
}
