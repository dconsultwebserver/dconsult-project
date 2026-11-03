import News from './News'

// Old address: shows the article last clicked (stored in the browser).
// Each article now has its own page at /dubaiProperty/newses/<slug>/.
export const metadata = {
  title: 'Dubai Property News - Dhumavati Consulting LLP',
  description: 'Dubai real estate news and updates from Dhumavati Consulting LLP.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function page() {
  return <News />
}
