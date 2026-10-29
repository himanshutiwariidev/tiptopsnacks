import { ArrowRight, CalendarDays } from 'lucide-react'
import Header from '../../components/Navbar'
import Footer from '../../components/Footer'
import { posts, formatDate } from '../../blog/posts'

export const metadata = {
  title: 'Blog | TIP TOP Food Tech – Snacks Manufacturer in Delhi',
  description:
    'Guides and insights from TIP TOP Food Tech, a snacks manufacturer in Delhi since 1991 — sourcing, private label, distribution and the snack industry in India.',
  alternates: { canonical: '/blog/' },
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />

      <main className="bg-[var(--brand-cream-soft)]">
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="text-center mb-12">
            <span className="brand-eyebrow inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Our Blog
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold brand-heading mt-5">
              Snack Industry <span className="brand-accent">Insights</span>
            </h1>
            <p className="text-[var(--brand-brown-soft)] mt-4 max-w-2xl mx-auto">
              Practical guides for retailers, distributors and brands from the team at
              TIP TOP Food Tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ meta }) => (
              <a
                key={meta.slug}
                href={`/blog/${meta.slug}/`}
                className="brand-card rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={meta.image}
                  alt={meta.imageAlt}
                  width={1272}
                  height={716}
                  loading="lazy"
                  className="w-full h-auto"
                />
                <div className="p-6 flex flex-col flex-1">
                  <span className="flex items-center gap-2 text-xs text-[var(--brand-brown-soft)]">
                    <CalendarDays size={14} />
                    {formatDate(meta.datePublished)} · {meta.readingTime}
                  </span>
                  <h2 className="text-xl font-bold brand-heading mt-3 leading-snug group-hover:text-[var(--brand-red)] transition-colors">
                    {meta.title}
                  </h2>
                  <p className="text-sm text-[var(--brand-brown-soft)] mt-3 flex-1">
                    {meta.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[var(--brand-red)]">
                    Read article <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
