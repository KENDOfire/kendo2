import React from "react";
import Menu from "../components/Menu";

const History = () => {
  return (
    <Menu>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>📜 Transaction History</h2>
          <p style={styles.subtitle}>View your recent transactions and activity.</p>
          <div style={{ overflowX: "auto" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-10-01</td>
                  <td>Deposit</td>
                  <td>$500.00</td>
                  <td style={styles.statusCompleted}>Completed</td>
                </tr>
                <tr>
                  <td>2023-09-28</td>
                  <td>Withdrawal</td>
                  <td>$200.00</td>
                  <td style={styles.statusPending}>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Menu>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #000000 40%, #1a1a1a 60%, #f35525 100%)",
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
    color: "#fff",
  },
  card: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#111",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    border: "1px solid #2a2a2a",
  },
  title: {
    fontSize: "28px",
    color: "#f35525",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#ccc",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#1c1c1c",
    borderRadius: "8px",
    overflow: "hidden",
  },
  statusCompleted: {
    color: "#4caf50",
    fontWeight: "bold",
  },
  statusPending: {
    color: "#ff9800",
    fontWeight: "bold",
  },
  'table th': {
    backgroundColor: "#222",
    color: "#f35525",
    padding: "12px 16px",
    textAlign: "left",
    fontSize: "14px",
    borderBottom: "1px solid #333",
  },
  'table td': {
    padding: "12px 16px",
    borderBottom: "1px solid #2a2a2a",
    fontSize: "13px",
    color: "#eee",
  },
};

export default History;
