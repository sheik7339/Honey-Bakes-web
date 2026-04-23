'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, GraduationCap, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const MOCK_COURSES = [
  { id: 1, name: 'Private 1-Day Baking Class', duration: '1 Day — ₹3,500', image: '/images/academy/private_class.png' },
  { id: 2, name: 'Professional Certified Baking Offline Class', duration: '2 Days — ₹3,500', image: '/images/academy/group_class.png' },
  { id: 3, name: 'Basic to Advanced Level Class', duration: '7 Days — ₹18,000', image: '/images/academy/large_class.png' },
]

export default function FeaturedCourses() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className={`py-24 px-6 ${mounted ? 'bg-honey' : 'bg-[#f472B6]'} text-white relative overflow-hidden`}>
      {/* Abstract Background Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <GraduationCap className="mx-auto text-white" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif font-black text-white drop-shadow-md">Honey Bakes <span className="text-white italic font-serif">Academy</span></h2>
          <p className="text-white font-sans font-bold text-lg max-w-2xl mx-auto drop-shadow-sm">Elevate your skills with our professional certification programs designed for aspiring pastry chefs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MOCK_COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-[40px] overflow-hidden group hover:border-white transition-all p-4 shadow-2xl"
            >
              <div className="relative h-64 rounded-[30px] overflow-hidden mb-6">
                <Image 
                  src={course.image} 
                  alt={course.name} 
                  fill 
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="px-4 pb-4 space-y-4">
                <div className="flex items-center gap-2 text-white text-sm font-black uppercase tracking-widest">
                  <Calendar size={16} />
                  <span>{course.duration}</span>
                </div>
                <h3 className="text-2xl font-serif font-black text-white group-hover:scale-[1.02] transition-transform drop-shadow-md">{course.name}</h3>
                <Link 
                  href="/academy" 
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white text-honey hover:bg-white/90 transition-all group/btn font-black text-lg"
                >
                  <span>View Syllabus</span>
                  <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/academy" className="inline-block bg-white text-honey px-12 py-4 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl">
            See All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
