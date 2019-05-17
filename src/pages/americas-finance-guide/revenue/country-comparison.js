import React from "react"
import Layout from "../../../components/layout"
import DataSource from '../../../components/dataSource/dataSource'
import afg from '../../../components/afgSharedCss/cg.css';
import countryCommon from '../../../components/afgSharedCss/countryCommon.css';

const fy = 2017;

const Countries = () => (
    <>

<div className="ffg-wrapper">
    <h1>Compare Federal Revenue of the United States to other Countries</h1>

    <div className="country-copy">
        <div className="country-copy__text">
            <p>This chart outlines the total revenue of the United States compared to 169 different countries in 2017. In this section, figures are presented using financial data from 2017, allowing us to provide you with the most recent revenue data for the greatest number of countries.  In 2017, the United States collected $3.3 trillion. The $3.3 trillion in revenue collected was equivalent to 17% of total U.S. gross domestic product (GDP) for 2017.</p>
            <p>How does the U.S. compare to other countries? We encourage you to check out the chart. You can compare total revenue (in dollars) and revenue as a percent of gross domestic product. Find a country of interest and see for yourself. </p>
            <p><em>Please note that the countries depicted in this chart have different forms of government, and these differences may impact the scope of finances reported by each country.</em></p>
        </div>
        <a className="chapter-link chapter-link--spending" href="../spending/">
            <div className="chapter-link__text-block">
                <div className="chapter-link__learn-more">Learn more about</div>
                Federal Spending
            </div>
            <i className="fa fa-angle-right"></i>
        </a>
    </div>

    <div className="country-chart">
        <h2 className="chart-title">Country Comparison</h2>
        <div className="hint">Click <span className="sort-button-placeholder"></span> to sort columns</div>

        <div id="viz"></div>
    </div>

    <div className="clearfix"></div>

    <section className="hwcta">
        <p>The visualization was created using the <DataSource dataKey="countryComparisonMts" /> as the data source for federal government revenue of the United States. Gross domestic product (GDP) figures for the United States come from the <DataSource dataKey="beaGdp" />. GDP data for countries other than the United States comes from the <DataSource dataKey="imfGdp" />.</p>
        <p>In researching potential data sources for information on the revenue of other governments for the country comparison module, we chose the <DataSource dataKey="ciaWorldFactBook" /> because it provides the best comparison for the following reasons:</p>
        <ul>
            <li>the number of countries with { fy } data,</li>
            <li>relative consistency with the level of government measured (central government only as a standard),</li>
            <li>all figures expressed in US dollars.</li>
        </ul>
        <p>Countries with figures before { fy } were excluded from the country comparison data set. Although most countries in the data set feature revenue from central government sources only, some countries included state/provincial/local revenue. As a result, this visualization should not be considered an absolute comparison of the revenue of central governments for all countries.</p>
        <p>To finish the data set for Country Comparison, gross domestic product figures from BEA and the IMF WEOD were combined with revenue figures from the CIA World Factbook data set, excluding countries that did not have data available from both sources.</p>
        <div className="afg__download--div">
            <div className="afg__download--heading">Download Source Data</div>
            <ul>
                <li><a href="../../../assets/ffg/data/revenue_country_comparison.csv" download>revenue_country_comparison.csv</a></li>
            </ul>
        </div>
    </section>
</div>

<script src="/assets/ffg/revenue/countryComparison.js"></script>

    </>
)
                                
export default Countries