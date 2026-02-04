import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Load Font Sans (Inter)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load Font Serif (Playfair Display)
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Avisena Hospitals - Advancing West Java's Health",
  description: "A centralized digital gateway for Avisena Hospitals network and investment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}