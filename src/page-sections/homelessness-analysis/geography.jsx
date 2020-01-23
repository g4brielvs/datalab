import React, { useState } from "react"
import Mapviz from "../../components/visualizations/homelessness-analysis/mapviz/mapviz"
import * as _ from "lodash"

import dataSource from '../../components/visualizations/homelessness-analysis/utils/data-module';
import TableContainer from "../colleges-and-universities/agencies/agencies-table-container";
import styles from "../../components/visualizations/homelessness-analysis/mapviz/mapviz.module.scss";
import mapImg from "../../components/visualizations/homelessness-analysis/mapviz/map.svg";
import tableImg from "../../components/visualizations/homelessness-analysis/mapviz/table.svg";
import ControlBar from "../../components/control-bar/control-bar";
import Reset from "../../components/reset/reset";
import Share from "../../components/share/share";
import SearchIcon from '@material-ui/icons/Search';

export default function Geography(props){

  const [chartView, isChartView] = useState(true);
  const {mem} = dataSource;
  const populationData = mem.pop;

  const switchView = view => {
    updateTableData(tableData);
    if (view === 'chart') {
      isChartView(true);
    } else {
      isChartView(false);
    }
  }

  const searchList = populationData.map(n => {
    return {
      coc: n.coc_number,
      name: n.coc_name
    }
  });

  const chartRef = React.createRef();

  const searchItemSelected = id => {
    filterTableData(id);
    if (chartRef && chartRef.current) { chartRef.current.clickById(id); }
  }

  const tableColumnTitles = [
    {
      title: 'CoC Number',
      width: 112.5
    },
    {
      title: 'CoC Name',
      width: 250
    },
    {
      title: 'Total Homeless',
      width: 100,
      type: 'number'
    },
    {
      title:'Sheltered Homeless',
      width: 100,
      type: 'number'
    },
    {
      title: 'Unsheltered Homeless',
      width: 100,
      type: 'number'
    },
    {
      title: 'Chronically Homeless',
      width: 100,
      type: 'number'
    },
    {
      title: 'Homeless Veterans',
      width: 100,
      type: 'number'
    },
    {
      title: 'Homeless Individuals',
      width: 100,
      type: 'number'
    },
    {
      title: 'Homeless People in Families',
      width: 137.5,
      type: 'number'
    },
    {
      title: 'Homeless Unaccompanied Youth (Under 25)',
      width: 150,
      type: 'number'
    }];
  const tableData = populationData.map(n => [n.coc_number, n.coc_name, n.total_homeless, n.sheltered_homeless, n.unsheltered_homeless, n.chronically_homeless, n.homeless_veterans, n.homeless_individuals, n.homeless_people_in_families, n.total_homeless_unaccompanied_youth_under_25]);

  const [filteredTableData, setFilteredData] = useState(tableData);
  const tableRef = React.createRef();

  function filterTableData(id) {
    let data = [];
    let itemList;

    itemList = searchList.find(function(el){
      return el.id === id;
    });

    let obj = _.filter(tableData, {1: itemList.heading, 2:itemList.subheading});
    if(obj && obj.length > 0) {
      data.push(obj);
    }

    data = _.flatten(data);

    updateTableData(data);
  }

  function updateTableData(data) {
    setFilteredData(data);
    if (tableRef && tableRef.current) { tableRef.current.updateTableData(data); }
  }

  function searchData(e){
    const strCap = e.currentTarget.value.toUpperCase();
    let newData;
    if(strCap){
      newData = tableData.filter((d) => {
        const cocName = d[1].toUpperCase();
        const cocNum = d[0].toUpperCase();
        if(cocName.indexOf(strCap) >= 0 || cocNum.indexOf(strCap) >= 0){
        }
        return (cocName.indexOf(strCap) >= 0 || cocNum.indexOf(strCap) >= 0);
      });
    } else {
      newData = tableData;
    }

    updateTableData(newData);
  }

  function searchBoxFocus(){
    document.getElementById('homeless-region-search').focus();
  }

  return (
    <>
      <div className="homelessness-subheading">Homeless Population by Region</div>
      <div className="homelessness-subheading2">HUD Point-in-time Count by Continuum of Care Area</div>
      <div className="viz-actions">
        <div className="homeless-map-options">
          <span className="homeless-style">View</span>
          <img id={styles.homelessActionMap} src={mapImg} onClick={function(){ switchView('chart');}}/>
          <img id={styles.homelessActionTable} src={tableImg} onClick={function(){ switchView('table');}}/>
          <input type='text'
                 id='homeless-region-search'
                 className={`homeless-region-search ${chartView ? 'invisible' : ''}`}
                 onInput={searchData}
                 placeholder='Search by CoC Name'
          />
          <SearchIcon
                 className={`homeless-region-search-icon ${chartView ? 'hidden' : ''}`}
                 onClick={searchBoxFocus}/>
        </div>

        <ControlBar>
          <Reset _resetClick={function(){
            switchView('chart');
          }}/>
          <Share location={props.location}/>
        </ControlBar>
      </div>
      <div id='chart-area'>
        <Mapviz
          display={chartView}
          data={dataSource}/>
        <TableContainer
          display={!chartView}
          tableColumnTitles = {tableColumnTitles}
          tableData = {filteredTableData}
          tableRef = {tableRef} />
      </div>
    </>
  )
}
