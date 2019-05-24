import React from "react"
import Helmet from 'react-helmet'
import SiteLayout from '../components/siteLayout/siteLayout'


const Dts = () => (
    <SiteLayout>
        <Helmet>
            <script src="https://d3js.org/d3.v4.min.js"></script>
            <script defer src="/analyses/dts.js"></script>
            <link rel="stylesheet" href="/analyses/dts.css" />
        </Helmet>

        <div className="dts-css">
            <div className="dts-tt-container">
                <div className="dts-tt-date"></div>
                <div className="dts-tt-hr-separator"></div>
                <div className="dts-tt-category"></div>
                <div className="dts-tt-timeframe dts-tt-timeframe-daily dts-tt-timeframe-active"><span className="dts-tt-timeframe-label">DAILY</span><span className="dts-tt-daily-value"></span></div>
                <div className="dts-tt-timeframe dts-tt-timeframe-mtd"><span className="dts-tt-timeframe-label">MTD</span><span className="dts-tt-mtd-value"></span></div>
                <div className="dts-tt-timeframe dts-tt-timeframe-fytd"><span className="dts-tt-timeframe-label">FYTD</span><span className="dts-tt-fytd-value"></span></div>
            </div>

            <div className="dts-container">
                <div className="header-container">
                    <div className="header-title">Visualizing The Daily Treasury Statement</div>
                    <div className="header-subtitle">How much does the federal government spend each day?</div>
                    <div className="header-line-break"></div>
                    <div className="header-sub-container">
                        <div></div>
                        <div className="header-updated-when"></div>
                    </div>
                </div>

                <div className="dts-controls-and-svg">
                    <div className="dts-header">
                        <div className="daily-spending-container">
                            <div className="daily-spending-subtext">Amount Spent On </div>
                            <div className="daily-spending-amount">$0</div>
                        </div>
                        <div className="period-container">
                            <div className="period-button-header">Chart Range</div>
                            <div className="period-button-container">
                                <div className="period-button period-button-default" data-range="30d">30D</div>
                                <div className="period-button" data-range="90d">90D</div>
                                <div className="period-button" data-range="1y">1Y</div>
                                <div className="period-button" data-range="5y">5Y</div>
                                <div className="period-button" data-range="10y">10Y</div>
                            </div>
                        </div>
                        <div className="frequency-container">
                            <div className="frequency-selector-label">Frequency</div>
                            <select id="frequency-selector" className="custom-select">
                                <option value="today">DAILY</option>
                                <option value="mtd">MTD</option>
                                <option value="fytd">FYTD</option>
                            </select>
                        </div>
                        <div className="category-container">
                            <div className="category-select-label">Categories</div>
                            <select className="custom-select custom-select-start" id="category-selector"></select>
                        </div>
                    </div>
                    <div className="dts-viz-container">
                        <div className="dts-layout-manager">
                            <div className="dts-brush-date-container">
                                <div className="dts-brush-date-item"><div className="dts-brush-start-date-label">From </div><div className="dts-brush-start-date">mm/dd/yy</div></div>
                                <div className="dts-brush-date-item"><div className="dts-brush-end-date-label"> to </div><div className="dts-brush-end-date">mm/dd/yy</div></div>
                            </div>
                            <div className="dts-svg-wrapper">
                                <svg id="svg-wrapper" height="400"></svg>
                            </div>
                        </div>
                        <div className="viz-tsbfy-container">
                            <div className="viz-tsbfy-header">
                                <div className="viz-tsbfy-header-text">Total Spending By Fiscal Year</div>
                                <div className="viz-tsbfy-header-view-buttons">
                                    <div className="viz-tsbfy-bar-view"><img src="/svgs/bars.svg" alt="bars" /></div>
                                    <div className="viz-tsbfy-table-view"><img src="/svgs/list.svg" alt="list" /></div>
                                </div>
                            </div>
                            <div className="svg-tsbfy-container">
                                <svg id="viz-tsbfy-wrapper" width="750" height="500" viewBox="0 0 750 500"></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dts-footnote">
                    <div className="dts-footnote-rect"></div>
                    <div className="dts-footnote-text"></div>
                </div>

                <div className="dts-disclaimer">
                    The Daily Treasury Statement (DTS) is published each day that the Federal Government is open.
                    It provides data on the cash and debt operations of the U.S. Treasury based on reporting of the
                    Treasury account balances by the Federal Reserve banks.
      For more information about the authoritative source of this dataset, please go to: <a href="https://www.fms.treas.gov/dts/index.html" className="dts-hyperlink">https://www.fms.treas.gov/dts/index.html</a>
                </div>
            </div>
        </div>
    </SiteLayout>
)

export default Dts