import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FloatingBottomBar from "@/components/shared/FloatingBottomBar";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: "Honey Bakes | Premium Artisan Bakery & Baking Academy",
    template: "%s | Honey Bakes",
  },
  description: "Discover the finest artisan cakes, fresh pastries, and professional baking courses at Honey Bakes. Order premium custom cakes online or join our baking academy today.",
  keywords: ["bakery", "artisan cakes", "baking academy", "custom cakes", "pastries", "baking courses", "Honey Bakes", "premium bakery", "cake shop", "learn baking"],
  authors: [{ name: "Honey Bakes" }],
  creator: "Honey Bakes",
  publisher: "Honey Bakes",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧁</text></svg>',
    shortcut: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧁</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧁</text></svg>',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://honeybakes.io", // Replace with actual URL
    title: "Honey Bakes | Premium Artisan Bakery & Baking Academy",
    description: "Discover the finest artisan cakes, fresh pastries, and professional baking courses at Honey Bakes.",
    siteName: "Honey Bakes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Bakes | Premium Artisan Bakery & Baking Academy",
    description: "Discover the finest artisan cakes, fresh pastries, and professional baking courses at Honey Bakes.",
    creator: "@honeybakes",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingBottomBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
