import Head from 'next/head'
import twitterCard from '@/img/twitter-card.png'
import { Footer } from '@/components/Footer'

export default function Work() {
  return (
    <div className="divide-y divide-gray-200">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mattfreire" />
        <meta name="twitter:creator" content="@mattfreire" />
        <meta name="twitter:title" content="Work – Matthew Freire" />
        <meta name="twitter:description" content="Projects I've worked on." />
        <meta name="twitter:image" content={`https://mattfreire.blog${twitterCard}`} />
        <meta property="og:url" content="https://mattfreire.blog" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Blog – Matthew Freire" />
        <meta property="og:description" content="Projects I've worked on." />
        <meta property="og:image" content={`https://mattfreire.blog${twitterCard}`} />
        <title>Arcrouting - Damien de Gouveia</title>
        <meta name="description" content="Projects I've worked on." />
      </Head>

      <h2 className="text">Hello there 👋</h2>
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="py-6">
            <h4 className="text-2xl text-gray-900">Here's a summary of me</h4>
            <p className="mt-1 text-gray-900 py-1">
              <span className="px-2">✉️</span> Get in touch via{' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="mailto:damiensdg@gmail.com"
                className="text-indigo-500 hover:text-indigo-600"
              >
                email
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
