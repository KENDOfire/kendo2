// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Withdraw from "./pages/Withdraw";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Codevalidation from "./pages/Codevalidation";



export default function App() {
  return (
    <Router >
      <nav  style={{ padding: "10px", backgroundColor: "#f0f0f0", textAlign: "center",display:"none" }}>
       
        | <Link to="/deposit">Deposit</Link>
        | <Link to="/signup">Signup</Link>
        | <Link to="/login">Login</Link>
        | <Link to="/dashboard">Dashboard</Link>
        | <Link to="/withdraw">Withdraw</Link>
        | <Link to="/profile">Profile</Link>
        | <Link to="/history">History</Link>
        | <Link to="/settings">Settings</Link>
        | <Link to="/codevalidation">Code Validation</Link>

        
        
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/codevalidation" element={<Codevalidation />} />

        
        {/* Add more routes as needed */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}
