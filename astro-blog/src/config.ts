/**
 * Site Configuration
 *
 * Central place for site-wide values used by layouts, components,
 * the RSS feed, and SEO tags.
 */

export const SITE_CONFIG = {
  // Basic site information
  title: "Amirdaraee - Full-Stack Developer",
  description: "Full-stack web developer based in Luxembourg specializing in .NET and Angular. Nearly a decade of experience in scalable applications, clean architecture, and modern web development.",
  author: "Amir Daraee",
  email: "amirdaraee@gmail.com",

  // Social media links
  // Remove or leave empty any platforms you don't use
  socialLinks: {
    github: "amirdaraee",
    twitter: "amirdaraee",
    linkedin: "amirdaraee",
    youtube: "", // Leave empty if not used
  },

  // Analytics
  // Add your Google Analytics tracking ID
  // Leave empty to disable analytics
  googleAnalyticsId: "G-4LLXG680BZ",

  // Locale settings
  language: "en",
  locale: "en-US",

  // Site URL (used for canonical URLs and SEO)
  siteUrl: "https://amirdaraee.com",

  // Default meta image for social sharing
  // Place your image in the public folder
  defaultOgImage: "/logo.png",

  // Posts per page for blog pagination
  postsPerPage: 10,

  // Enable/disable features
  features: {
    darkMode: true,
    analytics: true,
    sitemap: true,
  }
};

// Author information for structured data
export const AUTHOR_INFO = {
  name: SITE_CONFIG.author,
  email: SITE_CONFIG.email,
  url: SITE_CONFIG.siteUrl,
  jobTitle: "Full-Stack Developer",
  organization: "",
};

// Navigation menu items
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/uses", label: "Uses" },
];
