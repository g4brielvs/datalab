import React from "react";

const SunburstBreadcrumbs = (props) => {
  return <>
    <div>
      <span>{props.items.agency}</span>
      <span>&nbsp;{props.items.subagency}</span>
      <span>&nbsp;{props.items.recipient}</span>
    </div>
  </>
}

export default SunburstBreadcrumbs;