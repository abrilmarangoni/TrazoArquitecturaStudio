"use client"

import type React from "react"

import { geist } from "@/app/fonts"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    prefijo: "AR +54",
    telefono: "",
    servicio: "",
    duda: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contacto" className="px-[150px] py-[150px] bg-[#f3f2f3]">
      <div className="grid grid-cols-2 gap-12">
        {/* Left side - Image */}
        <div className="relative h-[700px] rounded-lg overflow-hidden">
          <img
            src="/professional-architecture-team-of-four-people-sitt.jpg"
            alt="Equipo de arquitectos"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col justify-center">
          <h2 className={`${geist.className} text-[#212f35] text-5xl font-light mb-8`}>Contactanos!</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre y Apellido */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`${geist.className} text-[#212f35] text-sm mb-2 block`}>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-[#212f35]/30 text-[#212f35] focus:outline-none focus:border-[#212f35] transition-colors"
                />
              </div>
              <div>
                <label className={`${geist.className} text-[#212f35] text-sm mb-2 block`}>Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-[#212f35]/30 text-[#212f35] focus:outline-none focus:border-[#212f35] transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={`${geist.className} text-[#212f35] text-sm mb-2 block`}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-[#212f35]/30 text-[#212f35] focus:outline-none focus:border-[#212f35] transition-colors"
              />
            </div>

            {/* Prefijo y Teléfono */}
            <div className="grid grid-cols-[140px_1fr] gap-4">
              <div>
                <label className={`${geist.className} text-[#212f35] text-sm mb-2 block`}>Prefijo</label>
                <select
                  name="prefijo"
                  value={formData.prefijo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-[#212f35]/30 text-[#212f35] focus:outline-none focus:border-[#212f35] transition-colors appearance-none"
                >
                  <option value="AR +54" className="bg-[#f3f2f3]">
                    AR +54
                  </option>
                  <option value="US +1" className="bg-[#f3f2f3]">
                    US +1
                  </option>
                  <option value="ES +34" className="bg-[#f3f2f3]">
                    ES +34
                  </option>
                </select>
              </div>
              <div>
                <label className={`${geist.className} text-[#212f35] text-sm mb-2 block`}>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 bg-transparent border border-[#212f35]/30 text-[#212f35] placeholder:text-[#212f35]/50 focus:outline-none focus:border-[#212f35] transition-colors"
                />
              </div>
            </div>

            {/* Servicio */}
            <div>
              <label className={`${geist.className} text-[#212f35] text-sm mb-2 block`}>
                ¿Sobre que servicio te gustaría consultar?
              </label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-[#212f35]/30 text-[#212f35] focus:outline-none focus:border-[#212f35] transition-colors appearance-none"
              >
                <option value="" className="bg-[#f3f2f3]">
                  Elige una opción
                </option>
                <option value="arquitectura" className="bg-[#f3f2f3]">
                  Arquitectura
                </option>
                <option value="diseno-interior" className="bg-[#f3f2f3]">
                  Diseño de Interiores
                </option>
                <option value="consultoria" className="bg-[#f3f2f3]">
                  Consultoría
                </option>
              </select>
            </div>

            {/* Duda */}
            <div>
              <label className={`${geist.className} text-[#212f35] text-sm mb-2 block`}>¿Cual es tu duda?</label>
              <textarea
                name="duda"
                value={formData.duda}
                onChange={handleChange}
                placeholder="Agregar respuesta aquí"
                rows={4}
                className="w-full px-4 py-3 bg-transparent border border-[#212f35]/30 text-[#212f35] placeholder:text-[#212f35]/50 focus:outline-none focus:border-[#212f35] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`${geist.className} w-full py-4 bg-[#3d555b] hover:bg-[#3d555b]/90 text-[#f3f2f3] font-light text-lg transition-colors duration-300`}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
