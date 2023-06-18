import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import SignIn from '../components/SignIn'
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
    <SignIn page={page}/>
    <Footer/>
    </>
  )
}

export default AboutUSPage
