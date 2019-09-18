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
		return (
			<header className="official-banner">
				<ul className="official-banner__site-list">
					<li className="official-banner__site-item">
						<a className="official-banner__site-link" href="https://www.usaspending.gov">
							USAspending.gov
	    </a>
					</li>
					<li className="official-banner__site-item official-banner__site-item_spacer" aria-hidden="true">
						|
	  </li>
					<li className="official-banner__site-item">
						<a className="official-banner__site-link" href="https://datalab.usaspending.gov">
							Data Lab
	    </a>
					</li>
				</ul>
				<div className="official-banner__wrapper">
					<div className="official-banner__text">
						An official website of the U.S. government
	  </div>
					<img className="official-banner__flag" src={flag} alt="U.S. flag" />
				</div>
			</header>
		);
	}

}; // end class



export default SiteHeader
