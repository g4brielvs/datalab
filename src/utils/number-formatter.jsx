import React, { useEffect } from 'react';
import * as d3 from "d3v3";

function formatNumber(type, number) {
  const formatPercent = d3.format(",.0%");
  const formatActions = d3.format(",");
  const formatDollars = d3.format("$,");
  const formatDollarsText = d3.format(".2s");

  switch (type) {
    case "percent":
      return formatPercent(number);
    case "actions":
      return formatActions(number);
    case "dollars":
      return formatDollars(Math.round(number));
    case "dollars text":
      return (
        '$' + formatDollarsText(Math.round(number))
          .replace("k", " thousand")
          .replace("M", " million")
          .replace("G", " billion")
          .replace("T", " trillion")
      );
    default:
      return "";
  }
}
export default formatNumber;
