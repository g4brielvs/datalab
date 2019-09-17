import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

import { TextField, List, ListItem, ListItemText, IconButton, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import SunburstIcon from '../../images/sunburst_icon.svg';
import ListIcon from '@material-ui/icons/List';

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'chart',
      expanded: false
    };
  }

  activateButton(button) {
    if (button === 'search') {
      this.toggleSearch();
    }
    if (button !== this.state.activeButton) {
      if (button === 'chart') {
        this.props.switchView('chart');
      } else if (button === 'table') {
        this.props.switchView('table');
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
      <div id='sidebar' className={'sidebar' + (this.state.expanded ? '' : ' collapsed')}>
        <form className='search-panel'>
          <TextField
            id='selection'
            label={'Search ' + this.props.chart}
            value=''
          // className='select-box'
          // onChange={handleChange('selection')}
          // SelectProps={{
          //   MenuProps: {
          //     className: classes.menu,
          //   },
          // }}
          // helperText='Please select your currency'
          // margin='normal'
          >
          </TextField>
          <List aria-label={'List of ' + this.props.chart}>
            {
              Object.keys(this.props.searchList).map((oKey, i) => <>
                <ListItem button key={i}>
                  <ListItemText primary={oKey} />
                </ListItem>
                {
                  this.props.searchList[oKey].map((val, j) =>
                    <ListItem button key={i +'/'+ j}>
                      <ListItemText primary={oKey} secondary={val} className='list-item' />
                    </ListItem>
                  )
                }
              </>)
            }
          </List>
        </form>
        <div>
          <IconButton
            aria-label='search'
            className='panel-group'
            onClick={() => this.activateButton('search')}
          >
            <SearchIcon className={(this.state.activeButton === 'search' ? 'selected' : 'unselected')}
            />
          </IconButton>
          <div className='panel-group'>
            <IconButton
              aria-label='show chart'
              onClick={() => this.activateButton('chart')}
              className={(this.state.activeButton === 'chart' ? 'selected' : 'unselected')}
            >
              {
                // show bubble icon for Agencies, or "sunburst" for Categories
                this.props.chart === 'Agencies' ? <BubbleChartOutlinedIcon />
                  : this.props.chart === 'Categories' ? <img src={SunburstIcon} />
                    : ''
              }
            </IconButton>
            <Divider variant='middle' className='divider' />
            <IconButton
              aria-label='show data table'
              onClick={() => this.activateButton('table')}
            >
              <ListIcon
                className={(this.state.activeButton === 'table' ? 'selected' : 'unselected')}
              />
            </IconButton>
          </div>
        </div >
      </div >
    )
  }
}

SearchPanel.propTypes = {
  'chart': PropTypes.string.isRequired, // instead of C&U section, this should probably be chart type for button to display
                                        // or, perhaps parent should pass in the button or icon to use for the middle one?
  'searchList': PropTypes.object.isRequired,
  'switchView': PropTypes.func.isRequired
}