import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import styles from "./index.module.css"
import Container from "../components/container"

console.log(styles)

const Dachform = props => (
  <div className={styles.dachform}>
    <img src={props.dachformimage} className={styles.dachformimage} alt="" />
    <div className={styles.description}>
      <h2 className={styles.dachformname}>{props.dachformname}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function Home() {
  return (
    <Container>
      <Link to="/kontakt/">Kontakt</Link>
      <Header headerText="Hallo Gatsby!" />
      <p>Was für eine schöne Welt.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <h1>Dachformen</h1>
      <Dachform
        Dachformname="Pultdach"
        dachformimage="https://paul-berenz.de/images/pultdach.gif"
        excerpt="Das ist ein Pultdach."
      />
      <Dachform
        Dachformname="Krüppelwalmdach"
        dachformimage="https://paul-berenz.de/images/satkwda.gif"
        excerpt="Das ist ein Krüppelwalmdach."
      />
    </Container>
  )
}
