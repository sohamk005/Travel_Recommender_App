import './css/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Featured from './pages/Featured'
import Search from './components/search'
import {Routes, Route} from "react-router-dom"
import criteriaList from './components/CriteriaList'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Featured" element={<Featured />}></Route>
      <Route path="/About" element={<About />}></Route>
    </Routes>
    </>
  )
}

export default App
