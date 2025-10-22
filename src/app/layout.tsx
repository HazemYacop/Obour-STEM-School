import type { Metadata } from "next";
import { Roboto, Sarabun, IBM_Plex_Sans_Condensed, Bayon, Advent_Pro, Inter } from 'next/font/google';
import "./globals.css";

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

export const sarabun = Sarabun({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-sarabun',
});

export const ibm = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['100', '700'],
  display: 'swap',
  variable: '--font-ibm',
});

export const bayon = Bayon({
  subsets: ['latin'],
  weight: ['400', '400'],
  display: 'swap',
  variable: '--font-bayon',
});

export const advent_bro = Advent_Pro({
  subsets: ['latin'],
  weight: ['400', '400'],
  display: 'swap',
  variable: '--font-advent',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '500'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Obour STEM School",
  description: "Obour STEM School Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${sarabun.variable} ${ibm.variable} ${bayon.variable} ${advent_bro.variable} ${inter.variable}`}>
      <body
        className={'bg-white'}
      >
        {children}
      </body>
    </html>
  );
}
