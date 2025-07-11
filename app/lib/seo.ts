// SEO constants and utilities
export const SEO_CONFIG = {
  siteName: 'Kyle Levitan',
  siteUrl: 'https://kylelevitan.com',
  defaultTitle: 'Kyle Levitan | Full-Stack Web Developer & Designer',
  defaultDescription: 'Kyle Levitan is a skilled web developer and designer based in Asheville, NC, specializing in React, and Next.js, Drupal, WordPress, Craft CMS, and more. Offering professional solutions for custom websites, applications, and content management systems.',
  defaultKeywords: 'Kyle Levitan, web developer, web designer, full-stack developer, React, Next.js, Drupal, WordPress, Craft CMS, web development Asheville, CMS development, front-end, back-end, applications, custom websites',
  author: 'Kyle Levitan',
  twitterHandle: '@kalevitan',
  linkedinProfile: 'https://www.linkedin.com/in/kyle-levitan-1308a441/',
  githubProfile: 'https://github.com/kalevitan',
  drupalProfile: 'https://www.drupal.org/u/k_a_l',
  email: 'kylelevitan@gmail.com',
  location: 'Asheville, NC',
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
    jobTitle: 'Full-Stack Web Developer & Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'Backend Development',
      'Drupal',
      'WordPress',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'PHP',
      'Python',
      'Ruby',
      'Web Design',
      'UI/UX Design',
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