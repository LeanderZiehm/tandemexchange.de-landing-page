import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // ✅ import Script

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "TandemExchange - Learn German Faster. Get Hired Sooner.",
  description:
    "Connect with native speakers for fair, flexible German practice. Perfect for working professionals in Germany.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        {/* Umami analytics */}
        <Script
          defer
          src="https://umami.leanderziehm.com/script.js"
          data-website-id="99fcf915-b73e-42d4-b469-0e1ddab35e03"
        />
        {children}
      </body>
    </html>
  );
}
