import React from "react";

const Signup = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Your Crypto Account</h2>
        <p style={styles.subtitle}>Join the future of investing today.</p>
        <form style={styles.form}>
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
          By signing up, you agree to our <a href="#">Terms</a> and <a href="https://kendo344.vercel.app">Privacy Policy</a>.
        </p>
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
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
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
    backgroundColor: "#0d6efd",
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
