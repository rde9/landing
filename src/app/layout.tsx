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
