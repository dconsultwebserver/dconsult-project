import React from 'react'
import Business from './Business'
export const metadata = {
  title: 'Bill Discounting Mumbai - Dhumavati Consulting LLP',
  description: 'Bill discounting in Mumbai with Dhumavati Consulting LLP. Turn your unpaid invoices into working capital quickly.',
  alternates: {
    canonical: 'https://dconsult.in/billDiscounting/',
  },
};

function page() {
    return (
        <div>
            <Business/>
        </div>
    )
}

export default page
