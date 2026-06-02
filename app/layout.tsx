import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalModal from "@/components/CalModal";
import { CalModalProvider } from "@/context/CalModalContext";

export const metadata: Metadata = {
  title:
    "Sophian International | Your People & Culture Partner for Mission Driven Hospitality",
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
      <body>
        <CalModalProvider>
          <Navbar />
          {children}
          <Footer />
          <CalModal />
        </CalModalProvider>
      </body>
    </html>
  );
}
