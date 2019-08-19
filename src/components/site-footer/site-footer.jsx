import React from "react"
import "./site-footer.scss"

import Logo from "../logos/logo"
import Github from "../logos/github"
import Dataworld from "../logos/dataworld"
import Twitter from "../logos/twitter"
import Facebook from "../logos/facebook"
import LinkedIn from "../logos/linkedin"

/* <script>
  function trackLinkClick(actionName) {
          window.Analytics.event({
              category: 'Footer - Click Link',
              action: actionName
      });
  }

  function leaveSiteLink(outbound) {
          document.querySelector('#leave-modal .redirect-modal__link a').href = outbound;
          document.querySelector('#leave-modal .redirect-modal__link a').innerHTML = outbound;
          document.getElementById('leave-modal').style.display = 'block';
  }
</script> */

const SiteFooter = props => (
  <div className="site-footer">
    <div className="flex-item logo">
      <Logo fillColor="#666" />
    </div>
    <div className="flex-item">
      <div className="title">Contact Us</div>
      <p>
        For media inquiries or questions on Data Lab activities or operations,
        please contact our Legislative and Public Affairs Office:
      </p>
      <p>E: media.relations@fiscal.treasury.gov</p>
    </div>
    <div className="flex-item">
      <div className="title">Mailing List</div>
      <p>
        To join our mailing list, send a blank email with no subject to:{" "}
        <a href="mailto: datalab@lists.fiscal.treasury.gov">
          datalab@lists.fiscal.treasury.gov
        </a>
      </p>
      <div className="title">Join the Conversation</div>
      <p>
        Visit our&nbsp;
        {/* <a onclick="leaveSiteLink('https://usaspending-help.zendesk.com/hc/en-us/community/topics'); trackLinkClick('Send Feedback'); return false;" href="https://usaspending-help.zendesk.com/hc/en-us/community/topics"> */}
        <a>Community Page today.</a>
      </p>
    </div>
    <div className="flex-item social-logos">
      <div className="float-bottom">
        <div>
          <div className="title">Connect With Us</div>
          <div>
            {/* <a onclick="trackLinkClick('GitHub')" target="_blank" rel="noopener noreferrer" aria-labelledby="Github-icon-title" href="https://github.com/fedspendingtransparency/datalab"> */}
            <a><Github /></a>
            {/* <a onclick="trackLinkClick('Data World')" target="_blank" rel="noopener noreferrer" aria-labelledby="DataWorld-icon-title" href="https://data.world/usaspending"> */}
            <a><Dataworld />
            </a>
            {/* <a onclick="trackLinkClick('Twitter')" target="_blank" rel="noopener noreferrer" aria-labelledby="Twitter-icon-title" href="https://twitter.com/fiscalservice"> */}
            <a><Twitter /></a>
            {/* <a onclick="trackLinkClick('Facebook')" target="_blank" rel="noopener noreferrer" aria-labelledby="Facebook-icon-title" href="https://www.facebook.com/pg/fiscalservice"> */}
            <a><Facebook /></a>
            {/* <a onclick="trackLinkClick('Linkedin')" target="_blank" rel="noopener noreferrer" aria-labelledby="LinkediIn-icon-title" href="https://www.linkedin.com/company/united-states-department-of-the-treasury-bureau-of-public-debt"> */}
            <a><LinkedIn /></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  // <footer id="footer">
  //     <div>
  //       &copy; 2018 USAspending.gov |&nbsp;
  //       <a href="https://www.usaspending.gov/#/about/accessibility">Accessibility</a> |&nbsp;
  //       <a href="https://www.usaspending.gov/#/about/privacy">Privacy Policy</a> |&nbsp;
  //       <a href="https://www.usaspending.gov/#/about/foia">Freedom of Information Act</a>
  //   </div>
  //     <div class="footer-important-info">
  //       <b>NOTE:</b> <a href="https://beta.usaspending.gov/#/db_info">You must click here for very important D&B information.</a>
  //   </div>
  // </footer>
)

export default SiteFooter
