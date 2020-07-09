import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Kontakt() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Kontakt" />
      <p>Schick uns eine Nachricht!</p>
    </div>
  )
}