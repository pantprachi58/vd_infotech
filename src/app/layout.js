import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "VD Infotech — Where Marketing, Technology & AI Work Together",
  description:
    "A revenue-focused technology and digital marketing company helping businesses grow through marketing, branding, AI and web development solutions.",
  icons: {
    icon: "",
    shortcut: "/images/vd-infotech-final-logo-red-and-black-01-1.webp",
    apple: "/images/vd-infotech-final-logo-red-and-black-01-1.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
