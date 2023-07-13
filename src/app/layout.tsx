import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Ayodele Alayemi - Portfolio",
  description: "Created wth NextJs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-[16px] lg:px-8 bg-[#e5e7eb] ">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
