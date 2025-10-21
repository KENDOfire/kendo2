import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ScrollView } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyBUTzEJBiB5XLkRHuG_mZTE5pgzXWfq6cs",
  authDomain: "forces-91356.firebaseapp.com",
  databaseURL: "https://forces-91356-default-rtdb.firebaseio.com",
  projectId: "forces-91356",
  storageBucket: "forces-91356.firebasestorage.app",
  messagingSenderId: "141177010507",
  appId: "1:141177010507:web:7fb6aa4b8345ce873750ce"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { title: "BTC Balance", value: `${user.bitcoinBalance} BTC` },
    { title: "ETH Balance", value: `${user.etherBalance} ETH` },
    { title: "DOGE Balance", value: `${user.dogecoinBalance} DOGE` },
  ];

  useEffect(() => {
    document.title = "Kendo Crypto - Dashboard";
    if (!localStorage.getItem("isloggedin")) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const fetchData = async (storedUser) => {
      const usersRef = ref(db, 'kendo2users');
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const users = Object.values(data);
        const currentUser = users.find(user => user.username === storedUser.username);
        setUser(currentUser);
      }
    };

    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const loggedUser = JSON.parse(storedUser);
      fetchData(loggedUser);
    }
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // showing a minimal line-only BTC/USD iframe embed instead of the widget script
  return (
    <Menu>
      <div style={styles.container}>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap", width: "100%" }}>
          <div className="headerdiv1" style={styles.headerdiv1}>
            {/* Minimal TradingView iframe — line-only BTC/USD, toolbars hidden */}
            <iframe
              title="BTCUSD-line"
              src="https://s.tradingview.com/widgetembed/?frameElementId=tvchart&symbol=COINBASE:BTCUSD&interval=60&hidesidetoolbar=1&hide_top_toolbar=1&symboledit=0&saveimage=0&toolbarbg=transparent&withdateranges=0&showpopupbutton=0&hideideas=1&theme=dark&style=3&locale=en&overrides=%7B%22mainSeriesProperties%22%3A%7B%22style%22%3A3%2C%22color%22%3A%22%23f35525%22%7D%7D"
              style={{
                width: "100%",
                height: "100%",
                minWidth: "320px",
                minHeight: "220px",
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                background: "#0b1220"
              }}
              allowTransparency={true}
              scrolling="no"
            />
          </div>

          <div className="headerdiv1" style={styles.headerdiv1}>
            <h2 style={styles.title}>📊 Dashboard</h2>
            <p style={styles.subtitle}>
              Welcome back, {user.username}! Here's your crypto overview.
            </p>
          </div>

  
  {/* </div> */}
</div>

         
        <div style={styles.slider}>
          <div style={styles.slide}>
            <h3 style={styles.slideTitle}> {slides[slideIndex].title}: <span style={{color:"white"}}>{slides[slideIndex].value}</span></h3>
            
          </div>
        </div>
        
              <div style={{width:"100%", height:"100%",marginBottom:"40px"}}>
       
</div>

<div>




</div>

        <div style={styles.actionGrid}>
             <button  onClick={()=>{window.location.href="/deposit"}}  style={styles.actionButton}>📥 Deposit</button>
              <button  onClick={()=>{window.location.href="/invest"}}  style={styles.actionButton}>📈 Invest</button>
          <button  onClick={()=>{window.location.href="/withdraw"}}  style={styles.actionButton}>💸 Withdraw</button>
         
          <button onClick={()=>{window.location.href="/history"}} style={styles.actionButton}>📜 Transactions </button>
         
          <button  onClick={()=>{window.location.href="/settings"}} style={styles.actionButton}>⚙️ Settings</button>
        </div>

        

      

        <div style={styles.grid}>
    
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Total Balance</h3>
            <p style={styles.cardValue}>$12,530.00</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Portfolio Breakdown</h3>
            <p style={styles.cardValue}>BTC: 50%<br />ETH: 30%<br />DOGE: 20%</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Security</h3>
            <p style={styles.cardValue}>2FA: Enabled<br />Email Verified ✅</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Live Prices</h3>
            <p style={styles.cardValue}>BTC: $66,000<br />ETH: $3,500<br />DOGE: $0.12</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Last Login</h3>
            <p style={styles.cardValue}>{new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </Menu>
  );
};

const styles = {
  container: {
    padding: "30px 20px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #000000 30%, #1a1a1a 50%, #f35525 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff",
  },
  slider: {
    backgroundColor: "#1e1e1e",
    padding: "5px",
    borderRadius: "10px", 
    marginBottom: "30px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
    transition: "all 0.5s ease",
  },
  slide: {
    transition: "opacity 0.2s ease",
  },
  slideTitle: {
    color: "#f35525",
    fontSize: "10px",
    marginBottom: "5px",
  },
  slideValue: {
    fontSize: "10px",
    fontWeight: "bold",
  },
  actionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "16px",
    marginBottom: "40px",
  },
  actionButton: {
    backgroundColor: "#f35525",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "14px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    fontSize: "28px",
    marginBottom: "6px",
    // color: "#f35525",
  },
  subtitle: {
    fontSize: "15px",
    color: "#cccccc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#121212",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "18px",
    color: "#f35525",
    marginBottom: "10px",
  },
  cardValue: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  "headerdiv1": {
    display: 'inline-block',
     verticalAlign: 'top',
    //  border: '2px solid red',
     background: "linear-gradient(135deg, #f35525 30%, #000000 30%, #1a1a1a 50% )",
    //  padding: '2em',
     minWidth: '300px',
     minHeight: '200px',
     margin: '15px',
    //  boxShadow: '5px 5px 5px 3px rgba(255, 255, 255, 0.24)',
},
}


export default Dashboard;
