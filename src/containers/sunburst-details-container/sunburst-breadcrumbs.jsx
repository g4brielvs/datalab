import React from "react";

const SunburstBreadcrumbs = (props) => {
  return <>
    <div>{props.items.agency}</div>
    <div>{props.items.subagency}</div>
    <div>{props.items.recipient}</div>

  </>
}

export default SunburstBreadcrumbs;