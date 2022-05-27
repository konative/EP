import type { NextPage } from 'next'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    // <div className="bg-gradient-to-tr from-purple-800 to-fuchsia-500 via-purple-600 text-white">
    <div className='bg-purple-600 text-white'>
      <NavBar></NavBar>
      <Hero></Hero>
      <FeatureSection></FeatureSection>
      <Footer></Footer>
    </div>
  )
}

export default Home
