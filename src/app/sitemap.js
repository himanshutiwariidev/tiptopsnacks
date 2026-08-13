const baseUrl = 'https://snacksmanufacturer.com'

export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
