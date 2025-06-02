import React from "react";
import Menu from "../components/Menu";

const Withdraw = () => {
  return (
    <Menu>
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Withdraw Funds</h2>
        <p style={styles.subtitle}>Securely transfer funds from your crypto wallet.</p>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="amount" style={styles.label}>Amount (USD)</label>
            <input type="number" id="amount" name="amount" style={styles.input} placeholder="$100" required />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="wallet" style={styles.label}>Select Wallet</label>
            <select id="wallet" name="wallet" style={styles.select}>
              <option value="btc">Bitcoin Wallet</option>
              <option value="eth">Ethereum Wallet</option>
              <option value="usdt">USDT Wallet</option>
            </select>
          </div>

          <button type="submit" style={styles.button}>Confirm Withdrawal</button>
        </form>
      </div>
    </div>
    </Menu>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #141e30, #243b55)",
    padding: "0px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "26px",
    color: "#1a1a1a",
    marginBottom: "10px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "25px",
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
    width: "100%",
    backgroundColor: "#fff",
  },
  button: {
    padding: "12px",
    backgroundColor: "#1e90ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s",
  },
};

export default Withdraw;
