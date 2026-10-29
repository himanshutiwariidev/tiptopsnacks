import * as chooseSnacksManufacturer from './posts/how-to-choose-snacks-manufacturer-in-delhi'

// Newest first. To add a post, create a file in ./posts exporting `meta`,
// optional `faqs`, and a default Content component, then add it here.
export const posts = [chooseSnacksManufacturer]

export const siteUrl = 'https://snacksmanufacturer.com'

export function getPost(slug) {
  return posts.find((p) => p.meta.slug === slug)
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
