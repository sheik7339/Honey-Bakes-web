'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ALUMNI_SHOWCASE = [
  { id: 11, name: 'Logesh',      achievement: 'Founder of srithikahomemadecakes', work: 'Custom Celebration Cakes', image: '/images/alumni-images/alumni-11.png' },
  { id: 1,  name: 'Swetha',      achievement: 'Founder of swe_oventales', work: 'Signature Tiered Wedding Cakes', image: '/images/alumni-images/alumni-1.jpg' },
  { id: 2,  name: 'Priyadharshini',       achievement: 'Founder of browniee.would', work: 'European Artisanal Breads', image: '/images/alumni-images/alumni-2.jpg' },
  { id: 12, name: 'Logesh',      achievement: 'Founder of srithikahomemadecakes', work: 'Custom Celebration Cakes', image: '/images/alumni-images/alumni-12.png' },
  { id: 3,  name: 'Veerasaranya',    achievement: 'Founder of vikus_yum_yum',        work: 'Hyper-Realistic Sculpted Cakes', image: '/images/alumni-images/alumni-3.jpg' },
  { id: 4,  name: 'Shabana',       achievement: 'Founder of shabas bakes', work: 'Premium French Macarons', image: '/images/alumni-images/alumni-4.jpg' },
  { id: 5,  name: 'Mythili',     achievement: 'Founder of moni_bakes_777',    work: 'Healthy & Vegan Dessert Series', image: '/images/alumni-images/alumni-5.jpg' },
  { id: 6,  name: 'Nasreen Abdul',          achievement: 'Founder of sweeet_storiess', work: 'Innovative Rasamalai Fusion Cake', image: '/images/alumni-images/alumni-6.jpg' },
  { id: 7,  name: 'Karthika',     achievement: 'Founder of G.K cakes',   work: 'Exquisite Floral Buttercream Art', image: '/images/alumni-images/alumn-7.jpg' },
  { id: 8,  name: 'Srimathi',      achievement: 'Founder of purpledot_cake_', work: 'Dark Chocolate Truffle Collection', image: '/images/alumni-images/alumni-8.jpg' },
  { id: 9,  name: 'Subalakshmi',      achievement: 'Founder of vashtika_Homemade_cakes', work: 'Modern Mirror Glazed Entremets', image: '/images/alumni-images/alumni-9.jpg' },
  { id: 10, name: 'Poorvika',     achievement: 'Founder of heavenly treats', work: 'Advanced Fondant Techniques', image: '/images/alumni-images/alumni-10.jpg' },
]

export default function AlumniPage() {
  return (
    <div className="pt-32 bg-honey min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif font-black text-white drop-shadow-2xl tracking-tighter"
          >
            Alumni <span className="text-white italic">Hall of Fame</span>
          </motion.h1>
          <p className="text-white font-black text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md leading-relaxed opacity-95">Celebrating the incredible journey of our 350+ master bakers. Our graduates are redefining the world of professional artisanal baking</p>
        </header>

        {/* Alumni Cards Grid */}
        <section className="pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {ALUMNI_SHOWCASE.map((alumni, idx) => (
              <motion.div 
                key={alumni.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.8 }}
                viewport={{ once: true }}
                className={`group relative bg-[#FAFAFA] p-5 pb-12 md:p-8 md:pb-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:-translate-y-4 transition-all duration-500 ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 z-10 hover:z-20 max-w-lg mx-auto w-full border border-gray-200`}
              >
                {/* Polaroid Photo Frame */}
                <div className="relative w-full aspect-square bg-gray-100 shadow-inner border border-gray-200 flex items-center justify-center p-2 overflow-hidden">
                  <Image 
                    src={alumni.image} 
                    alt={alumni.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-700"
                    unoptimized={true}
                  />
                </div>
                
                {/* Handwritten / Polaroid Text Section */}
                <div className="pt-8 text-center flex flex-col items-center">
                  <h3 className="text-black text-4xl font-serif font-black mb-2">{alumni.name}</h3>
                  <p className="text-gray-600 font-medium text-xl italic mb-4">"{alumni.achievement}"</p>
                  <div className="w-16 h-1 bg-honey mb-4" />
                  <p className="text-black font-bold text-xs uppercase tracking-[0.25em]">{alumni.work}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* SIGNATURE HOME PAGE FOOTER STYLE */}
      <section className="py-24 px-6 bg-[#FFF5F8] text-black relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-1 bg-honey mx-auto mb-8" />
          <p className="text-3xl md:text-4xl font-serif italic leading-relaxed text-black">
            "Their success is our greatest recipe. Join the 350+ bakers who started their journey here."
          </p>
          <div>
            <p className="font-bold uppercase tracking-widest text-[#DB2777]">Honey Bakes Academy</p>
            <p className="text-lg text-black font-medium text-center">Global Alumni Network</p>
          </div>
        </div>
      </section>
    </div>
  )
}
