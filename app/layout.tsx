import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Source_Sans_3, Roboto_Slab } from 'next/font/google';
import { LazyMotion, domAnimation } from "motion/react"
import { GoogleAnalytics } from "@next/third-parties/google";
import { SEO_CONFIG, generateStructuredData, generateWebsiteStructuredData } from './lib/seo';
import 'lineicons/dist/lineicons.css';
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-source-sans-3'
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-slab'
});

export const metadata: Metadata = {
  title: SEO_CONFIG.defaultTitle,
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.defaultKeywords,
  authors: [{ name: SEO_CONFIG.author, url: SEO_CONFIG.siteUrl }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SEO_CONFIG.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEO_CONFIG.siteUrl,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.image}`,
        width: 1200,
        height: 630,
        alt: `${SEO_CONFIG.author} - Full-Stack Web Developer & Designer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    creator: SEO_CONFIG.twitterHandle,
    images: [`${SEO_CONFIG.siteUrl}${SEO_CONFIG.image}`],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#bf3b46' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#bf3b46',
    'theme-color': '#bf3b46',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#bf3b46',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generateStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();

  return (
    <html
      lang="en"
      className={`${sourceSans3.variable} ${robotoSlab.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://kylelevitan.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  const savedTheme = localStorage.getItem('theme')
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                  return savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
                }

                if (getInitialTheme()) {
                  document.documentElement.classList.add('dark')
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
        <GoogleAnalytics gaId="G-GWV3Q55NPY" />
      </body>
    </html>
  );
}
