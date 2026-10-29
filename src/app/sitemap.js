import { posts, siteUrl as baseUrl } from '../blog/posts'

export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...posts.map(({ meta }) => ({
      url: `${baseUrl}/blog/${meta.slug}/`,
      lastModified: new Date(meta.dateModified || meta.datePublished),
      changeFrequency: 'daily',
      priority: 0.7,
    })),
  ]
}
