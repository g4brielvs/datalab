import '../../../libs/ffg/src/globalSass/cg.scss'
import '../../../libs/ffg/src/globalSass/normalize.scss'
import '../../../libs/assets/ffg/nav/nav.css'
import '../../../libs/ffg/src/globalSass/trendsCommon.scss'

import React from "react"
import SEO from "../../../components/seo"
import AfgData from "../../../libs/_data/object_mapping.yml"
import Default from "../../../components/layouts/default/default"
import HeaderOnly from "../../../components/layouts/header-only/header-only"
import Accordion from '../../../components/accordion/accordion'
import ControlBar from '../../../components/control-bar/control-bar'
import Share from '../../../components/share/share'
import { Helmet } from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function RevenueTrendsPage(props) {
    return (
        <>

            <Helmet>
                <script defer src="/americas-finance-guide/revenue/trends.js"></script>
                <script defer src="/americas-finance-guide/nav.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Federal Revenue Trends – U.S. Treasury'
                description='Find out how federal revenue has changed over time.'
                excerpt='This chart shows the categories for federal revenue sources over a five year period. Explore the interactive visualization to see what changes have occurred over the past five years.'
                keywords={[`federal revenue, revenue trends over time, federal revenue sources, federal income sources, U.S. revenue categories`]}
            />

            <Default>
                <HeaderOnly></HeaderOnly>

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

                <div className="ffg-wrapper">
                    <ControlBar>
                        <Share 
                            location={props.location}
                            title="Data Lab - Federal Revenue Trends – U.S. Treasury"
                            twitter="Wondering how federal revenue has changed over the years? Your Guide to America’s Finances has the .CSV data file. Download and perform your own analysis. #YourGuide #DataLab #OpenGov"
                            />
                    </ControlBar>

                    <h1>Federal Revenue Trends Over Time</h1>

                    <div className="trend-flex">
                        <div className="trend-copy">
                            <div className="tend-copy__text">
                                <p>How has federal revenue changed over the past few years? This chart shows the various source categories for federal revenue over a {AfgData.number_trend_years.value} year period. Click a category to view revenue by subcategory. What changes have occurred over the past {AfgData.number_trend_years.value} years? What impact do changes in a subcategory have on government revenue?</p>
                            </div>
                            <section className="tour">
                                <div className="tour__part-one">
                                    <h1>How does the revenue of the United States compare to other countries?</h1>
                                    <p>When you're done here, see how revenue collected by the U.S. government compares to other countries.</p>
                                </div>
                                <a className="tour__link" href="/americas-finance-guide/revenue-country-comparison">Continue<FontAwesomeIcon icon={faAngleRight} className="fas fa-chevron-right"/></a>
                            </section>
                        </div>

                        <div className="trend-chart">
                            <h2 className="chart-title">Federal Revenue Trends over Time by Category</h2>
                            <div className="hint">Click a revenue category to view more</div>

                            <div id="viz"></div>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                    <section className="hwcta">
                        <Accordion title="Data Sources and Methodology">
                            <p>The visualization was created using <a href={AfgData.mts_homepage.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue of the United States. Some categories from the MTS have been renamed in order to be more easily understood. <a href={AfgData.bls_cpiu.value} rel="noopener noreferrer" target="_blank">The Bureau of Labor Statistics (BLS) Consumer Price Index for All Urban Consumers (CPI-U)</a> was used to adjust revenue in fiscal years {AfgData.inflation_adj_years.value} for inflation. Adjusting for inflation allows users to see real, not nominal, changes in sources of revenue over time.</p>
                            <div className="afg__download--div">
                                <div className="afg__download--heading">Download Source Data</div>
                                <ul>
                                    <li><a href="/americas-finance-guide/afgData/federal_revenue_trends.csv" download="federal_revenue_trends.csv">federal_revenue_trends.csv</a></li>
                                </ul>
                            </div>
                        </Accordion>
                    </section>
                </div>
            </Default>
        </>
    )
}

export default RevenueTrendsPage