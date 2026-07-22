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
  title: "Isnan Zaki Ramanda | Tech Entrepreneur & Software Engineer",
  description: "Portofolio Isnan Zaki Ramanda. Mengkombinasikan keahlian Software Engineering (.NET, Python, Cyber Security) dengan strategi bisnis digital dan otomatisasi AI.",
  keywords: ["Isnan Zaki Ramanda", "Software Engineer", "Tech Entrepreneur", "PPLG", "Cyber Security", "Web Developer Indonesia"],
  openGraph: {
    title: 'Isnan Zaki Ramanda | Tech & Biz Portfolio',
    description: 'Membangun arsitektur perangkat lunak yang berfokus pada operasional bisnis.',
    url: 'https://iz-portfolio.vercel.app', // Nanti ganti kalau udah punya domain
    siteName: 'Isnan Zaki Portfolio',
    images: [
      {
        url: '/zaki-profile.jpg', // Foto lu bakal muncul otomatis pas link di-share di WA!
        width: 800,
        height: 800,
        alt: 'Isnan Zaki Profile',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}