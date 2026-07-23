import Link from 'next/link';
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import './fundRising/fund.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Professional Liability Insurance Mumbai | Unlisted Stocks & Construction Finance Mumbai | Commercial General, Art & Product Liability Insurance Mumbai - Dhumavati Consulting LLP',
  description: 'Dhumavati Consulting LLP offers comprehensive insurance solutions in Mumbai, covering Professional liability insurance, unlisted stocks, construction finance, art insurance & commercial general liability.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/FavIcon.svg" type="image/svg" />
      </head>
      <body className={inter.className}>
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
        </div>
      </body>
    </html>
  )
}