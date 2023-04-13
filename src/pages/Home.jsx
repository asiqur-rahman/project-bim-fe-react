import TopHeader from '../components/TopHeader'
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import AcademicArea from '../components/AcademicArea'
import CampusInformation from '../components/CampusInformation'
import Course from '../components/Course'

function Home() {

  return (
    <>
    {/* <Spinner/> */}
    <TopHeader/>
    <Navbar/>
    <Banner/>
    <AcademicArea/>
    <CampusInformation/>
    <Course/>
    </>
  )
}

export default Home
