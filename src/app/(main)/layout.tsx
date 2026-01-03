import type { Metadata } from "next";


import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toaster";



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
    <main>    
      
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
</main>

    
  );
}