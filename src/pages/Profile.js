import React, { useEffect } from "react";
import Menu from "../components/Menu";
import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUTzEJBiB5XLkRHuG_mZTE5pgzXWfq6cs",
    authDomain: "forces-91356.firebaseapp.com",
    databaseURL: "https://forces-91356-default-rtdb.firebaseio.com",
    projectId: "forces-91356",
    storageBucket: "forces-91356.firebasestorage.app",
    messagingSenderId: "141177010507",
    appId: "1:141177010507:web:7fb6aa4b8345ce873750ce"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const Profile = () => {

    const fetchData = async () => {
    const usersRef = ref(db, 'kendo2users');
    const snapshot = await get(usersRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const users = Object.values(data);
      const storedUser = sessionStorage.getItem("user");
      if (storedUser) {
        const currentUser = JSON.parse(storedUser);
        const userData = users.find(user => user.username === currentUser.username);
        return userData || {};
        console.log("User data found:", userData);  

      }

      console.log("No user data found.");
      return {};

    }

}

fetchData().then(userData => {console.log("Fetched user data:", userData);})

useEffect(() => {
    document.title = "Kendo Crypto - Profile";
    if (!localStorage.getItem("isloggedin")) {
        window.location.href = "/login";
        }
}, []);
useEffect(() => {
    fetchData()
}, []);


  return (
    <Menu>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>👤 User Profile</h2>
          <p style={styles.subtitle}> account details and preferences.</p>
          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="username" style={styles.label}>Username</label>
              <h1 style={styles.input} id="username">
                {sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")).username : "Loading..."}
                </h1>

            
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <h1 style={styles.input} id="email">
                {sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")).email : "Loading..."}
                </h1>
             
            </div>

              <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Password</label>
              <h1 style={styles.input} id="Password">
                {sessionStorage.getItem("user") ? "******" : "******"}
                {/* {sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")).email : "Loading..."} */}
                </h1>
             
            </div>

            <button type="submit" style={styles.button}>Update Profile</button>
          </form>
        </div>
      </div>
    </Menu>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #000 30%, #1a1a1a 50%, #f35525 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#111",
    padding: "40px 30px",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "100%",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    border: "1px solid #2a2a2a",
  },
  title: {
    fontSize: "26px",
    marginBottom: "10px",
    color: "#f35525",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "14px",
    color: "#ccc",
    marginBottom: "30px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "8px",
    display: "block",
    fontSize: "14px",
    color: "#f35525",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#1c1c1c",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#f35525",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Profile;
