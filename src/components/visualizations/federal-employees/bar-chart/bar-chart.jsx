import React, { useEffect } from 'react';
import BarChartRenderer from "./bar-chart-renderer";
import DataModule from "../util/data-module";
import * as $ from "jquery";
import * as d3 from "d3v4";
import barChartStyles from './bar-chart.module.scss';

/* Extracted and adapted from fedscope.js */

function BarChart(props) {

  const clearAll = () => {
    d3.selectAll('#barChartSvg > g').remove();
  }

  useEffect(() => {
    clearAll();

    const dataModule = DataModule;

    const {
      loadEmployeeCountData,
      loadStates,
      loadAgencies,
      loadOccupationCategories,
      mem
    } = dataModule;

    let occupationDropdownMasterList;
    let agencyOccupationIds = [];
    let occupationDropdownOptions;

    loadStates(states => {
      loadAgencies(agencies => {
        loadOccupationCategories(occupationCategories => {
          loadEmployeeCountData([BarChartRenderer.draw, initAgencyOccupationIds], {
            states,
            agencies,
            occupationCategories
          });

          const sorter = (a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          };

          const stateDropdownOptions = Object.values(states)
            .sort(sorter)
            .map(s => `<option value="${s.abbreviation}">${s.name}</option>`)
          ;
          $("#barChartStateDropdown").append(...stateDropdownOptions);

          const agencyDropdownOptions = Object.values(agencies)
            .sort(sorter)
            .map(a => `<option value="${a.id}">${a.name}</option>`)
          ;
          $("#barChartAgencyDropdown").append(...agencyDropdownOptions);

          occupationDropdownMasterList = Object.values(occupationCategories).sort(sorter);
          filterOccupationsList();
        });
      });
    });

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
        occupationDropdownOptions = occupationDropdownMasterList.filter(o => currentOccupations.includes(o.id));
      } else {
        occupationDropdownOptions = occupationDropdownMasterList;
      }
    }
    const containerElem = $('#' + props.sectionId);

    containerElem.find(".filter-button").click(() => {
      clearAll();
      const filterStates = $("#barChartStateDropdown").val();
      const filterAgencies = $("#barChartAgencyDropdown").val();

      const { employeeCounts, agencies, occupationCategories } = mem;
      let newData = employeeCounts;

      if (filterStates) {
        newData = newData.filter(e =>
          filterStates.some(s => e.stateAbbreviation === s)
        );
      }

      if (filterAgencies) {
        newData = newData.filter(e =>
          filterAgencies.some(a => e.agencyId === +a)
        );
      }

      BarChartRenderer.draw(newData, {
        agencies,
        occupationCategories
      });
    });

    $(containerElem).find(".reset-button").click(e => {
      e.preventDefault();
      clearAll();

      $("#barChartAgencyDropdown > option").attr("selected", false);  // $().prop() maybe worth resetting as well as attr?
      $("#barChartStateDropdown > option").attr("selected", false);

      const { employeeCounts, states, occupationCategories } = mem;

      BarChartRenderer.draw([...employeeCounts], {
        states,
        occupationCategories
      });
    });
  });

  return (
    <>
      <div id="tooltip" className="tooltip-module" />
      <form id="barChartToolbar" className={barChartStyles.toolbar}>
        <div className="formItem">
          <div className="select-title">Agencies:</div>
          <select multiple="multiple" id="barChartAgencyDropdown" />
          <br />
        </div>
        <div className="formItem">
          <div className={barChartStyles.selectTitle}>States:</div>
          <select multiple="multiple" id="barChartStateDropdown" />
          <br />
        </div>
      </form>
      <div className={barChartStyles.visContainer}>
        <svg id="barChartKey" />
        <svg width="900" height="500" viewBox="0 0 900 500" id="barChartSvg" className={barChartStyles.visBarChart} />
      </div>
    </>
  );

}

export default BarChart;