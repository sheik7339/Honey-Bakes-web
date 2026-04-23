'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', 'Cakes', 'Brownies', 'Desserts']

const CAKES = [
  { id: 1,  name: 'Vanilla Cake',           category: 'Cakes',    status: 'available', image: '/images/gallery/VanillaCake.png' },
  { id: 2,  name: 'Chocolate Cake',         category: 'Cakes',    status: 'available', image: '/images/gallery/ChocolateCake.png' },
  { id: 3,  name: 'Red Velvet Cake',        category: 'Cakes',    status: 'available', image: '/images/gallery/RedVelvetCake.png' },
  { id: 4,  name: 'Pista Cake',             category: 'Cakes',    status: 'available', image: '/images/gallery/PistaCake.png' },
  { id: 5,  name: 'Black Forest Cake',      category: 'Cakes',    status: 'available', image: '/images/gallery/BlackForestCake.png' },
  { id: 6,  name: 'White Forest Cake',      category: 'Cakes',    status: 'available', image: '/images/gallery/WhiteForestCake.png' },
  { id: 7,  name: 'Pineapple Cake',         category: 'Cakes',    status: 'available', image: '/images/gallery/PineappleCake.png' },
  { id: 8,  name: 'Rainbow Cake',           category: 'Cakes',    status: 'available', image: '/images/gallery/RainbowCake.png' },
  { id: 9,  name: 'Blackcurrent Cake',      category: 'Cakes',    status: 'available', image: '/images/gallery/BlackcurrentCake.png' },
  { id: 10, name: 'Blueberry Cake',         category: 'Cakes',    status: 'available', image: '/images/gallery/BlueberryCake.png' },
  { id: 11, name: 'Strawberry Cake',        category: 'Cakes',    status: 'available', image: '/images/gallery/StrawberryCake.png' },
  { id: 12, name: 'Mango Cake',             category: 'Cakes',    status: 'available', image: '/images/gallery/MangoCake.png' },
  { id: 13, name: 'Rasamalai Cake',         category: 'Cakes',    status: 'available', image: '/images/gallery/RasamalaiCake.png' },
  { id: 14, name: 'Butterscotch Cake',      category: 'Cakes',    status: 'available', image: '/images/gallery/ButterscotchCake.png' },
  { id: 15, name: 'Choco Truffle Cake',     category: 'Cakes',    status: 'available', image: '/images/gallery/ChocoTruffleCake.png' },
  { id: 16, name: 'Nutty Bubble Cake',      category: 'Cakes',    status: 'available', image: '/images/gallery/NuttyBubbleCake.png' },
  { id: 17, name: 'Lotus Biscoff Cake',     category: 'Cakes',    status: 'available', image: '/images/gallery/LotusBiscoffCake.png' },
  { id: 18, name: 'Rosemilk Cake',          category: 'Cakes',    status: 'available', image: '/images/gallery/RosemilkCake.png' },
  { id: 19, name: 'Fudgy Brownie',          category: 'Brownies', status: 'available', image: '/images/gallery/FudgyBrownie.png' },
  { id: 20, name: 'Death by Chocolate',     category: 'Brownies', status: 'available', image: '/images/gallery/DeathbyChocolate.png' },
  { id: 21, name: 'Triple Chocolate Overloaded', category: 'Brownies', status: 'available', image: '/images/gallery/TripleChocolateOverloaded.png' },
  { id: 22, name: 'Red Velvet Cream Cheese Brownie', category: 'Brownies', status: 'available', image: '/images/gallery/RedVelvetCreamCheeseBrownie.png' },
  { id: 23, name: 'Kunafa Pistachios Brownie', category: 'Brownies', status: 'available', image: '/images/gallery/KunafaPistachiosBrownie.png' },
  { id: 24, name: 'Nutella Brownie',        category: 'Brownies', status: 'available', image: '/images/gallery/NutellaBrownie.png' },
  { id: 25, name: 'Biscoff Brownie',        category: 'Brownies', status: 'available', image: '/images/gallery/BiscoffBrownie.png' },
  { id: 26, name: 'Walnut Brownie',         category: 'Brownies', status: 'available', image: '/images/gallery/WalnutBrownie.png' },
  { id: 27, name: 'Almond Brownie',         category: 'Brownies', status: 'available', image: '/images/gallery/AlmondBrownie.png' },
  { id: 28, name: 'Classic Blondie',        category: 'Brownies', status: 'available', image: '/images/gallery/ClassicBlondie.png' },
  { id: 29, name: 'Rosemilk Blondie',       category: 'Brownies', status: 'available', image: '/images/gallery/RosemilkBlondie.png' },
  { id: 30, name: 'Brownie with Nuts',      category: 'Desserts', status: 'available', image: '/images/gallery/BrowniewithNuts.png' },
  { id: 31, name: 'Cake Pops',              category: 'Desserts', status: 'available', image: '/images/gallery/CakePops.png' },
  { id: 32, name: 'Cakesicles',             category: 'Desserts', status: 'available', image: '/images/gallery/Cakesicles.png' },
  { id: 33, name: 'Tresleches Cake Mini',   category: 'Desserts', status: 'available', image: '/images/gallery/TreslechesCakeMini.png' },
  { id: 34, name: 'Jar Cake Mini',          category: 'Desserts', status: 'available', image: '/images/gallery/JarCakeMini.png' },
  { id: 35, name: 'Jar Cake Big',           category: 'Desserts', status: 'available', image: '/images/gallery/JarCakeBig.png' },
  { id: 36, name: 'Cupcake',               category: 'Desserts', status: 'available', image: '/images/gallery/Cupcake.png' },
  { id: 37, name: 'Cupcake with Frosting', category: 'Desserts', status: 'available', image: '/images/gallery/CupcakewithFrosting.png' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [selectedWeights, setSelectedWeights] = useState<Record<number, string>>(
    CAKES.reduce((acc, cake) => ({ ...acc, [cake.id]: '1kg' }), {})
  )

  const filteredCakes = filter === 'All' 
    ? CAKES 
    : CAKES.filter(c => c.category === filter)

  const handleOrder = (cake: typeof CAKES[0]) => {
    const weight = selectedWeights[cake.id]
    const message = encodeURIComponent(`Hi Honey Bakes, I'm interested in ordering the ${cake.name}. Could you please share the price and availability details?`)
    window.open(`https://wa.me/919384313025?text=${message}`, '_blank')
  }

  return (
    <div className="pt-32 pb-24 bg-honey min-h-screen transition-colors duration-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center space-y-4">
          <h1 className="text-6xl md:text-9xl font-serif font-black text-white drop-shadow-xl tracking-tighter">The Cake <span className="text-white italic">Gallery</span></h1>
          <p className="text-white font-black text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-md leading-relaxed opacity-95">Browse our exquisite selection of artisanal cakes. Each masterpiece is crafted with the finest ingredients and boundless love.</p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all border-2 text-sm",
                filter === cat 
                  ? "bg-white text-honey border-white shadow-2xl scale-105" 
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white shadow-md font-black"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredCakes.map((cake) => (
              <motion.div
                layout
                key={cake.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 backdrop-blur-md rounded-[50px] overflow-hidden shadow-2xl border border-white/20 group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image 
                    src={cake.image} 
                    alt={cake.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    unoptimized={true}
                    priority={cake.id === 1}
                  />
                  <div className="absolute top-6 left-6">
                    <span className={cn(
                      "px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl text-white",
                      cake.status === 'available' ? "bg-green-600" : "bg-red-600"
                    )}>
                      {cake.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <p className="text-white/70 text-xs font-black uppercase tracking-widest">{cake.category}</p>
                    <h3 className="text-3xl font-serif font-black text-white drop-shadow-md">{cake.name}</h3>
                  </div>

                  {cake.category === 'Cakes' && (
                    <div className="flex bg-white/20 backdrop-blur-md rounded-2xl p-1 w-full border border-white/20">
                      {['0.5kg', '1kg'].map((w) => (
                        <button
                          key={w}
                          onClick={() => setSelectedWeights({ ...selectedWeights, [cake.id]: w })}
                          className={cn(
                            "flex-1 py-3 rounded-xl text-sm font-black transition-all uppercase tracking-widest",
                            selectedWeights[cake.id] === w 
                              ? "bg-white text-honey shadow-xl" 
                              : "text-white/60 hover:text-white"
                          )}
                        >
                          {w}
                        </button>
                      ))}
                    </div>
                  )}

                  <button 
                    disabled={cake.status === 'sold-out'}
                    onClick={() => handleOrder(cake)}
                    className={cn(
                      "w-full flex items-center justify-center gap-4 py-6 rounded-[25px] font-black text-lg transition-all shadow-2xl group/btn",
                      cake.status === 'available' 
                        ? "bg-white text-honey hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]" 
                        : "bg-white/10 text-white/40 cursor-not-allowed border border-white/10"
                    )}
                  >
                    <MessageCircle size={24} className="group-hover/btn:rotate-12 transition-transform" />
                    {cake.status === 'available' ? 'Order via WhatsApp' : 'Out of Stock'}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
