import React from 'react'
import Contact from './Contact'
export const metadata = {
  title: 'Contact Us - Dhumavati Consulting LLP',
  description: 'Contact Dhumavati Consulting LLP in Mumbai for machinery loans, acquisition finance, ECB, unlisted shares and fund raising.',
  alternates: {
    canonical: 'https://dconsult.in/contact/',
  },
};

function page() {
    return (
        <div>
            <Contact/>
        </div>
    )
}

export default page
