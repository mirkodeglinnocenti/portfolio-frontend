import { Routes, Route } from "react-router-dom";
import StandardLayout from "./components/layouts/StandardLayout";
import Home from './pages/Home';
import Skills from "./components/home/Skills";
import Story from "./components/home/Story";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<StandardLayout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/story" element={<Story/>}></Route>
          <Route path="/contact" element={<Footer/>}></Route>
          <Route path="/registration" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
