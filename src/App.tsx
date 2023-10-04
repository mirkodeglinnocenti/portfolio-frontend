import { Routes, Route, /*Navigate*/ } from "react-router-dom";
// import AuthUser from "./services/AuthUser";
import StandardLayout from "./components/layouts/StandardLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  // const { getToken } = AuthUser();

  return (
    <>
      <Routes>
        <Route element={<StandardLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/registration" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route
            path="/dashboard"
            element={getToken() ? <Dashboard /> : <Navigate to="/login" />}
          ></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
