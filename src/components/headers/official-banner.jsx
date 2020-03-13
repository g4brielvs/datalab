import React from "react"
import styles from "./official-banner.module.scss"

import flag from "../../../src/images/us_flag_small.png"

class OfficialBanner extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<header className={styles.officialBanner}>
				<ul className={styles.siteList}>
					<li className={styles.siteItem}>
						<a className={styles.siteLink} href="https://www.usaspending.gov">
							USAspending.gov
	    </a>
					</li>
					<li className={`${styles.siteItem} ${styles.itemSpacer}`} aria-hidden="true">
						|
	  </li>
					<li className={styles.siteItem}>
						<a className={styles.siteLink} href="https://datalab.usaspending.gov">
							Data Lab
	    </a>
					</li>
				</ul>
				<div className={styles.wrapper}>
					<div className={styles.text}>
						An official website of the U.S. government
	  </div>
					<img
						className={`${styles.flag} lazyload`}
						data-src={flag}
						alt="U.S. flag" />
				</div>
			</header>
		);
	}
} // end class



export default OfficialBanner
