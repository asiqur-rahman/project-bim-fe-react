import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import Events from '../components/Events'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function EventsPage() {
  const { page } = useParams();

  return (
    <>
    <TopHeader/>
    <Spinner/>
    <Navbar/>
    <Events page={page}/>
    <Footer/>
    </>
  )
}

export default EventsPage
