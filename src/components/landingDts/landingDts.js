import React, { Component } from 'react';
import Helmet from 'react-helmet'

class LandingDts extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <script src="https://d3js.org/d3.v4.min.js"></script>
                    <script defer src="/homepage/dts-module.js"></script>
                </Helmet>
                <div className="dts-container">
                    <div className="dts-module">
                        <div className="dtsm-img"></div>
                        <div className="dtsm-right-column">
                            <div className="dtsm-tas-container">
                                <div className="dtsm-tas-header">All categories</div>
                            </div>
                            <div className="dtsm-dollars">$</div>
                        </div>
                    </div>
                </div>

                <div className="side-dts__date">

                </div>
            </>
        )
    }
}

export default LandingDts
