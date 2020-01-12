import React from "react";

const SearchContainer = (props) => {
  const widthStyle = {
    width: '90%',
    'margin-bottom': '1rem',
    border: '1px solid #ccc',
    height: '40px'
  }

  return <>
    <input type="text" value="Search Placeholder" style={widthStyle} />
  </>
}

export default SearchContainer;