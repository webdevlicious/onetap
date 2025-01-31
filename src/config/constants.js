// Navigation Items Configuration
export const NAVIGATION_ITEMS = [
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQs', href: '#faqs' }
];

export const HEADER_LOGO = {
  src: "/src/assets/images/OTR_Primary_Logo_v2.0(Transparent).png",
  alt: "OneTapRecruit"
};

// Header scroll settings
export const HEADER_SCROLL_SETTINGS = {
  scrollThreshold: 0,
  headerHeight: 100, // used for scroll offset
  mobileBreakpoint: 768
};

export const HERO_CONTENT = {
  title: "Get Your Kid Recruited Faster with AI",
  subtitle: "OneTapRecruit's advanced technology connects high school athletes directly with college coaches nationwide, increasing exposure and maximizing scholarship opportunities.",
  benefits: [
    "Gain a competitive edge over their peers",
    "Get noticed by a wide range of college programs",
    "Increase their chances of receiving offers and scholarships",
    "Simplify the complex and time-consuming recruiting journey"
  ],
  valueProposition: "Don't let your child's talent go unnoticed. Sign up for OneTapRecruit today for a one-time investment in your student-athlete's future success.",
  ctaText: "Get Recruited Now"
};

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "Step 1",
    title: "Complete Your Profile",
    description: "Start your recruiting journey by creating a comprehensive profile that showcases your student-athlete's potential to college coaches.",
    bullets: [
      "Provide personal, athletic, and academic information",
      "Upload highlight and training videos showcasing your athlete's skills",
      "List stats and achievements to impress college coaches"
    ],
    placeholder: "Image1 (677.6x381.15px)",
    ctaText: "Text Us to Start"
  },
  {
    stepNumber: "Step 2",
    title: "Search and Select Colleges",
    description: "Find the perfect college matches that align with your athlete's academic and athletic goals using our advanced search tools.",
    bullets: [
      "Use our advanced filters to find the perfect college matches",
      "Choose colleges that align with your athlete's goals and preferences",
      "Explore colleges by location, division, and available majors"
    ],
    placeholder: "Image2 (677.6x381.15px)",
    ctaText: "Text Us to Search"
  },
  {
    stepNumber: "Step 3",
    title: "We Connect You to Colleges",
    description: "Let our AI-powered platform do the heavy lifting by connecting your athlete directly with college coaches nationwide.",
    bullets: [
      "Our AI sends your athlete's profile directly to college coaches",
      "Increased exposure and recruitment chances",
      "Get notified when coaches view your athlete's profile"
    ],
    placeholder: "Image3 (677.6x381.15px)",
    ctaText: "Text Us to Connect"
  },
  {
    stepNumber: "Step 4",
    title: "Keep Your Profile Updated",
    description: "Maintain an active presence in the recruiting process by regularly updating your profile with new achievements and highlights.",
    bullets: [
      "Add new highlights, achievements, and stats as your athlete progresses",
      "Keep coaches updated on your athlete's latest accomplishments",
      "Maintain current contact information to ensure seamless communication"
    ],
    placeholder: "Image4 (677.6x381.15px)"
  }
];

export const CTA_CONTENT = {
  title: "Get Recruited Now",
  description: "College Coaches Can't Recruit Your Athlete If They Don't Know They Exist. Our Platform Places Your Athlete's Profile Directly In Front Of College Coaches Nationwide. Don't Let Your Child's Talent Go Unnoticed While Their Peers Get All The Attention.",
  buttonText: "START YOUR JOURNEY"
};

// Social Media Links Configuration
export const SOCIAL_LINKS = [
  {
    name: 'X (Twitter)',
    url: 'https://x.com/onetaprecruit',
    icon: 'path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/onetaprecruit',
    icon: 'path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"'
  },
  {
    name: 'TikTok',
    url: 'http://tiktok.com/#onetaprecruit',
    icon: 'path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"'
  },
  {
    name: 'YouTube',
    url: 'http://youtube.com/@onetaprecruit',
    icon: 'path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"'
  }
];

// Legal Links Configuration
export const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
  { name: 'CA Privacy Rights', href: '/ca-privacy-policy' }
];