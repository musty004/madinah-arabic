import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Books from './pages/Books'
import Lessons from './pages/Lessons'
import Lesson from './pages/Lesson'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/lessons/:bookId" element={<Lessons />} />
        <Route path="/lesson/:bookId/:lessonId" element={<Lesson />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App