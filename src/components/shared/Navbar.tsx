'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, GraduationCap, Home, Users, Contact, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Academy', href: '/academy', icon: GraduationCap },
  { name: 'Cake Gallery', href: '/gallery', icon: ShoppingBag },
  { name: 'Alumni', href: '/alumni', icon: Users },
  { name: 'Contact', href: '/contact', icon: Contact },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (pathname === href) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        'fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-7xl',
        scrolled ? 'top-4' : 'top-6'
      )}
    >
      <div className={cn(
        'relative flex justify-between items-center px-6 md:px-8 py-3 rounded-full border transition-all duration-500 backdrop-blur-xl',
        scrolled 
          ? 'bg-black/90 border-white/20 shadow-2xl transition-all' 
          : 'bg-white/10 border-white/10 shadow-lg transition-all'
      )}>
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')} 
          className="flex items-center gap-2 group shrink-0"
        >
          <span className="text-xl md:text-2xl font-serif font-black text-white tracking-tighter group-hover:scale-105 transition-transform">
            HONEY BAKES
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 translate-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white hover:scale-110 font-black transition-all text-xs uppercase tracking-[0.25em] relative group/link"
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-white transition-all group-hover/link:w-full",
                pathname === link.href ? "w-full" : "w-0"
              )} />
            </Link>
          ))}
        </div>

        {/* Action Button: Book a Class */}
        <div className="flex items-center gap-4">
          <Link 
            href="/academy"
            className={cn(
              "hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-xl hover:scale-105 group border-2",
              scrolled 
                ? "bg-black text-white border-white/20 hover:bg-white hover:text-black" 
                : "bg-honey text-white border-honey/20 hover:bg-white hover:text-honey"
            )}
          >
            <span>Book a Class</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full mt-4 left-0 right-0 bg-black/95 border-2 border-white/20 rounded-[40px] lg:hidden overflow-hidden shadow-2xl p-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-4 text-white group"
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all",
                    pathname === link.href 
                      ? "bg-white text-honey border-white shadow-lg" 
                      : "bg-white/20 text-white border-white/20 group-hover:bg-white group-hover:text-honey"
                  )}>
                    <link.icon size={24} />
                  </div>
                  <span className={cn(
                    "text-xl font-serif font-black",
                    pathname === link.href ? "text-white" : "text-white/80 group-hover:text-white transition-colors"
                  )}>
                    {link.name}
                  </span>
                </Link>
              ))}
              
              {/* Mobile CTA: Book a Class */}
              <Link 
                href="/academy"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "mt-4 flex items-center justify-center gap-3 py-6 rounded-[30px] font-black text-xl shadow-2xl border-2 transition-all",
                  scrolled
                    ? "bg-black text-white border-white/20"
                    : "bg-honey text-white border-white/20"
                )}
              >
                <span>Book a Class</span>
                <ArrowRight size={24} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
