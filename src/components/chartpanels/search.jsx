import React from "react"
import "./search.scss"

import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined"
import Divider from "@material-ui/core/Divider"
import ListIcon from "@material-ui/icons/List"

export default class SearchPanel extends React.Component {
  toggleSearch() {
    document.getElementById("search-icon").classList.add("selected")
    document.getElementById("sidebar").classList.toggle("collapsed")
  }

  toggleChart(show) {
    if (show === "chart") {
      alert("switch to chart view")
    } else {
      if (show === "table") {
        alert("switch to table view")
      } else {
        console.log(`Invalid parameter to SearchPanel.toggleChart: ${show}`)
      }
    }
  }

  render() {
    return (
      <div id="sidebar" className="sidebar collapsed">
        <div className="search-panel">search panel here</div>
        <div>
          <IconButton
            aria-label="search"
            className="panel-group"
            onClick={e => this.toggleSearch()}
          >
            <SearchIcon id="search-icon" className="panel-button" />
          </IconButton>
          <div className="panel-group">
            <IconButton
              aria-label="show bubble chart"
              onClick={e => this.toggleChart("chart")}
            >
              <BubbleChartOutlinedIcon className="panel-button" />
            </IconButton>
            <Divider variant="middle" className="divider" />
            <IconButton
              aria-label="show data table"
              onClick={e => this.toggleChart("table")}
            >
              <ListIcon className="panel-button" />
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}
