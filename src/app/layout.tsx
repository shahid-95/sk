import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SK POP WORKS | Online Booking",
  description: "Book POP, Gypsum, PVC, Grid false ceiling and partition work with SK POP WORKS."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
