import Property from './Property'

// Old address: shows the property last clicked (stored in the browser).
// Each property now has its own page at /dubaiProperty/properties/<slug>/.
export const metadata = {
  title: 'Dubai Property Details - Dhumavati Consulting LLP',
  description: 'Details of luxury Dubai properties available through Dhumavati Consulting LLP.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function page() {
  return <Property />
}
