import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Architect Portfolio",
  description: "Modern architecture & interior design portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
