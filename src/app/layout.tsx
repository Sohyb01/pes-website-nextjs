import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PES",
  description: "Programmer's Elite School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Navbar></Navbar>
          <div className="mt-[85px] lg:mt-[106px]"></div>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
