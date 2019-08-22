import React from "react"
import "./site.scss"

import flag from "../../../src/images/us_flag_small.png"

const SiteHeader = props => (
  <header className="site-header">
    <div>
      <a href="https://www.usaspending.gov">USAspending.gov</a> |&nbsp;
      <a href="https://datalab.usaspending.gov">Data Lab</a>
    </div>
    <div className="header-statement">
      An official website of the U.S. government
      <img src={flag} alt="U.S. flag" />
    </div>
  </header>
)

export default SiteHeader
