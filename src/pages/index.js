import React, {Fragment} from "react"
import Contact from "../components/contact-us"
import Expertise from "../components/expertise"
import './index.css'

const IndexPage = () => (
  <Fragment>
    <section className="banner part">
    </section>
    <section className="we-do part">
        <h1>What We Do</h1>
    </section>
    <section className="we-did part">
        <h1>What We Did</h1>
    </section>
    <section className="how part">
        <Expertise />
    </section>
    <section className="contact part">
        <Contact />
    </section>
  </Fragment>
)

export default IndexPage
