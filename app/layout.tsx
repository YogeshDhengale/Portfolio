import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import FloatingNav from "@/Components/Ui/FloatingNav/FloatingNav";
import { navItems } from "@/Data/Index";
import Footer from "@/Components/Footer/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yogesh's Portfolio",
  description:
    "Portfolio of Yogesh Annasaheb Dhengale — Full-Stack MERN Developer specializing in performant web apps, mobile-first products, and scalable backend systems. Explore projects, case studies, skills, and contact details.",
  keywords:
    "Yogesh Dhengale, Full Stack Developer, MERN Developer, Software Engineer Portfolio, Web Developer India, React Developer, Node Developer, Scalable Apps, API Development, Frontend Developer, Backend Developer",
  authors: {
    name: "Yogesh Dhengale",
    url: "https://yogeshdhengale.vercel.app/",
  },
  creator: "Yogesh Dhengale",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yogeshdhengale.vercel.app/",
    description:
      "Portfolio of Yogesh Annasaheb Dhengale — Full-Stack MERN Developer specializing in performant web apps, mobile-first products, and scalable backend systems. Explore projects, case studies, skills, and contact details.",
    siteName: "yogeshdhengale.vercel.app",
    images: [
      {
        url: "/yogesh.jpg",
        width: 800,
        height: 600,
        alt: "Yogesh Dhengale",
      },
      {
        url: "/yogesh-1.jpeg",
        width: 800,
        height: 600,
        alt: "Yogesh Dhengale",
      },
      {
        url: "/yogesh-2.jpg",
        width: 800,
        height: 600,
        alt: "Yogesh Dhengale",
      },
      {
        url: "/yogesh-3.jpg",
        width: 800,
        height: 600,
        alt: "Yogesh Dhengale",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Z1VWBZP0P9"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z1VWBZP0P9');
        `}
      </Script>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
            <div className="max-w-3xl w-full">
              <FloatingNav navItems={navItems} />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
