import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { get, getDatabase } from "firebase/database";
import { push,ref, } from "firebase/database";
// import emailjs from "emailjs/browser";
import emailjs from "@emailjs/browser";
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
const Signup = () => {
    
const fetchData = async (username, email, password) => {
  const db = getDatabase(app);
  const usersRef = ref(db, 'kendo2users');

  try {
    const snapshot = await get(usersRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const users = Object.values(data);

      const useremailExists = users.some(user =>
         user.email === email
      );
       const usernameExists = users.some(user =>
        user.username === username 
      );

      if (usernameExists) {
        alert("User name already exists");
        console.log("User already exists.");
      } else if(useremailExists){
        alert("Email already exists");
        console.log("Email already exists.");
      }else {
        // code to generate a 6 digit code and send it to the user's email
        var code = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code

        console.log("Generated code:", code);
        sendEmail(email, code,username,password);
        uploaddatatodatabase(username, email, password,code);
        console.log("User does not exist. Data uploaded.");
      }
    } else {
      // No users exist, proceed to upload
      uploaddatatodatabase(username, email, password);
      console.log("No users in database. Data uploaded.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const sendEmail = (email, code,username,password) => {
       emailjs.send("service_2d2oqr7","template_hc00fv6",{
            VERIFICATION_CODE: code,
            name: username,
            email:email,
},"r3sbgQQvCxwvueJy_")// Replace with your user ID
        .then((response) => {
            console.log("Email sent successfully:", response);

        })
        .catch((error) => {
            console.error("Error sending email:", error);
        });
}


    const uploaddatatodatabase = (username, email, password,code) => {
         push(ref(getDatabase(app), 'kendo2users'), {
      username: username,   
        email: email,
        password: password,
        code:code,
        etherBalance: 0,
        bitcoinBalance: 0,
        dogecoinBalance: 0,
      
    }).then(() => {

    sendEmail(email,code,username,password);

     
        sessionStorage.setItem("code",code)
        console.log("User data saved successfully");
        window.location.href = "/codevalidation"; // Redirect to code validation page
    }).catch((error) => {
        console.error("Error saving user data:", error);
    });

    }





    const handleSubmit = async (e) => {
    e.preventDefault();

   

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("Username:", username);
    console.log("Email:", email);       
    console.log("Password:", password);
    // Call the function to fetch data and upload user data
     var code = Math.floor(100000 + Math.random() * 900000); 

     fetchData(username, email,password);

   


    // Handle signup logic here
    console.log("Signup form submitted");

    // You can add your signup logic here, like sending data to an API

    }   



  return (
    <div>
         <div style={{backgroundColor:"#000000",padding:"10px",textAlign:"center"}}>
            <h1 style={{color:"white"}}>KRYPTO</h1>
        </div>
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Your Crypto Account</h2>
        <p style={styles.subtitle}>Join the future of investing today.</p>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input type="text" id="username" name="username" style={styles.input} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" name="email" style={styles.input} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input type="password" id="password" name="password" style={styles.input} required />
          </div>
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
         <p style={styles.disclaimer}>
          already Signup <a href="/login">Login</a>.
        </p>
        <p style={styles.disclaimer}>
          By signing up, you agree to our <a href="#">Terms</a> and <a href="https://kendo344.vercel.app">Privacy Policy</a>.
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

export default Signup;
