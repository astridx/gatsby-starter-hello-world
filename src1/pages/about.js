import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="Wiederverwendbarkeit ist cool." />  
      <p>Das sind wir!</p>
    </div>
  )
}