import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Header headerText="About Gatsby" />
      <Header headerText="Wiederverwendbarkeit ist cool." />  
      <p>Das sind wir!</p>
    </Layout>
  )
}