import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
        className={`${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
