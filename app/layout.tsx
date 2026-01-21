import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Nexplan | Enterprise Planning & Decision Intelligence Platform",
  description: "Transform enterprise planning into real-time intelligence. Nexplan provides strategic planning solutions for finance, operations, and workforce with Anaplan & Pigment implementation. Trusted by 50+ enterprises globally.",
  keywords: [
    "enterprise planning software",
    "decision intelligence platform",
    "strategic planning solutions",
    "Anaplan implementation",
    "Pigment planning software",
    "financial planning and analysis",
    "FP&A software",
    "workforce planning",
    "sales capacity planning",
    "supply chain planning",
    "enterprise performance management",
    "continuous planning",
    "AI-ready planning systems",
    "business intelligence",
    "Nexplan"
  ],
  authors: [{ name: "Nexplan" }],
  creator: "Nexplan",
  publisher: "Nexplan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nexplan.ai',
    title: 'Nexplan | Enterprise Planning & Decision Intelligence Platform',
    description: 'Transform enterprise planning into real-time intelligence with Nexplan. Strategic planning, Anaplan & Pigment implementation, and continuous decision intelligence for modern enterprises.',
    siteName: 'Nexplan',
    images: [
      {
        url: '/nexplan-logo.png',
        width: 1200,
        height: 630,
        alt: 'Nexplan - Enterprise Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexplan | Enterprise Planning & Decision Intelligence',
    description: 'Transform strategic planning with AI-ready decision intelligence. Anaplan & Pigment experts serving 50+ enterprises.',
    images: ['/nexplan-logo.png'],
    creator: '@nexplan',
  },
  alternates: {
    canonical: 'https://www.nexplan.ai',
  },
  metadataBase: new URL('https://www.nexplan.ai'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
