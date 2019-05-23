import React from "react"
import AfgLayout from "../../../components/afg/afgLayout/afgLayout"
import DataSource from '../../../components/dataSource/dataSource'
import SourcesMethodology from '../../../components/sourcesMethodology/sourcesMethodology'
import Helmet from 'react-helmet'
import '../../../components/afg/afgSharedCss/chapterIntroCommon.css';

const Index = () => (
<AfgLayout chapter="revenue">
    <Helmet>
        <script defer src={'/afg/revenue/intro.js'}></script>
    </Helmet>

    <div className="ffg-wrapper revenue-intro">

    <h1>In 2018, the government collected $3.3 trillion in revenue.
        <button className="info-box-trigger" data-box-id="per-individual">
            <img src="/assets/ffg/icons/anecdote.svg" alt="anecdote icon" />
        </button>
    </h1>

    <div className="viz-wrapper">
        <div id="viz"></div>

        <div className="intro-math intro-hidden">
            <i className="fas fa-reply intro-math__icon"></i>3,300 dots x $1 billion = <strong>$3.3 trillion</strong>
        </div>

        <div id="copy" className="intro-hidden">
            <p>Where does the money come from? If you lived or worked in the United States in 2018, most likely your contributions are part of the $3.3 trillion. Federal revenue consists mostly of individual, corporate, and social insurance taxes collected from the people who live, work, or do business in the United States each Fiscal Year.
                <button className="info-box-trigger" data-box-id="fiscal-year">
                    <img src="/assets/ffg/icons/anecdote.svg" alt="anecdote icon" />
                </button>
            </p>
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
                    <h1>In Fiscal Year 2018, the federal government spent $4.1 trillion.</h1>
                    <p>Since the government spent more than it collected, the deficit for 2018 was $779 billion.</p>
                    <p>
                        <a href="../spending/">Go Explore Federal Spending</a>
                    </p>
                </section>

                <section id="gdp-facts" className="facts__section">
                    <h1>In Fiscal Year 2018, federal revenue was equal to 16% of total gross domestic product (GDP), or economic activity, of the United States that year ($20.7 trillion).</h1>
                    <p>Why do we compare federal revenue to gross domestic product? For one, the comparison serves as a rough gauge of the size of the federal government's footprint related to size of the entire country's economic activity. In addition, federal taxes are based on a percentage of income for people and businesses. If an economy is performing well, people and businesses earn more, and federal revenue from taxes increases.</p>

                    <strong>What's gross domestic product?
                        <button className="info-box-trigger" data-box-id="gdp-info">
                            <img src="/assets/ffg/icons/definition.svg" alt="definition icon" />
                        </button>
                    </strong>
                </section>
            </div>
        </div>

        <section className="tour sidebar intro-hidden">
            <h1 className="tour__heading">What are the sources of government revenue?</h1>
            <a id="tour-continue" className="tour__link" href="./categories.html">Discover<i className="fas fa-chevron-right"></i></a>
        </section>
    </div>

    <div className="info-box" id="per-individual">
        <img src="/assets/ffg/icons/anecdote.svg" alt="anecdote icon" />
        <p>How much is $3.3 trillion? If you take $3.3 trillion divided by the U.S. population estimate in 2018, of 327.7 million (<a href="https://www.census.gov/popclock/" target="_blank" rel="noopener noreferrer">U.S. Census Bureau</a>) that would equate to a little more than $10,000 in revenue for every individual in the U.S.</p>
    </div>

    <div className="info-box" id="fiscal-year">
        <img src="/assets/ffg/icons/anecdote.svg" alt="anecdote icon" />
        <p>Fiscal Year refers to the period of time used by the government for accounting and budget purposes. For the federal government, the fiscal year runs from October 1 through September 30.</p>
    </div>

    <div className="info-box" id="gdp-info">
        <img src="/assets/ffg/icons/definition.svg" alt="definition icon" />
        <p><strong>Gross domestic product (GDP)</strong> measures the size of the nation's economy by the total value of final goods and services that are produced in a year. Gross domestic product is used to compare the economies of different countries, measure growth in the economy, and determine the right monetary policies to address inflation and unemployment.</p>
    </div>

    <div className="info-box" id="billion-dollars">
        <img src="/assets/ffg/icons/anecdote.svg" alt="anecdote icon" />
        <p>In this visualization, one dot represents $1 billion of federal revenue.</p>
    </div>
</div>

<div className="clearfix"></div>

    <SourcesMethodology>
        The visualization was created using the <DataSource dataKey="currentMts" /> as the data source for federal government revenue of the United States. Gross domestic product (GDP) figures come from the <DataSource dataKey="beaGdp" />. The revenue-to-gross domestic product ratio is included to provide you with context for the trillions of dollars that come in to the federal government annually. Throughout this page, we use the gross domestic product for the Fiscal Year, not the Calendar Year, in order to facilitate an appropriate comparison.
        <div className="afg__download--div">
            <div className="afg__download--heading">Download Source Data</div>
            <ul>
                <li><a href="../../../assets/ffg/data/federal_revenue_gdp.csv" download>federal_revenue_gdp.csv</a></li>
            </ul>
        </div>
    </SourcesMethodology>
</AfgLayout>
)
                                
export default Index