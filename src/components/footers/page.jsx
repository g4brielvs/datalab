import React from "react"
import pageFooterStyles from "./page.module.scss"

import DataLab from "../logos/datalab"
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

const PageFooter = props => (
  <div className={pageFooterStyles.pageFooter}>
    <div className={pageFooterStyles.content}>
      <div className={`${pageFooterStyles.flexItem} ${pageFooterStyles.logo}`}>
        <DataLab fillColor="#666" />
      </div>
      <div className={pageFooterStyles.flexItem}>
        <div className={pageFooterStyles.title}>Contact Us</div>
        <p>
          For media inquiries or questions on Data Lab activities or operations,
          please contact our Legislative and Public Affairs Office:
        </p>
        <p>E: media.relations@fiscal.treasury.gov</p>
      </div>
      <div className={pageFooterStyles.flexItem}>
        <div className={pageFooterStyles.title}>Mailing List</div>
        <p>
          To join our mailing list, send a blank email with no subject to:{" "}
          <a href="mailto: datalab@lists.fiscal.treasury.gov">
            datalab@lists.fiscal.treasury.gov
          </a>
        </p>
        <div className={pageFooterStyles.title}>Join the Conversation</div>
        <p>
          Visit our&nbsp;
          {/* <a onclick="leaveSiteLink('https://usaspending-help.zendesk.com/hc/en-us/community/topics'); trackLinkClick('Send Feedback'); return false;" href="https://usaspending-help.zendesk.com/hc/en-us/community/topics"> */}
          <a>Community Page today.</a>
        </p>
      </div>
      <div className={`${pageFooterStyles.flexItem} ${pageFooterStyles.socialLogos}`}>
        <div className={pageFooterStyles.floatBottom}>
          <div>
            <div className={pageFooterStyles.title}>Connect With Us</div>
            <div>
              {/* <a onclick="trackLinkClick('GitHub')" target="_blank" rel="noopener noreferrer" aria-labelledby="Github-icon-title" href="https://github.com/fedspendingtransparency/datalab"> */}
              <a><Github /></a>
              {/* <a onclick="trackLinkClick('Data World')" target="_blank" rel="noopener noreferrer" aria-labelledby="DataWorld-icon-title" href="https://data.world/usaspending"> */}
              <a><Dataworld /></a>
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
  </div>
)

export default PageFooter;
