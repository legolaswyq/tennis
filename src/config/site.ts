export const siteConfig = {
  name: 'Josh Tennis Training',
  description: 'Professional tennis coaching services by Josh Mark, offering private lessons, group sessions, and holiday camps',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'Holiday Camps',
      href: '/camps',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  links: {
    email: 'Josh@365tennis.co.nz',
    phone: '021 031 8013',
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
