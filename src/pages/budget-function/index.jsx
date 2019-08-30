import React, {Component} from "react"
import { graphql } from "gatsby"


class BudgetFunctionPage extends Component {

  render() {

    // const data = this.props.data.allSankeyV1Fy19Csv.nodes;
    // const sPanel = this.props.data.allSankeyPanelV1Fy19Csv.nodes;
    // const sTitle = this.props.data.allSankeyTitlesV1Fy19Csv.nodes;
    // const descriptions = this.props.data.allDescriptionsCsv.nodes;

    return <>
        <p>hello world!</p>
      </>
  }
}

export default BudgetFunctionPage


export const IndexQuery = graphql`
  query {
    allSankeyV1Fy19Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyPanelV1Fy19Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyTitlesV1Fy19Csv {
      nodes {
        name
        value
      }
    },
     allDescriptionsCsv {
      nodes {
        name
        desc
      }
    },
  }
`
