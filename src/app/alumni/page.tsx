'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const ALUMNI_SHOWCASE = [
  { id: 1,  name: 'Anitha Sugumar',      achievement: 'Founder of "The Sugar Studio"', work: 'Signature Tiered Wedding Cakes', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=100&w=2000' },
  { id: 2,  name: 'Rajesh Kumar',       achievement: 'Head Pastry Chef at Grand Hyatt', work: 'European Artisanal Breads', image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=100&w=2000' },
  { id: 3,  name: 'Sneha Venkatesh',    achievement: 'Celebrity Cake Artist',        work: 'Hyper-Realistic Sculpted Cakes', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=100&w=2000' },
  { id: 4,  name: 'Karthik Raja',       achievement: 'Entrepreneur - Crust & Crumb', work: 'Premium French Macarons', image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?q=100&w=2000' },
  { id: 5,  name: 'Meera Krishnan',     achievement: 'Baking Influencer (100k+)',    work: 'Healthy & Vegan Dessert Series', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=100&w=2000' },
  { id: 6,  name: 'Arjun Das',          achievement: 'Silver Medalist - National Bake-off', work: 'Innovative Rasamalai Fusion Cake', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=100&w=2000' },
  { id: 7,  name: 'Divya Bharathi',     achievement: 'Director of "Dreamy Bakes"',   work: 'Exquisite Floral Buttercream Art', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=100&w=2000' },
  { id: 8,  name: 'Naveen Prabhu',      achievement: 'Chocolatier & Innovation Lead', work: 'Dark Chocolate Truffle Collection', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=100&w=2000' },
  { id: 9,  name: 'Kaviya Selvam',      achievement: 'Winner of Regional Pastry Cup', work: 'Modern Mirror Glazed Entremets', image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=100&w=2000' },
  { id: 10, name: 'Gokul Chandran',     achievement: 'Master Instructor at Bake Academy', work: 'Advanced Fondant Techniques', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=100&w=2000' },
  { id: 11, name: 'Rifa Fathima',       achievement: 'Founder of "Bouquet Bakes"',   work: 'Specialty Artisanal Brownies', image: '/images/gallery/rifafathima.png' },
  { id: 12, name: 'Sanjay Mani',        achievement: 'Artisan Donuts Co.',           work: 'Specialty Gourmet Donuts', image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?q=100&w=2000' },
  { id: 13, name: 'Pooja Hegde',        achievement: 'Korean Bento Queen',           work: 'Minimalist Bento Cakes', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=100&w=2000' },
  { id: 14, name: 'Varun Shanth',       achievement: 'Chef at Hyatt Regency',        work: 'Gluten-free Patisserie', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=100&w=2000' },
  { id: 15, name: 'Swetha Reddy',       achievement: 'Founder - Tart & Soul',        work: 'Premium Celebration Cakes', image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=100&w=2000' },
  { id: 16, name: 'Mani Ratnam',        achievement: 'Fusion Desi Bakes',            work: 'Gulab Jamun Fusion Cakes', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=100&w=2000' },
  { id: 17, name: 'Gayathri Devi',      achievement: 'The Conscious Baker',          work: 'Healthy Keto Bakes', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=100&w=2000' },
  { id: 18, name: 'Rahul Dev',          achievement: 'Cheesecake Factory Lead',      work: 'NY Style Classic Cheesecakes', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=100&w=2000' },
  { id: 19, name: 'Keerthi Suresh',     achievement: 'Macaron Masterclass Grad',     work: 'Savory/Sweet Macarons', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=100&w=2000' },
  { id: 20, name: 'Vikesh Kumar',       achievement: 'The Sourdough Lab',            work: 'Artisanal Wild Yeast Breads', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=100&w=2000' },
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
                className="group relative h-[600px] rounded-[60px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 bg-white/10 backdrop-blur-md"
              >
                <Image 
                  src={alumni.image} 
                  alt={alumni.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  unoptimized={true}
                  priority={idx < 4}
                />
                
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                
                {/* High-End Content Presentation */}
                <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-honey font-black uppercase tracking-[0.4em] text-xs bg-white px-5 py-2 rounded-full inline-block mb-3 shadow-xl">WORLD-CLASS GRADUATE</p>
                      <h3 className="text-white text-5xl md:text-6xl font-serif font-black leading-tight drop-shadow-2xl">{alumni.name}</h3>
                    </div>
                    
                    <div className="space-y-2 border-l-4 border-honey pl-6 backdrop-blur-sm bg-black/10 py-4 rounded-r-3xl">
                      <p className="text-white font-black text-2xl italic tracking-tight">{alumni.achievement}</p>
                      <p className="text-honey font-black text-lg uppercase tracking-[0.2em]">{alumni.work}</p>
                    </div>
                  </div>
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
