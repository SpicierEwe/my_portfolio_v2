import NavBar from "../components/Nav_bar/nav_bar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DevicePreview from "../components/Device_preview/device_preview";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hammad's Portfolio",
  description:
    "Explore my journey in design and development. Discover my projects and passion for creating innovative solutions in the fields of technology and design. Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <div>
            <NavBar></NavBar>
            {/* main content */}
            {children}

            {/* sticks on the screen */}
            <DevicePreview> </DevicePreview>
          </div>
        }
      </body>
    </html>
  );
}
