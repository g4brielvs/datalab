/**
 * Home component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import SiteFooter from "../../components/site-footer/site-footer"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./home.scss"

const Home = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>

          <SiteFooter />
        </div>
      </>
    )}
  />
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home
