import React, { useEffect, useRef, useState } from "react";
import Menu from "../components/Menu";


const Chart = () => {

  const [buttoncolor, setButtonColor] = useState("#f35525");
  const [textcolor, setTextColor] = useState("#ffffff");
  const [buttoncolor1, setButtonColor1] = useState("#f35525");
  const [textcolor1, setTextColor1] = useState("#ffffff");

  // New state for manual price input and points
  const [priceInput, setPriceInput] = useState("");
  const [points, setPoints] = useState([]); // {t: number, v: number}
  const [autoAppend, setAutoAppend] = useState(false); // keeps existing manual auto-append behavior
  const [autoSimulate, setAutoSimulate] = useState(false); // NEW: simulate up/down automatically
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const maxPoints = 60;

  // Draw chart when points change or resized
  useEffect(() => {
    drawChart();
  }, [points]);

  // Resize canvas to container and redraw on window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(300, rect.width) * dpr;
      canvas.height = Math.max(150, rect.height) * dpr;
      canvas.style.width = `${Math.max(300, rect.width)}px`;
      canvas.style.height = `${Math.max(150, rect.height)}px`;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawChart();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto append loop if enabled (keeps original behavior)
  useEffect(() => {
    if (!autoAppend) return;
    const id = setInterval(() => {
      if (!priceInput) return;
      addPriceFromInput();
    }, 5000);
    return () => clearInterval(id);
  }, [autoAppend, priceInput]);

  // Auto-simulate price movements (random walk up/down)
  useEffect(() => {
    if (!autoSimulate) return;
    // simulation interval (ms)
    const intervalMs = 1000;
    const id = setInterval(() => {
      setPoints(prev => {
        // determine base price
        const base = prev.length ? prev[prev.length - 1].v : (parseFloat(priceInput) || 34000);
        // volatility: max percent move per tick (e.g. 0.6% => 0.006)
        const volatility = 0.006;
        // random change between -volatility and +volatility
        const change = (Math.random() - 0.5) * 2 * volatility;
        const nextPrice = Math.max(0.01, base * (1 + change));
        const next = [...prev, { t: Date.now(), v: +nextPrice }];
        if (next.length > maxPoints) next.splice(0, next.length - maxPoints);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoSimulate, priceInput]);

  const addPriceFromInput = () => {
    const v = parseFloat(priceInput);
    if (isNaN(v)) return;
    setPoints(prev => {
      const next = [...prev, { t: Date.now(), v }];
      if (next.length > maxPoints) next.splice(0, next.length - maxPoints);
      return next;
    });
  };

  const handleAddClick = () => {
    addPriceFromInput();
    setPriceInput("");
  };

  const drawChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    // clear
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    // background
    ctx.fillStyle = "#0b1220";
    ctx.fillRect(0, 0, w, h);

    if (!points || points.length === 0) {
      ctx.fillStyle = "#fff";
      ctx.font = "14px Arial";
      ctx.fillText("No prices yet — enter a price and click Add Price or enable simulation", 12, 24);
      return;
    }

    // compute ranges
    const values = points.map(p => p.v);
    const minV = Math.min(...values);
    const maxV = Math.max(...values);
    const pad = (maxV - minV) * 0.12 || Math.max(1, maxV * 0.02);
    const top = maxV + pad;
    const bottom = minV - pad;

    const margin = { left: 40, right: 12, top: 12, bottom: 26 };
    const plotW = w - margin.left - margin.right;
    const plotH = h - margin.top - margin.bottom;

    // draw grid lines and y-axis ticks
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    const ticks = 4;
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "12px Arial";
    for (let i = 0; i <= ticks; i++) {
      const y = margin.top + (i / ticks) * plotH;
      ctx.moveTo(margin.left, y);
      ctx.lineTo(w - margin.right, y);
      const tickValue = (top - (i / ticks) * (top - bottom));
      ctx.fillText(tickValue.toFixed(2), 6, y + 4);
    }
    ctx.stroke();
    ctx.closePath();

    // draw line
    ctx.beginPath();
    const stepX = plotW / Math.max(1, points.length - 1);
    points.forEach((p, i) => {
      const x = margin.left + i * stepX;
      const y = margin.top + ((top - p.v) / (top - bottom)) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "#f35525";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // fill under line
    ctx.beginPath();
    points.forEach((p, i) => {
      const x = margin.left + i * stepX;
      const y = margin.top + ((top - p.v) / (top - bottom)) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    // down to bottom right and bottom left
    ctx.lineTo(margin.left + (points.length - 1) * stepX, margin.top + plotH);
    ctx.lineTo(margin.left, margin.top + plotH);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, margin.top, 0, margin.top + plotH);
    grad.addColorStop(0, "rgba(243,85,37,0.18)");
    grad.addColorStop(1, "rgba(243,85,37,0.02)");
    ctx.fillStyle = grad;
    ctx.fill();

    // draw last price badge
    const last = points[points.length - 1];
    const lastX = margin.left + (points.length - 1) * stepX;
    const lastY = margin.top + ((top - last.v) / (top - bottom)) * plotH;
    ctx.beginPath();
    ctx.fillStyle = "#f35525";
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1;
    ctx.arc(lastX, lastY, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // current price text
    ctx.fillStyle = "#fff";
    ctx.font = "14px Arial";
    ctx.fillText(`Current: ${last.v.toFixed(2)}`, w - margin.right - 140, 20);

    // time range text
    const first = points[0];
    const start = new Date(first.t);
    const end = new Date(last.t);
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "11px Arial";
    ctx.fillText(`${start.toLocaleTimeString()} - ${end.toLocaleTimeString()}`, margin.left, h - 6);
  };

  return (
    <Menu>
      <div style={{}}>
        <div style={{
          width: "100%",
          height: "600px",
          margin: "20px auto",
          maxWidth: "100vw",
          overflow: "hidden",
          position: "relative"
        }}>
          <h2 style={{ color: "#f35525", fontWeight: "bold", fontFamily: "verdana ", textAlign: "center" }}>Live View</h2>
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=trading_multi&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=dark&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=&utm_medium=widget&utm_campaign=chart&charts=%5B%7B%22title%22%3A%22Bitcoin%22%2C%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%7D%2C%7B%22title%22%3A%22Ethereum%22%2C%22symbol%22%3A%22BINANCE%3AETHUSDT%22%7D%2C%7B%22title%22%3A%22Gold%22%2C%22symbol%22%3A%22OANDA%3AXAUUSD%22%7D%2C%7B%22title%22%3A%22Litecoin%22%2C%22symbol%22%3A%22BINANCE%3ALTCUSDT%22%7D%5D"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              minWidth: "320px",
              padding: "30px",
            }}
            allowTransparency={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <button
            onClick={(e) => {
              console.log('Buy button clicked');
              buttoncolor === "#f35525" ? setButtonColor("#fff") : setButtonColor("#f35525");
              textcolor === "#ffffff" ? setTextColor("#f35525") : setTextColor("#ffffff");
            }}
            style={{
              backgroundColor: buttoncolor,
              color: textcolor,
              padding: "12px 30px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              flex: '0 1 auto',
              minWidth: '120px'
            }}>Buy</button>

          <button
            onClick={(e) => {
              console.log('Sell button clicked');
              buttoncolor1 === "#f35525" ? setButtonColor1("#fff") : setButtonColor1("#f35525");
              textcolor1 === "#ffffff" ? setTextColor1("#f35525") : setTextColor1("#ffffff");
            }}
            style={{
              backgroundColor: buttoncolor1,
              color: textcolor1,
              padding: "12px 30px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              flex: '0 1 auto',
              minWidth: '120px'
            }}>Sell</button>
        </div>

      

      </div>
    </Menu>
  );
}

export default Chart;