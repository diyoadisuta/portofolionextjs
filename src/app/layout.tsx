import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dio Adista Laksono - Portfolio | Fresh Graduate Informatics",
  description: "Portfolio website of Dio Adista Laksono, a fresh graduate in Informatics Engineering showcasing projects, skills, and experience in software development.",
  keywords: ["portfolio", "informatics", "software developer", "fresh graduate", "web development", "programming", "Dio Adista Laksono"],
  authors: [{ name: "Dio Adista Laksono" }],
  openGraph: {
    title: "Dio Adista Laksono - Portfolio",
    description: "Fresh Graduate Informatics Engineer Portfolio",
    type: "website",
    url: "https://github.com/diyoadisuta",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
