import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Quraishi",
  description: "personal portfolio",
  /* themeColor : [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ], */
  
};
const viewport : Viewport = {
  colorScheme: 'light',
  themeColor: '#fffffff',
  width: 'device-width',
  initialScale: 1
}
export {viewport}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            <Navbar/>
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
