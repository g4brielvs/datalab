import React, { useState } from "react"
import { graphql } from "gatsby"
import Sankey from "../../components/visualizations/sankey/sankey"
import SEO from "../../components/seo"
import ToolLayout from "../../components/layouts/tool/tool"
import Accordion from "../../components/accordion/accordion"


function BudgetFunctionPage(props) {

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
        title='Title'
        introSentence='Lorem ipsum dolor sit amet, consectetur adipiscing eilt, sed do eiusmod. Intro sentence. Keep to one line if possible.'
        contextStatement='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Context - keep to 2 lines if possible.'
        sectionTitle='Section title. Keep to 2-3 lines if possible.'
        sectionText='<p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.</p>
            </p>Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.</p>'
      >

        <Accordion
          title='Accordion Title'>
          <p>I am an accordion with lots to say.</p>
          <p>I have several paragraphs...</p>
          <a href='https://datalab.usaspending.gov'>...and a link to the Data Lab</a>
        </Accordion>

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
        </div>
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
