
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProgramsSection } from "@/components/programs-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/ui/navbar"

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProgramsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
