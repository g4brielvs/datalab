import '../../../libs/ffg/src/globalSass/chapterIntroCommon.scss'
import '../../../libs/ffg/src/globalSass/cg.scss'
import '../../../libs/ffg/src/globalSass/normalize.scss'
import '../../../libs/assets/ffg/nav/nav.css'

import React from "react"
import SEO from "../../../components/seo"
import AfgData from "../../../libs/_data/object_mapping.yml"
import Default from "../../../components/layouts/default/default"
import { HeadOnly } from "../../../components/headers/headers"
import GdpTemplate from '../../../components/gdp-template/gdp-template'
import Accordion from '../../../components/accordion/accordion'
import ControlBar from '../../../components/control-bar/control-bar'
import Share from '../../../components/share/share'
import { Helmet } from 'react-helmet';

import AnecdoteRevenueSVG from '../../../libs/assets/ffg/icons/anecdote-revenue.svg';
import DefinitionSVG from '../../../libs/assets/ffg/icons/definition.svg';

function RevenueAndGdpPage(props) {
    return (
        <>
            <Helmet>
                <script defer src="/americas-finance-guide/revenue/intro.js"></script>
                <script defer src="/americas-finance-guide/nav.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Federal Revenue and GDP – U.S. Treasury'
                description='In 2019, the government collected $3.5 trillion in federal revenue'
                excerpt='Federal revenue consists mostly of individual, corporate, and social insurance taxes collected from the people who live, work, or do business in the United States each Fiscal Year.'
                keywords={[`revenue, federal revenue, U.S. revenue, gdp, receipts, income taxes, corporate taxes`]}
            />

            <Default>
                <HeadOnly></HeadOnly>

                <nav className="chapter-nav chapter-nav--revenue">
                    <ul className="chapter-nav__primary-list">
                        <li className="chapter-nav__overview"><a href="../"><i className="fas fa-chevron-left"></i> Overview</a></li>
                        <li><a href="./revenue-and-gdp">Revenue and GDP</a></li>
                        <li><a href="./revenue-categories">Revenue Categories</a></li>
                        <li><a href="./revenue-trends">Federal Revenue Trends</a></li>
                        <li><a href="./revenue-country-comparison">Country Comparison</a></li>
                    </ul>
                    <button className="chapter-nav-trigger">
                        <i className="fas fa-lg fa-angle-down menu-down"></i>
                        <i className="fas fa-lg fa-angle-up menu-up"></i>
                    </button>
                </nav>

                <div className="ffg-wrapper revenue-intro">
                    <ControlBar>
                        <Share 
                            location={props.location}
                            title='Data Lab - Federal Revenue and GDP – U.S. Treasury'
                            twitter='How does federal revenue compare to spending and the size of the economy? Download the .CSV data files from Your Guide to America’s Finances and perform your own analysis! #YourGuide #DataLab #OpenGov'
                            facebook='' reddit='' linkedin='' tumblr='' email='' />
                    </ControlBar>

                    <h1>In {AfgData.current_fy.value}, the government collected {AfgData.current_fy_revenue.value} in revenue.
                        <button className="info-box-trigger" data-box-id="per-individual">
                            <img src={AnecdoteRevenueSVG} alt="anecdote icon"></img>
                        </button>
                    </h1>

                    <div className="viz-wrapper">
                        <div id="viz"></div>

                        <div className="intro-math intro-hidden">
                            <i className="fas fa-reply intro-math__icon"></i>{AfgData.dot_number_revenue.value} dots x {AfgData.dot_represents.value} = <strong>{AfgData.current_fy_revenue.value}</strong>
                        </div>

                        <div id="copy" className="intro-hidden">
                            <p>Where does the money come from? If you lived or worked in the United States in {AfgData.current_fy.value}, most likely your contributions are part of the {AfgData.current_fy_revenue.value}. Federal revenue consists mostly of individual, corporate, and social insurance taxes collected from the people who live, work, or do business in the United States each Fiscal Year.<button className="info-box-trigger" data-box-id="fiscal-year"><img src={AnecdoteRevenueSVG} alt="anecdote icon"></img></button></p>
                            
                        </div>

                        <div className="facts sidebar intro-hidden">
                            <div className="facts__inner">
                                <div id="compare-options">
                                    <p className="facts__prompt">How does federal revenue compare to federal spending and the size of the economy?</p>
                                    <div className="facts__triggers">
                                        <button className="facts__trigger" data-trigger-id="spending">Federal Spending</button>
                                        <button className="facts__trigger" data-trigger-id="gdp">U.S. Economy</button>
                                    </div>
                                </div>

                                <section id="spending-facts" className="facts__section">
                                    <h1>In Fiscal Year {AfgData.current_fy.value}, the federal government spent {AfgData.current_fy_spending.value}.</h1>
                                    <p>Since the government spent more than it collected, the deficit for {AfgData.current_fy.value} was {AfgData.current_fy_deficit.value}.</p>
                                    <p>
                                        <a href="./spending-and-gdp">Go Explore Federal Spending</a>
                                    </p>
                                </section>

                                <section id="gdp-facts" className="facts__section">
                                    <h1>In Fiscal Year {AfgData.current_fy.value}, federal revenue was equal to {AfgData.revenue_percent_gdp.value} of total gross domestic product (GDP), or economic activity, of the United States that year ({AfgData.current_fy_gdp.value}).</h1>
                                    <p>Why do we compare federal revenue to gross domestic product? For one, the comparison serves as a rough gauge of the size of the federal government's footprint related to size of the entire country's economic activity. In addition, federal taxes are based on a percentage of income for people and businesses. If an economy is performing well, people and businesses earn more, and federal revenue from taxes increases.</p>

                                    <strong>What's gross domestic product?
                                                <button className="info-box-trigger" data-box-id="gdp-info">
                                            <img src={DefinitionSVG} alt="definition icon"></img>
                                        </button>
                                    </strong>
                                </section>
                            </div>
                        </div> {/* end facts sidebar intro-hidden */}

                        <section className="accordion sidebar intro-hidden">
                            <Accordion title="Who owns the federal government's debt?">
                            <div className="accordion__content">
                                <p>Most of the federal government's debt is owned by federal trust funds and domestic investors in the United States. Foreign investors, including other governments, also own part of the debt.</p>
                            </div>
                            </Accordion>
                        </section>

                        <section className="tour sidebar intro-hidden">
                            <h1 className="tour__heading">What are the sources of government revenue?</h1>
                            <a id="tour-continue" className="tour__link" href="./revenue-categories">Discover<i className="fas fa-chevron-right"></i></a>
                        </section>

                        <div className="info-box" id="per-individual">
                            <img src={AnecdoteRevenueSVG} alt="anecdote icon"></img>
                            <p>How much is {AfgData.current_fy_revenue.value}? If you take {AfgData.current_fy_revenue.value} divided by the U.S. population estimate in {AfgData.current_fy.value}, of {AfgData.us_population.value} (<a href={AfgData.census_population.value} target="_blank" rel="noopener noreferrer">U.S. Census Bureau</a>) that would equate to a little more than {AfgData.revenue_per_individual.value} in revenue for every individual in the U.S.</p>
                        </div>
                        <div className="info-box" id="fiscal-year">
                            <img src={AnecdoteRevenueSVG} alt="anecdote icon"></img>
                            <p>Fiscal Year refers to the period of time used by the government for accounting and budget purposes. For the federal government, the fiscal year runs from October 1 through September 30.</p>
                        </div>
                        <div className="info-box" id="gdp-info">
                            <img src={DefinitionSVG} alt="definition icon"></img>
                            <p><strong>Gross domestic product (GDP)</strong> measures the size of the nation's economy by the total value of final goods and services that are produced in a year. Gross domestic product is used to compare the economies of different countries, measure growth in the economy, and determine the right monetary policies to address inflation and unemployment.</p>
                        </div>
                        <div className="info-box" id="billion-dollars">
                            <img src={AnecdoteRevenueSVG} alt="anecdote icon"></img>
                            <p>In this visualization, one dot represents {AfgData.dot_represents.value} of federal revenue.</p>
                        </div>
                    </div> {/* end viz-wrapper  */}
                </div> {/* end ffg-wrapper revenue-intro*/}
                <section className="hwcta">
                    <Accordion title="Data Sources and Methodology">
                    <p>The visualization was created using the <a href={AfgData.current_mts.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue of the United States. <GdpTemplate></GdpTemplate> The revenue-to-gross domestic product ratio is included to provide you with context for the trillions of dollars that come in to the federal government annually. Throughout this page, we use the gross domestic product for the Fiscal Year, not the Calendar Year, in order to facilitate an appropriate comparison.</p>
                    <div className="afg__download--div">
                        <div className="afg__download--heading">Download Source Data</div>
                        <ul>
                            <li><a href="/americas-finance-guide/afgData/federal_revenue_gdp.csv" download="federal_revenue_gdp.csv">federal_revenue_gdp.csv</a></li>
                        </ul>
                    </div>
                    </Accordion>
                </section>
            </Default>
        </>
    )
}
        
export default RevenueAndGdpPage