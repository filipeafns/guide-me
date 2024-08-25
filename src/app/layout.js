import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guide me",
  description: "Guide me is a user-friendly application that simplifies the process of creating guides for your users. It provides easy-to-use tooltips on the screen for a seamless experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
