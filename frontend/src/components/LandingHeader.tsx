import Link from 'next/link'
import Logo from './Logo'
export default function Header() {
  return (
    <div 
      className="bg-bg w-full max-w-5xl mx-auto px-8 h-[5vh] flex items-center gap-12 rounded-full py-8 shadow-lg"
    >
      <div>
        <Logo />
      </div>
      <nav>
        <ul className="flex gap-6 text-lg tracking-wide">
          <li>
            <a 
              href="https://github.com/ian-yeh/pinpoints-app" 
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
