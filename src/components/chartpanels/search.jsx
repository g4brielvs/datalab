import React from 'react';
import PropTypes from 'prop-types';
import styles from './search.module.scss';

import { OutlinedInput, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.filteredList = this.props.searchList;
    this.state = {
      collapsed: true
    }
  }

  toggleSearch = () => this.setState(prevState => { return { collapsed: !prevState.collapsed } });

  filterSearch(event) {
    this.filteredList = [];
    const filter = new RegExp(event.target.value, 'i');

    this.props.searchList.forEach(parent => {
      const childrenToKeep = [];

      if (parent.children) {
        parent.children.forEach(child => {
          if (child.text.search(filter) !== -1) {
            childrenToKeep.push(child);
          }
        });
      }
      if (childrenToKeep.length > 0) {
        this.filteredList.push({ ...parent, children: childrenToKeep });
      } else if (parent.text.search(filter) !== -1) {
        this.filteredList.push({ ...parent, children: null });
      }
    });
    this.forceUpdate();
  }

  selectItem(id) {
    if (this.props.onSelect) {
      this.props.onSelect(id);
    }
  }

  render() {
    return (
      <form className={styles.searchPanel} >
        <OutlinedInput
          placeholder={'Search ' + this.props.listDescription}
          variant='outlined'
          fullWidth
          onChange={event => this.filterSearch(event)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label='search'
                onClick={() => this.toggleSearch()}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />

        <List aria-label={'List of ' + this.props.listDescription}
          className={this.state.collapsed ? styles.collapsed : ''}
        >
          {
            this.filteredList.map(parent => <>
              <ListItem
                key={parent.id}
                button
                divider
                onClick={event => this.selectItem(parent.id)}
              >
                <ListItemText primary={parent.text} />
              </ListItem>
              {
                parent.children ?
                  parent.children.map(child =>
                    <ListItem
                      key={child.id}
                      button
                      divider
                      onClick={event => this.selectItem(child.id)}
                    >
                      <ListItemText primary={parent.text} secondary={child.text} className={styles.listItem} />
                    </ListItem>
                  )
                  : ''
              }
            </>)}
        </List>
      </form >
    )
  }
}

/*
  NOTE: searchList is expected to be an array of {id, text to display, children (optional; array of {id, text}) }
  id values are arbitrary, but must be unique within the list (expected but not enforced by SearchPanel)
  e.g. [
    {
      id: 1,
      text: 'R&D'
    }, {
      id: 2,
      text: 'Education',
      children: [
        {
          id: 3,
          text: 'Adult Education - Basic Grants to States'
        }, {
          id: 4,
          text: '1890 Institution Capacity Building Grants'
        }
      ]
    }, {
      id: 5,
      text: 'Medical R&D',
      children: [
        {
          id: 6,
          text: 'Human Genome Research'
        }
      ]
    }
  ]
*/

SearchPanel.propTypes = {
  'searchList': PropTypes.arrayOf(PropTypes.object).isRequired,
  'listDescription': PropTypes.string.isRequired,
  'onSelect': PropTypes.func
}