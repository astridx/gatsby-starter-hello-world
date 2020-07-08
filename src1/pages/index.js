import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/kontakt/">Kontakt</Link>
      <Header headerText="Hallo Gatsby!" />
      <p>Was für eine schöne Welt.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
