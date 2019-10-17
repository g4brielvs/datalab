import './search.scss'; // because this overrides MUI class names and they are mixed-case with hyphens, CSS module won't work here
import React from 'react';
import PropTypes from 'prop-types';

import { OutlinedInput, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: this.props.showCollapse,
      filteredList: this.props.searchList
    }
  }

  toggleSearch = () => this.setState(prevState => { { collapsed: !prevState.collapsed } });

  filterSearch(event) {
    const filter = new RegExp(event.target.value, 'i');

    this.setState({
      filteredList: this.props.searchList.filter(i =>
        i.heading.search(filter) !== -1 || i.subheading.search(filter) !== -1
      )
    });
  }

  selectItem(id) {
    if (this.props.onSelect) {
      if (this.props.showCollapse) {
        this.setState({ collapsed: true });
      }
      this.props.onSelect(id);
    }
  }

  onFocus = () => {
    if (this.props.showCollapse) {
      this.setState({ collapsed: false });
    }
  }

  render = () =>
    <form>
      <OutlinedInput
        placeholder={'Search ' + this.props.listDescription}
        variant='outlined'
        fullWidth
        onFocus={this.onFocus}
        onChange={event => this.filterSearch(event)}
        endAdornment={
          this.props.showCollapse ?
            <InputAdornment position="end">
              <IconButton
                aria-label='search'
                onClick={this.toggleSearch}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
            : ''
        }
      />

      <List aria-label={'List of ' + this.props.listDescription}
        className={'searchlist' + (this.state.collapsed ? ' collapsed' : '')}
      >
        {
          this.state.filteredList.map(i =>
            <ListItem
              key={i.id}
              button
              divider
              className='listItem'
              onClick={() => this.selectItem(i.id)}
            >
              <ListItemText primary={i.heading} secondary={i.subheading} />
            </ListItem>
          )}
      </List>
    </form>
}

/*
  Notes on props:
  searchList is expected to be an array of {id, heading text, subheading text}
  id values are arbitrary, but must be unique within the list (expected but not enforced by SearchPanel)
  e.g. [
    {
      id: 1,
      heading: 'R&D',
      subheading: 'R&D',
    }, {
      id: 2,
      heading: 'Education',
      subheading: 'Education',
    }, {
      id: 'dfsak3729',
      heading: 'Education',
      subheading: 'Adult Education - Basic Grants to States'
    }
  ]

  showCollapse is simply whether to show the icon to expand/collapse to the right of the search box,
  don't include if you use another method to hide list
*/

SearchPanel.propTypes = {
  'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
  'listDescription': PropTypes.string.isRequired,
  'showCollapse': PropTypes.bool,
  'onSelect': PropTypes.func
}