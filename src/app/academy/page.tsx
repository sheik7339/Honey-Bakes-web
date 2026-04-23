'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Clock, BookOpen, MessageCircle, Star, Sparkles, ChevronDown, Award, Users } from 'lucide-react'
import { useState } from 'react'

const COURSES = [
  {
    id: 1,
    name: 'Private 1-Day Baking Class',
    duration: '1 Day',
    price: '₹3,500',
    type: 'Individual / Individual focus',
    image: '/images/academy/private_class.png',
    syllabus: [
      'Individual / Private Teaching — One person only',
      'Homemade Egg & Eggless sponge cake method guidance (Vanilla, Chocolate, Red velvet and flavoured cakes)',
      'Flavoured sponge cakes like Strawberry, Pineapple, Mango, etc.',
      'Baking with OTG / Cooker — Equipment guidance and Cake tin selection (For cake measurements)',
      'Baking mistakes and causes — All Storage Guidance — Cake shelf life — Cake layer cutting',
      'Fresh cream frosting — Cake icing with design — Perfect icing with transportation tips',
      'How to store cream — Cream shelf life — Nozzles selection — How to work with food colors',
      '15 Varieties of Cakes (Egg & Eggless): Vanilla, Chocolate, Black Forest, White Forest, Rainbow, Strawberry, Blueberry, Black Currant, Pineapple, Mango, Pistachio, Red Velvet, Rasmalai, Rose Milk, Photo Cake',
      'Bonus — Food safety and guidance',
      'Bonus — How to get Profitable income without loss',
      'Bonus — How to start baking business from home',
      'Bonus — How to fix perfect price for any cakes',
      'Bonus — Business and marketing',
      'Bonus — Packing and transportation',
      'Bonus — Cake order guidance and Advertising',
      'Bonus — Cake photography guidance',
      'Bonus — Tips to become successful creative entrepreneur',
    ]
  },
  {
    id: 2,
    name: 'Professional Certified Baking Offline Class',
    duration: '2 Days',
    price: '₹3,500',
    type: 'Group Batch (6 Members)',
    image: '/images/academy/group_class.png',
    syllabus: [
      'Venue: Nalligounder Nagar, Kangayam Road, Tirupur 641606',
      'Fees: ₹3,500 Only | Detailed Baking Recipe PDF Free',
      'Group Batch — 6 Members | Limited Seats | Pre-Booking Required',
      'Direct Certificate Provided',
      '10 Years FREE Doubt Clearing & Business Guidance through WhatsApp',
      '350+ Students Completed in Honey Bakes',
      'Homemade Egg & Eggless sponge cake method guidance (Vanilla, Chocolate, Red velvet and flavoured cakes)',
      'Flavoured sponge cakes like Strawberry, Pineapple, Mango, etc.',
      'Baking with OTG / Cooker — Equipment guidance and Cake tin selection (For cake measurements)',
      'Baking mistakes and causes — All Storage Guidance — Cake shelf life — Cake layer cutting',
      'Fresh cream frosting — Cake icing with design — Perfect icing with transportation tips',
      'How to store cream — Cream shelf life — Nozzles selection — How to work with food colors',
      '15 Varieties of Cakes (Egg & Eggless): Vanilla, Chocolate, Black Forest, White Forest, Rainbow, Strawberry, Blueberry, Black Currant, Pineapple, Mango, Pistachio, Red Velvet, Rasmalai, Rose Milk, Photo Cake',
      'Bonus — Food safety and guidance',
      'Bonus — How to get Profitable income without loss',
      'Bonus — How to start baking business from home — How to fix perfect price for any cakes',
      'Bonus — Business and marketing — Packing and transportation',
      'Bonus — Cake order guidance and Advertising',
      'Bonus — Cake photography guidance',
      'Bonus — Tips to become successful creative entrepreneur',
    ]
  },
  {
    id: 3,
    name: 'Basic to Advanced Level Class',
    duration: '7 Days',
    price: '₹18,000',
    type: 'Mastery Bootcamp',
    image: '/images/academy/large_class.png',
    syllabus: [
      'Class Timing: Monday to Sunday, 10 AM to 3 PM',
      'Beginner friendly — Prior knowledge not required — No age restriction — Education level not required',
      'Baked items — Take it to your home',
      'Certificates will be provided',
      'Lifetime WhatsApp Support',
      'Detailed Recipe book with recipe & procedure of making',
      'Materials shop locations will be given',
      'Day 1 & 2 — 15 Varieties of Cakes (Egg & Eggless): Vanilla, Chocolate, Redvelvet, Rasamalai, Rose Milk, Black Forest, White Forest, Rainbow, Strawberry, Pista, Blueberry, Black Current, Pineapple, Mango, Photo Cake. (Individually bake 3 cakes — egg and eggless)',
      'Day 3 — 15 Varieties of Cookies (Whole wheat, Finger millet, Butter, Redvelvet, Vanilla filled, Chocolate, etc.) + Cupcakes (Vanilla, Chocolate, Redvelvet with frosting) + Tiramisu',
      'Day 4 — Brownies & Blondies (Fudgy, Nutella, Triple Chocolate, Assorted, White, Redvelvet, Rosemilk) + Dream Cake (5 in 1) + Matilda Cake',
      'Day 5 — Tres Leches (Rasamalai, Rosemilk) + Alia Bhat Milk Cake + Plum Cakes (Alcoholic, Non-alcoholic, Rich, Traditional, Instant)',
      'Day 6 — Jar Cakes + Tea Cakes (Without gel, Bakery style) + Cake Pops + Cake Sickles',
      'Day 7 — Special Desserts: Korean Cheese Bun, Chocolate Cake Tub, Chocolate Mousse, Strawberry Mousse, Pizza, Burger, Sandwich',
      'Day 7 — Theory: Price fixing, Packaging & delivering, Promotion knowledge, Materials & ingredients knowledge, Profit earning knowledge',
    ]
  }
]

export default function AcademyPage() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)

  const handleEnquiry = (courseName: string) => {
    const message = encodeURIComponent(`Hi Honey Bakes, I'm interested in the ${courseName}. Please provide more details.`)
    window.open(`https://wa.me/919384313025?text=${message}`, '_blank')
  }

  return (
    <div className="pt-32 pb-24 bg-honey min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 text-center space-y-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-4"
          >
            <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-black text-sm border border-white/30 flex items-center gap-2">
              <Sparkles size={16} />
              ACCREDITED MASTERY ACADEMY
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif font-black text-white drop-shadow-lg tracking-tighter"
          >
            Honey Bakes <span className="text-white italic font-serif">Academy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white font-sans font-black text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md leading-relaxed"
          >
            Turn your passion into a professional business. Join 350+ students who Mastered the art of baking with us.
          </motion.p>
        </header>

        {/* Hero Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Award, label: "Expert Certification", detail: "Professional Grade" },
            { icon: Users, label: "350+ Alumni", detail: "Growing community" },
            { icon: MessageCircle, label: "Lifetime Support", detail: "Expert guidance" }
          ].map((feat, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white/10 backdrop-blur-xl p-8 rounded-[50px] border border-white/20 text-center space-y-3 group hover:bg-white/20 transition-all shadow-2xl"
            >
               <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto text-honey shadow-2xl group-hover:scale-110 transition-transform">
                  <feat.icon size={40} />
               </div>
               <h3 className="text-3xl font-serif font-black">{feat.label}</h3>
               <p className="font-black opacity-90 text-lg uppercase tracking-widest">{feat.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-40">
          {COURSES.map((course, idx) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}
            >
              {/* Image Section */}
              <div className="flex-1 w-full sticky top-32">
                <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] group border-8 border-white/10">
                  <Image 
                    src={course.image} 
                    alt={course.name} 
                    fill 
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-8 left-8">
                     <div className="bg-white text-honey px-8 py-3 rounded-full font-black text-2xl shadow-2xl scale-110">
                        {course.price}
                     </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-10 w-full">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs border border-white/30 flex items-center gap-2">
                       <Clock size={16} /> {course.duration}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs border border-white/30 flex items-center gap-2">
                       <Star size={16} /> {course.type}
                    </span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-[1.1] drop-shadow-xl">
                    {course.name}
                  </h2>
                </div>

                <div className="space-y-6 bg-black/5 backdrop-blur-sm p-8 rounded-[50px] border border-white/10">
                  <h3 className="flex items-center gap-3 font-black text-white uppercase tracking-widest text-lg border-b-2 border-white/20 pb-4">
                    <BookOpen size={24} className="text-white" />
                    Mastery Syllabus
                  </h3>
                  
                  <ul className="space-y-4">
                    {course.syllabus.slice(0, expandedCourse === course.id ? undefined : 6).map((item, index) => (
                      <motion.li 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={index} 
                        className="flex items-start gap-4 text-white font-black text-xl leading-relaxed"
                      >
                        <CheckCircle size={28} className="text-white shrink-0 mt-1" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                    className="flex items-center gap-2 font-black text-white/70 hover:text-white transition-colors pt-4 group uppercase tracking-widest text-sm"
                  >
                    {expandedCourse === course.id ? 'Show Less' : 'View Full Professional Syllabus'}
                    <ChevronDown size={20} className={`transition-transform duration-300 ${expandedCourse === course.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => handleEnquiry(course.name)}
                    className="flex-1 flex items-center justify-center gap-4 bg-white text-honey hover:scale-[1.02] active:scale-95 px-12 py-8 rounded-[30px] font-black text-2xl transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] group"
                  >
                    <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
                    Reserve Your Seat
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
