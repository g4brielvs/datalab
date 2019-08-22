/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'

import PageFooter from "../footers/page"
import SiteFooter from "../footers/site"

const defaultStyle = {
  margin: '1% 9%'
}

const Default = ({ children }) => (
  <>
    <Helmet>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Data Lab - U.S. Treasury</title>

        <script async type="text/javascript" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=TRE" id="_fed_an_ua_tag"></script>

    </Helmet>

    <main style = {defaultStyle} >{children}</main>

    <PageFooter />
    <SiteFooter />
  </>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default


