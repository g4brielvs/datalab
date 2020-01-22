import React, { useState } from "react";
import Sankey from "src/components/visualizations/sankey/sankey";
import { graphql, useStaticQuery } from "gatsby";

function BudgetFunctionContainer() {

  const data = useStaticQuery(graphql`
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
`)

  const [year, setFiscalYear] = useState('fy19');

  function onFiscalYearChange(e) {
    setFiscalYear(e.currentTarget.value);
  };

  const fiscalYearData = {
    'fy19': {
      data: data.allSankeyV1Fy19Csv.nodes,
      sPanel: data.allSankeyPanelV1Fy19Csv.nodes,
      sTitle: data.allSankeyTitlesV1Fy19Csv.nodes,
      descriptions: data.allDescriptionsCsv.nodes
    },
    'fy18': {
      data: data.allSankeyV1Fy18Csv.nodes,
      sPanel: data.allSankeyPanelV1Fy18Csv.nodes,
      sTitle: data.allSankeyTitlesV1Fy18Csv.nodes,
      descriptions: data.allDescriptionsCsv.nodes
    },
    'fy17': {
      data: data.allSankeyFy17Csv.nodes,
      sPanel: data.allSankeyPanelFy17Csv.nodes,
      sTitle: data.allSankeyTitlesFy17Csv.nodes,
      descriptions: data.allDescriptionsCsv.nodes
    }
  }

  return (
    <>
      <div className="viz-actions container-fluid">
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
      </div>
      <br/>
      <div className="viz-container">
        <Sankey data={fiscalYearData[year].data}
                sPanel={fiscalYearData[year].sPanel}
                sTitle={fiscalYearData[year].sTitle}
                descriptions={fiscalYearData[year].descriptions} />
      </div>
    </>

  )

}

export default BudgetFunctionContainer;



