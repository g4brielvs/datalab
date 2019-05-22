import React from "react"
import AfgLayout from "../../../components/afg/afgLayout/afgLayout"
import DataSource from '../../../components/dataSource/dataSource'
import SourcesMethodology from '../../../components/sourcesMethodology/sourcesMethodology'
import Helmet from 'react-helmet'
import '../../../components/afg/afgSharedCss/trendsCommon.css';

const Countries = () => (
<AfgLayout chapter="revenue">
    <Helmet>
        <script defer src={'/afg/revenue/trends.js'}></script>
    </Helmet>

    <h1>Federal Revenue Trends Over Time</h1>

    <div className="trend-flex">
        <div className="trend-copy">
            <div className="tend-copy__text">
                <p>How has federal revenue changed over the past few years? This chart shows the various source categories for federal revenue over a five year period. Click a category to view revenue by subcategory. What changes have occurred over the past five years? What impact do changes in a subcategory have on government revenue?</p>
            </div>
            <section className="tour">
                <div className="tour__part-one">
                    <h1>How does the revenue of the United States compare to other countries?</h1>
                    <p>When you're done here, see how revenue collected by the U.S. government compares to other countries.</p>
                </div>
                <a className="tour__link" href="./country-comparison.html">Continue<i className="fas fa-chevron-right"></i></a>
            </section>
        </div>

        <div className="trend-chart">
            <h2 className="chart-title">Federal Revenue Trends over Time by Category</h2>
            <div className="hint">Click a revenue category to view more</div>

            <div id="viz"></div>
        </div>
    </div>

    <div className="clearfix"></div>

    <SourcesMethodology>
        The visualization was created using <DataSource dataKey="mtsHomepage" /> as the data source for federal government revenue of the United States. Some categories from the MTS have been renamed in order to be more easily understood. <DataSource dataKey="blsCpiu" /> was used to adjust revenue in fiscal years 2014-2017 for inflation. Adjusting for inflation allows users to see real, not nominal, changes in sources of revenue over time.
        <div class="afg__download--div">
            <div class="afg__download--heading">Download Source Data</div>
            <ul>
                <li><a href="../../../assets/ffg/data/federal_revenue_trends.csv" download>federal_revenue_trends.csv</a></li>
            </ul>
        </div>
    </SourcesMethodology>
</AfgLayout>
)
                                
export default Countries