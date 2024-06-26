import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { BookProvider } from "./context/BookContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volodymyr's Portfolio",
  description: "Just my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <BookProvider>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </BookProvider>
        </body>
    </html>
  );
}