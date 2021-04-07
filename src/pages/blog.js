import tinytime from 'tinytime'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import getAllPostPreviews from '@/getAllPostPreviews'
import twitterCard from '@/img/twitter-card.png'
import { CalendarIcon, CategoryIcon, ClockIcon } from '@/components/icons'
import { Footer } from '@/components/Footer'
import { tags } from '../tags'

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Blog() {
  let posts = getAllPostPreviews()

  const router = useRouter()
  const { query } = router
  if (query) {
    const { tag } = query
    if (tag) {
      posts = posts.filter(
        ({
          module: {
            meta: { tags },
          },
        }) => {
          const tagSlugs = tags.map((tag) => tag.slug)
          return tagSlugs.includes(tag)
        }
      )
    }
  }

  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mattfreire" />
        <meta name="twitter:creator" content="@mattfreire" />
        <meta name="twitter:title" content="Blog – Matthew Freire" />
        <meta name="twitter:description" content="My general thoughts and work I've been up to." />
        <meta name="twitter:image" content={`https://mattfreire.blog${twitterCard}`} />
        <meta property="og:url" content="https://mattfreire.blog" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Matthew Freire" />
        <meta property="og:description" content="My general thoughts and work I've been up to." />
        <meta property="og:image" content={`https://mattfreire.blog${twitterCard}`} />
        <title>Blog - Matthew Freire</title>
        <meta name="description" content="My general thoughts and work I've been up to." />
      </Head>

      <div className="flex flex-row justify-between items-center mb-5">
        <Link href="/blog">
          <a className="text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out">
            <h2 className="text-3xl font-light tracking-wider">Blog</h2>
          </a>
        </Link>
        <Link href="/feed.xml">
          <a className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-300">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </a>
        </Link>
      </div>
      <div className="py-5 flex flex-row flex-wrap items-center">
        {Object.keys(tags).map((key) => {
          const tag = tags[key]
          return (
            <Link href={`/blog?tag=${tag.slug}`} key={tag.slug}>
              <a className="mt-2 ml-2 px-2 py-1 hover:bg-gray-200 transition duration-300 ease-in-out">
                <span>{tag.emoji}</span>
                <span className="ml-2">{tag.title}</span>
              </a>
            </Link>
          )
        })}
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.map(({ link, module: { default: Component, meta } }) => {
          return (
            <li key={link} className="py-6">
              <article key={link}>
                <header>
                  <div className="text-sm pb-1 text-gray-700">
                    <time className="inline-block pr-1" dateTime={meta.date}>
                      <span className="inline-block w-3 mr-1">
                        <CalendarIcon />
                      </span>
                      {postDateTemplate.render(new Date(meta.date))}
                    </time>
                    <span className="ml-2">
                      <span className="inline-block w-3 mx-1 items-center">
                        <ClockIcon />
                      </span>
                      <span className="capitalize py-4">{meta.readTime}</span>
                    </span>
                    <span className="ml-2">
                      <span className="capitalize py-4">
                        {meta.tags.map((tag) => {
                          return (
                            <span className="px-2">
                              <span>{tag.emoji}</span>
                              <span className="ml-2">{tag.title}</span>
                            </span>
                          )
                        })}
                      </span>
                    </span>
                  </div>
                  <h2>
                    <Link href={link}>
                      <a
                        className="block text-2xl font-semibold text-gray-800 hover:text-indigo-500 transition duration-300 ease-in-out"
                        title={meta.title}
                        rel="bookmark"
                      >
                        {meta.title}
                      </a>
                    </Link>
                  </h2>
                </header>
                <div className="prose max-w-none text-sm text-gray-700">
                  <Component />
                </div>
                <div className="mt-3 text-base leading-6 font-medium">
                  <Link href={link}>
                    <a
                      className="text-indigo-500 hover:text-indigo-600"
                      aria-label={`Read "${meta.title}"`}
                    >
                      Read more &rarr;
                    </a>
                  </Link>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      <Footer />
    </div>
  )
}
