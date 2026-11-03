import News from '../News'
import client from '../../../sanity/client'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "newses" && defined(slug.current)].slug.current`)
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const article = await client.fetch(`*[_type == "newses" && slug.current == $slug][0]{ title }`, { slug: params.slug })
  const title = article?.title?.trim() || 'Dubai Property News'
  return {
    title: `${title} - Dhumavati Consulting LLP`,
    description: `${title}. Dubai real estate news from Dhumavati Consulting LLP.`,
    alternates: {
      canonical: `https://dconsult.in/dubaiProperty/newses/${params.slug}/`,
    },
  }
}

export default function page({ params }) {
  return <News slug={params.slug} />
}
