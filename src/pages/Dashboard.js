import React from "react";
import Menu from "../components/Menu";

const Dashboard = () => {
  return (
           <Menu>

 
  
    <div style={styles.container}>
          
      <div style={styles.header}>
        <h2 style={styles.title}>Dashboard</h2>
        <p style={styles.subtitle}>Welcome back! Here's an overview of your crypto portfolio.</p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Total Balance</h3>
          <p>$12,530.00</p>
        </div>
        <div style={styles.card}>
          <h3>BTC Holdings</h3>
          <p>0.56 BTC</p>
        </div>
        <div style={styles.card}>
          <h3>ETH Holdings</h3>
          <p>3.2 ETH</p>
        </div>
        <div style={styles.card}>
          <h3>Recent Activity</h3>
          <p>Deposit of $1,000 on Jun 1</p>
        </div>
      </div>
    </div>
  
     </Menu>
  );
};

const styles = {
  container: {
    padding: "30px",
    background: "#f9f9f9",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    marginBottom: "30px",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};

export default Dashboard;
