import React from "react"
import PropTypes from 'prop-types'
import "./search.scss"

import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined"
import Divider from "@material-ui/core/Divider"
import ListIcon from "@material-ui/icons/List"


export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 0,
      expanded: false
    };
  }

  // componentWillUpdate(nextProps, nextState) {
  //   if (this.state.activeButton !== nextState.activeButton) {
  //     if (this.state.activeButton) {
  //       document.getElementById(this.state.activeButton).classList.remove("selected");
  //     }
  //     document.getElementById(nextState.activeButton).classList.add("selected");
  //   }
  // }

  activateButton(button) {
    if (button === 'search') {
      this.toggleSearch();
    }
    if (button !== this.state.activeButton) {
      this.setState({ activeButton: button });
      if (button === 'chart') {
        alert("switch to chart view");
      } else if (button === 'table') {
        alert("switch to table view");
      } else {
        console.log(`Invalid parameter to SearchPanel.activateButton: ${button}`);
      }
    }
  }

  toggleSearch() {
    this.setState((prevState) => { return { expanded: !prevState.expanded } });
  }

  render() {
    return (
      <div id="sidebar" className={"sidebar" + (this.state.expanded ? '' : " collapsed")}>
        <div className="search-panel">search panel here</div>
        <div>
          <IconButton
            aria-label="search"
            className="panel-group"
            onClick={() => this.activateButton('search')}
          >
            <SearchIcon ref={this.searchButtonRef}
              className={(this.state.activeButton === 'search' ? ' selected' : ' unselected')}
            />
          </IconButton>
          <div className="panel-group">
            <IconButton
              aria-label="show bubble chart"
              onClick={e => this.activateButton('chart')}
            >
              <BubbleChartOutlinedIcon
                className={(this.state.activeButton === 'chart' ? ' selected' : ' unselected')}
              />
            </IconButton>
            <Divider variant="middle" className="divider" />
            <IconButton
              aria-label="show data table"
              onClick={e => this.activateButton('table')}
            >
              <ListIcon
                className={(this.state.activeButton === 'table' ? ' selected' : ' unselected')}
              />
            </IconButton>
          </div>
        </div >
      </div >
    )
  }
}

SearchPanel.PropTypes - {
  'search-list': PropTypes.object.isRequired
}