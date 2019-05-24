import React, { Component } from 'react';
import './footer.scss';

class SiteFooter extends Component {
    render() {
        return (
            <>
            <div className="dl-footer">
                <div className="dl-footer__logo dl-footer__divider">
                    <img src="/footer/data-lab.svg"></img>
                </div>

                <div className="dl-footer__section dl-footer__divider">

                    <div className="dl-footer__group-title">Contact Us</div>
                    <p>
                        For media inquiries or questions<br /> on Data Lab activities or operations,<br /> please contact our Legislative<br /> and Public Affairs Office:
                    </p>
                    <p>
                        E: media.relations@fiscal.treasury.gov
                    </p>
                </div>

                <div className="dl-footer__section dl-footer__divider">

                    <div className="dl-footer__group-title">Mailing List</div>
                    <p>
                        To join our mailing list, send a<br /> blank email with no subject to:<br /> <a className="community-page-link" href="mailto: datalab@lists.fiscal.treasury.gov">datalab@lists.fiscal.treasury.gov</a>
                    </p>
                    <div className="dl-footer__group-title">Join the Conversation</div>
                    <p>
                        Visit our  <a href="https://usaspending-help.zendesk.com/hc/en-us/community/topics" className="community-page-link">Community Page today.</a>
                    </p>

                </div>


                <div className="dl-footer__social">
                    <div className="dl-footer__group-title">Connect With Us</div>
                    <div className="dl-footer__social-items">
                        <a target="_blank" rel="noopener noreferrer" aria-labelledby="Github-icon-title" href="https://github.com/fedspendingtransparency/datalab">
                            <img src="/footer/github-footer.svg"></img>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" aria-labelledby="DataWorld-icon-title" href="https://data.world/usaspending">
                            <img src="/footer/data-world.svg"></img>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" aria-labelledby="Twitter-icon-title" href="https://twitter.com/fiscalservice">
                            <img src="/footer/twitter-footer.svg"></img>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" aria-labelledby="Facebook-icon-title" href="https://www.facebook.com/pg/fiscalservice">
                            <img src="/footer/facebook-footer.svg"></img>
                        </a>

                        <a target="_blank" rel="noopener noreferrer" aria-labelledby="LinkediIn-icon-title" href="https://www.linkedin.com/company/united-states-department-of-the-treasury-bureau-of-public-debt">
                            <img src="/footer/linkedin-footer.svg"></img>
                        </a>
                    </div>
                </div>
            </div>
            <footer id="footer">
                <div>
                © 2018 USAspending.gov |&nbsp;
                <a href="https://www.usaspending.gov/#/about/accessibility">Accessibility</a> |&nbsp;
                <a href="https://www.usaspending.gov/#/about/privacy">Privacy Policy</a> |&nbsp;
                <a href="https://www.usaspending.gov/#/about/foia">Freedom of Information Act</a>
            </div>
                <div className="footer-important-info">
                <b>NOTE:</b> <a href="https://beta.usaspending.gov/#/db_info">You must click here for very important D&amp;B information.</a>
            </div>
            </footer>
            </>
        )
    }
}

export default SiteFooter