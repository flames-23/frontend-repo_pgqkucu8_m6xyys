import { useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{label}</a>
  )

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white shadow-md">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">Flutter</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItem('Features')}
            {navItem('How it works')}
            {navItem('Stories')}
            {navItem('Pricing')}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-600 hover:text-gray-900">Log in</a>
            <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-violet-600 text-white font-medium shadow hover:opacity-95 transition-opacity">Get started</a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItem('Features')}
            {navItem('How it works')}
            {navItem('Stories')}
            {navItem('Pricing')}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="text-gray-600">Log in</a>
              <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-violet-600 text-white font-medium shadow">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
