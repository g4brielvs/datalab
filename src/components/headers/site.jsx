import React from "react"
import "./site.scss"

import flag from "../../../src/images/us_flag_small.png"

class SiteHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // todo
    };
  };
  
  render() {
    return(
      <header class="official-banner">
	<ul class="official-banner__site-list">
	  <li class="official-banner__site-item">
	    <a class="official-banner__site-link" href="https://www.usaspending.gov">
              USAspending.gov
	    </a>
	  </li>
	  <li class="official-banner__site-item official-banner__site-item_spacer" aria-hidden="true">
      |
	  </li>
	  <li class="official-banner__site-item">
	    <a class="official-banner__site-link" href="https://datalab.usaspending.gov">
              Data Lab
	    </a>
	  </li>
	</ul>
	<div class="official-banner__wrapper">
	  <div class="official-banner__text">
	    An official website of the U.S. government
	  </div>
	  <img class="official-banner__flag" src={flag} alt="U.S. flag" />
	</div>
      </header>
    );
  }

}; // end class



export default SiteHeader
