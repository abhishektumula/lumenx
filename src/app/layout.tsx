import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Fuggles,
  Geist,
  Geist_Pixel,
  Google_Sans,
  Google_Sans_Code,
  Inter,
} from "next/font/google";
import "./globals.css";
import { Provider } from "@/providers/theme-provider";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const quoteFont = Bricolage_Grotesque({
  variable: "--font-quote-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const inter = Inter({
  variable: "--font-inter-normal",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const fuggles = Fuggles({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${geistSans.variable} ${inter.variable} ${geistPixle.variable} ${quoteFont.variable} ${fuggles.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          {children}
          <NavBar />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
