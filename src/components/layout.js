import React from "react"
import Header from "./header"
import logo from "../images/logo.jpg"
import './layout.css'

export default ({ children }) => (
  <div style={{ margin: `1rem auto`, maxWidth: 650, maxHeight:50, padding: `0.1rem` }}>
  <div className="header">
    <img src={logo} style={{ width: 42, height: 42, marginTop: ".1rem" }} />
    <Header />
  </div>
    {children}
  </div>
)