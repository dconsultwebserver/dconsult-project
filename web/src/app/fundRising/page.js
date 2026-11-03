import React from 'react'
import Fund from './Fund'
export const metadata = {
  title: 'Fund Raising Mumbai - Dhumavati Consulting LLP',
  description: 'Fund raising support in Mumbai from Dhumavati Consulting LLP for startups and growing businesses.',
  alternates: {
    canonical: 'https://dconsult.in/fundRising/',
  },
  // The page has no content yet (only the footer); allow indexing once it does
  robots: {
    index: false,
    follow: true,
  },
};

function page() {
    return (
        <div>
            <Fund />
        </div>
    )
}

export default page
