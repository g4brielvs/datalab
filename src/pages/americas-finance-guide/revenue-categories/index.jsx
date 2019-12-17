import '../../../libs/ffg/src/globalSass/cg.scss'
import '../../../libs/ffg/src/globalSass/normalize.scss'
import '../../../libs/assets/ffg/nav/nav.css'
import '../../../libs/ffg/src/revenue/categories/revenue-categories.scss'

import React from "react"
import SEO from "../../../components/seo"
import AfgData from "../../../libs/_data/object_mapping.yml"
import Default from "../../../components/layouts/default/default"
import { HeadOnly } from "../../../components/headers/headers"
import Accordion from '../../../components/accordion/accordion'
import ControlBar from '../../../components/control-bar/control-bar'
import Share from '../../../components/share/share'
import { Helmet } from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleDown, faAngleUp, faStreetView } from '@fortawesome/free-solid-svg-icons';

function RevenueCategoriesPage(props) {
    return (
        <>

            <Helmet>
                <script defer src="/americas-finance-guide/revenue-categories/index.js"></script>
                <script defer src="/americas-finance-guide/nav.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Revenue Categories – U.S. Treasury'
                description='Explore the breakdown of revenue sources of the federal government.'
                excerpt='Most of the revenue the government collects comes from taxes from individuals, small businesses, and corporations. Other sources of federal revenue include excise, estate, and other taxes and fees.'
                keywords={[`federal revenue, revenue categories, individual taxes, corporate taxes, excise tax, estate tax, payroll tax, Social Security, Medicare, trust fund`]}
            />

            <Default>
                <HeadOnly></HeadOnly>

                <nav className="chapter-nav chapter-nav--revenue">
                    <ul className="chapter-nav__primary-list">
                        <li className="chapter-nav__overview"><a href="../"><FontAwesomeIcon icon={faAngleLeft} className="fas fa-chevron-left"/> Overview</a></li>
                        <li><a href="./revenue-and-gdp">Revenue and GDP</a></li>
                        <li><a href="./revenue-categories">Revenue Categories</a></li>
                        <li><a href="./revenue-trends">Federal Revenue Trends</a></li>
                        <li><a href="./revenue-country-comparison">Country Comparison</a></li>
                    </ul>
                    <button className="chapter-nav-trigger">
                        <FontAwesomeIcon icon={faAngleDown} className="fas fa-lg fa-angle-down menu-down"/>
                        <FontAwesomeIcon icon={faAngleUp} className="fas fa-lg fa-angle-up menu-up"/>
                    </button>
                </nav>

                <div className="ffg-wrapper revenue-categories">
                    <ControlBar>
                        <Share  
                            location={props.location}
                            title="Data Lab - Revenue Categories – U.S. Treasury"
                            twitter="What are the federal government’s sources of revenue? Search by category with Your Guide to America’s Finances and download .CSV data files for your own analysis! #YourGuide #DataLab #OpenGov"
                            facebook='' reddit='' linkedin='' tumblr='' email='' />
                    </ControlBar>

                </div>
            </Default>
        </>
    )
}

export default RevenueCategoriesPage