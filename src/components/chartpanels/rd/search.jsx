import styles from './search.module.scss';
import vizStyles from '../viz-control.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { InputAdornment, OutlinedInput, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const maxListItems = 20;

export default class SearchPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.initShowList
    }
    this.filteredList = this.props.searchList;
  }

  toggleList = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

  filterSearch(event) {
    const filter = new RegExp(event.target.value, 'i');
    this.filteredList = this.props.searchList.filter(n =>
      n.display.search(filter) !== -1
    )
    // this.forceUpdate();
    this.setState({ expanded: true });
  }

  selectItem(id) {
    if (this.props.onSelect) {
      if (this.props.showCollapse) {
        this.setState({ expanded: false });
      }
      this.props.onSelect(id);
    }
  }

  onFocus = () => {
    if (this.props.showCollapse) {
      this.setState({ expanded: true });
    }
  }

  // detect if searchList prop changed (since it isn't in state)
  shouldComponentUpdate(nextProps) {
    if (nextProps.searchList !== this.props.searchList) {
      this.filteredList = nextProps.searchList;
    }
    return true;
  }

  render = () =>
    <div className={vizStyles.container}>
      <OutlinedInput
        placeholder={'Search ' + this.props.listDescription}
        inputProps={{ title: 'Search ' + this.props.listDescription }}
        variant='outlined'
        fullWidth
        onFocus={this.onFocus}
        onChange={event => this.filterSearch(event)}
        endAdornment={
          this.props.showCollapse ?
            <InputAdornment position='end'>
              <IconButton
                aria-label='search'
                onClick={this.toggleList}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
            : ''
        }
      />
      <List aria-label={this.props.listDescription}
        className={styles.searchlist + (this.state.expanded ? ' ' + styles.expanded : '')}
      >
        {
          this.filteredList
            .slice(0, maxListItems)
            .map(i =>
              <ListItem
                key={i.id}
                button
                divider
                className={styles.listItem}
                onClick={() => this.selectItem(i.id)}
              >
                <ListItemText primary={i.display} />
              </ListItem>
            )
        }
      </List>
    </div>
}

/*
  Notes on props:
  searchList is expected to be an array of {id, display}
  id values are arbitrary, but must be unique within the list to indicate which is selected (expected but not enforced by SearchPanel)
  display is a string or fragment of what exactly to display for that option
  e.g. [
    {
      id: 1,
      display: 'Department of Energy'
    }, {
      id: 37,
      display: 'NATIONAL TECHNOLOGY & ENGINEERING SOLUTIONS OF SANDIA LLC'
    }, {
      id: 'jadsfa',
      display: 'Department of Defense'
     }, {
      id: -12,
      display: 'Department of the Army'
    }
  ]

  initShowList is true if the list should be open when initialized
  showCollapse is simply whether to show the icon to expand/collapse to the right of the search box; false if you use another method to hide list
  onSelect is parent callback when an item is selected, passes back id value only
*/

SearchPanel.propTypes = {
  'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
  'listDescription': PropTypes.string.isRequired,
  'initShowList': PropTypes.bool,
  'showCollapse': PropTypes.bool,
  'onSelect': PropTypes.func
}
