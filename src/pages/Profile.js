import React from "react";
import Menu from "../components/Menu";

const Profile = () => {
  return (
    <Menu>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>👤 User Profile</h2>
          <p style={styles.subtitle}>Manage your account details and preferences.</p>
          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <label htmlFor="username" style={styles.label}>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                style={styles.input}
                required
              />
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
