import React, {Component} from 'react'
import { graphql } from "gatsby"

/* components */
import SEO from '../../components/seo'
import ToolLayout from '../../components/layouts/tool/tool'
import Accordion from '../../components/accordion/accordion'
import BubbleChart from "../../components/visualizations/bubble-chart/bubble-chart"



function BubblePage(props) {

    return <>
      <SEO title='Tool Layout Demo' keywords={[`application`, `demo`]}/>
      <BubbleChart items={props.data.allUnivBubbleChartCsv.nodes} />
    </>
}

export default BubblePage;


export const IndexQuery = graphql`
  query {
    allUnivBubbleChartCsv {
      nodes {
        agency
        subagency
        obligation
      }
    }
  }
`