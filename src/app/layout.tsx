import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
