import { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
  });
  
  const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
  });

export const metadata: Metadata = {
    title: "SRESHTA SEMICON TECHNOLOGIES PVT LTD",
    description: "Your Closest Access to Semiconductor Excellence",
  };
  

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        </head>
        <body className={cn(
          "min-h-screen bg-background font-body antialiased",
          poppins.variable,
          inter.variable
        )}>
            {children}
        </body>
      </html>
    );
  }