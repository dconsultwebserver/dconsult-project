import React from 'react'
import Demate from './Demate'
export const metadata = {
  title: 'Open a Demat Account - Dhumavati Consulting LLP',
  description: 'Open a demat account with help from Dhumavati Consulting LLP to hold listed and unlisted shares.',
  alternates: {
    canonical: 'https://dconsult.in/demateAccount/',
  },
};

function page() {
    return (
        <div>
            <Demate/>
        </div>
    )
}

export default page
