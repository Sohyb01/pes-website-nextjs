import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import AuthProvider from "./context/AuthProvider";
// Wrap this around the return if you wish to use Session data in client components

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
    <html lang="en">
      <body className={poppins.className}>
        <div className="mt-[85px] lg:mt-[106px]"></div>
        {children}
      </body>
    </html>
  );
}
