import React from "react";
import Menu from "../components/Menu";

const Settings = () => {
  return (
    <Menu>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>⚙️ Settings</h2>
          <p style={styles.subtitle}>Manage your account settings and preferences.</p>
        </div>

        <div style={styles.sectionsWrapper}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>👤 Profile Settings</h3>
            <p style={styles.cardText}>Update your profile info, email, and password.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🔒 Security Settings</h3>
            <p style={styles.cardText}>Enable 2FA and manage security options.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🔔 Notification Preferences</h3>
            <p style={styles.cardText}>Choose how you'd like to receive alerts.</p>
          </div>
        </div>
      </div>
    </Menu>
  );
};

const styles = {
  container: {
    padding: "30px 20px",
    fontFamily: "Segoe UI, sans-serif",
    background: "linear-gradient(135deg, #000000 30%, #1a1a1a 50%, #f35525 100%)",
    minHeight: "100vh",
    color: "#fff",
  },
  header: {
    marginBottom: "40px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    margin: "0",
    color: "#fff",
  },
  subtitle: {
    fontSize: "16px",
    color: "#ddd",
  },
  sectionsWrapper: {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    backgroundColor: "#111",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    border: "1px solid #2a2a2a",
    transition: "transform 0.2s ease",
  },
  cardTitle: {
    color: "#f35525",
    fontSize: "20px",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "14px",
    color: "#ccc",
  },
};

export default Settings;
