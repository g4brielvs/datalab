/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import PageFooter from "../footers/page"
import SiteFooter from "../footers/site"

const defaultStyle = {
  margin: '1% 9%'
}

const Default = ({ children }) => (
  <>
      <main style = {defaultStyle} >{children}</main>

      <PageFooter />
      <SiteFooter />
  </>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default