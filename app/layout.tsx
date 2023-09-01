import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "foam app",
  description: "Manager your student here",
  viewport: {
    userScalable: false,
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    width: "device-width",
    viewportFit: "cover",
  },
  // appleWebApp: {
  //   capable: true,
  //   title: "foam",
  //   statusBarStyle: "black-translucent",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: "0px" }}>
        {children}
      </body>
    </html>
  );
}
