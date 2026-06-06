
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Donate from "./pages/Donate.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App(){
  return (
    <div>
      <nav style={{padding:10, display:"flex", gap:10}}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/donate">Become Donor</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/donate" element={<Donate/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}
