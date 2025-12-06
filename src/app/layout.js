import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DOMAIN = "https://rentalcarmakassar.com";

export const metadata = {
  metadataBase: new URL(DOMAIN),

  title: {
    default: "Rental Mobil Makassar Murah – Lepas Kunci & Sopir | RentalCarMakassar",
    template: "%s | RentalCarMakassar",
  },

  description: 
    "Rental mobil murah di Makassar. Armada lengkap: Avanza, Ertiga, Hiace, mobil mewah. Tersedia lepas kunci atau dengan sopir. Harga terbaik & layanan profesional 24 jam.",

  keywords: [
    "rental mobil makassar",
    "sewa mobil makassar",
    "rental mobil murah makassar",
    "sewa avanza makassar",
    "rental hiace makassar",
    "sewa mobil bandara makassar",
    "rental mobil lepas kunci makassar",
    "car rental makassar"
  ],

  authors: [{ name: "RentalCarMakassar" }],
  creator: "RentalCarMakassar",
  publisher: "RentalCarMakassar",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: DOMAIN,
    siteName: "RentalCarMakassar",
    title: "Rental Mobil Makassar Murah – Armada Lengkap",
    description:
      "Layanan rental mobil profesional di Makassar dengan harga murah. Tersedia sopir, lepas kunci, antar jemput bandara, dan mobil keluarga.",
    images: [
      {
        url: `${DOMAIN}/images/hero-car.jpg`,
        width: 1200,
        height: 630,
        alt: "Rental Mobil Makassar – Armada Toyota Avanza & Hiace",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rental Mobil Makassar Termurah & Terpercaya",
    description:
      "Sewa mobil Makassar harga bersahabat. Armada terbaru, sopir profesional, dan layanan 24 jam.",
    images: [`${DOMAIN}/images/hero-car.jpg`],
  },

  alternates: {
    canonical: DOMAIN,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "theme-color": "#2563eb",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
