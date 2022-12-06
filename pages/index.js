import Gallery from '../src/components/Gallery/Gallery'
import Hero from '../src/components/Hero'
import HeroIntro from '../src/components/HeroIntro'
import Layout from '../src/components/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <HeroIntro />
        <Gallery />
      </Layout>
    </>
  )
}
