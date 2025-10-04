import Link from 'next/link'
export default function Header() {
  return (
    <div 
      className="bg-bg w-full max-w-5xl mx-auto px-8 h-[5vh] flex items-center gap-12 rounded-full py-8 shadow-md"
    >
      <div>
        <h1 className="text-2xl font-bold">NEWS SITE</h1>
      </div>
      <nav>
        <ul className="flex gap-6 text-lg tracking-wide">
          <li>
            <Link href="/about" className="hover:text-gray-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
