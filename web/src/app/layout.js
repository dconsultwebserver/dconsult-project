import Link from 'next/link';
import Script from 'next/script';
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import './fundRising/fund.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Machinery Loans Mumbai | Acquisition Finance & ECB Mumbai - Dhumavati Consulting LLP',
  description: 'Dhumavati Consulting LLP offers Machinery Loans, Acquisition Finance, and ECB consulting in Mumbai to help businesses secure the right funding.',
  verification: {
    google: '7wMzEd5dleljQIHvMYQWBrBZIInI2VDW4krVu-5Ra8k',
  },
  alternates: {
    canonical: 'https://dconsult.in/',
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
        {children}
        {/* Hidden links for SEO/spider crawling - no visual space */}
        <div style={{ display: 'none' }}>
          <a href="/aboutUs" className="float" target="_blank">a</a>
          <a href="/acquisition-debt" className="float" target="_blank">b</a>
          <a href="/contact" className="float" target="_blank">c</a>
          <a href="/machinery-loans" className="float" target="_blank">d</a>
          <a href="/ecb" className="float" target="_blank">e</a>
          <a href="/privacyPolicy" className="float" target="_blank">f</a>
          <a href="/terms&condition" className="float" target="_blank">g</a>
          <a href="/disclaimers" className="float" target="_blank">h</a>
          <a href="/cookiesPolicy" className="float" target="_blank">i</a>
        </div>
      </body>
    </html>
  )
}