import React from 'react'
import About from './About'
export const metadata = {
  title: 'About Us - Dhumavati Consulting LLP',
  description: 'Dhumavati Consulting LLP is a Mumbai-based consultancy helping businesses with machinery loans, acquisition finance, ECB, unlisted shares, private equity and fund raising.',
  alternates: {
    canonical: 'https://dconsult.in/aboutUs/',
  },
};

function page() {
    return (
        <div>
            <About />
        </div>
    )
}

export default page
