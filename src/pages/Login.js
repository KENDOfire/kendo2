import React from "react";
import { getDatabase,ref,get } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";  
import { initializeApp } from "firebase/app"; 

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

const Login = () => {

    const [data, setData] = useState([]);

     const fetchData = async () => {
      const db = getDatabase(app);
      const usersRef = ref(db, 'kendo2users');
    
        // Fetch data from Firebase Realtime Database
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const users = Object.values(data);
          setData(users);
    
        
    
       
        } 
    };


useEffect(() => {    
    fetchData();
  },[])


   
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log("Username:", username);
    console.log("Password:", password);
    const user = data.find(user => user.username === username && user.password === password);
    if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isloggedin", "true");
        window.location.href = "/dashboard"; // Redirect to dashboard after successful login
    }
    else {
        alert("Invalid username or password. Please try again.");
        }
    }
    
  return (
    <div> 
        
           <div style={{backgroundColor:"#000000",padding:"10px",textAlign:"center"}}>
            <h1 style={{color:"white"}}>KRYPTO</h1>
        </div>
    <div style={styles.container}>
        
       
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Log in to your crypto portfolio</p>
        <form style={styles.form} onSubmit={handleSubmit} >
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input type="text" id="username" name="username" style={styles.input} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input type="password" id="password" name="password" style={styles.input} required />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.disclaimer}>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
    </div>

  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      background: "linear-gradient(135deg, #000000 30%, #1a1a1a 50%, #f35525 100%)",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
  },
  title: {
    marginBottom: "10px",
    fontSize: "24px",
    color: "#1a1a1a",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: "30px",
    color: "#666",
    textAlign: "center",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#f35525",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  disclaimer: {
    marginTop: "20px",
    fontSize: "12px",
    textAlign: "center",
    color: "#555",
  }
};

export default Login;
