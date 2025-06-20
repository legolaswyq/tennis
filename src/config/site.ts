export const siteConfig = {
  name: '365 Tennis',
  description: 'Learn tennis in a fun, welcoming and encouraging environment. 365 Tennis - Exceptional coaching, sportsmanship, fitness and fun.',
  mainNav: [
    {
      title: 'HOME',
      href: '/',
    },
    {
      title: 'ABOUT',
      href: '/about',
    },
    {
      title: 'LOCATIONS',
      href: '/locations',
    },
    {
      title: 'PROGRAMS',
      href: '/programs',
    },
    {
      title: 'SERVICES',
      href: '/services',
    },
    {
      title: 'BOOKING',
      href: '/booking',
    },
    {
      title: 'LATEST UPDATES',
      href: '/updates',
    },
    {
      title: 'CONTACT',
      href: '/contact',
    },
  ],
  links: {
    email: 'coaching@365tennis.co.nz',
    phone: '022 898 1212',
  },
  metadata: {
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://joshtennis.co.nz',
      siteName: 'Josh Tennis Training'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@yourusername',
      creator: '@yourusername',
    },
  },
  features: {
    authentication: true,
    darkMode: true,
    newsletter: true,
    search: true,
  },
};

export type SiteConfig = typeof siteConfig;
