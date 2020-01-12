import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby";
import Barchart from "src/components/visualizations/horizontal-barchart/barchart";
import competitionStyles from "src/pages/competition-in-contracting/competition-in-contracting.module.scss";
import Downloads from "src/components/section-elements/downloads/downloads";
import * as d3 from "d3v3";
import numberFormatter from "src/utils/number-formatter";
import { Grid, Hidden } from "@material-ui/core";
import ControlBar from "src/components/control-bar/control-bar";
import Reset from "src/components/reset/reset";
import Share from "src/components/share/share";


function CompetitionInContractingContainer(props) {
  const _data = useStaticQuery(graphql`
   query {
    allCicDataJson {
      nodes {
        name
        cfo
        competedActions
        competedDollars
        notCompetedActions
        notCompetedDollars
        id
        displayed
        percentActionsCompeted
        percentDollarsCompeted
        totalActions
        totalDollars
      }
    }
  }
`)

  const [scale, setScale] = useState('quantity');
  const [unit, setUnit] = useState('dollars');
  const [data, setData] = useState(_data.allCicDataJson.nodes);

  const shareText = 'Data Lab – Competition in Contracting – U.S. Treasury ';

  function setScaleFn(e) {
    setScale(e.currentTarget.value);
  }

  function setUnitFn(e) {
    setUnit(e.currentTarget.value);
  }

  function resetFn() {
    setScale('quantity');
    setUnit('dollars');
  }


  function drawSummaryTableModule() {

    const summaryData = data.reduce(
      (a, c) => {
        if (c.displayed) {
          a.competedDollars += c.competedDollars;
          a.notCompetedDollars += c.notCompetedDollars;
          a.competedActions += c.competedActions;
          a.notCompetedActions += c.notCompetedActions;
        }
        return a;
      },
      {
        competedDollars: 0,
        notCompetedDollars: 0,
        competedActions: 0,
        notCompetedActions: 0
      }
    );

    d3
      .select("#" + competitionStyles.competedDollars)
      .text(numberFormatter("dollars text", summaryData.competedDollars));

    d3
      .select("#" + competitionStyles.competedActions)
      .text(numberFormatter("actions", summaryData.competedActions));

    d3
      .select("#" + competitionStyles.notCompetedDollars)
      .text(numberFormatter("dollars text", summaryData.notCompetedDollars));

    d3
      .select("#" + competitionStyles.notCompetedActions)
      .text(numberFormatter("actions", summaryData.notCompetedActions));
  }

  function handleYAxisCheckboxChange(id, checked) {
    const adjustedData = data.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          displayed: checked
        };
      }
      return c;
    });

    setData(adjustedData);
  }

  return (
    <div className={competitionStyles.vizContainer}>
      <Grid container className={competitionStyles.container}>

        <Grid alignItems='stretch' container id={competitionStyles.summary}>
          <div id={competitionStyles.tooltip}></div>

          <Grid item xs={6} md={3} lg={2} className={competitionStyles.summaryItem}>
            <Grid container alignItems='flex-end'>
              <Grid item xs={12} className={competitionStyles.summaryItemCompeted}>$ COMPETED</Grid>
              <Grid item xs={12} id={competitionStyles.competedDollars}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={3} lg={3} className={`${competitionStyles.summaryItem} ${competitionStyles.summaryItemSeparator}`}>
            <Grid container alignItems='flex-end'>
              <Grid item xs={12} className={competitionStyles.summaryItemCompeted}>ACTIONS COMPETED</Grid>
              <Grid item xs={12} id={competitionStyles.competedActions}></Grid>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg={1} className={`${competitionStyles.summaryItem} ${competitionStyles.summaryItemSeparatorLg}`}></Grid>
            <Grid item lg={1} className={competitionStyles.summaryItem}></Grid>
          </Hidden>
          <Grid item xs={6} md={3} lg={3} className={competitionStyles.summaryItem}>
            <Grid container alignItems='flex-end'>
              <Grid item xs={12} className={competitionStyles.summaryItemNotCompeted}>$ NOT COMPETED</Grid>
              <Grid item xs={12} id={competitionStyles.notCompetedDollars}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={3} lg={2} className={competitionStyles.summaryItem}>
            <Grid container alignItems='flex-end'>
              <Grid item xs={12} className={competitionStyles.summaryItemNotCompeted}>ACTIONS NOT COMPETED</Grid>
              <Grid item xs={12} id={competitionStyles.notCompetedActions}></Grid>
            </Grid>
          </Grid>
        </Grid>

        <div>
          <div className={competitionStyles.legend} id={competitionStyles.notCompeted}>
            <svg height="15" width="15">
              <circle cx="7.5" cy="7.5" r="7.5" />
            </svg>
            <label htmlFor={competitionStyles.notCompeted} style={{ fontSize: '0.75rem', verticalAlign: 'bottom' }}>Not
              Competed</label>
          </div>
          <div className={competitionStyles.legend} id={competitionStyles.competed}>
            <svg height="15" width="15">
              <circle cx="7.5" cy="7.5" r="7.5" />
            </svg>
            <label htmlFor={competitionStyles.competed} style={{ fontSize: '0.75rem', verticalAlign: 'bottom' }}>Competed</label>
          </div>
          <div className={competitionStyles.barChartToolbar}>
            <div className={competitionStyles.selectWrapper1}>
              <input type="radio"
                     id="contactChoice1"
                     name="xAxisScale"
                     value="quantity"
                     onChange={setScaleFn}
                     checked={scale === 'quantity'}
              />
              <label htmlFor="contactChoice1" style={{ fontSize: '0.75rem' }}>Quantity</label>

              <input type="radio"
                     id="contactChoice2"
                     name="xAxisScale"
                     value="percent"
                     onChange={setScaleFn}
                     checked={scale === 'percent'}
              />
              <label htmlFor="contactChoice2" style={{ fontSize: '0.75rem' }}>Percent</label>
            </div>
            <div className={competitionStyles.selectWrapper2}>
              <input type="radio"
                     id="contactChoice3"
                     name="xAxisUnit"
                     value="dollars"
                     onChange={setUnitFn}
                     checked={unit === 'dollars'}
              />
              <label htmlFor="contactChoice3" style={{ fontSize: '0.75rem' }}>Dollars</label>

              <input type="radio"
                     id="contactChoice4"
                     name="xAxisUnit"
                     value="actions"
                     onChange={setUnitFn}
                     checked={unit === 'actions'}
              />
              <label htmlFor="contactChoice4" style={{ fontSize: '0.75rem' }}>Actions</label>
            </div>
          </div>
        </div>
        <ControlBar>
          <Reset _resetClick={resetFn} />
          <Share location={props.location}
                 title={shareText} />
        </ControlBar>
        <div className={competitionStyles.barChartDiv}>
          <Barchart data={data}
                    unit={unit}
                    scale={scale}
                    clickEvent={handleYAxisCheckboxChange}
                    _onloadFunctions={drawSummaryTableModule}
                    _svgClass={competitionStyles.svg}>
          </Barchart>
          <Downloads
            data={data}
            isJSON={true} />
        </div>
      </Grid>
    </div>

  )
}

export default CompetitionInContractingContainer;




