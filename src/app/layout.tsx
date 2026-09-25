import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AIChatbot from '@/components/AIChatbot';

export const metadata: Metadata = {
  title: 'Mustafa Hussain | Python Developer & AI/ML Enthusiast',
  description:
    'Mustafa Hussain is a Python Developer, AI/ML Engineering Enthusiast and AI-Powered Applications Developer, building practical software and exploring intelligent technologies.',
  keywords: [
    'Mustafa Hussain',
    'Python Developer',
    'AI/ML Enthusiast',
    'AI Engineer',
    'Machine Learning',
    'CloudExify',
    'Software Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Mustafa Hussain' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mustafa-hussain.vercel.app',
    title: 'Mustafa Hussain | Python Developer & AI/ML Enthusiast',
    description:
      'Mustafa Hussain is a Python Developer, AI/ML Engineering Enthusiast and AI-Powered Applications Developer, building practical software and exploring intelligent technologies.',
    siteName: 'Mustafa Hussain Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Hussain | Python Developer & AI/ML Enthusiast',
    description:
      'Mustafa Hussain is a Python Developer, AI/ML Engineering Enthusiast and AI-Powered Applications Developer, building practical software and exploring intelligent technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
