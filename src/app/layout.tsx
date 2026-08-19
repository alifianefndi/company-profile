import type { Metadata } from "next";
import { Inter, PT_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "PT. Teman Berkah Sentosa",
  description: "PT. Teman Berkah Sentosa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        fontSans.variable,
        fontSerif.variable,
        fontMono.variable,
        "font-sans",
        "h-full",
        "antialiased",
      )}
    >
      <body className="min-h-full flex flex-col items-center">
        <Navbar />

        <main className="flex flex-col items-center w-full max-w-7xl overflow-x-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
