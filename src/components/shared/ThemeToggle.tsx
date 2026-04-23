'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="w-16 h-8" />

  const isDark = theme === 'dark'

  return (
    <div 
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-16 h-8 rounded-full bg-black/20 backdrop-blur-md border border-white/20 cursor-pointer p-1 transition-colors duration-500"
    >
      <motion.div
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center text-chocolate"
      >
        {isDark ? (
          <Moon size={14} className="fill-chocolate" />
        ) : (
          <Sun size={14} className="fill-chocolate" />
        )}
      </motion.div>
    </div>
  )
}
