import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Sankey from "../../components/visualizations/sankey/sankey"
import SankeyBrackets from "../../components/visualizations/sankey/sankey-brackets"
import * as d3 from "d3v3"


function BudgetFunctionPage(props) {

  const [year, setFiscalYear] = useState('fy19');

  let data, sPanel, sTitle, descriptions;

  function onFiscalYearChange(e) {
    console.log('in on change', e.currentTarget.value);
    setFiscalYear(e.currentTarget.value);
  };

  const fiscalYearData = {
    'fy19': {
      data: props.data.allSankeyV1Fy19Csv.nodes,
      sPanel: props.data.allSankeyPanelV1Fy19Csv.nodes,
      sTitle: props.data.allSankeyTitlesV1Fy19Csv.nodes,
      descriptions: props.data.allDescriptionsCsv.nodes
    },
    'fy18': {
      data: props.data.allSankeyV1Fy18Csv.nodes,
      sPanel: props.data.allSankeyPanelV1Fy18Csv.nodes,
      sTitle: props.data.allSankeyTitlesV1Fy18Csv.nodes,
      descriptions: props.data.allDescriptionsCsv.nodes
    },
    'fy17': {
      data: props.data.allSankeyFy17Csv.nodes,
      sPanel: props.data.allSankeyPanelFy17Csv.nodes,
      sTitle: props.data.allSankeyTitlesFy17Csv.nodes,
      descriptions: props.data.allDescriptionsCsv.nodes
    }
  }


  return (
    <>
      <div className="mask">
        <h5>Click on nodes to display additional information</h5>
        <div className="viz-actions">
          <form id="SankeyRadio">
            <div className="select-wrapper1">
              <input type="radio"
                     id="contactChoice1"
                     name="FiscalYear"
                     value="fy19"
                     onChange={onFiscalYearChange}
                     checked={year==='fy19'} />
              <label htmlFor="contactChoice1">FY 19</label>

              <input type="radio"
                     id="contactChoice2"
                     name="FiscalYear"
                     value="fy18"
                     onChange={onFiscalYearChange}
                     checked={year==='fy18'} />
              <label htmlFor="contactChoice2">FY 18</label>

              <input type="radio"
                     id="contactChoice3"
                     name="FiscalYear"
                     value="fy17"
                     onChange={onFiscalYearChange}
                     checked={year==='fy17'} />
              <label htmlFor="contactChoice3">FY 17</label>
            </div>
          </form>
          <div>
            {/*{% include action-buttons.html %}*/}
          </div>
        </div>
        <div className="viz-container">
          <Sankey data={fiscalYearData[year].data}
                  sPanel={fiscalYearData[year].sPanel}
                  sTitle={fiscalYearData[year].sTitle}
                  descriptions={fiscalYearData[year].descriptions} />
        </div>
      </div>
    </>

  )

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
    allSankeyV1Fy18Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyPanelV1Fy18Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyTitlesV1Fy18Csv {
      nodes {
        name
        value
      }
    },
    allSankeyFy17Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyPanelFy17Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyTitlesFy17Csv {
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
    }
  }
`
