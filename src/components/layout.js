import React from "react"
import Header from "./header"
import logo from "../images/logo.jpg"

export default ({ children }) => (
  <div style={{ margin: `1rem auto`, maxWidth: 650, padding: `0.1rem` }}>
  <div className="header" style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'flex-end', backgroundColor: "green"}}>
    <img src={logo} style={{ width: 50, height: 50 }} />
    <Header />
  </div>

    {children}
  </div>
)