import "./globals.css"
import { geist } from "./fonts"
import type React from "react"

export const metadata = {
  title: "Trazo Arquitectura",
  description: "Sitio web de Trazo Arquitectura - Hecho por Abril Marangoni",
  generator: 'Hecho por Abril Marangoni'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className={geist.className}>{children}</body>
    </html>
  )
}
