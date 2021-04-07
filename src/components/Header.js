import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-gray-700 body-font">
      <div className="mx-auto flex flex-wrap py-5 flex-col items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl">Matthew Freire</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center text-base justify-center">
          <Link href="/blog">
            <a className="hover:text-gray-900">Blog</a>
          </Link>
          <a
            href="https://www.youtube.com/channel/UCw8hst3Sd8ECyDQCEsAL4KA?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-5 hover:text-gray-900"
          >
            YouTube
          </a>
          <Link href="/podcast">
            <a className="ml-5 hover:text-gray-900">Podcast</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
