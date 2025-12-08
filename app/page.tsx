"use client"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import { geist } from "./fonts"

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#f3f2f3] ${geist.variable}`}>
      <Header />

      <HeroSection />

      <ProjectsSection />

      <section
        id="servicios"
        className="flex flex-col items-center justify-center pt-[150px] pb-16 px-[150px] bg-[#f3f2f3]"
      >
        <h1 className={`${geist.className} text-[#212f35] text-4xl font-light mb-8`}>Servicios</h1>
        <div className="w-full h-[80vh]">
          <DynamicFrameLayout />
        </div>
      </section>

      <ContactSection />

      <Footer />
    </div>
  )
}
