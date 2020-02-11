import React, {Fragment} from "react"
import Banner from "../components/banner"
import './index.css'

const IndexPage = () => (
  <Fragment>
    <section id="banner" className="banner">
      <Banner /> 
    </section>
    <section id="portfolio" className="portfolio">
    </section>
    <section id="about-us" className="about-us">
    </section>
  </Fragment>
)

export default IndexPage
