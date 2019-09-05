import React from "react";
import PropTypes from 'prop-types';
import "./search.scss";

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";
import Divider from "@material-ui/core/Divider";
import ListIcon from "@material-ui/icons/List";


export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 0,
      expanded: false
    };
  }

  activateButton(button) {
    if (button === 'search') {
      this.toggleSearch();
    } else if (button !== this.state.activeButton) {
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
        <div className="search-panel">
          {/* <TextField
            id="selection"
            select
            label="Search Agencies"
            className=''
            value=''
          onChange={handleChange('selection')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          > */}
          {
            Object.keys(this.props.list).map((oKey, i) => {
              return (<>
                <MenuItem key={i} value={oKey}>{oKey}</MenuItem>
                {
                  this.props.list[oKey].map((val, i) =>
                    <MenuItem key={i} value={val}>{val}</MenuItem>
                  )
                }
              </>)
            })
          }
          {/* </TextField> */}



        </div>
        <div>
          <IconButton
            aria-label="search"
            className="panel-group"
            onClick={() => this.activateButton('search')}
          >
            <SearchIcon className={(this.state.activeButton === 'search' ? ' selected' : ' unselected')}
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
  'list': PropTypes.object.isRequired
}