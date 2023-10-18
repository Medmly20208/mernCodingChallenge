import { Routes, Route } from "react-router-dom";
import './App.scss'

//components
import Nav  from "./components/Nav";

//pages
import Projects from "./pages/Projects"
import Tasks from "./pages/Tasks"

function App() {

  return (
    <>
   
     <Routes>
        <Route element={<Nav/>} path="home">
        <Route element={<Projects/>} path="projects"></Route>
        <Route element={<Tasks/>} path="tasks"></Route>
        </Route>
        
      </Routes>

    </>
  )
}

export default App
