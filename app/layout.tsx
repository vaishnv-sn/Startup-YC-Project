import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      style: "normal",
      weight: "900",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/WorkSans-Light.ttf",
      style: "normal",
      weight: "200",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      style: "normal",
      weight: "100",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Startup Finder",
  description: "Discover and connect with the innovative era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children} <Toaster />
      </body>
    </html>
  );
}
