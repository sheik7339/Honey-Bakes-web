'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const FEATURED_ALUMNI = [
  { id: 11, name: 'Logesh', achievement: 'Founder of srithikahomemadecakes', work: 'Custom Celebration Cakes', image: '/images/alumni-images/alumni-11.png' },
  { id: 1,  name: 'Swetha', achievement: 'Founder of swe_oventales', work: 'Signature Tiered Wedding Cakes', image: '/images/alumni-images/alumni-1.jpg' },
  { id: 2,  name: 'Priyadharshini', achievement: 'Founder of browniee.would', work: 'European Artisanal Breads', image: '/images/alumni-images/alumni-2.jpg' },
  { id: 12, name: 'Logesh', achievement: 'Founder of srithikahomemadecakes', work: 'Custom Celebration Cakes', image: '/images/alumni-images/alumni-12.png' },
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
              className={`group relative bg-[#FAFAFA] p-4 pb-8 md:p-6 md:pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 z-10 hover:z-20 border border-gray-200`}
            >
              {/* Polaroid Photo Frame */}
              <div className="relative w-full aspect-square bg-gray-100 shadow-inner border border-gray-200 flex items-center justify-center p-2 overflow-hidden">
                <Image 
                  src={alumni.image} 
                  alt={alumni.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-700"
                  unoptimized={true}
                />
              </div>

              {/* Handwritten / Polaroid Text Section */}
              <div className="pt-6 text-center flex flex-col items-center">
                <h3 className="text-black text-2xl font-serif font-black mb-1">{alumni.name}</h3>
                <p className="text-gray-600 font-medium text-sm italic mb-3">"{alumni.achievement}"</p>
                <div className="w-10 h-0.5 bg-honey mb-3 opacity-50" />
                <p className="text-black font-bold text-[9px] uppercase tracking-[0.2em]">{alumni.work}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
