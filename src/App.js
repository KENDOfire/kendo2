// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
        | <Link to="/deposit">Deposit</Link>
        | <Link to="/signup">Signup</Link>
        | <Link to="/login">Login</Link>
        | <Link to="/dashboard">Dashboard</Link>
        

        <Link to="/deposit">Deposit</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
