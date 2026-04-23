'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from 'lucide-react'

const MOCK_CAKES = [
  { id: 1, name: 'Vanilla Cake', category: 'Cakes', status: 'Available', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800' },
  { id: 2, name: 'Chocolate Cake', category: 'Cakes', status: 'Available', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800' },
  { id: 3, name: 'Red Velvet Cake', category: 'Cakes', status: 'Available', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800' },
  { id: 4, name: 'Fudgy Brownie', category: 'Brownies', status: 'Available', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800' },
]

export default function RecentCakes() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif font-black text-[#FF1493]">The Cake <span className="text-honey italic font-serif">Collection</span></h2>
            <p className="text-chocolate/60 max-w-md font-sans text-sm leading-relaxed">Discover our most recent artistic creations, handcrafted with precision and passion.</p>
          </div>
          <Link href="/gallery" className="bg-honey text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_CAKES.map((cake, idx) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[30px] overflow-hidden shadow-2xl"
            >
              <Image 
                src={cake.image} 
                alt={cake.name} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute top-6 right-6">
                <span className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg",
                  cake.status === 'Available' ? "bg-green-500 text-white" : "bg-red-500 text-white"
                )}>
                  {cake.status}
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-2">{cake.category}</p>
                <h3 className="text-white text-3xl font-serif font-bold mb-4 drop-shadow-lg">{cake.name}</h3>
                <button 
                  onClick={() => window.open(`https://wa.me/919384313025?text=I'm interested in ${cake.name}`, '_blank')}
                  className="bg-white text-chocolate px-8 py-2.5 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}
