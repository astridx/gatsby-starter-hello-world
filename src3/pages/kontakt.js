import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Kontakt() {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <Header headerText="Kontakt" />
      <p>Schick uns eine Nachricht!</p>
    </Layout>
  )
}