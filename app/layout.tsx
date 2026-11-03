import type { Metadata } from "next";
import "./globals.css";
import { AvisenaProvider } from "./components/AvisenaProvider";

export const metadata: Metadata = {
  title:
    "Avisena Healthcare Group — Avisena, Tetangga Sehatmu | Lebih Peduli, Lebih Dekat",
  description:
    "Gerbang digital terpadu jaringan Rumah Sakit Avisena Healthcare Group di Jawa Barat (Cimahi, Pangalengan, Kuningan, Subang, Cikampek). Melayani dengan sepenuh hati 24 jam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#FFFFFF] text-[#10162C] selection:bg-[#00A79C]/20 selection:text-[#154C96]">
        <AvisenaProvider>{children}</AvisenaProvider>
      </body>
    </html>
  );
}
