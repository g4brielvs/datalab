import React from "react";

const SunburstSearchContainer = (props) => {
  const widthStyle = {
    width: '100%',
    'margin-bottom': '1rem',
    border: '1px solid #ccc'
  }

  return <>
    <input type="text" value="Search Placeholder" style={widthStyle} />
  </>
}

export default SunburstSearchContainer;