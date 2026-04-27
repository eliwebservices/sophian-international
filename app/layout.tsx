import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sophian International | People & Culture Partner for Hospitality",
  description:
    "Sophian International helps luxury hotels appoint the right leaders, train teams to standard, and build winning people and culture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}