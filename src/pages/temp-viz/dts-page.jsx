import React from 'react'
import { graphql } from "gatsby"

/* components */
import SEO from '../../components/seo'
import DTS from "../../components/visualizations/dts/dts"

function DTSPage(props) {

  return <>
    <SEO title='Tool Layout Demo' keywords={[`application`, `demo`]}/>
    <DTS/>
  </>
}

export default DTSPage;
