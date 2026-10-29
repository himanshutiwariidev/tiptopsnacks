import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'
import Header from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { posts, getPost, siteUrl, formatDate } from '../../../blog/posts'

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.meta.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const { meta } = post
  const url = `/blog/${meta.slug}/`

  return {
    title: meta.metaTitle,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: meta.metaTitle,
      description: meta.description,
      publishedTime: meta.datePublished,
      images: [{ url: meta.image, width: 1272, height: 716, alt: meta.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.metaTitle,
      description: meta.description,
      images: [meta.image],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const { meta, faqs = [], default: Content } = post
  const url = `${siteUrl}/blog/${meta.slug}/`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: meta.title,
      description: meta.description,
      image: `${siteUrl}${meta.image}`,
      datePublished: meta.datePublished,
      dateModified: meta.dateModified || meta.datePublished,
      author: { '@type': 'Organization', name: 'TIP TOP Food Tech (India) Pvt. Ltd.' },
      publisher: {
        '@type': 'Organization',
        name: 'TIP TOP Food Tech (India) Pvt. Ltd.',
        logo: { '@type': 'ImageObject', url: `${siteUrl}/assets/logo.webp` },
      },
      mainEntityOfPage: url,
      keywords: meta.keywords.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog/` },
        { '@type': 'ListItem', position: 3, name: meta.title, item: url },
      ],
    },
  ]
  if (faqs.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="bg-[var(--brand-cream-soft)]">
        <article className="max-w-4xl mx-auto px-4 py-10 lg:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--brand-brown-soft)] mb-6">
            <a href="/" className="hover:text-[var(--brand-red)]">Home</a>
            <span className="mx-2">/</span>
            <a href="/blog/" className="hover:text-[var(--brand-red)]">Blog</a>
          </nav>

          <h1 className="text-3xl lg:text-5xl font-bold brand-heading leading-tight">
            {meta.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mt-5 text-sm text-[var(--brand-brown-soft)]">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} />
              <time dateTime={meta.datePublished}>{formatDate(meta.datePublished)}</time>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {meta.readingTime}
            </span>
            <span>By {meta.author}</span>
          </div>

          <img
            src={meta.image}
            alt={meta.imageAlt}
            width={1272}
            height={716}
            className="w-full h-auto rounded-2xl mt-8 shadow-md"
          />

          <div className="blog-content brand-card rounded-2xl p-6 lg:p-10 mt-8">
            <Content />
          </div>

          <a
            href="/blog/"
            className="inline-flex items-center gap-2 mt-8 font-semibold text-[var(--brand-red)] hover:text-[var(--brand-red-dark)]"
          >
            <ArrowLeft size={18} />
            Back to all articles
          </a>
        </article>
      </main>

      <Footer />
    </>
  )
}
