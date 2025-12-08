"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

const heroImages: readonly string[] = [
  "/hero-architecture-1.jpg",
  "/hero-architecture-2.jpg",
  "/hero-architecture-3.jpg",
  "/hero-architecture-4.jpg",
  "/hero-architecture-5.jpg",
] as const

export default function HeroSection(): JSX.Element {
  const [currentImage, setCurrentImage] = useState<number>(0)

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setCurrentImage((prev: number) => (prev + 1) % heroImages.length)
    }, 4000)

    return (): void => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
      {/* Background Images with fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImages[currentImage]})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 z-0 bg-[#212f35]/40 pointer-events-none" />

      {/* Contenido principal */}
      <div className="flex-grow flex flex-col z-10 pb-12 relative justify-end">
        
        {/* Cuadro de texto con efecto glass */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[20%] md:top-auto md:bottom-[20%] right-6 md:right-12 w-[90%] md:w-[32rem] p-8 md:p-10 rounded-sm"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2 className="font-light italic text-3xl md:text-4xl leading-tight mb-6 tracking-tight text-white">
            Arquitectura que 
            <br />inspira espacios
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed opacity-90 text-[#f3f2f3]">
            Diseñamos espacios únicos que combinan funcionalidad, estética y sostenibilidad para transformar tu visión en realidad.
          </p>
        </motion.div>

        {/* Logo grande a la izquierda */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full px-4 md:px-8 mt-auto z-0 pointer-events-none select-none flex justify-start"
        >
          <Image 
            src="/logo3.png" 
            alt="TRAZO" 
            width={1200} 
            height={600} 
            className="w-[85vw] md:w-[60vw] max-w-6xl opacity-30 object-contain brightness-0 invert"
          />
        </motion.div>

        {/* Indicador de Scroll */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 right-8 md:right-12 z-20 flex items-center gap-2 text-white"
        >
          <span className="text-xs md:text-sm uppercase tracking-widest font-light">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? "w-12 bg-[#b4a66d]" : "w-2 bg-[#ded7cd]/50 hover:bg-[#ded7cd]"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
