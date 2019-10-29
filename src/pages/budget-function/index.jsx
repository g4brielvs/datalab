import React, { useState } from "react"
import { graphql } from "gatsby"
import Sankey from "../../components/visualizations/sankey/sankey"
import SEO from "../../components/seo"
import ToolLayout from "../../components/layouts/tool/tool"
import Accordion from "../../components/accordion/accordion"


function BudgetFunctionPage(props) {

  console.log('props in budget function', props);

  const [year, setFiscalYear] = useState('fy19');

  function onFiscalYearChange(e) {
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
      <SEO title='Data Lab - Budget Function - U.S. Treasury' keywords={[`application`, `demo`]}/>

      <ToolLayout
        title='BUDGET FUNCTION'
        introSentence="Understanding federal spending related to the government's main functions."
        contextStatement="The U.S. Treasury’s Data Lab presents an analysis on federal spending related to the government’s
        main functions. This visualization sheds light on both budget functions and object classes."
        sectionTitle='Categorization Systems'
        sectionText="<p>Budget Functions are used by Congress to categorize federal spending, and are also useful for the
        public to understand the different missions, or functions of the federal government. Though Budget Functions have
        evolved over time, the use of Budget Functions is nothing new: Congress has been tracking federal spending using a
        version of these categories for more than 200 years.</p>
        <p>The Object Classification system, which was created in the 1920s, explains what the government
        received in exchange for spending. For example, the Object Classification system captures spending on
        salaries for federal employees, rent payments for federal buildings, and spending on federal contracts.</p>">

        <Accordion
          title='Instructions'>
          <ul>
              <li>This Sankey diagram shows Budget Functions on the left and Object Classes on the right.</li>
              <li>Hover over a Budget Function category on the left to see how spending breaks down into Object Class categories.</li>
              <li>Hover over an Object Class on the right to see how spending breaks down into Budget Functions.</li>
              <li>Click and drag any Budget Function or Object Class color bar to vertically rearrange the ordering of that category.</li>
          </ul>
        </Accordion>

        <div className="viz-actions container-fluid">
          <form id="SankeyRadio">
            <div className="row">
              <div className="col-xs-2 col-md-1">
                <input type="radio"
                       id="contactChoice3"
                       name="FiscalYear"
                       value="fy17"
                       onChange={onFiscalYearChange}
                       checked={year==='fy17'} />
                <label htmlFor="contactChoice3">&nbsp;FY 17</label>
              </div>
              <div className="col-xs-2 col-md-1">
                <input type="radio"
                       id="contactChoice2"
                       name="FiscalYear"
                       value="fy18"
                       onChange={onFiscalYearChange}
                       checked={year==='fy18'} />
                <label htmlFor="contactChoice2">&nbsp;FY 18</label>
              </div>
              <div className="col-xs-2 col-md-1">
                <input type="radio"
                       id="contactChoice1"
                       name="FiscalYear"
                       value="fy19"
                       onChange={onFiscalYearChange}
                       checked={year==='fy19'} />
                <label htmlFor="contactChoice1">&nbsp;FY 19</label>
              </div>
            </div>
          </form>
        </div>
        <br/>
        <div className="viz-container">
          <Sankey data={fiscalYearData[year].data}
                  sPanel={fiscalYearData[year].sPanel}
                  sTitle={fiscalYearData[year].sTitle}
                  descriptions={fiscalYearData[year].descriptions} />
        </div>

      </ToolLayout>
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
