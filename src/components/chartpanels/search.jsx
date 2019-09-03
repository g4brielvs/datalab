import React from "react"
import "./search.scss"

import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined"
import Divider from "@material-ui/core/Divider"
import ListIcon from "@material-ui/icons/List"

const searchButtonId = 'search-icon';
const chartButtonId = 'chart-icon';
const tableButtonId = 'list-icon';

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeButton: 0 };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.activeButton !== nextState.activeButton) {
      if (this.state.activeButton) {
        document.getElementById(this.state.activeButton).classList.remove("selected");
      }
      document.getElementById(nextState.activeButton).classList.add("selected");
    }
  }

  activateButton(buttonId) {
    if (buttonId === searchButtonId) {
      this.toggleSearch();
    }
    if (buttonId !== this.state.activeButton) {
      this.setState({ activeButton: buttonId });
      if (buttonId === chartButtonId) {
        alert("switch to chart view");
      } else if (buttonId === tableButtonId) {
        alert("switch to table view");
      } else {
        console.log(`Invalid parameter to SearchPanel.activateButton: ${buttonId}`);
      }
    }
  }

  toggleSearch() {
    document.getElementById("sidebar").classList.toggle("collapsed");
  }

  render() {
    return (
      <div id="sidebar" className="sidebar collapsed">
        <div className="search-panel">search panel here</div>
        <div>
          <IconButton
            aria-label="search"
            className="panel-group"
            onClick={() => this.activateButton(searchButtonId)}
          >
            <SearchIcon id={searchButtonId} className="panel-button" />
          </IconButton>
          <div className="panel-group">
            <IconButton
              aria-label="show bubble chart"
              onClick={e => this.activateButton(chartButtonId)}
            >
              <BubbleChartOutlinedIcon id={chartButtonId} className="panel-button" />
            </IconButton>
            <Divider variant="middle" className="divider" />
            <IconButton
              aria-label="show data table"
              onClick={e => this.activateButton(tableButtonId)}
            >
              <ListIcon id={tableButtonId} className="panel-button" />
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
}
