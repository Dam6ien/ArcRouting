import tinytime from 'tinytime'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import twitterCard from '@/img/twitter-card.png'
import { CalendarIcon } from '@/components/icons'
import { Footer } from '@/components/Footer'
import { tags } from '../tags'

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Podcast() {
  let originalPosts = [
    {
      meta: {
        title: 'Damien de Gouveia',
        description: `Damien and I met in university. We both studied industrial engineering and have enjoyed countless conversations about work, productivity, philosophy and much more. In this conversation we chat about productivity and its relationship with curiosity and creativity.`,
        date: '2021-3-31',
        tags: [tags.productivity],
      },
      number: 6,
      embedLink: 'https://share.transistor.fm/e/01371e4b/dark',
    },
    {
      meta: {
        title: 'Herman Martinus of Bear Blog',
        description: `Herman is a software developer, indie hacker and creator of Bear Blog, a website that lets you start blogging while keeping your pages tiny, fast and optimized for search engines.`,
        date: '2020-11-2',
        tags: [tags.development],
      },
      number: 5,
      embedLink: 'https://share.transistor.fm/e/b4b29b34/dark',
    },
    {
      meta: {
        title: 'Eric Vanular of Collective Energy',
        description: `Eric is an indie hacker, software developer, consultant and creator of Collective Energy, a community for individuals working together to combat climate change. He also created Enviro.work which is an affiliated green jobs board. And he built it using Django.`,
        date: '2020-10-26',
        tags: [tags.development],
      },
      number: 4,
      embedLink: 'https://share.transistor.fm/e/b4b29b34/dark',
    },
    {
      meta: {
        title: 'Allison Seboldt of Fantasy Congress',
        description: `Allison is a software developer, indie hacker, and creator of Fantasy Congress, an online game that takes a fantasy sports spin on politics.`,
        date: '2020-10-19',
        tags: [tags.development],
      },
      number: 3,
      embedLink: 'https://share.transistor.fm/e/8ea57224/dark',
    },
    {
      meta: {
        title: 'Justin Mitchel of Coding For Entrepreneurs',
        description: `Justin is an entrepreneur, coder, avid tech enthusiast, and creator of CodingForEntrepreneurs.com, which offers project-based courses on Django, Python, JavaScript, Machine Learning and many other technologies.`,
        date: '2020-10-12',
        tags: [tags.development],
      },
      number: 2,
      embedLink: 'https://share.transistor.fm/e/eec196b2/dark',
    },
    {
      meta: {
        title: 'Cory Zue of SaaS Pegasus',
        description: `Cory is a software developer and has been part of the indiehackers community for quite a while now. He’s built many side-projects, one of them being SaaSPegasus, which is a Django powered SaaS template that you can use to bootstrap your projects.`,
        date: '2020-10-5',
        tags: [tags.development],
      },
      number: 1,
      embedLink: 'https://share.transistor.fm/e/19571dec/dark',
    },
  ]

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  let usedTags = []
  for (let post of originalPosts) {
    usedTags.push(...post.meta.tags)
  }
  usedTags = usedTags.filter(onlyUnique)

  const router = useRouter()
  const { query } = router
  let posts = [] // empty if there is no filter
  if (query) {
    const { tag } = query
    if (tag) {
      posts = originalPosts.filter(({ meta: { tags } }) => {
        const tagSlugs = tags.map((tag) => tag.slug)
        return tagSlugs.includes(tag)
      })
    }
  }

  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mattfreire" />
        <meta name="twitter:creator" content="@mattfreire" />
        <meta name="twitter:title" content="The Matt Freire Show" />
        <meta name="twitter:description" content="Conversations with interesting people." />
        <meta name="twitter:image" content={`https://mattfreire.blog${twitterCard}`} />
        <meta property="og:url" content="https://mattfreire.blog" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The Matt Freire Show" />
        <meta property="og:description" content="Conversations with interesting people." />
        <meta property="og:image" content={`https://mattfreire.blog${twitterCard}`} />
        <title>The Matt Freire Show</title>
        <meta name="description" content="Conversations with interesting people." />
      </Head>

      <div className="flex flex-row justify-between items-center mb-5">
        <Link href="/podcast">
          <a className="text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out">
            <h2 className="text-3xl font-light tracking-wider">Podcast</h2>
          </a>
        </Link>
        <a
          href="https://feeds.transistor.fm/the-matt-freire-show"
          className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-300"
        >
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
      </div>

      <div className="py-5 flex flex-row flex-wrap items-center">
        {Object.keys(usedTags).map((key) => {
          const tag = usedTags[key]
          return (
            <Link href={`/podcast?tag=${tag.slug}`} key={tag.slug}>
              <a className="mt-2 ml-2 px-2 py-1 hover:bg-gray-200 transition duration-300 ease-in-out">
                <span>{tag.emoji}</span>
                <span className="ml-2">{tag.title}</span>
              </a>
            </Link>
          )
        })}
      </div>
      <ul className="divide-y divide-gray-200">
        {posts.map(({ meta, embedLink, number }) => {
          return (
            <li key={number} className="py-6">
              <div className="shadow-sm border border-gray-200 px-3 py-3">
                <header>
                  <div className="text-sm pb-1 text-gray-700">
                    <time className="inline-block pr-1" dateTime={meta.date}>
                      <span className="inline-block w-3 mr-1">
                        <CalendarIcon />
                      </span>
                      {postDateTemplate.render(new Date(meta.date))}
                    </time>
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
                  <h2 className="block text-2xl font-semibold text-gray-800">
                    #{number} - {meta.title}
                  </h2>
                  <p className="mt-2 text-gray-800 text-sm">{meta.description}</p>
                </header>
                <div className="mt-3 max-w-none">
                  <iframe
                    width="100%"
                    height="180"
                    frameborder="no"
                    scrolling="no"
                    seamless
                    src={embedLink}
                  ></iframe>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      {posts.length === 0 && (
        <iframe
          width="100%"
          height="390"
          frameborder="no"
          scrolling="no"
          seamless
          src="https://share.transistor.fm/e/the-matt-freire-show/playlist/dark"
        ></iframe>
      )}
      <Footer />
    </div>
  )
}
