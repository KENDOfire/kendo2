import React from "react";

const Codevalidation = () => {
    var submitButton = document.getElementById("submit");
       

  

    const handleSubmit = (e) => {
          var codeInput = document.getElementById("code");

 e.preventDefault();
        // Handle code validation logic here

        var code = codeInput.value;
        console.log("Code submitted:", code);
    };
//  submitButton.addEventListener("click", handleSubmit);


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Code Validation</h2>
        <p style={styles.subtitle}>
          Enter the code sent to your email to validate your account.
        </p>
        <form style={styles.form}  onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="code" style={styles.label}>
              Validation Code
            </label>
            <input
              type="number"
              id="code"
              name="code"
              placeholder="Enter your validation code"
              style={styles.input}
              required
            />
          </div>
          <button id="submit" type="submit" style={styles.button}>
            ✅ Validate Code
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#f5f7fa",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background:
      "linear-gradient(135deg, #000000 30%, #1a1a1a 50%, #f35525 100%)",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
    fontSize: "24px",
    color: "#333",
  },
  subtitle: {
    marginBottom: "30px",
    fontSize: "14px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "bold",
    color: "#444",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    transition: "border 0.3s ease",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#f35525",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Codevalidation;
