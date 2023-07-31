import "../globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";

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
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <div className="mt-[85px] lg:mt-[106px]"></div>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
