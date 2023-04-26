import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import AboutUSPage  from './pages/AboutUSPage'
import StoryPage  from './pages/StoryPage'
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
          <Route path="/about-us/:page" element={<AboutUSPage />} />
          <Route path="/stories/:page" element={<StoryPage />} />
          <Route path="/study/:page" element={<StudyPage />} />
          <Route path="/course-type/:id" element={<CourseTypePage />} />
          <Route path="/research/:page" element={<StudyPage />} />
          <Route path="/stories/:page" element={<HomePage />} />
          <Route path="/events/:page" element={<EventsPage />} />
          <Route path="/news-blogs/:page" element={<NewsBlogsPage />} />
          <Route path="/registration/:page" element={<HomePage />} />
          <Route path="/course-details/:id" element={<CourseDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
