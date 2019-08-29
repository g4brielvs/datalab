import React from "react"
import "./search.scss"

import SearchIcon from "@material-ui/icons/Search"
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined"
import Divider from "@material-ui/core/Divider"
import ListIcon from '@material-ui/icons/List';
import Popover from "@material-ui/core/Popover"

const SearchPanel = props => {
  return (
    <div className="search-panel">
      <div className="panel-group">
        <SearchIcon className="panel-button" />
      </div>
      <div className="panel-group">
        <BubbleChartOutlinedIcon className="panel-button" />
        <Divider variant="middle" className='divider' />
        <ListIcon className="panel-button" />
      </div>
      {/* <Popover
      ></Popover> */}
    </div>
  )
}

export default SearchPanel
