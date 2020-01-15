import '../../../libs/ffg/src/globalSass/cg.scss'
import '../../../libs/assets/ffg/nav/nav.css'
import '../../../libs/ffg/src/globalSass/countryCommon.scss'
import '../../../libs/ffg/src/debt/countries/debt-country-comparison.scss'

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

function DebtCountryComparisonPage(props) {
    return (
        <>

            <Helmet>
                <script defer src="/americas-finance-guide/debt/countryComparison.js"></script>
                <script defer src="/americas-finance-guide/nav.js"></script>
            </Helmet>

            <SEO
                title='Data Lab - Debt Country Comparison – U.S. Treasury'
                description='Compare the federal debt of the United States to other countries.'
                excerpt='The U.S. government had $21.5 trillion in debt, or about 103% of U.S. gross domestic product (GDP) for 2017. Because the U.S. government has more money coming in and going out than any other country, it helps to compare the debt of the U.S. government to other countries relative to the size of their economies.'
                keywords={[` debt, national debt, federal debt, U.S. debt, interest rate, interest expense, total debt, cost of debt, GDP, gross domestic product, debt of US.S. compared to other countries, China, Japan, France, Germany, United Kingdom, India owners of US debt, monthly statement of the public debt, MSPD`]}
            />

            <Default>
                <HeaderOnly></HeaderOnly>

                <nav className="chapter-nav chapter-nav--debt">
                    <ul className="chapter-nav__primary-list">
                        <li className="chapter-nav__overview"><a href="../"><FontAwesomeIcon icon={faAngleLeft} className="fas fa-chevron-left"/> Overview</a></li>
                        <li><a href="/americas-finance-guide/explore-debt">Explore Debt</a></li>
                        <li><a href="/americas-finance-guide/trends.html">Federal Debt Trends</a></li>
                        <li><a href="/americas-finance-guide/analysis.html">Federal Debt Analysis</a></li>
                        <li><a href="/americas-finance-guide/debt-country-comparison">Country Comparison</a></li>
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
                            title='Data Lab - Debt Country Comparison – U.S. Treasury'
                            twitter='How does the federal debt of the U.S. compare to other countries? Check out Your Guide to America’s Finances for data from 169 countries.  Check out the site’s data visualizations, then download .CSV files of the data to perform your own analysis. #YourGuide #DataLab #OpenGov"'
                            />
                    </ControlBar>

                    <h1>Compare the Federal Debt of the United States to Other Countries</h1>

                    <div className="country-copy">
                        <div className="country-copy__text">
                            <p>How does the United States compare to countries of similar size and gross domestic product? Explore the chart, which shows the total debt of the United States compared to {AfgData.countries_compared.value} other countries listed in the CIA World Factbook. You can compare total debt (in dollars) and debt as a percent of gross domestic product. Find a country of interest and see for yourself. For instance, while the U.S. federal debt was greater than that of China and Japan combined, it ranked {AfgData.compare_us_debt_gdp_rank.value} in debt to gross domestic product. Because the U.S. government has more money coming in and going out than any other country, it helps to compare the debt of the U.S. government to other countries based on the size of their economies. To ensure an accurate comparison, {AfgData.country_compare_year.value} debt data is used in this section, not current fiscal year data.</p>
                            <p><em>Please note that the countries depicted in this chart have different forms of government, and these differences may impact the scope of finances reported by each country.</em></p>
                        </div>
                        <a className="chapter-link chapter-link--revenue" href="/americas-finance-guide/revenue-and-gdp">
                            <div className="chapter-link__text-block">
                                <div className="chapter-link__learn-more">Learn more about</div>
                                Federal Revenue
                            </div>
                            <FontAwesomeIcon icon={faAngleRight} className="fa fa-angle-right" />
                        </a>
                    </div>

                    <div className="country-chart">
                        <h2 className="chart-title">Country Comparison</h2>
                        <div className="hint">Click <span className="sort-button-placeholder"></span> to sort columns.</div>

                        <div id="viz" className="debt-country"></div>
                    </div>

                    <div className="clearfix"></div>

                    <section className="hwcta">
                        <Accordion title="Data Sources and Methodology">
                            <p>This visualization was created using the <a href={AfgData.country_comparison_mspd.value} rel="noopener noreferrer" target="_blank">Monthly Statement of the Public Debt (MSPD)</a> as the data source for federal government debt of the United States. Gross domestic product (GDP) figures come from the <a href={AfgData.imf_gdp.value} rel="noopener noreferrer" target="_blank">International Monetary Fund (IMF) World Economic Outlook Database (WEOD)</a>. Debt figures for countries other than the United States also come from the <a href={AfgData.imf_debt.value} rel="noopener noreferrer" target="_blank">IMF WEOD</a>. Since debt figures were provided in the national currency for the selected countries, the numbers were subsequently converted to U.S. dollars. Currency conversion rates were pulled from <a href={AfgData.xe_conversion.value} rel="noopener noreferrer" target="_blank">XE.com</a> for {AfgData.xe_conversion_date.value}; the last day of the U.S. federal government's fiscal year.</p>
                            <p>The conversion of debt figures to U.S. dollars makes comparisons among countries more convenient. However, the implied burden of debt may be misrepresented for a given country if the majority of that nation's debt was denominated in a currency other than U.S. dollars, and the currency in which the debt was held had an abnormal valuation relative to the U.S. dollar on the date of currency conversion.</p>
                            <div className="afg__download--div">
                                <div className="afg__download--heading">Download Source Data</div>
                                <ul>
                                    <li><a href="/americas-finance-guide/afgData/debt_country_comparison.csv" download="debt_country_comparison.csv">debt_country_comparison.csv</a></li>
                                </ul>
                            </div>
                        </Accordion>
                    </section>
                </div>
            </Default>
        </>
    )
}

export default DebtCountryComparisonPage
