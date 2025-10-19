import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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

        {/* Matomo analytics */}
        <Script id="matomo-init" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//matomo.leanderziehm.com/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '5']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>

        <noscript>
          <p>
            <img
              referrerPolicy="no-referrer-when-downgrade"
              src="//matomo.leanderziehm.com/matomo.php?idsite=5&amp;rec=1"
              style={{ border: 0 }}
              alt=""
            />
          </p>
        </noscript>

        {children}
      </body>
    </html>
  );
}
