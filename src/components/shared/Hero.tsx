'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Layer */}
      {mounted && (
        <div className="absolute inset-0 z-0 bg-cream overflow-hidden">
          {/* Main Hero Background - Perfectly Centered Pink Cake */}
          <div className="absolute inset-0">
            <img 
              src="/images/pink_hero.png" 
              alt="Background"
              className="w-full h-full object-cover object-center animate-slow-zoom"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-chocolate/10 via-transparent to-chocolate/10 z-20" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-dark p-8 md:p-16 rounded-[40px] border border-cream/20 shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-bold text-honey mb-6 tracking-tight"
          >
            Elegance <br /> <span className="text-white italic">Redefined</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans tracking-wide"
          >
            Handcrafted luxury cakes and professional baking mastery for those who appreciate the finer things in life.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link
              href="/gallery"
              className="bg-honey text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-honey/90 transition-all shadow-xl hover:shadow-honey/20"
            >
              Order a Custom Cake
            </Link>
            <Link
              href="/academy"
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-chocolate transition-all shadow-xl"
            >
              Join Our Academy
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-honey cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  )
}
