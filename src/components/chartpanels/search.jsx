import React from "react"
import "./search.scss"

import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined"
import Divider from "@material-ui/core/Divider"
import ListIcon from "@material-ui/icons/List"
import Popover from "@material-ui/core/Popover"

export default class SearchPanel extends React.Component {

  search () {
    alert('search clicked');
  }

  render() {
    return (
      <div className="search-panel">
        <IconButton onClick={e => this.search()} className="panel-group" aria-label="search">
          <SearchIcon className="panel-button" />
        </IconButton>
        <div className="panel-group">
          <IconButton aria-label="show bubble chart">
            <BubbleChartOutlinedIcon className="panel-button" />
          </IconButton>
          <Divider variant="middle" className="divider" />
          <IconButton aria-label="show data table">
            <ListIcon className="panel-button" />
          </IconButton>
        </div>
        {/* <Popover
        ></Popover> */}
      </div>
    )
  }
}
