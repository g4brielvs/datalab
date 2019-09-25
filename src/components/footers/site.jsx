import React from "react"
import siteFooterStyles from "./site.module.scss"

const SiteFooter = props => (
  <footer className={siteFooterStyles.siteFooter}>
    <div>
      &copy; 2018 USAspending.gov |&nbsp;
      <a href="https://www.usaspending.gov/#/about/accessibility">Accessibility</a> |&nbsp;
      <a href="https://www.usaspending.gov/#/about/privacy">Privacy Policy</a> |&nbsp;
      <a href="https://www.usaspending.gov/#/about/foia">Freedom of Information Act</a>
    </div>
    <div className={siteFooterStyles.footerImportantInfo}>
      <b>NOTE:</b> <a href="https://beta.usaspending.gov/#/db_info">You must click here for very important D&B information.</a>
    </div>
  </footer>
)

export default SiteFooter
