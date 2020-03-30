import React from 'react';
import siteFooterStyles from './site.module.scss';
import { Hidden } from '@material-ui/core';

const SiteFooter = props => (
  <footer className={siteFooterStyles.siteFooter}>
    <Hidden xsDown>
      <div>
        &copy;&nbsp;2020&nbsp;USAspending.gov |&nbsp;
        <a href='https://www.usaspending.gov/#/about/accessibility'>Accessibility</a> |&nbsp;
        <a href='https://www.usaspending.gov/#/about/privacy'>Privacy&nbsp;Policy</a> |&nbsp;
        <a href='https://www.usaspending.gov/#/about/foia'>Freedom&nbsp;of&nbsp;Information&nbsp;Act</a>
      </div>
      <div>
        <b>NOTE:</b> <a href='https://beta.usaspending.gov/#/db_info'>You must click here for very important D&B information.</a>
      </div>
    </Hidden>
    <Hidden smUp>
      &copy;&nbsp;2020&nbsp;USAspending.gov<br />
      <a href='https://www.usaspending.gov/#/about/accessibility'>Accessibility</a><br />
      <a href='https://www.usaspending.gov/#/about/privacy'>Privacy&nbsp;Policy</a><br />
      <a href='https://www.usaspending.gov/#/about/foia'>Freedom&nbsp;of&nbsp;Information&nbsp;Act</a><br /><br />
      <b>NOTE:</b> <a href='https://beta.usaspending.gov/#/db_info'>You must click here for very important D&B information.</a>
    </Hidden>
  </footer>
)

export default SiteFooter;
