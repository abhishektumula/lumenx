import type { Metadata } from "next";
import { Geist, Google_Sans, Google_Sans_Code, Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/providers/theme-provider";

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

export const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${geistSans.variable} ${inter.variable} ${googleSansCode.variable} ${googleSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
