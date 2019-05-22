import React from "react"
import AfgLayout from "../../../components/afgLayout/afgLayout"
import DataSource from '../../../components/dataSource/dataSource'
import SourcesMethodology from '../../../components/sourcesMethodology/sourcesMethodology'
import Helmet from 'react-helmet'
import '../../../components/afgSharedCss/revenue-categories.css';

const Categories = () => (
<AfgLayout chapter="revenue">
    <Helmet>
        <script defer src={'/afg/revenue/categories.js'}></script>
    </Helmet>

    <h1>Sources of Revenue for the Federal Government </h1>

    <h2 className="chart-title">Revenue by Source Categories</h2>
    <div className="hint">Click <span className="category-bar-legend"></span> to explore sub-categories.</div>
    <div id="viz-wrapper">
        <div id='viz-chart-container'>
            <div id="bar-controls">
                <div className='bar-controls__left'>
                    Sort by:
                    <div className='bar-controls__left--button-div'>
                        <button id="sort-amount" className="active">Amount <i className="fas fa-sort-amount-down"></i></button>
                        <button id="sort-name">Name <i className="fas fa-sort-alpha-down"></i></button>
                    </div>
                </div>
                <div className='bar-controls__right'>
                    <div className='bar-controls__right--div'>
                        <input type="text" placeholder='Search by a term...' id="filter-by-name" />
                        <i id='filter-by-name-icon' className='fa fa-search spending__search--icon'></i>
                    </div>
                </div>
            </div>

            <hr />
            <div id="viz"></div>
            <hr className='categories__show-more' />
                <div id="show-more-container" className='categories__show-more'>
                <button id="show-more-button" className="chart__show-more">Show More</button>
            </div>
        </div>
    </div>

    <div className="poc-content" id="income-facts">
        <section className="copy-tour-row__copy">
            <p>Most of the revenue the government collects comes from contributions from individual taxpayers, small businesses, and corporations through taxes that get collected on a yearly or quarterly basis. The remaining sources of federal revenue consist of excise, estate, and other taxes and fees.</p>
            <p>What makes up individual income taxes? How much federal revenue is contributed by Social Security and Medicare taxes? What's included in the 9% of revenue that doesn't come from taxpayers or corporations? Explore the visualization to find out.</p>

            <section className="accordion">
                <h1 className="accordion__heading">Where do my Social Security and Medicare taxes go?</h1>
                <div className="accordion__content">
                    <p>You may recognize these taxes on your paycheck. Unlike personal income taxes, these taxes are used to help fund specific social service programs. Funds are collected from your paycheck, and in most cases matched by your employer, then divided into the various trust fund accounts.</p>
                    <p>Social Security has two trust fund accounts: the Old Age and Survivors Insurance Trust Fund (OASI) and the Disability Trust Fund (DI). The funds in these accounts are responsible for providing workers and their families with retirement, disability and survivor's insurance benefits.</p>
                    <p>Medicare also has two accounts: the Hospital Insurance Trust Fund (HI), also known as Medicare Part A, and the Supplementary Medicare Insurance Trust Fund (SMI). These funds pay for hospital, home health, skilled nursing, and hospice care for the elderly and disabled.</p>
                </div>
            </section>
            <section className="accordion">
                <h1 className="accordion__heading">Why does the Federal Reserve send money to the federal government?</h1>
                <div className="accordion__content">
                    <p>The Federal Reserve Act of 1913 established the Federal Reserve System (the Fed) as the central bank for the United States. The Fed works closely with the Department of the Treasury, which manages the finances of the federal government. The Fed issues Treasury securities and conducts auctions of these securities to raise funds for the federal government. In addition, the Fed also processes monetary transactions on behalf of Treasury, including issuing payments and other government receivables.</p>
                    <p>The role of the Fed is to support the economy, not to make a profit. Once the Fed pays its expenses, any remaining profits are sent to Treasury to be used by the federal government.</p>
                </div>
            </section>
            <section className="accordion">
                <h1 className="accordion__heading">Are there other types of revenue the federal government receives?</h1>
                <div className="accordion__content">
                    <p>Government revenue also comes from payments to federal agencies like the U.S. Department of the Interior. Have you visited a national park recently? Did you know your national park entry fee also applies towards government revenue? Other agencies generate revenue from leases, the sale of natural resources, and various usage and licensing fees.</p>
                </div>
            </section>
        </section>
        <div className="copy-tour-row__tour">
            <section className="tour">
                <div className="tour__part-one">
                    <h1>How has government revenue changed over time?</h1>
                    <p>When you're done here, explore the trends in federal revenue over the past five years.</p>
                </div>
                <a className="tour__link" href="./trends.html">Continue<i className="fas fa-chevron-right"></i></a>
            </section>
        </div>
    </div>

    <div className="clearfix"></div>

    <SourcesMethodology>
        The visualization was created using the <DataSource dataKey="currentMts" /> as the data source for federal government revenue of the United States. Some categories from the MTS have been renamed in order to be more easily understood.
        <div class="afg__download--div">
            <div class="afg__download--heading">Download Source Data</div>
            <ul>
                <li><a href="../../../assets/ffg/data/federal_revenue_categories.csv" download>federal_revenue_categories.csv</a></li>
            </ul>
        </div>
    </SourcesMethodology>
</AfgLayout>
)
                                
export default Categories