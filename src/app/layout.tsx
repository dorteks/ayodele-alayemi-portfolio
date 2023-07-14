import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Ayodele Alayemi ",
  description: "Created wth NextJs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative xl:w-[1290px] 2xl:w-[1600px] flex flex-col mx-auto bg-zinc-50 px-0 sm:px-8 lg:px-16 xl:px-24 2xl:px-[250px]">
        <Navbar />
        <div className="w-full relative top-0 pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-24 px-[4px] sm:px-6 md:px-12 bg-[#FFFFFF]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
