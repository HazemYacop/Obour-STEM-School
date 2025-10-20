import type { Metadata } from "next";
import { Roboto, Sarabun, IBM_Plex_Sans_Condensed } from 'next/font/google';
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
    <html lang="en" className={`${roboto.variable} ${sarabun.variable} ${ibm.variable}`}>
      <body
        className={'bg-white'}
      >
        {children}
      </body>
    </html>
  );
}
