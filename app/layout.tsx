import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Source_Sans_3, Roboto_Slab } from 'next/font/google';
import { LazyMotion, domAnimation } from "motion/react"
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "Kyle Levitan | Full-Stack Web Developer & Designer",
  description: "Kyle Levitan is a skilled web developer and designer based in Asheville, NC, specializing in Drupal, WordPress, Craft CMS, React, and Next.js. Offering professional solutions for custom websites, applications, and content management systems.",
  keywords: "Kyle Levitan, web developer, web designer, full-stack developer, Drupal, WordPress, Craft CMS, React, Next.js, web development Asheville, CMS development, front-end, back-end, applications, custom websites",
  robots: "index, follow"
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans3.variable} ${robotoSlab.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
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
