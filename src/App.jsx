import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Routes>
          <Route path="/MovieMedia" element={<MovieMedia />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/Register" element={<Register />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  )
}

export default App
