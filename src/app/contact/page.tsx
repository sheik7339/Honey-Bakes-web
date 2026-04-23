'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Send, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [currentDay, setCurrentDay] = useState('')
  const [status, setStatus] = useState({ isOpen: false, label: 'Checking...' })

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date()
      const hours = now.getHours()
      const dayName = now.toLocaleDateString('en-US', { weekday: 'long' })
      setCurrentDay(dayName)
      
      const isOpen = hours >= 9 && hours < 18
      setStatus({
        isOpen,
        label: isOpen ? 'Open Now' : 'Closed Now'
      })
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    checkStatus()
    const timer = setInterval(checkStatus, 30000)
    return () => clearInterval(timer)
  }, [])

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <div className="min-h-screen font-sans bg-white overflow-x-hidden">
      {/* SECTION 1: Top Content */}
      <section className="pt-24 md:pt-32 pb-20 bg-honey text-white px-4 md:px-0">
        <div className="max-w-7xl mx-auto md:px-6">
          {/* Header Section */}
          <header className="mb-12 md:mb-20 text-center space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] border border-white/40 shadow-xl"
            >
              Connect With Us
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-8xl font-serif font-black text-white leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]"
            >
              Let's <span className="text-white italic">Bake</span> Memories <br className="hidden md:block" />Together
            </motion.h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-stretch">
            {/* Info Side */}
            <div className="lg:col-span-5 h-full">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-8 md:p-12 rounded-[40px] md:rounded-[50px] shadow-2xl border border-white space-y-10 md:space-y-12 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Responsive Badge Positioning */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
                  <div className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-md border-2 ${status.isOpen ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'}`}>
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-white animate-pulse" />
                    {status.label}
                  </div>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div className="flex items-start gap-4 md:gap-6 group/item pt-6 md:pt-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-[20px] md:rounded-[28px] flex items-center justify-center text-white shrink-0 shadow-lg rotate-3">
                      <MapPin size={24} className="md:size-[32px]" />
                    </div>
                    <div className="space-y-1 md:space-y-2 max-w-[200px] md:max-w-none">
                      <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-black border-b-2 border-black/10 pb-1 inline-block italic opacity-40">FIND US</h3>
                      <p className="text-lg md:text-2xl font-serif font-black text-black leading-tight">
                        Honey Bakes, Tiruppur - Kangayam Rd,<br />
                        Pudhupalayam To Housing Unit Rd,<br />
                        Mudalipalayam, Tiruppur 641606
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-6 group/item">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-[20px] md:rounded-[28px] flex items-center justify-center text-white shrink-0 shadow-lg -rotate-3">
                      <Phone size={24} className="md:size-[32px]" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-black border-b-2 border-black/10 pb-1 inline-block italic opacity-40">CALL US</h3>
                      <div className="block">
                        <a href="tel:+919384313025" className="text-xl md:text-3xl font-serif font-black text-black hover:text-honey transition-colors break-words">
                          +91 93843 13025
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 md:pt-10 border-t-4 border-black/5 space-y-6 md:space-y-8">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Clock className="text-black" size={24} />
                    <h3 className="text-base md:text-xl font-serif font-black text-black tracking-[0.1em] uppercase">Studio Timings</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                    {weekDays.map((day) => (
                      <div 
                        key={day} 
                        className={`flex justify-between items-center px-4 md:px-6 py-2.5 md:py-3 rounded-[20px] md:rounded-[24px] border-2 transition-all ${day === currentDay ? 'bg-honey/10 border-honey shadow-sm' : 'bg-[#fdfdfd] border-black/5'}`}
                      >
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className={`text-[11px] md:text-sm font-black tracking-wider ${day === currentDay ? 'text-honey' : 'text-black'}`}>
                            {day}
                          </span>
                          {day === currentDay && (
                            <span className="bg-honey text-white text-[8px] md:text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest">
                              Today
                            </span>
                          )}
                        </div>
                        <span className={`font-black text-[11px] md:text-sm ${day === currentDay ? 'text-honey' : 'text-black'}`}>
                          09:00 AM - 06:00 PM
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-white p-8 md:p-14 rounded-[40px] md:rounded-[60px] shadow-2xl border border-white relative overflow-hidden flex flex-col justify-center"
            >
              <form className="space-y-8 md:space-y-12 relative z-10 w-full" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const subject = formData.get('subject');
                const message = formData.get('message');
                const text = `Hi Honey Bakes!%0A%0A*Name:* ${name}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
                window.open(`https://wa.me/919384313025?text=${text}`, '_blank');
              }}>
                <div className="space-y-3 md:space-y-5 text-center md:text-left">
                  <h3 className="text-3xl md:text-5xl font-serif font-black text-black">Direct Enquiry</h3>
                  <p className="text-black font-black text-base md:text-xl opacity-60">Send your requirements directly to our head chef via WhatsApp.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black ml-4 md:ml-6 italic opacity-40">SWEET NAME</label>
                    <input name="name" required type="text" placeholder="Your name" className="w-full bg-black/5 border-2 border-black/5 rounded-[24px] md:rounded-[30px] px-6 md:px-8 py-4 md:py-5 transition-all outline-none focus:border-black/20 focus:bg-white font-black text-black text-base md:text-lg" />
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black ml-4 md:ml-6 italic opacity-40">SUBJECT</label>
                    <select name="subject" required className="w-full bg-black/5 border-2 border-black/5 rounded-[24px] md:rounded-[30px] px-6 md:px-8 py-4 md:py-5 transition-all outline-none focus:border-black/20 focus:bg-white font-black text-black text-base md:text-lg appearance-none">
                      <option>Custom Cake Order</option>
                      <option>Wedding Cake Consultation</option>
                      <option>Academy & Masterclass</option>
                      <option>Bulk/Event Orders</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-black ml-4 md:ml-6 italic opacity-40">YOUR VISION</label>
                  <textarea name="message" required rows={4} placeholder="Describe your dream cake..." className="w-full bg-black/5 border-2 border-black/5 rounded-[30px] md:rounded-[40px] px-6 md:px-8 py-5 md:py-6 transition-all outline-none focus:border-black/20 focus:bg-white font-black text-black text-base md:text-lg resize-none" />
                </div>

                <button type="submit" className="w-full group flex items-center justify-center gap-4 md:gap-5 bg-black text-white py-6 md:py-8 rounded-[24px] md:rounded-[35px] font-black text-lg md:text-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <span>Contact via WhatsApp</span>
                  <Send size={24} className="md:size-[32px]" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Map Section */}
      <section className="py-16 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Honey+Bakes+Tiruppur+Kangayam+Rd+Mudalipalayam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative"
          >
            <div className="relative w-full h-[400px] md:h-[650px] rounded-[40px] md:rounded-[80px] overflow-hidden bg-white shadow-2xl border-4 md:border-[12px] border-[#FFF5F8]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15662.748530467!2d77.3486303248384!3d11.062035978187842!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90656cbdf0caf%3A0x6bba843b0c8ef3b3!2sHoney%20Bakes!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                className="grayscale contrast-125"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="bg-white px-6 md:px-10 py-3 md:py-5 rounded-full shadow-2xl flex items-center gap-2 md:gap-4 border-2 md:border-4 border-honey">
                  <MapPin className="text-honey size-6 md:size-8" />
                  <span className="font-black text-honey text-sm md:text-xl uppercase tracking-widest">Get Directions</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* SECTION 3: Footer Buffer */}
      <section className="h-24 md:h-40 bg-honey" />
    </div>
  )
}
