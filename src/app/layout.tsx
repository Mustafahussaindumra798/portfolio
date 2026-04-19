import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AIChatbot from '@/components/AIChatbot';
import BackgroundAI from '@/components/BackgroundAI';

export const metadata: Metadata = {
  title: 'Mustafa Hussain | Software Engineer & Full Stack Developer',
  description:
    'Portfolio of Mustafa Hussain — BSc Software Engineering student specializing in full-stack web development, AI chatbot development, and modern web experiences. Based in Pakistan.',
  keywords: [
    'Mustafa Hussain',
    'Software Engineer',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'AI Chatbot Developer',
    'Pakistan',
    'Portfolio',
  ],
  authors: [{ name: 'Mustafa Hussain' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mustafa-hussain.vercel.app',
    title: 'Mustafa Hussain | Software Engineer & Full Stack Developer',
    description:
      'Portfolio of Mustafa Hussain — BSc Software Engineering student specializing in full-stack web development, AI chatbot development, and modern web experiences.',
    siteName: 'Mustafa Hussain Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mustafa Hussain | Software Engineer & Full Stack Developer',
    description:
      'Portfolio of Mustafa Hussain — BSc Software Engineering student specializing in full-stack web development.',
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || (!theme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <ThemeProvider>
          <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
            <BackgroundAI />
            <div className="relative z-10">
              <Navbar />
              <main>{children}</main>
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
