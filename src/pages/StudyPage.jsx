import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import Course from '../components/Course'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function StudyPage() {
  const { page } = useParams();
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <Course page={page}/>
    <Footer/>
    </>
  )
}

export default StudyPage
