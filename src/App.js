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
import PrivacyPolicy from "./pages/privacy";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUTzEJBiB5XLkRHuG_mZTE5pgzXWfq6cs",
  authDomain: "forces-91356.firebaseapp.com",
  databaseURL: "https://forces-91356-default-rtdb.firebaseio.com",
  projectId: "forces-91356",
  storageBucket: "forces-91356.firebasestorage.app",
  messagingSenderId: "141177010507",
  appId: "1:141177010507:web:7fb6aa4b8345ce873750ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



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
        | <Link to="/privacy">Privacy Policy</Link>

        
        
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
        <Route path="/privacy" element={<PrivacyPolicy />} />

        
        {/* Add more routes as needed */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}
