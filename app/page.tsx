import { Footer } from '@/components/footer'
import Header from '@/components/header'
import FAQ from '@/components/sections/faq'
import HeroSection from '@/components/sections/hero'
import HowItWorks from '@/components/sections/how-it-works'
import Logos from '@/components/sections/logos'
import Problem from '@/components/sections/problem'
import Solution from '@/components/sections/solution'
import Testimonials from '@/components/sections/testimonials'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Logos />
      <Problem />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
