import { Routes, Route } from "react-router-dom";
import StandardLayout from "./components/layouts/StandardLayout";
import Home from './pages/Home'
import Register from "./pages/Register";
import Login from "./pages/Login";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<StandardLayout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/registration" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
