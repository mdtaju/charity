import axios from 'axios'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Gallery from '../src/components/Gallery/Gallery'
import Hero from '../src/components/Hero'
import HeroIntro from '../src/components/HeroIntro'
import HomeVideo from '../src/components/HomeVideo'
import Layout from '../src/components/Layout'

export default function Home({ gallery }) {
  return (
    <>
      <Layout>
        <Hero />
        <HeroIntro />
        <HomeVideo />
        <Gallery glr={gallery} />
      </Layout>
    </>
  )
}

export async function getServerSideProps({ locale }) {
  // https://rhma.sa

  const response = await axios.get(`https://rhma.sa/api/gallery`, {
    headers: {
      'Accept-Encoding': 'application/json',
    }
  });
  const revData = response.data.reverse();
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
      ])),
      gallery: revData
    }
  }
}