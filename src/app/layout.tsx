import type { Metadata } from "next";
import {
  Geist,
  Geist_Pixel,
  Google_Sans,
  Google_Sans_Code,
  Inter,
} from "next/font/google";
import "./globals.css";
import { Provider } from "@/providers/theme-provider";
import { NavBar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter-normal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const geistPixle = Geist_Pixel({
  variable: "--font-geist-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "abhishek",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${inter.variable} ${googleSansCode.variable} ${geistPixle.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          {children}
          <NavBar />
        </Provider>
      </body>
    </html>
  );
}
