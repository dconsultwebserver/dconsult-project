import Link from 'next/link';
import Script from 'next/script';
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import './fundRising/fund.css'

const inter = Inter({ subsets: ['latin'] })

// Business details for Google (structured data), taken from the footer and contact page
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Dhumavati Consulting LLP',
  url: 'https://dconsult.in/',
  logo: 'https://dconsult.in/images/blogo.png',
  image: 'https://dconsult.in/images/og-image.jpg',
  telephone: '+91-8655811111',
  email: 'd@dconsult.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No 2, Agar Bazar, Dadar West',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
}

export const metadata = {
  title: 'Machinery Loans Mumbai | Acquisition Finance & ECB Mumbai - Dhumavati Consulting LLP',
  description: 'Dhumavati Consulting LLP offers Machinery Loans, Acquisition Finance, and ECB consulting in Mumbai to help businesses secure the right funding.',
  metadataBase: new URL('https://dconsult.in'),
  // No title/description/url here, so each page's own <title> is used when shared
  openGraph: {
    siteName: 'Dhumavati Consulting LLP',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Dhumavati Consulting LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: '7wMzEd5dleljQIHvMYQWBrBZIInI2VDW4krVu-5Ra8k',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/FavIcon.svg" type="image/svg" />
      </head>
      <body className={inter.className}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TX8B62P94Y" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TX8B62P94Y');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  )
}