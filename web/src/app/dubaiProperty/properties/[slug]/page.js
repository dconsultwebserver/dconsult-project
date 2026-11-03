import Property from '../Property'
import client from '../../../sanity/client'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post" && defined(slug.current)].slug.current`)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const property = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{ title }`, { slug: params.slug })
  const name = property?.title?.trim() || 'Dubai Property'
  return {
    title: `${name} Dubai - Dhumavati Consulting LLP`,
    description: `${name}: luxury Dubai property details, amenities and location, available through Dhumavati Consulting LLP.`,
    alternates: {
      canonical: `https://dconsult.in/dubaiProperty/properties/${params.slug}/`,
    },
  }
}

export default function page({ params }) {
  return <Property slug={params.slug} />
}
