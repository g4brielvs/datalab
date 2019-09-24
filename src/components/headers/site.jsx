import React from "react"
import siteHeaderStyles from "./site.module.scss"

import flag from "../../../src/images/us_flag_small.png"

const SiteHeader = props => (
  <header className={siteHeaderStyles.siteHeader}>
    <div>
      <a href="https://www.usaspending.gov">USAspending.gov</a> |&nbsp;
      <a href="https://datalab.usaspending.gov">Data Lab</a>
    </div>
    <div className={siteHeaderStyles.headerStatement}>
      An official website of the U.S. government
      <img src={flag} alt="U.S. flag" />
    </div>
  </header>
)

export default SiteHeader
