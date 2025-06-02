// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Withdraw from "./pages/Withdraw";



export default function App() {
  return (
    <Router >
      <nav  style={{ padding: "10px", backgroundColor: "#f0f0f0", textAlign: "center",display:"none" }}>
       
        | <Link to="/deposit">Deposit</Link>
        | <Link to="/signup">Signup</Link>
        | <Link to="/login">Login</Link>
        | <Link to="/dashboard">Dashboard</Link>
        | <Link to="/withdraw">Withdraw</Link>
        
        
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/withdraw" element={<Withdraw />} />
        
        {/* Add more routes as needed */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}
