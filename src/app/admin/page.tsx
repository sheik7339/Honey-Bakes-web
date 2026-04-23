'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, LogIn, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, use environment variables and a secure hash
    if (password === 'honeybakes@2024') {
      setIsAuthorized(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  if (isAuthorized) {
    return (
      <div className="pt-32 pb-24 bg-cream min-h-screen px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-serif font-bold text-chocolate">Admin <span className="text-honey">Dashboard</span></h1>
              <p className="text-chocolate/60">Manage your cakes, courses, and alumni data.</p>
            </div>
            <button 
              onClick={() => setIsAuthorized(false)}
              className="text-chocolate/40 hover:text-red-500 font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Sign Out
            </button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Cakes', count: 12, path: '/studio/desk/cake', color: 'bg-blue-500' },
              { title: 'Courses', count: 5, path: '/studio/desk/course', color: 'bg-purple-500' },
              { title: 'Alumni', count: 48, path: '/studio/desk/alumni', color: 'bg-green-500' },
            ].map((item) => (
              <motion.div 
                key={item.title}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[40px] shadow-xl border border-chocolate/5 space-y-4"
              >
                <div className={`w-12 h-12 ${item.color}/10 rounded-2xl flex items-center justify-center text-white mb-2`}>
                   <div className={`w-3 h-3 rounded-full ${item.color}`} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-chocolate">{item.title}</h3>
                <p className="text-4xl font-bold text-chocolate/20">{item.count}</p>
                <button 
                  onClick={() => window.open(item.path, '_blank')}
                  className="w-full bg-cream py-3 rounded-xl font-bold text-chocolate hover:bg-honey transition-all mt-4"
                >
                  Manage {item.title}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-chocolate text-cream rounded-[40px] shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-honey mb-4">Sanity Cloud Sync</h3>
            <p className="opacity-70 mb-8">All changes made here are synced in real-time to the Sanity Cloud. You can upload high-res images and toggle stock status directly through the management console.</p>
            <div className="flex gap-4">
              <button className="bg-honey text-chocolate px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all">
                Open Studio
              </button>
              <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                View Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex items-center justify-center bg-chocolate px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-dark p-12 rounded-[50px] border border-white/10 w-full max-w-md shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-honey via-yellow-500 to-honey" />
        
        <div className="space-y-8 relative z-10">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-honey/10 rounded-3xl flex items-center justify-center text-honey mx-auto mb-6">
              <Lock size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white">Restricted Area</h2>
            <p className="text-cream/40 px-4">Identify yourself to access the Honey Bakes management portal.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-honey/60 ml-4">Access Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-white/5 border border-white/20 rounded-3xl px-6 py-5 text-white focus:outline-none focus:border-honey transition-all"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-2xl"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm font-bold">Incorrect credentials. Try again.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit"
              className="w-full bg-honey text-chocolate py-5 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl shadow-honey/20 flex items-center justify-center gap-3 group"
            >
              <LogIn size={24} className="group-hover:translate-x-1 transition-transform" />
              Enter Dashboard
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
