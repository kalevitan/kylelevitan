// SEO constants and utilities
export const SEO_CONFIG = {
  siteName: 'Kyle Levitan',
  siteUrl: 'https://kylelevitan.com',
  defaultTitle: 'Kyle Levitan | Senior Frontend & Full-Stack Engineer',
  defaultDescription: 'Kyle Levitan is a frontend-first engineer building modern web and mobile products with React, Next.js, and TypeScript. Focused on clean interfaces, performance, accessibility, and scalable architecture that supports real product outcomes.',
  defaultKeywords: 'Kyle Levitan, senior frontend engineer, full-stack engineer, React, Next.js, TypeScript, React Native, PWAs, accessibility, web performance, product engineering',
  author: 'Kyle Levitan',
  twitterHandle: '@kalevitan',
  linkedinProfile: 'https://www.linkedin.com/in/kyle-levitan-1308a441/',
  githubProfile: 'https://github.com/kalevitan',
  drupalProfile: 'https://www.drupal.org/u/k_a_l',
  email: 'kylelevitan@gmail.com',
  location: 'Asheville, NC',
  jobTitle: 'Senior Frontend and Full-Stack Engineer',
  image: '/images/Kyle-Levitan_BW.png', // We'll need to create this
  favicon: '/favicon.ico',
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SEO_CONFIG.author,
    url: SEO_CONFIG.siteUrl,
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.image}`,
    email: SEO_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asheville',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    jobTitle: `${SEO_CONFIG.jobTitle} based in ${SEO_CONFIG.location}`,
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    knowsAbout: [
      'Product Engineering',
      'Frontend Engineering',
      'Full-Stack Development',
      'React',
      'Next.js',
      'TypeScript',
      'React Native',
      'Progressive Web Apps',
      'Web Performance',
      'Accessibility',
      'API Design',
    ],
    sameAs: [
      SEO_CONFIG.linkedinProfile,
      SEO_CONFIG.githubProfile,
      SEO_CONFIG.drupalProfile,
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Acquia',
      description: 'Drupal Certified Developer and Frontend Specialist',
    },
  };
};

export const generateWebsiteStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    author: {
      '@type': 'Person',
      name: SEO_CONFIG.author,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SEO_CONFIG.siteUrl}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
};

interface Project {
  name: string;
  description: string;
  year: string;
  image?: string;
  link?: string;
  features: string[];
  type: string;
  purpose: string;
}

export const generatePortfolioStructuredData = (projects: Project[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Kyle Levitan Portfolio',
    description: 'A collection of web development projects by Kyle Levitan',
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.name,
        description: project.description,
        creator: {
          '@type': 'Person',
          name: SEO_CONFIG.author,
        },
        dateCreated: `${project.year}-01-01`,
        image: project.image ? `${SEO_CONFIG.siteUrl}${project.image}` : undefined,
        url: project.link || undefined,
        keywords: project.features.join(', '),
        genre: project.type,
        about: project.purpose,
      },
    })),
  };
};

export const generateBreadcrumbStructuredData = (items: Array<{name: string, url?: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SEO_CONFIG.siteUrl}${item.url}` : undefined,
    })),
  };
};
