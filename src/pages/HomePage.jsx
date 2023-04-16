import { useEffect } from 'react'
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Academic from '../components/Academic'
import CampusInformation from '../components/CampusInformation'
import Course from '../components/Course'
import Admission from '../components/Admission'
import Events from '../components/Events'
import LatestNews from '../components/LatestNews'
import Footer from '../components/Footer'

function HomePage() {

  useEffect(() => {
    window.SpinnerHide();
    AOS.init();
  }, []);

  return (
    <>
    <Spinner/>
    <TopHeader/>
    <Navbar/>
    <Banner/>
    <Academic/>
    <CampusInformation/>
    <Course page="home-page"/>
    <Admission/>
    <Events page="home-page"/>
    <LatestNews page="home-page"/>
    <Footer/>
    </>
  )
}

export default HomePage
