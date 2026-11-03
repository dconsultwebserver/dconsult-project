import client from './sanity/client'

const base = 'https://dconsult.in'

// Real pages only. Left out: Thank You, Fund Raising (empty for now), and the
// old storage-based Dubai detail addresses (replaced by the per-slug pages below).
const pages = [
  { path: '/', priority: 1.0 },
  { path: '/machinery-loans/', priority: 0.9 },
  { path: '/acquisition-debt/', priority: 0.9 },
  { path: '/ecb/', priority: 0.9 },
  { path: '/unlisted-stocks/', priority: 0.9 },
  { path: '/nse/', priority: 0.8 },
  { path: '/ncdex/', priority: 0.8 },
  { path: '/msei/', priority: 0.8 },
  { path: '/oyo/', priority: 0.8 },
  { path: '/polymatech/', priority: 0.8 },
  { path: '/billDiscounting/', priority: 0.8 },
  { path: '/privateEqity/', priority: 0.8 },
  { path: '/demateAccount/', priority: 0.7 },
  { path: '/dubaiProperty/', priority: 0.7 },
  { path: '/aboutUs/', priority: 0.7 },
  { path: '/contact/', priority: 0.7 },
  { path: '/privacyPolicy/', priority: 0.3 },
  { path: '/cookiesPolicy/', priority: 0.3 },
  { path: '/disclaimers/', priority: 0.3 },
  // Next 14.0 doesn't XML-escape sitemap URLs, so the & is escaped here
  { path: '/terms&amp;condition/', priority: 0.3 },
]

export default async function sitemap() {
  const [properties, news] = await Promise.all([
    client.fetch(`*[_type == "post" && defined(slug.current)].slug.current`),
    client.fetch(`*[_type == "newses" && defined(slug.current)].slug.current`),
  ])
  const all = [
    ...pages,
    ...properties.map((slug) => ({ path: `/dubaiProperty/properties/${slug}/`, priority: 0.6 })),
    ...news.map((slug) => ({ path: `/dubaiProperty/newses/${slug}/`, priority: 0.5 })),
  ]
  return all.map(({ path, priority }) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
