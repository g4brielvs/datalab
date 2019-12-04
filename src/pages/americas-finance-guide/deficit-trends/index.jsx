import '../../../libs/ffg/src/globalSass/cg.scss'
import '../../../libs/ffg/src/globalSass/normalize.scss'
import '../../../libs/assets/ffg/nav/nav.css'
import '../../../libs/ffg/src/globalSass/trendsCommon.scss'
import '../../../libs/ffg/src/deficit/trends/deficit-trends.scss'

import React from "react"
import SEO from "../../../components/seo"
import AfgData from "../../../libs/_data/object_mapping.yml"
import Default from "../../../components/layouts/default/default"
import HeaderOnly from "../../../components/layouts/header-only/header-only"
import Accordion from '../../../components/accordion/accordion'
import ControlBar from '../../../components/control-bar/control-bar'
import Share from '../../../components/share/share'
import { Helmet } from 'react-helmet';

function DeficitTrendsPage(props) {
    return (
        <>

            <Helmet>
                <script defer src="/americas-finance-guide/deficit/trends.js"></script>
                <script defer src="/americas-finance-guide/nav.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Federal Deficit Trends – U.S. Treasury'
                description='The federal government has run deficits for the last 18 years. A deficit occurs when the government spends more money than it collects.'
                excerpt='The U.S. has experienced a deficit each year since 2001. Beginning in 2016, increases in spending on Social Security, health care, and interest on federal debt have outpaced the growth of federal revenue.'
                keywords={[`Deficit, surplus, national deficit, debt, national debt, federal deficit, U.S. deficit, spending, revenue, money going out, money coming in, debtdeficit vs. debt, deficit trends, balanced budget`]}
            />

            <Default>
                <HeaderOnly></HeaderOnly>

                <nav className="chapter-nav chapter-nav--deficit">
                    <ul className="chapter-nav__primary-list">
                        <li className="chapter-nav__overview"><a href="../"><i className="fas fa-chevron-left"></i> Overview</a></li>
                        <li><a href="./explore-deficit">Explore Deficit</a></li>
                        <li><a href="./deficit-trends">Federal Deficit Trends</a></li>
                        <li><a href="./deficit-country-comparison">Country Comparison</a></li>
                    </ul>
                    <button className="chapter-nav-trigger">
                        <i className="fas fa-lg fa-angle-down menu-down"></i>
                        <i className="fas fa-lg fa-angle-up menu-up"></i>
                    </button>
                </nav>

                {/* add className here? you had to for deficit intro */}
                <div className="ffg-wrapper">
                    <ControlBar>
                        <Share 
                            location={props.location}
                            title="Data Lab - Federal Deficit Trends – U.S. Treasury"
                            text="How has the deficit changed over the past few years? Check out #YourGuide for visualizations. #DataLab #OpenGov"
                            facebook='' reddit='' linkedin='' tumblr='' email='' />
                    </ControlBar>
                </div>

                <h1>Federal Deficit Trends Over Time</h1>

                <img className="deficit-trend" src="/americas-finance-guide/images/deficit-trend.svg" alt="In 2000 and 2001 the federal government experienced surpluses of $237 billion and $127 billion respectively. Since 2001, the federal government has not had another surplus. While the annual deficit did not exceed $500 billion from 2002 to 2008, the annual deficit increased substantially in response to the Great Recession with annual deficits exceeding $1 trillion from 2009 to 2012. The annual deficit declined from 2012 to 2015, falling below the $500 billion mark in 2015. Since then, however, the annual deficit has grown each year to $984 billion in 2019."></img>

                <aside className="deficit-aside">
                    <p>Since {AfgData.last_surplus.value}, the U.S. has experienced a deficit each year. Beginning in 2016, increases in spending on Social Security, health care, and interest on federal debt have outpaced the growth of federal revenue.</p>

                    <section className="accordion">
                        <Accordion title="What does it mean when there is a surplus, balanced budget, and deficit?">
                            <div className="accordion__content">
                                <div id="surplusComponent">
                                    <div className="deficit--surplus__component--content deficit--surplus__surplus">
                                        <img className="deficit__tabs-image" src="/assets/ffg/deficit/surplus.svg" alt="" role="presentation"></img>
                                        A surplus occurs when the government collects more money than it spends. The last surplus for the federal government was in {AfgData.last_surplus.value}.
                                    </div>
                                    <div className="deficit--surplus__component--content deficit--surplus__balanced">
                                        <img className="deficit__tabs-image" src="/assets/ffg/deficit/balanceBudget.svg" alt="" role="presentation"></img>
                                        A balanced budget occurs when the amount the government spends equals the amount the government collects. Sometimes the term balanced budget is used more broadly to refer to instances where there is no deficit.
                                    </div>
                                    <div className="deficit--surplus__component--content deficit--surplus__deficit">
                                        <img className="deficit__tabs-image" src="/assets/ffg/deficit/deficit.svg" alt="" role="presentation"></img>
                                        A deficit occurs when the government spends more money than it collects. The federal government has run deficits for the last {AfgData.consecutive_deficits.value} years.
                                    </div>
                                </div>
                            </div>
                        </Accordion>
                    </section>

                    <section className="tour">
                        <div className="tour__part-one">
                            <h1>How does the deficit in the United States compare to other countries?</h1>
                            <p>When you are done here, see how the U.S. deficit compares to other countries.</p>
                        </div>
                        <a className="tour__link" href="./deficit-country-comparison">Continue<i className="fas fa-chevron-right"></i></a>
                    </section>
                </aside>

                <div className="clearfix"></div>

                <section className="hwcta">
                    <Accordion title="Data Sources and Methodology">
                        <p>The visualization was created using the <a href={AfgData.mts_homepage.value} rel="noopener noreferrer" target="_blank">Monthly Treasury Statement (MTS)</a> as the data source for federal government revenue and spending of the United States.</p>
                        <div className="afg__download--div">
                            <div className="afg__download--heading">Download Source Data</div>
                            <ul>
                                <li><a href="/americas-finance-guide/afgData/federal_deficit_trends.csv" download="federal_deficit_trends.csv">federal_deficit_trends.csv</a></li>
                            </ul>
                        </div>
                    </Accordion>
                </section>
            </Default>
        </>
    )
}

export default DeficitTrendsPage

