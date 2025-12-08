"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { geist } from "../app/fonts"

const residencialProjects = [
  {
    id: 1,
    title: "25 de mayo",
    location: "",
    image: "/hero-architecture-1.jpg",
  },
  {
    id: 2,
    title: "Bosque Sur 1",
    location: "",
    image: "/hero-architecture-2.jpg",
  },
  {
    id: 3,
    title: "Bosque Sur 2",
    location: "",
    image: "/hero-architecture-3.jpg",
  },
  {
    id: 4,
    title: "Bosque Sur 3",
    location: "",
    image: "/hero-architecture-4.jpg",
  },
  {
    id: 5,
    title: "Depto. Buenos Aires",
    location: "",
    image: "/hero-architecture-5.jpg",
  },
  {
    id: 6,
    title: "Depto. Tucumán",
    location: "",
    image: "/hero-architecture-1.jpg",
  },
  {
    id: 7,
    title: "La Estafeta",
    location: "",
    image: "/hero-architecture-2.jpg",
  },
  {
    id: 8,
    title: "Perez Bulnes",
    location: "",
    image: "/hero-architecture-3.jpg",
  },
  {
    id: 9,
    title: "PH Paso",
    location: "",
    image: "/hero-architecture-4.jpg",
  },
  {
    id: 10,
    title: "Taller Patagones",
    location: "",
    image: "/hero-architecture-5.jpg",
  },
]

const comercialProjects = [
  {
    id: 1,
    title: "Bar Arco",
    location: "",
    image: "/hero-architecture-1.jpg",
  },
  {
    id: 2,
    title: "Oficina Ducpe",
    location: "",
    image: "/hero-architecture-2.jpg",
  },
  {
    id: 3,
    title: "Santo Cafe",
    location: "",
    image: "/hero-architecture-3.jpg",
  },
  {
    id: 4,
    title: "Tom Constitucion",
    location: "",
    image: "/hero-architecture-4.jpg",
  },
  {
    id: 5,
    title: "Tom Take Away",
    location: "",
    image: "/hero-architecture-5.jpg",
  },
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"residencial" | "comercial">("residencial")
  const [isExpanded, setIsExpanded] = useState(false)

  const projects = activeTab === "residencial" ? residencialProjects : comercialProjects
  const displayedProjects = isExpanded ? projects : projects.slice(0, 4)
  const hasMoreProjects = projects.length > 4

  // Resetear expansión cuando cambia el tab
  const handleTabChange = (tab: "residencial" | "comercial") => {
    setActiveTab(tab)
    setIsExpanded(false)
  }

  return (
    <section id="nuestros-proyectos" className="min-h-screen bg-[#f3f2f3] pt-[150px] pb-24 px-6 md:px-[150px]">
      {/* Título */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`${geist.className} text-[#212f35] text-5xl md:text-7xl font-light text-center mb-12`}
      >
        Proyectos
      </motion.h1>

      {/* Toggle Switch */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-16"
      >
        <div className="relative inline-flex items-center bg-[#212f35]/10 rounded-full p-1.5">
          {/* Círculo que se desplaza */}
          <motion.div
            className="absolute top-1.5 bottom-1.5 bg-[#212f35] rounded-full"
            animate={{
              left: activeTab === "residencial" ? "6px" : "50%",
              width: "calc(50% - 6px)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <button
            onClick={() => handleTabChange("residencial")}
            className={`${geist.className} relative z-10 px-10 py-3.5 text-base font-light transition-colors duration-300 whitespace-nowrap ${
              activeTab === "residencial" ? "text-white" : "text-[#212f35]"
            }`}
          >
            Residencial
          </button>
          <button
            onClick={() => handleTabChange("comercial")}
            className={`${geist.className} relative z-10 px-10 py-3.5 text-base font-light transition-colors duration-300 whitespace-nowrap ${
              activeTab === "comercial" ? "text-white" : "text-[#212f35]"
            }`}
          >
            Comercial
          </button>
        </div>
      </motion.div>

      {/* Grid de Proyectos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${isExpanded}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-[#212f35]/50 transition-all duration-500" />
                  
                  {/* Info - Centrado */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className={`${geist.className} text-white text-2xl md:text-3xl font-light mb-2 text-center`}>
                      {project.title}
                    </h3>
                    <p className={`${geist.className} text-white/80 text-sm font-light text-center`}>
                      {project.location}
                    </p>
                  </div>

                  {/* Ver más */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`${geist.className} text-white text-sm uppercase tracking-wider border-b border-white pb-1`}>
                      Ver más
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botón Ver más / Ver menos */}
          {hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`${geist.className} flex items-center gap-2 text-[#212f35] hover:text-[#212f35]/70 transition-colors duration-300 font-light`}
              >
                <span>{isExpanded ? "Ver menos" : "Ver más"}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

