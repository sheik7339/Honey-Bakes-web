'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    
    // SaaS Simulation: Store in localStorage
    const existing = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
    localStorage.setItem('newsletter_emails', JSON.stringify([...existing, { email, date: new Date().toISOString() }]));
    
    setSubscribed(true);
    
    setTimeout(() => {
       window.open(`https://wa.me/919384313025?text=Hi, I subscribed to Honey Bakes updates with ${email}!`, '_blank');
    }, 2000);
  }

  const socialLinks = [
    { Icon: Instagram, href: 'https://www.instagram.com/_honey_bakes_/' },
    { Icon: Facebook, href: 'https://wa.me/919384313025' }, // Redirecting to WA for FB for now as fallback
    { Icon: Twitter, href: 'https://wa.me/919384313025' }
  ]

  return (
    <footer className="bg-honey text-white pt-20 pb-6 px-6 border-t border-white/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif font-black text-white tracking-tighter drop-shadow-md text-left">HONEY BAKES</h2>
          <p className="text-white font-sans font-black leading-relaxed drop-shadow-sm text-left opacity-90">
            Crafting elegance in every bite. From bespoke cakes to professional academy training, we bring your sweet dreams to life.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-white/20 border border-white/30 rounded-2xl hover:bg-white hover:text-honey transition-all shadow-lg group"
              >
                <social.Icon size={20} className="group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-serif font-black text-white mb-6 border-b-2 border-white/30 pb-2 inline-block italic">Quick Links</h3>
          <ul className="space-y-4 font-black">
            <li><Link href="/gallery" className="hover:translate-x-1 inline-block transition-transform">Cake Gallery</Link></li>
            <li><Link href="/academy" className="hover:translate-x-1 inline-block transition-transform">Academy Courses</Link></li>
            <li><Link href="/alumni" className="hover:translate-x-1 inline-block transition-transform">Alumni Success</Link></li>
            <li><Link href="/contact" className="hover:translate-x-1 inline-block transition-transform">Contact Us</Link></li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-serif font-black text-white mb-6 border-b-2 border-white/30 pb-2 inline-block italic">Contact Info</h3>
          <ul className="space-y-5 font-black text-white">
            <li className="flex items-start gap-3 group/link">
              <MapPin className="text-white shrink-0 group-hover:scale-110 transition-transform" size={20} />
              <span className="drop-shadow-sm opacity-90">Honey Bakes, Tiruppur - Kangayam Rd, Mudalipalayam, Tiruppur 641606</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-white shrink-0" size={20} />
              <span className="drop-shadow-sm opacity-90">+91 93843 13025</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-white shrink-0" size={20} />
              <span className="drop-shadow-sm opacity-90">Mon - Sun: 9AM - 6PM (Live)</span>
            </li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="text-xl font-serif font-black text-white mb-6 border-b-2 border-white/30 pb-2 inline-block italic">Newsletter</h3>
          
          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-[30px] border border-white/30 text-center space-y-3 animate-in fade-in zoom-in duration-500">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-honey shadow-xl">
                  <CheckCircle2 size={32} />
               </div>
               <h4 className="text-xl font-black text-white">Welcome to the Club!</h4>
               <p className="text-white font-black text-sm drop-shadow-sm opacity-90">Your email has been stored. You'll receive our sweet updates soon! ✨</p>
            </div>
          ) : (
            <>
              <p className="text-white mb-6 font-black drop-shadow-sm opacity-90">Subscribe for sweet updates and course alerts.</p>
              <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Your email address" 
                  className="bg-white/20 border border-white/30 rounded-2xl py-4 px-6 w-full focus:outline-none focus:border-white placeholder:text-white/70 text-white shadow-inner font-black"
                />
                <button type="submit" className="bg-white text-honey py-4 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-2xl">
                  Join the Circle
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-4 border-t border-white/10 text-center text-white font-black text-sm opacity-60">
        &copy; {new Date().getFullYear()} Honey Bakes. All rights reserved. Designed with ❤️ by Sheik Mohammed.
      </div>
    </footer>
  )
}
