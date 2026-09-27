import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AIChatbot from '@/components/AIChatbot';

export const metadata: Metadata = {
  title: 'Mustafa Hussain | Python Developer & Aspiring AI Engineer',
  description:
    'Software Engineering Student at COMSATS University Islamabad (Wah Campus), Python Developer, AI-powered application builder, and Co-Founder & COO at CloudExify.',
  keywords: [
    'Mustafa Hussain',
    'Software Engineering Student',
    'Python Developer',
    'AI Engineer',
    'Machine Learning',
    'CloudExify',
    'COMSATS',
    'Portfolio',
  ],
  authors: [{ name: 'Mustafa Hussain' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mustafa-hussain.vercel.app',
    title: 'Mustafa Hussain | Python Developer & Aspiring AI Engineer',
    description:
      'Software Engineering Student at COMSATS University Islamabad (Wah Campus), Python Developer, AI-powered application builder, and Co-Founder & COO at CloudExify.',
    siteName: 'Mustafa Hussain Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Hussain | Python Developer & Aspiring AI Engineer',
    description:
      'Software Engineering Student at COMSATS University Islamabad (Wah Campus), Python Developer, AI-powered application builder, and Co-Founder & COO at CloudExify.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

import CommandCenter from '@/components/CommandCenter';
import CustomCursor from '@/components/CustomCursor';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-inter antialiased overflow-x-hidden">
        <ThemeProvider>
          <CustomCursor />
          <CommandCenter />
          <div className="relative min-h-screen selection:bg-primary/20 selection:text-primary">
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
          <WhatsAppButton />
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
