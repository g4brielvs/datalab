import React from 'react';
import './search.scss';

import Popover from '@material-ui/core/Popover';
import SearchIcon from '@material-ui/icons/Search';

const SearchPanel = props => {
  return (
    <>
      <div className='search-panel'>
        <SearchIcon />
      </div>
      {/* <Popover
      ></Popover> */}
    </>
  );
};

export default SearchPanel;