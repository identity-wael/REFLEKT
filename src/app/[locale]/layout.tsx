import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REFLEKT - Innovative Solutions",
  description: "REFLEKT delivers cutting-edge solutions for modern challenges through technology and creativity.",
  keywords: ["innovation", "technology", "solutions", "consulting", "web development"],
  authors: [{ name: "REFLEKT Team" }],
  creator: "REFLEKT",
  publisher: "REFLEKT",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reflekt.com",
    siteName: "REFLEKT",
    title: "REFLEKT - Innovative Solutions",
    description: "REFLEKT delivers cutting-edge solutions for modern challenges through technology and creativity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "REFLEKT - Innovative Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REFLEKT - Innovative Solutions",
    description: "REFLEKT delivers cutting-edge solutions for modern challenges through technology and creativity.",
    images: ["/og-image.jpg"],
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}