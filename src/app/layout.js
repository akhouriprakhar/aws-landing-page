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

export const metadata = {
  title: "AWS Builder Group | SSTC Chapter",
  description: "Join the official AWS Student Builder Group at SSTC. We architect, deploy, and scale enterprise-grade cloud applications.",
  keywords: ["AWS", "Student Builder Group", "SSTC", "Cloud Computing", "Hackathon", "Bhilai"],
  openGraph: {
    title: "AWS Builder Group | SSTC",
    description: "Architect the Cloud Future with the SSTC AWS Builder Group.",
    url: "https://your-domain.com", // Replace with your live Vercel URL later
    siteName: "AWS Builder Group SSTC",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop", // A cool tech preview image
        width: 1200,
        height: 630,
        alt: "AWS Builder Group SSTC Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Builder Group | SSTC",
    description: "Architect the Cloud Future with the SSTC AWS Builder Group.",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0B1120] text-slate-200 selection:bg-[#FF9900] selection:text-black">
        {children}
      </body>
    </html>
  );
}