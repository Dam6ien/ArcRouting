export function Footer() {
  return (
    <footer className="p-5 pb-10 pt-0 mt-10 relative text-center">
      <div className="max-w-6xl mx-auto py-8">
        <span className="block absolute left-0 right-0" style={{ top: '-20px' }}>
          <span className="w-16 pl-3 mx-auto block bg-white">
            <span className="w-10 block text-gray-800">
              <img className="rounded-full" src="/mattfreire.jpeg" alt="Matthew Freire" />
            </span>
          </span>
        </span>
        <span className="text-xs text-gray-600 block font-light text-center">
          <span className="px-3 inline-flex text-gray-400">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/mattfreire"
              className="px-3 hover:text-indigo-500"
            >
              <span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://twitter.com/mattfreire"
              className="px-3 hover:text-indigo-500"
            >
              <span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </span>
            </a>
          </span>
        </span>
      </div>
    </footer>
  )
}
