import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { UserSync } from "@/components/user-sync";
import { Geist, Geist_Mono } from "next/font/google";
import TanstackProvider from "@/components/providers/tanstack-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentWise - AI Powered Dental Assistant",
  description:
    "Get instant dental advice through voice calls with our AI assistant. Available 24/7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackProvider>
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: "#e78a53",
            colorBackground: "#f3f4f6",
            colorText: "#111827",
            colorTextSecondary: "#6b7280",
            colorInputBackground: "#f3f4f6",
          },
        }}>
        <html
          lang='en'
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
          <body className='min-h-full flex flex-col'>
            <UserSync />
            {children}
          </body>
        </html>
      </ClerkProvider>
    </TanstackProvider>
  );
}
