import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import AboutUS from '../components/AboutUS'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutUSPage() {
  const { page } = useParams();
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <AboutUS/>
    <Footer/>
    </>
  )
}

export default AboutUSPage