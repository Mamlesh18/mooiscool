import { Route, Routes } from 'react-router-dom'
import Landing from './components/pages/Landing.jsx'
import BlogsPage from './components/pages/BlogsPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/blogs" element={<BlogsPage />} />
    </Routes>
  )
}

export default App
