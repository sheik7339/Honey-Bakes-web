'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const FEATURED_ALUMNI = [
  { id: 11, name: 'Rifa Fathima', achievement: 'Founder - Bouquet Bakes', work: 'Specialty Artisanal Brownies', image: '/images/gallery/rifafathima.png' },
  { id: 3,  name: 'Sneha Venkatesh', achievement: 'Celebrity Cake Artist', work: 'Hyper-Realistic Sculpting', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=100&w=2000' },
  { id: 4,  name: 'Karthik Raja', achievement: 'Entrepreneur - Crust & Crumb', work: 'Premium French Macarons', image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=100&w=2000' },
  { id: 8,  name: 'Naveen Prabhu', achievement: 'Chocolatier & Innovation Lead', work: 'Dark Chocolate Truffles', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=100&w=2000' },
]

export default function AlumniPreview() {
  return (
    <section className="py-24 px-6 bg-cream overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif font-black text-black">
              Alumni <span className="text-honey italic font-serif">Hall of Fame</span>
            </h2>
            <p className="text-black/60 max-w-xl font-black text-lg leading-relaxed">Celebrating the professional success of our 350+ master graduates who are redefining the artisanal baking industry.</p>
          </div>
          <Link href="/alumni" className="bg-honey text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
            View All Success Stories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_ALUMNI.map((alumni, idx) => (
            <motion.div
              key={alumni.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border border-honey/5"
            >
              <Image 
                src={alumni.image} 
                alt={alumni.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-all duration-1000 opacity-90 group-hover:opacity-100"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-md text-honey px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  HONEY BAKES GRADUATE
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-1">
                  <h3 className="text-white text-3xl font-serif font-black drop-shadow-2xl">{alumni.name}</h3>
                  <p className="text-honey font-black text-xs uppercase tracking-[0.2em]">{alumni.achievement}</p>
                </div>
                <div className="h-0.5 w-0 bg-honey group-hover:w-full transition-all duration-700" />
                <p className="text-white/70 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  {alumni.work}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
