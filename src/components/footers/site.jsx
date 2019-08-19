import React from "react"
import "./site.scss"

const SiteFooter = props => (
  <footer className="site-footer">
    <div>
      &copy; 2018 USAspending.gov |&nbsp;
      <a href="https://www.usaspending.gov/#/about/accessibility">Accessibility</a> |&nbsp;
      <a href="https://www.usaspending.gov/#/about/privacy">Privacy Policy</a> |&nbsp;
      <a href="https://www.usaspending.gov/#/about/foia">Freedom of Information Act</a>
    </div>
    <div className="footer-important-info">
      <b>NOTE:</b> <a href="https://beta.usaspending.gov/#/db_info">You must click here for very important D&B information.</a>
    </div>
  </footer>
)

export default SiteFooter
