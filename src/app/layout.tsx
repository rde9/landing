import type { Metadata } from 'next';
import { Geist, Geist_Mono, M_PLUS_1 } from 'next/font/google';
import './globals.css';
import Layout from '../components/Layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const mPlus1 = M_PLUS_1({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'kaai.dev',
  description: "rde9's personal website",
  openGraph: {
    title: 'kaai.dev',
    description: "rde9's personal website",
    images: [
      {
        url: 'https://f005.backblazeb2.com/file/t292-periphery-2qb3e7c5/camera-og.png',
        width: 1728,
        height: 1044,
        alt: 'Artist: 咲里キリコ',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} ${mPlus1.className} font-body`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
