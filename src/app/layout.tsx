import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dagm Woldekidan | Web Developer",
  description:
    "Full-Stack Web Developer specializing in Next.js, Node.js, and modern databases. Building efficient, user-centric web applications.",
  keywords: ["Web Developer", "Next.js", "Node.js", "Full-Stack", "Dagm Woldekidan"],
  authors: [{ name: "Dagm Woldekidan Messele" }],
  openGraph: {
    title: "Dagm Woldekidan | Web Developer",
    description:
      "Full-Stack Web Developer specializing in Next.js, Node.js, and modern databases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
