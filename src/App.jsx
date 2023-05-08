import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import AboutUSPage  from './pages/AboutUSPage'
import StoryPage  from './pages/StoryPage'
import StudyPage  from './pages/StudyPage'
import NewsBlogsPage  from './pages/NewsBlogsPage'
import EventTypePage  from './pages/EventTypePage'
import CourseTypePage  from './pages/CourseTypePage'
import CourseDetailsPage  from './pages/CourseDetailsPage'
import EventDetailsPage  from './pages/EventDetailsPage'

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
          <Route path="/event-type/:id" element={<EventTypePage />} />
          <Route path="/news-blogs/:page" element={<NewsBlogsPage />} />
          <Route path="/registration/:page" element={<HomePage />} />
          <Route path="/course-details/:id" element={<CourseDetailsPage />} />
          <Route path="/event-details/:id" element={<EventDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
