import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { DSPEngineSection } from '@/components/sections/DSPEngineSection'
import { PerformanceSection } from '@/components/sections/PerformanceSection'
import { PlatformSection } from '@/components/sections/PlatformSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DSPEngineSection />
        <PerformanceSection />
        <PlatformSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
