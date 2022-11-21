import Counter from '../src/components/Counter'
import Gallery from '../src/components/Gallery/Gallery'
import Hero from '../src/components/Hero'
import HeroIntro from '../src/components/HeroIntro'
import Layout from '../src/components/Layout'
import WeDo from '../src/components/WeDo'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <HeroIntro />
        <WeDo />
        <Counter />
        <Gallery />
      </Layout>
    </>
  )
}
