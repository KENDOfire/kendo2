import React from "react";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";


const Deposit = () => {
  const navigate = useNavigate();

  const handleDeposit = (e) => {
    e.preventDefault();
    console.log("Deposit action triggered");
    navigate("/dashboard");
  };

  return (
    <Menu>
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Deposit Funds</h2>
        <p style={styles.subtitle}>Choose a wallet and enter the amount to fund your account.</p>
        <form onSubmit={handleDeposit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="wallet" style={styles.label}>Select Wallet</label>
            <select id="wallet" name="wallet" style={styles.select} required>
              <option value="btc">Bitcoin Wallet</option>
              <option value="eth">Ethereum Wallet</option>
              <option value="usdt">USDT Wallet</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="amount" style={styles.label}>Amount (USD)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="$100"
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>Confirm Deposit</button>
        </form>
      </div>
    </div>
    </Menu>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    // background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      background: "linear-gradient(135deg, #000000 30%, #1a1a1a 50%, #f35525 100%)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "26px",
    marginBottom: "10px",
    color: "#1a1a1a",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
    textAlign: "center",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "6px",
    color: "#333",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    width: "100%",
  },
  button: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Deposit;
