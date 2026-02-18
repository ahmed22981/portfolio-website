import type { Metadata } from "next";
// import { Roboto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import NavbarRes from "@/components/navbar";

// 1. Import the tracker component
import AnalyticsTracker from "@/components/common/AnalyticsTracker";

// const robotoSerif = Roboto_Serif({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  // 1. UPDATED: Your actual Vercel URL
  metadataBase: new URL('https://ahmed-omran-portfolio.vercel.app'),
  
  title: "Ahmed Omran - Full Stack Developer",
  description: "The portfolio of Ahmed Omran, a passionate Full Stack Developer creating dynamic and user-friendly web applications.",
  keywords: ["Ahmed Omran", "Full Stack Developer", "Angular", "Next.js", "Node.Js", "Express", "React", "TypeScript", "Portfolio", "Full Stack", "Web Development"],
  
  authors: [{ name: "Ahmed Omran", url: "https://ahmed-omran-portfolio.vercel.app" }],
  creator: "Ahmed Omran",


  icons: {
    icon: '/favicon.jpg',
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: 'https://ahmed-omran-portfolio.vercel.app',
    title: 'Ahmed Omran - Full Stack Developer',
    description: 'The portfolio of Ahmed Omran...',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Ahmed Omran Portfolio',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Omran - Full Stack Developer',
    description: 'The portfolio of Ahmed Omran...',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="" suppressHydrationWarning >
      <body className="flex flex-col min-h-screen flex-grow">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 2. Add the tracker here so it runs silently in the background */}
          <AnalyticsTracker />
          
          <div className="flex flex-col min-h-screen flex-grow">
            <CustomCursor />
            <NavbarRes />
            <main className="flex-grow relative z-10">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}