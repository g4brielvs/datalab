/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./analyses.scss"

const AnalysesLayout = ({ children }) => (
  <>
    <main>{children}</main>
  </>
)

AnalysesLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AnalysesLayout