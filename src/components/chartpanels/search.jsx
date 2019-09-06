import React from "react";
import PropTypes from 'prop-types';
import "./search.scss";

import { TextField, List, ListItem, ListItemText, IconButton, Divider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";
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
    }
    if (button !== this.state.activeButton) {
      if (button === 'chart') {
        alert("switch to chart view");
      } else if (button === 'table') {
        alert("switch to table view");
      } else if (button !== 'search') {
        console.log(`Invalid parameter to SearchPanel.activateButton: ${button}`);
        return;
      }
      this.setState({ activeButton: button });
    }
  }

  toggleSearch() {
    this.setState(prevState => { return { expanded: !prevState.expanded } });
  }

  render() {
    return (
      <div id="sidebar" className={"sidebar" + (this.state.expanded ? '' : " collapsed")}>
        <form className="search-panel">
          <TextField
            id="selection"
            label="Search Agencies"
            value=''
          // className='select-box'
          // onChange={handleChange('selection')}
          // SelectProps={{
          //   MenuProps: {
          //     className: classes.menu,
          //   },
          // }}
          // helperText="Please select your currency"
          // margin="normal"
          >
          </TextField>
          <List aria-label="List of Agencies">
            {
              Object.keys(this.props.list).map((oKey, i) => <>
                <ListItem button key={i}>
                  <ListItemText primary={oKey} className='list-item-category' />
                </ListItem>
                {
                  this.props.list[oKey].map((val, i) =>
                    <ListItem button key={i}>
                      <ListItemText primary={oKey} secondary={val} className='list-item' />
                    </ListItem>
                  )
                }

                {/*} <MenuItem key={i} value={val} className='list-item'>
                      <span className='list-item-header'>{oKey}</span><br />
                      <span>{val}</span>
                    </MenuItem>
                  )
                } 
               ) */}

                {/* <ListItem href="#simple-list">
               <ListItemText primary="primary" secondary='secondary' />
             </ListItem>  */}
              </>)
            }
          </List>





        </form>
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