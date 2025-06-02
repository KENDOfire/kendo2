import React from "react";
import { useNavigate } from "react-router-dom";

// import Button from 'react-bootstrap/Button';


const Deposit = () => {
  const navigate = useNavigate();

  const handleDeposit = () => {
    // Logic for deposit action
    console.log("Deposit action triggered");
    // Navigate to the home page after deposit
    navigate("/");
  };

  return (
    <div>
      <h2>Deposit Page</h2>
      <button variant="contained" color="primary" onClick={handleDeposit}>
        Deposit
      </button>
    </div>
  );
}

export default Deposit;