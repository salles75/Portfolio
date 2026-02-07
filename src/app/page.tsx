import { Header } from '@/components/layout'
import {
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
