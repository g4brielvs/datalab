import React from "react"
import PropTypes from "prop-types"
import Default from "../default/default"

import "./home.module.scss"

const defaultStyle = {
  margin: '1% 9%'
}

const Home = ({ children }) => (
      <>
        <Default>
          <main className='home' style = {defaultStyle}>
            {children}
          </main>
        </Default>
      </>
)

Home.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Home