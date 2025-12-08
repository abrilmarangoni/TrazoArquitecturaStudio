"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FrameComponent } from "./FrameComponent"

interface Frame {
  id: number
  image: string
  title: string
  description: string
  defaultPos: number
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  autoplayMode: "all" | "hover"
  isHovered: boolean
}

const initialFrames: Frame[] = [
  {
    id: 1,
    image: "/cozy-modern-cafe-interior-with-wooden-tables-and-n.jpg",
    title: "Café Moderno",
    description: "Espacio acogedor con diseño minimalista",
    defaultPos: 0,
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 2,
    image: "/small-minimalist-house-exterior-with-garden.jpg",
    title: "Casa Pequeña",
    description: "Vivienda minimalista con jardín natural",
    defaultPos: 1,
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 3,
    image: "/cozy-reading-corner-with-bookshelf-and-armchair.jpg",
    title: "Rincón de Lectura",
    description: "Espacio tranquilo para disfrutar",
    defaultPos: 2,
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 4,
    image: "/charming-cottage-house-with-front-porch.jpg",
    title: "Cabaña Acogedora",
    description: "Refugio perfecto en la naturaleza",
    defaultPos: 3,
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 5,
    image: "/cozy-coffee-shop-with-plants-and-warm-lighting.jpg",
    title: "Cafetería Local",
    description: "Ambiente cálido para reunirse",
    defaultPos: 4,
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
]

export default function DynamicFrameLayout() {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<number | null>(null)
  const [hoverSize] = useState(50)
  const [gapSize] = useState(4)
  const [autoplayMode] = useState<"all" | "hover">("all")

  const getColSizes = () => {
    if (hovered === null) {
      return "1fr 1fr 1fr 1fr 1fr"
    }
    const hoveredFraction = hoverSize
    const nonHoveredFraction = (100 - hoverSize) / 4

    return frames.map((_, index) => (index === hovered ? `${hoveredFraction}fr` : `${nonHoveredFraction}fr`)).join(" ")
  }

  return (
    <div className="space-y-4 w-full h-full">
      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateColumns: getColSizes(),
          gridTemplateRows: "1fr",
          gap: `${gapSize}px`,
          transition: "grid-template-columns 0.8s ease-in-out",
          height: "calc(75vh - 15px)",
        }}
      >
        {frames.map((frame, index) => {
          return (
            <motion.div
              key={frame.id}
              className="relative h-full"
              style={{
                transition: "transform 0.8s ease-in-out",
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <FrameComponent
                image={frame.image}
                title={frame.title}
                description={frame.description}
                width="100%"
                height="100%"
                className="absolute inset-0"
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                showControls={false}
                label={`Frame ${frame.id}`}
                showFrame={false}
                autoplayMode={autoplayMode}
                isHovered={hovered === index}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
