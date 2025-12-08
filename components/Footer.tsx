"use client"
import { geist } from "../app/fonts"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useCallback } from "react"

export default function Footer(): JSX.Element {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)

  const handleScroll = useCallback((): void => {
    const scrollTop: number = window.scrollY
    const windowHeight: number = window.innerHeight
    const documentHeight: number = document.documentElement.scrollHeight
    const isNearBottom: boolean = scrollTop + windowHeight >= documentHeight - 100
    setIsAtBottom(isNearBottom)
  }, [])

  useEffect(() => {
    let rafId: number

    const onScroll = (): void => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    handleScroll()

    return (): void => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [handleScroll])

  return (
    <>
      {/* Espacio reservado para el footer */}
      <div className="h-[320px] bg-[#f3f2f3]" />
      
      <AnimatePresence>
        {isAtBottom && (
          <motion.footer
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 bg-[#3d555b] py-40 px-[150px] overflow-hidden z-50"
          >
            {/* Logo de fondo en blanco transparente */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
               className="absolute inset-0 flex items-center justify-center pointer-events-none pt-16"
            >
              <Image 
                src="/logo3.png" 
                alt="TRAZO" 
                width={800} 
                height={400} 
                className="object-contain brightness-0 invert" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-5 left-[150px] right-[150px] z-10 flex justify-between items-center"
            >
              {/* Left - Copyright */}
              <p className={`${geist.className} text-sm text-[#f3f2f3]`}>© 2025 TRAZO</p>

              {/* Center - Legal Links */}
              <div className="flex gap-12">
                <a
                  href="#"
                  className={`${geist.className} text-sm text-[#f3f2f3] hover:text-[#b4a66d] transition-colors`}
                >
                  Privacidad
                </a>
                <a
                  href="#"
                  className={`${geist.className} text-sm text-[#f3f2f3] hover:text-[#b4a66d] transition-colors`}
                >
                  Legal
                </a>
              </div>

              {/* Right - Social Icons */}
              <div className="flex gap-6">
                <a href="#" className="text-[#f3f2f3] hover:text-[#b4a66d] transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-[#f3f2f3] hover:text-[#b4a66d] transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.226-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.583.072-4.948.149-3.227 1.696-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-[#f3f2f3] hover:text-[#b4a66d] transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.footer>
        )}
      </AnimatePresence>
    </>
  )
}
