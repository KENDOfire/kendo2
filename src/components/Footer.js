import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
        <p style={styles.text}>© 2023 Kendo Crypto. All rights reserved.</p>
        <p style={styles.text}>Follow us on <a href="https://twitter.com/kendo_crypto" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a></p>
        </footer>
    );
}

const styles = {
    footer: {
        // backgroundColor: "#000",
        backgroundOpacity: 0,
        color: "#fff",
        textAlign: "center",
        padding: "20px 0",
        position: "relative",
        bottom: 0,
        width: "100%",
    },
    text: {
        margin: 0,
        fontSize: "14px",
    },
    link: {
        color: "#1DA1F2",
        textDecoration: "none",
    },
};

export default Footer;
