import React from "react";
import logo1 from "../assets/logo1.png";
export default function Header() {
  return (
    <div
      style={{
        background: "#bf6215",
        padding: "15px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo1} alt="pizzalogo" height="50px" />
        <div
          style={{
            marginLeft: 20,
            fontSize: 50,
            color: "black",
            fontFamily: "Brush Script MT,sans-serif",
          }}
        >
          Pizza Store
        </div>
      </div>
    </div>
  );
}