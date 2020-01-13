import React from "react"

import style from './afg-nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const navRevenueClasses = `chapter-nav chapter-nav--revenue`;

const AfgNavRevenue = () => (
    <nav className={navRevenueClasses}>
        <ul className={style.chapterNavPrimaryList}>
            <li className={style.chapterNavOverview}><a href="../"><FontAwesomeIcon icon={faAngleLeft} className="fas fa-chevron-left"/> Overview</a></li>
            <li><a href="/americas-finance-guide/revenue-and-gdp">Revenue and GDP</a></li>
            <li><a href="/americas-finance-guide/revenue-categories">Revenue Categories</a></li>
            <li><a href="/americas-finance-guide/revenue-trends">Federal Revenue Trends</a></li>
            <li><a href="/americas-finance-guide/revenue-country-comparison">Country Comparison</a></li>
        </ul>
        <button className={style.chapterNavTrigger}>
            <FontAwesomeIcon icon={faAngleDown} className="fas fa-lg fa-angle-down menu-down"/>
            <FontAwesomeIcon icon={faAngleUp} className="fas fa-lg fa-angle-up menu-up"/>
        </button>
    </nav>
)

export default AfgNavRevenue;
