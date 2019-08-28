/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./story.scss"
import Default from "../default/default"

const Story = ({ children }) => (
  <>
    <Default>
      <main>{children}</main>
    </Default>
  </>
)

Story.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Story