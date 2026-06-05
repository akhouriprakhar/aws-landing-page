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
  title: "AWS Builder Group | SSTC",
  description: "Official landing page for the AWS Student Builder Group chapter.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      {/* Changed to a deep dark background with custom selection color matching AWS Orange */}
      <body className="min-h-full flex flex-col bg-[#0B1120] text-slate-200 selection:bg-[#FF9900] selection:text-black">
        {children}
      </body>
    </html>
  );
}