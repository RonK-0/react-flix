import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/pages/Login/Login"
import Home from "./components/pages/Hume/Home"
import Movies from "./components/pages/Movies/Movies"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movie" element={<Movies/>}/>
        </Routes>
      </Router>

    </>
  )
}
export default App