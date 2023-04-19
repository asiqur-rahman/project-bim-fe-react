import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import AboutUSPage  from './pages/AboutUSPage'
import StudyPage  from './pages/StudyPage'
import NewsBlogsPage  from './pages/NewsBlogsPage'
import EventsPage  from './pages/EventsPage'
import CourseTypePage  from './pages/CourseTypePage'
import CourseDetailsPage  from './pages/CourseDetailsPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/about-us/:page" element={<AboutUSPage />} />
        </Routes>
        <Routes>
          <Route path="/study/:page" element={<StudyPage />} />
        </Routes>
        <Routes>
          <Route path="/course-type/:id" element={<CourseTypePage />} />
        </Routes>
        <Routes>
          <Route path="/research/:page" element={<StudyPage />} />
        </Routes>
        <Routes>
          <Route path="/stories/:page" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/events/:page" element={<EventsPage />} />
        </Routes>
        <Routes>
          <Route path="/news-blogs/:page" element={<NewsBlogsPage />} />
        </Routes>
        <Routes>
          <Route path="/registration/:page" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/course-details/:id" element={<CourseDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
