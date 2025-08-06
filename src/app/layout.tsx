import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie Explorer",
  description:
    "Movie Explorer is a Next.js application that allows users to search for movies, view details, and explore various movie-related information.",
  keywords: ["movies", "explorer", "Next.js", "Guna Sekhar"],
  authors: [{ name: "Guna Sekhar", url: "http://gunasekhar.xyz" }],
  creator: "Guna Sekhar",
  icons: {
    icon: "https://i.ibb.co/6Jt4TDYm/Movie-icon-aesthetic-black-and-white.jpg",
  },
  openGraph: {
    title: "Movie Explorer",
    description: "Explore movie details using IMDB IDs.",
    url: "http://gunasekhar.xyz",
    siteName: "Movie Explorer",
    images: [
      {
        url: "https://i.ibb.co/6Jt4TDYm/Movie-icon-aesthetic-black-and-white.jpg",
        width: 1200,
        height: 630,
        alt: "Movie Explorer Logo",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
