import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage'
import AboutUSPage  from './pages/AboutUSPage'

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
          <Route path="/study/:page" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/research/:page" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/stories/:page" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/events/:page" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/news-blog/:page" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/registration/:page" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
