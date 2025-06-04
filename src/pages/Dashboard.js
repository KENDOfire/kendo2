import React from "react";
import Menu from "../components/Menu";
import { useEffect } from "react";

const Dashboard = () => {
    useEffect(() => {
        document.title = "Kendo Crypto - Dashboard";
        // You can add any additional setup here if needed
        if (!localStorage.getItem("isloggedin")) {
            window.location.href = "/login"; // Redirect to login if not logged in
        }
    }, []);
  return (
    <Menu>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>📊 Dashboard</h2>
          <p style={styles.subtitle}>Welcome back! Here's an overview of your crypto portfolio.</p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Total Balance</h3>
            <p style={styles.cardValue}>$12,530.00</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>BTC Holdings</h3>
            <p style={styles.cardValue}>0.56 BTC</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>ETH Holdings</h3>
            <p style={styles.cardValue}>3.2 ETH</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Recent Activity</h3>
            <p style={styles.cardValue}>Deposit of $1,000 on Jun 1</p>
          </div>
        </div>
      </div>
    </Menu>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #000000 30%, #1a1a1a 50%, #f35525 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#f35525",
  },
  subtitle: {
    fontSize: "16px",
    color: "#cccccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#121212",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "18px",
    color: "#f35525",
    marginBottom: "12px",
  },
  cardValue: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffffff",
  },
};

export default Dashboard;
