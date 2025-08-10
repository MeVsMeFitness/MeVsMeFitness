# ME Vs ME - AI-Powered Fitness App

ME Vs ME is an innovative fitness application that transforms your saved social media fitness content into personalized workout plans using AI. The app features real-time form analysis, progress tracking, and seamless integration with popular social media platforms.

## 🚀 Features

- **Social Media Integration**: Connect Instagram, TikTok, and YouTube to import saved fitness videos
- **AI Workout Planning**: Personalized daily and weekly workout plans based on your goals
- **ME Vs ME Compare**: Premium form analysis with real-time feedback (Canvas-based demo)
- **Progress Tracking**: Comprehensive analytics and performance insights
- **Responsive Design**: Optimized for all devices with modern UI/UX

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── FeatureBreakdownSection.tsx
│   │   ├── PremiumSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/
│   │   ├── PhoneMockup.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── StepCard.tsx
│   │   ├── FAQItem.tsx
│   │   └── CanvasDemo.tsx
│   └── forms/
│       └── EmailSignupForm.tsx
├── hooks/
│   └── useCanvasAnimation.ts
├── types/
│   └── index.ts
├── utils/
│   └── canvasHelpers.ts
└── App.tsx
```

## 📁 Component Architecture

### Layout Components
- **Header.tsx** - Navigation bar with logo, menu, and CTA button
- **Footer.tsx** - Footer with company info, links, and copyright

### Section Components
- **HeroSection.tsx** - Main hero area with headline, description, and phone mockup
- **FeaturesSection.tsx** - Four main feature sections with alternating layouts
- **HowItWorksSection.tsx** - Four-step process explanation with numbered cards
- **FeatureBreakdownSection.tsx** - Detailed feature grid with categorized lists
- **PremiumSection.tsx** - Pricing information and premium features
- **FAQSection.tsx** - Expandable FAQ accordion items
- **CTASection.tsx** - Final call-to-action with email signup form

### UI Components
- **PhoneMockup.tsx** - Reusable phone mockup component for app previews
- **FeatureCard.tsx** - Individual feature cards for grid layouts
- **StepCard.tsx** - Numbered step cards for process explanation
- **FAQItem.tsx** - Individual FAQ accordion item with expand/collapse
- **CanvasDemo.tsx** - Interactive canvas animation for ME Vs ME Compare feature

### Forms
- **EmailSignupForm.tsx** - Email signup form with validation and submission logic

### Hooks
- **useCanvasAnimation.ts** - Custom hook for canvas animation logic
    - Manages animation states (playing, phases, frame counting)
    - Handles stick figure movements and form scoring
    - Controls animation lifecycle and cleanup

### Utils
- **canvasHelpers.ts** - Canvas drawing utility functions
    - Background and UI drawing functions
    - Stick figure rendering
    - Split-screen layout management
    - Analysis panel rendering

### Types
- **index.ts** - TypeScript interfaces and type definitions
    - Animation phase types
    - FAQ data structures
    - Form data interfaces
    - Component prop types

## 🎨 Key Features Implementation

### Canvas Animation Demo
The ME Vs ME Compare feature includes a sophisticated canvas-based animation that demonstrates:
- Real-time form analysis
- Side-by-side comparison with reference videos
- Dynamic scoring system
- Multi-phase exercise tracking (starting, curling, peak, lowering, complete)

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized performance across devices

### Interactive Elements
- Smooth hover effects and transitions
- Expandable FAQ sections
- Play/pause animation controls
- Form validation and feedback


## 🛠️ Tech Stack & Integrations

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **HTML5 Canvas** for animations
- **React Hooks** for state management
- **Responsive Design** principles
- **Nhost** for backend (email capture, GraphQL, authentication)
- **Resend** for transactional email confirmations
- **Netlify Functions** for custom serverless email logic
- **Google Analytics** for site analytics
## � Integrations & Custom Functionality

### Nhost Integration (Email Capture Backend)
- Used for storing Notify Me emails in a secure, scalable backend.
- GraphQL mutation is triggered from the CTA form to insert emails into the `notify_emails` table.
- Permissions configured for secure, public email capture.

### Netlify Custom Function (Email Confirmation)
- Located in `netlify/functions/send-confirmation-email.js`.
- Triggered by a Hasura Event Trigger (on new email insert).
- Sends confirmation emails to users using the Resend API.
- Environment variable `RESEND_API_KEY` required in Netlify dashboard.

### Resend (Transactional Email Service)
- Used for sending confirmation emails to users after Notify Me form submission.
- Domain verified with Resend for sending from `non-reply@mevsmefitness.com`.
- API key managed securely via Netlify environment variables.

### Google Analytics
- Integrated for tracking user engagement and site analytics.
- Add your Google Analytics tracking ID in the appropriate place in your app (e.g., in the main layout or via a React GA library).

## �📝 Development Notes

### Component Design Principles
- **Single Responsibility**: Each component has a focused purpose
- **Reusability**: UI components are designed for reuse across sections
- **Separation of Concerns**: Business logic separated into hooks and utils
- **Type Safety**: Full TypeScript implementation for better development experience

### Performance Considerations
- Canvas animations use `requestAnimationFrame` for smooth performance
- Proper cleanup of animation loops to prevent memory leaks
- Optimized re-renders through strategic state management
- Lazy loading considerations for large components

### Accessibility Features
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly content
- High contrast color schemes
- Focus indicators for interactive elements


## 🚦 Getting Started
### Nhost Setup
1. Create a project at [nhost.io](https://nhost.io/).
2. Set up your `notify_emails` table and configure permissions for public inserts.
3. Get your Nhost backend URL and GraphQL endpoint.
4. Update `src/utils/nhost.ts` with your Nhost project details.

### Netlify & Resend Email Confirmation
1. Create a free account at [netlify.com](https://netlify.com/) and connect your repo.
2. Add the function in `netlify/functions/send-confirmation-email.js` (uses Resend SDK).
3. Install the Resend SDK: `npm install resend`.
4. Set `RESEND_API_KEY` in Netlify environment variables.
5. In Hasura (Nhost), create an Event Trigger on the `notify_emails` table (insert) pointing to your Netlify function URL.
6. Verify your sender domain in Resend and use `non-reply@mevsmefitness.com` as the sender.

### Google Analytics
1. Create a property at [Google Analytics](https://analytics.google.com/).
2. Add your tracking code to your app (e.g., in `_app.tsx` or via a React GA library).


1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```



### Core Functionality
- Social media account integration
- AI-powered workout plan generation
- Real-time form analysis and feedback
- Progress tracking and analytics
- Personalized fitness recommendations

### Premium Features ($9.99/month)
- Unlimited video storage and analysis
- Advanced ME Vs ME Compare form analysis
- Real-time movement correction
- Advanced progress analytics
- Offline workout plan access
- Priority customer support

## 🔧 Customization

The modular component structure allows for easy:
- Feature additions and modifications
- UI theme changes
- Content updates
- Integration with backend services
- A/B testing implementation

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🤝 Contributing

This is a proprietary project for MeVsMeFitness. For internal development guidelines and contribution processes, please refer to the internal documentation.

---

**ME Vs ME** - Transform your social media fitness inspiration into real results with AI-powered personalized workout planning.