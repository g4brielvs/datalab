import React, { useEffect, useState } from 'react';
import BarChartRenderer from "./bar-chart-renderer";
import * as $ from "jquery";
import * as d3 from "d3v4";
import barChartStyles from './bar-chart.module.scss';
import Multiselector from "../../../multiselector/multiselector"

/* Extracted and adapted from fedscope.js */

function BarChart(props) {

  const clearAll = () => {
    d3.selectAll('#barChartSvg > g').remove();
  }

  const {
    loadEmployeeCountData,
    loadStates,
    loadAgencies,
    loadOccupationCategories,
    mem
  } = props.dataSource;

  let stateOptionList = [];
  let agencyOptionList = [];
  let agencyOccupationIds = [];

  // create array of agency IDs, each an array of occupation IDs within that agency
  function initAgencyOccupationIds() {
    for (let e of mem.employeeCounts) {
      if (!agencyOccupationIds[e.agencyId]) {
        agencyOccupationIds[e.agencyId] = [];
      }
      if (!agencyOccupationIds[e.agencyId].includes(e.occupationCategoryId)) {
        agencyOccupationIds[e.agencyId].push(e.occupationCategoryId);
      }
    }
  }

  loadStates(states => {
    loadAgencies(agencies => {
      loadOccupationCategories(occupationCategories => {
        loadEmployeeCountData([initAgencyOccupationIds], {
          states,
          agencies,
          occupationCategories
        });

        const sorter = (a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        };
        filterOccupationsList();
        stateOptionList = Object.values(states).sort(sorter);
        agencyOptionList = Object.values(agencies).sort(sorter);

      });
    });
  });

  function filterOccupationsList(selectedAgencies) {
    if (selectedAgencies) {
      let currentOccupations = agencyOccupationIds[selectedAgencies[0]].slice();
      if (selectedAgencies.length > 1) { // add to array of unique occupation IDs for the other selected agencies (besides above)
        selectedAgencies.slice(1).forEach(agencyId => {
          agencyOccupationIds[agencyId].forEach(occupationId => {
            if (!currentOccupations.includes(occupationId)) {
              currentOccupations.push(occupationId);
            }
          })
        })
      }
    }
  }

  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedAgencies, setSelectedAgencies] = useState([]);

  useEffect(() => {
    clearAll();
    const containerElem = $('#' + props.sectionId);

    containerElem.find(".filter-button").click(() => {
      filterBySelections();
    });

    function filterBySelections() {
      clearAll();
      const filterStates = selectedStates.map(item => item.abbreviation);
      const filterAgencies = selectedAgencies.map(item => item.id);
      const { employeeCounts, agencies, occupationCategories } = mem;

      let newData = employeeCounts;

      if (filterStates && filterStates.length) {
        newData = newData.filter(e =>
          filterStates.some(s => e.stateAbbreviation === s)
        );
      }

      if (filterAgencies && filterAgencies.length) {
        newData = newData.filter(e =>
          filterAgencies.some(a => e.agencyId === +a)
        );
      }

      BarChartRenderer.draw(newData, {
        agencies,
        occupationCategories
      });
    }

    $(containerElem).find(".reset-button").click(e => {
      e.preventDefault();
      setSelectedStates([]);
      setSelectedAgencies([]);

      const { employeeCounts, states, occupationCategories } = mem;

      BarChartRenderer.draw([...employeeCounts], {
        states,
        occupationCategories
      });
    });

    filterBySelections();

  }, [selectedStates, selectedAgencies]);

  return (
    <>
      <div id="tooltip" className="tooltip-module" />
      <form id="barChartToolbar" className={`row ${barChartStyles.toolbar}`}>
        <div className={`filter-tools ${barChartStyles.formItem}`}>
          <Multiselector key={'Agencies'}
                         optionList={agencyOptionList}
                         valueKey={'id'}
                         labelKey={'name'}
                         selectedVal={selectedAgencies}
                         placeholder={'Agencies'}
                         id={'barChartAgencies'}
                         changeHandler={setSelectedAgencies} />
        </div>
        <div className={`filter-tools ${barChartStyles.formItem}`}>
          <Multiselector key={'States'}
                         optionList={stateOptionList}
                         valueKey={'abbreviation'}
                         labelKey={'name'}
                         selectedVal={selectedStates}
                         placeholder={'States'}
                         id={'barChartStates'}
                         changeHandler={setSelectedStates} />
        </div>
      </form>
      <div className={`fed-emp-bar-chart ${barChartStyles.visContainer}`}>
        <svg width="900" height="500" viewBox="0 0 900 500" id="barChartSvg" className={barChartStyles.visBarChart} />
        <svg id="barChartKey" width="600" height="16" viewBox="0 0 600 16" />
      </div>
    </>
  );
}

export default BarChart;
