import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ children }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <div style={{ ...styles.sidebar, left: open ? "0" : "-250px" }}>
        <button onClick={closeMenu} style={styles.closeButton}>×</button>
        <br />
        <h2 style={styles.logo}>Kendo Crypto</h2>
        <nav style={{ padding: "20px" }}>
          <Link to="/dashboard" style={styles.link} onClick={closeMenu}>Dashboard</Link>
          <Link to="/deposit" style={styles.link} onClick={closeMenu}>Deposit</Link>
          <Link to="/withdraw" style={styles.link} onClick={closeMenu}>Withdraw</Link>
          <Link to="/login" style={styles.link} onClick={closeMenu}>Logout</Link>
          <Link to="/signup" style={styles.link} onClick={closeMenu}>Signup</Link>
          <Link to="/login" style={styles.link} onClick={closeMenu}>Login</Link>
          <Link to="/profile" style={styles.link} onClick={closeMenu}>Profile</Link>
          <Link to="/history" style={styles.link} onClick={closeMenu}>History</Link>
          <Link to="/settings" style={styles.link} onClick={closeMenu}>Settings</Link>



        </nav>
      </div>

      {/* Overlay */}
      {open && <div style={styles.overlay} onClick={closeMenu}></div>}

      {/* Page Content */}
      <div style={styles.content}>

        <div style={{width:"100%",display:"flex",alignItems:"center"}}> 
          <button onClick={() => setOpen(!open)} style={styles.menuButton}>
          ☰
        </button>

        <div style={{ textAlign: "center", flex: 1 }}>
    
        <h1 style={{textAlign:'center',alignItems:"center",color:"white",verticalAlign:"middle"}}>Krypto</h1>
        </div>
        </div>
       
        <div style={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    overflowX: "hidden",
    padding: "0px",
    background: "black",
    borderBottom: "2px solid white",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: "-250px",
    width: "250px",
    height: "100%",
    backgroundColor: "#111",
    color: "#fff",
    padding: "0px",
    transition: "left 0.3s ease",
    zIndex: 1000,
  },
  closeButton: {
    position: "absolute",
    top: "0px",
    right: "0px",
    fontSize: "40px",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  logo: {
    marginTop: "40px",
    marginBottom: "30px",
    fontSize: "22px",
    textAlign: "center",
  },
  link: {
    display: "block",
    color: "#fff",
    textDecoration: "none",
    padding: "10px 0",
    borderBottom: "1px solid #444",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 999,
  },
  content: {
    position: "relative",
    zIndex: 0,
    padding:"0px",
  },
  menuButton: {
    fontSize: "50px",
    background: "none",
    border: "none",
    cursor: "pointer",
    // marginBottom: "20px",
    color: "#fff",
  },
  pageContent: {
    paddingTop: "10px",
  },
};

export default Menu;
