"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var allOptions, optionsDict, lastDate, categorySeparatorDate;

var parseTimeFormat = d3.timeFormat("%B %d, %Y");
var brushDateFormatter = d3.timeFormat("%x");
var dollarFormatter = function dollarFormatter(d) {
  return d3.format("$,.3s")(d).replace(/G/, "B");
};
var dateFormatter = d3.timeFormat("%a, %b %d, %Y");
var lineColors = ["#00c3c2", "#2E7070", "#4CABAC", "#76D2D3"];
var parseDate = d3.timeParse("%-m/%-d/%y");
var parseDateYMD = d3.timeParse("%Y-%m-%d");
var bisectDate = d3.bisector(function (d) {
  return d.date;
}).left;

var svg = d3.select("#svg-wrapper"),
    margin = { top: 20, right: 20, bottom: 110, left: 60 },
    margin2 = { top: 330, right: 20, bottom: 30, left: 60 };

var data = undefined,
    optionsData = undefined,
    dateScaleValues = undefined,
    allToSpending = undefined,
    categoryToSpendingPrevFY = undefined,
    todayAllCategorySpending = undefined;

var x = d3.scaleTime(),
    x2 = d3.scaleTime();

var y = d3.scaleLinear(),
    y2 = d3.scaleLinear();

var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
    yAxis = d3.axisLeft(y).tickFormat(dollarFormatter);

var line = d3.line().x(function (d) {
  return x(d.date);
}).y(function (d) {
  return y(d.value);
});

var line2 = d3.line().x(function (d) {
  return x2(d.date);
}).y(function (d) {
  return y2(d.value);
});

var brush = d3.brushX().on("brush end", brushed);

var width = undefined,
    height = undefined,
    height2 = undefined,
    zoom = undefined;

function init() {
  var w = d3.select('.dts-layout-manager').node().getBoundingClientRect().width;

  d3.select('#svg-wrapper').attr('width', w);

  width = w - margin.left - margin.right;
  height = +svg.attr("height") - margin.top - margin.bottom;
  height2 = +svg.attr("height") - margin2.top - margin2.bottom;

  zoom = d3.zoom().scaleExtent([1, Infinity]).translateExtent([[0, 0], [width, height]]).extent([[0, 0], [width, height]]).on("zoom", zoomed);

  x.range([0, width]);
  x2.range([0, width]);

  y.range([height, 0]);
  y2.range([height2, 0]);

  brush.extent([[0, 0], [width, height2]]);
}

function setFancyLines(selector, lineFn) {
  svg.selectAll(selector).each(function (lineSel) {
    var d3LineSel = d3.select(this);
    var d3LineSelData = d3LineSel.data();

    if (d3LineSelData[0].values[0].date.getTime() < d3LineSelData[0].date.getTime()) {
      d3LineSel.style("stroke-dasharray", "5, 3");
    }

    d3LineSel.attr("d", function (d) {
      return lineFn(d.values);
    });
    d3LineSel.attr("stroke", function (d) {
      return d.color;
    });
  });
}

function updateCategoryRectSeparator(sel, xFn, h) {
  if (categorySeparatorDate == null) {
    svg.select(sel).style("display", "none");
  } else {
    svg.select(sel).style("display", "block").attr("x", 0).attr("y", 0).attr("width", xFn(categorySeparatorDate)).attr("height", h).attr("opacity", 0.2).style("stroke-width", 0).style("fill", "#deeded");
  }
}

function adjustLines() {
  setFancyLines(".graph-lines", line);
  setFancyLines(".brush-lines", line2);

  updateCategoryRectSeparator(".category-rect-separator", x, height);
  updateCategoryRectSeparator(".brush-category-rect-separator", x2, height2);

  svg.select(".graph-x-axis").call(xAxis);
  svg.select(".brush-x-axis").call(xAxis2);
  svg.select(".x-grid").call(makeXGridLines().tickSize(-height).tickFormat(""));
  svg.select(".y-grid").call(makeYGridLines().tickSize(-width).tickFormat(""));
}

function updateCustomGrabbers(s) {
  var handle = svg.selectAll(".handle--custom");
  if (s == null) {
    handle.attr("display", "none");
  } else {
    handle.attr("display", null).attr("transform", function (d, i) {
      return "translate(" + s[i] + "," + height2 / 2 + ")";
    });
  }
}

function serialize(obj) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }
  return str.join("&");
}

function updateHistoryWithNewFrequencyOrCategory() {
  var start = getQueryStringValue("start");
  var end = getQueryStringValue("end");
  var frequency = d3.select('#frequency-selector').property('value');
  var category = d3.select('#category-selector').property('value');

  var theQueryString = "?" + serialize({ start: start, end: end, frequency: frequency, category: category });
  history.replaceState(null, "", theQueryString);
}

function updateHistoryWithNewBrush(s) {
  var start = new Date(x2.invert(s[0])).toISOString().slice(0, 10).replace(/-/g, "");
  var end = new Date(x2.invert(s[1])).toISOString().slice(0, 10).replace(/-/g, "");
  var frequency = d3.select('#frequency-selector').property('value');
  var category = d3.select('#category-selector').property('value');

  var numberOfDays = Math.round((new Date(x2.invert(s[1])) - new Date(x2.invert(s[0]))) / (1000 * 60 * 60 * 24));

  var theQueryString = "?" + serialize({ start: start, end: end, frequency: frequency, category: category });
  history.replaceState(null, "", theQueryString);

  if (numberOfDays < 32) {
    xAxis.ticks(d3.timeDay.every(10));
  } else if (numberOfDays < 180) {
    xAxis.ticks(d3.timeMonth.every(1));
  } else if (numberOfDays < 500) {
    xAxis.ticks(d3.timeMonth.every(3));
  } else if (numberOfDays < 1400) {
    xAxis.ticks(d3.timeMonth.every(6));
  } else if (numberOfDays < 3650) {
    xAxis.ticks(d3.timeYear.every(1));
  } else {
    xAxis.ticks(d3.timeYear.every(2));
  }

  svg.select(".graph-x-axis").call(xAxis);
}

function clearPeriodSelections() {
  d3.selectAll(".period-button").classed("period-button-selected", false);
}

function brushed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom

  var s = d3.event.selection || x2.range();
  x.domain(s.map(x2.invert, x2));
  adjustLines();

  updateCustomGrabbers(s);

  d3.select(".dts-brush-start-date").text(brushDateFormatter(x.domain()[0]));
  d3.select(".dts-brush-end-date").text(brushDateFormatter(x.domain()[1]));

  svg.select(".zoom").call(zoom.transform, d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0));

  clearPeriodSelections();
}

function zoomed() {
  if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush

  var t = d3.event.transform || x2.range();
  x.domain(t.rescaleX(x2).domain());
  adjustLines();

  var brushRegion = x.range().map(t.invertX, t);

  updateCustomGrabbers(brushRegion);

  d3.select(".brush").call(brush.move, brushRegion);

  clearPeriodSelections();
}

function choosePeriodButton(context, data) {
  var leftDate = new Date(lastDate);
  var rightDate = new Date(lastDate);

  var t = context.dataset.range;

  switch (t) {
    case "30d":
      leftDate.setMonth(leftDate.getMonth() - 1);break;
    case "90d":
      leftDate.setMonth(leftDate.getMonth() - 3);break;
    case "1y":
      leftDate.setFullYear(leftDate.getFullYear() - 1);break;
    case "5y":
      leftDate.setFullYear(leftDate.getFullYear() - 5);break;
    case "10y":
      leftDate.setFullYear(leftDate.getFullYear() - 10);break;
  }

  d3.select(".brush").call(brush.move, null);

  d3.select(".brush").call(brush.move, [x(leftDate), x(rightDate)]);

  d3.select(context).classed("period-button-selected", true);
}

function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var barData = undefined;

function createBarChart(yearToSpendingArray, redraw) {
  d3.select(".svg-tsbfy-container").selectAll("*").remove();

  barData = barData || yearToSpendingArray.slice(-10);

  var svg = d3.select(".svg-tsbfy-container").append("svg").attr("id", "viz-tsbfy-wrapper").attr("width", "750") // do we need this?
  .attr("height", "500") // or this?
  .attr("viewBox", "0 0 750 500"),
      // or this?
  margin = { top: 20, right: 20, bottom: 50, left: 150 },
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

  var x = d3.scaleBand().range([0, width]).padding(0.1),
      y = d3.scaleLinear().range([height, 0]);

  var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  x.domain(barData.map(function (d) {
    return d.year;
  }));
  y.domain([0, d3.max(barData, function (d) {
    return d.spending;
  })]);

  g.append("g").attr("class", "axis bar-axis axis--x").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x).tickFormat(function (d) {
    return "" + d.substring(2);
  }));

  g.append("g").attr("class", "axis bar-axis axis--y").call(d3.axisLeft(y).tickFormat(dollarFormatter));

  var barSub = 20;

  g.selectAll(".bar").data(barData).enter().append("rect").attr("class", "bar").attr("x", function (d) {
    return x(d.year) + barSub / 2;
  }).attr("y", function (d) {
    return y(d.spending);
  }).attr("width", x.bandwidth() - barSub).attr("height", function (d) {
    return height - y(d.spending);
  });
}

var tableData = undefined;

function createTable(yearToSpendingArray) {
  d3.select(".svg-tsbfy-container").selectAll("*").remove();

  var table = d3.select(".svg-tsbfy-container").append('table').attr("class", "tsbfy-table");
  var tbody = table.append('tbody');

  var columns = ["Year", "Spending per year"];

  if (!tableData) {
    tableData = yearToSpendingArray.slice(0);
    tableData.reverse();
    tableData = tableData.slice(0, 10);
  }

  var totalSpending = tableData.map(function (d) {
    return d.spending;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);

  var rows = tbody.selectAll('tr').data(tableData).enter().append('tr');

  var cells = rows.selectAll('td').data(function (row) {
    var tdYear = row.year;
    var tdSpendingPerYear = dollarFormatter(row.spending);

    return [tdYear, tdSpendingPerYear];
  }).enter().append('td').text(function (d) {
    return d;
  });
}

function addOptions(sel, condensedOptions, activeOptions, inactiveOptions) {
  sel.selectAll('*').remove();

  sel.append('option').text('All Categories').property("value", "All Categories");
  sel.append('option').attr('disabled', 'true').text('──────────────────────────');

  var previousYear = new Date().getFullYear() - 1;

  sel.append("optgroup").attr("label", "Top 10 (Spending in FY " + previousYear + ")").selectAll('option').data(condensedOptions).enter().append('option').text(function (d) {
    return d;
  }).property("value", function (d) {
    return d;
  });

  sel.append('option').attr('disabled', 'true').text('──────────────────────────');

  sel.append("optgroup").attr("label", "Active Categories").selectAll('option').data(activeOptions).enter().append('option').text(function (d) {
    return d;
  }).property("value", function (d) {
    return d;
  });

  sel.append('option').attr('disabled', 'true').text('──────────────────────────');

  sel.append("optgroup").attr("label", "Inactive Categories").selectAll('option').data(inactiveOptions).enter().append('option').text(function (d) {
    return d;
  }).property("value", function (d) {
    return d;
  });

  sel.property("value", "All Categories");
}

function getGraphData() {
  var categoryValue = d3.select('#category-selector').property('value');
  var frequencyValue = d3.select('#frequency-selector').property('value');

  return masterMapping[categoryValue][frequencyValue];
}

function setTooltipActiveTimeframe(frequencyValue) {
  d3.selectAll(".dts-tt-timeframe").classed("dts-tt-timeframe-active", false);

  if (frequencyValue === "today") {
    d3.select(".dts-tt-timeframe-daily").classed("dts-tt-timeframe-active", true);
  } else if (frequencyValue === "mtd") {
    d3.select(".dts-tt-timeframe-mtd").classed("dts-tt-timeframe-active", true);
  } else if (frequencyValue === "fytd") {
    d3.select(".dts-tt-timeframe-fytd").classed("dts-tt-timeframe-active", true);
  }
}

function createSelect(condensedOptions, activeOptions, inactiveOptions) {
  d3.select('#frequency-selector').on('change', onFrequencyChange);
  d3.selectAll("input[name='timeframe']").on("change", onDataChange);
  var select = d3.select('#category-selector').on('change', onCategoryChange);

  addOptions(select, condensedOptions, activeOptions, inactiveOptions);

  function onFrequencyChange() {
    onDataChange();
  }

  function onCategoryChange() {
    d3.select("#category-selector").classed('custom-select-start', false);

    onDataChange();
  }

  function onDataChange() {
    updateGraph(getGraphData());
    updateHistoryWithNewFrequencyOrCategory();

    var categoryValue = d3.select('#category-selector').property('value');
    var frequencyValue = d3.select('#frequency-selector').property('value');

    var curLastItem = optionsDict[categoryValue][frequencyValue].last();

    setTooltipActiveTimeframe(frequencyValue);

    var amountSpentToday = optionsDict[categoryValue]['today'].last();

    d3.select(".daily-spending-subtext").text("Amount Spent On " + dateFormatter(amountSpentToday.date));
    d3.select(".daily-spending-amount").text(dollarFormatter(amountSpentToday.value));
  }
}

function makeXGridLines() {
  return d3.axisBottom(x);
}

function makeYGridLines() {
  return d3.axisLeft(y);
}

function parseYYYYMMDD(dateString) {
  var year = dateString.substring(0, 4);
  var month = dateString.substring(4, 6);
  var day = dateString.substring(6, 8);

  return new Date(year, month - 1, day);
}

function setGraphYDomains(data) {
  var yMax = d3.max(data, function (c) {
    return d3.max(c.values, function (d) {
      return d.value;
    });
  });
  var yMin = d3.min(data, function (c) {
    return d3.min(c.values, function (d) {
      return d.value;
    });
  });

  y.domain([yMin, yMax]);
  y2.domain(y.domain());
}

function updateLines(parent, selector, data, pathClass, classesToRemove, lineFn) {
  d3.selectAll(classesToRemove).remove();

  var u = d3.select(parent).selectAll(selector);

  u.data(data).enter().insert('path', ":first-child").attr("class", pathClass);
  // .attr("d", d => lineFn(d.values));  don't need since called in adjustLines
}

function updateGraphAndBrushLines(data) {
  updateLines(".line-chart", ".category-line-container", data, "line graph-lines", ".graph-lines", line);
  updateLines(".context", ".brush-line-container", data, "line brush-lines", ".brush-lines", line2);
}

function updateGraph(data) {
  categorySeparatorDate = data.length > 1 ? data[0].date : null;

  if (data[0].name === "All Categories") {
    d3.select(".dts-footnote").style("visibility", "visible");
    d3.select(".dts-footnote-text").text("All Categories was created by taking Total Withdrawals (excluding transfers) and subtracting Public Debt Cash Redemp (Table III B) from it for each corresponding entry.");
  } else if (data.length > 1) {
    d3.select(".dts-footnote").style("visibility", "visible");
    d3.select(".dts-footnote-text").text(data[0].footnote);
  } else {
    d3.select(".dts-footnote").style("visibility", "hidden");
    d3.select(".dts-footnote-text").text('');
  }

  updateGraphAndBrushLines(data);
  setGraphYDomains(data);
  adjustLines();

  svg.select(".axis--y").transition().duration(1000).call(yAxis).ease(d3.easeLinear);
}

function createGraph(data) {
  var startDate = getQueryStringValue("start");
  var endDate = getQueryStringValue("end");

  d3.select("#svg-wrapper").selectAll(".line-main").remove();

  d3.selectAll(".period-button").on("click", function () {
    choosePeriodButton(this, data);
  });

  brush.on("end", function () {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom

    var s = d3.event.selection || x2.range();

    updateHistoryWithNewBrush(s);
  });

  zoom.on("end", function () {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush

    var t = d3.event.transform || x2.range();
    var s = x.range().map(t.invertX, t);

    updateHistoryWithNewBrush(s);
  });

  var focus = svg.append("g").attr("class", "focus").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var context = svg.append("g").attr("class", "context").attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

  setGraphYDomains(data);
  x.domain([new Date(2005, 5, 9), lastDate]);
  x2.domain(x.domain());

  focus.append("g").attr("class", "axis axis--x graph-x-axis").attr("transform", "translate(0," + height + ")").call(xAxis);

  focus.append("g").attr("class", "axis axis--y graph-y-axis").call(yAxis);

  // add the X gridlines
  svg.append("g").attr("class", "grid x-grid").attr("transform", "translate(" + margin.left + "," + (margin.top + height) + ")").call(makeXGridLines().tickSize(-height).tickFormat(""));

  // add the Y gridlines
  svg.append("g").attr("class", "grid y-grid").attr("transform", "translate(" + margin.left + "," + margin.top + ")").call(makeYGridLines().tickSize(-width).tickFormat(""));

  var clip = svg.append("defs").append("svg:clipPath").attr("id", "clip").append("svg:rect").attr("width", width).attr("height", height).attr("x", 0).attr("y", 0);

  var lineChart = svg.append("g").attr("class", "focus line-chart").attr("transform", "translate(" + margin.left + "," + margin.top + ")").attr("clip-path", "url(#clip)");

  updateGraphAndBrushLines(data);

  context.append("g").attr("class", "axis axis--x brush-x-axis").attr("transform", "translate(0," + height2 + ")").call(xAxis2);

  var gBrush = context.append("g").attr("class", "brush").call(brush).call(brush.move, x.range());

  var handle = gBrush.selectAll(".handle--custom").data([{ type: "w" }, { type: "e" }]).enter().append("path").attr("class", "handle--custom").attr("fill", "#aaa").attr("fill-opacity", 0.8).attr("cursor", "ew-resize").attr("d", d3.arc().innerRadius(0).outerRadius(height2 / 2).startAngle(0).endAngle(function (d, i) {
    return i ? Math.PI : -Math.PI;
  }));

  d3.select(".brush").call(brush.move, null);

  lineChart.append("rect").attr("class", "category-rect-separator");
  gBrush.insert("rect", ":first-child").attr("class", "brush-category-rect-separator");

  if (startDate == "" || endDate == "") {
    // change this to not a valid date range instead
    d3.select(".brush").call(brush.move, [0, width]);

    choosePeriodButton(d3.select(".period-button-default").node(), data);
  } else {
    d3.select(".brush").call(brush.move, [x(parseYYYYMMDD(startDate)), x(parseYYYYMMDD(endDate))]);
  }

  var mouseOverDataPoint = svg.append("g").attr("class", "mouse-over-data-point").style("display", "none");

  mouseOverDataPoint.append("circle").attr("r", 7).attr("stroke-width", 1);

  var ttContainer = d3.select(".dts-tt-container");

  svg.append("rect").attr("class", "zoom").attr("width", width).attr("height", height).attr("transform", "translate(" + margin.left + "," + margin.top + ")").on("mouseover", function () {
    ttContainer.style("display", "block");mouseOverDataPoint.style("display", "block");
  }).on("mouseout", function () {
    ttContainer.style("display", "none");mouseOverDataPoint.style("display", "none");
  }).on("mousemove", mouseMove).call(zoom).on("wheel.zoom", null);

  function getMouseOverDataPoint(data, context) {
    var x0 = x.invert(d3.mouse(context)[0]); // Date at mouse position
    var y0 = y.invert(d3.mouse(context)[1]);

    var categoryPossibilities = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var cItem = _step.value;

        var mouseOverData = cItem.values;

        var i = bisectDate(mouseOverData, x0, 1); // Index in date in array

        if (i === 1 || i >= mouseOverData.length) {
          continue;
        }

        var d0 = mouseOverData[i - 1]; // d date value
        var d1 = mouseOverData[i]; // d date value

        d0.name = cItem.name;
        d1.name = cItem.name;

        categoryPossibilities.push(x0 - d0.date > d1.date - x0 ? d1 : d0);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (categoryPossibilities.length === 0) {
      return { date: data[0].date, value: 0, name: "No Data" }; // No data due to switchover/whatever else
    }

    var closestItem = categoryPossibilities[0];

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = categoryPossibilities[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var cItem = _step2.value;

        if (Math.abs(cItem.value - y0) < Math.abs(closestItem.value - y0)) {
          closestItem = cItem;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return closestItem;
  }

  function mouseMove() {
    var categoryValue = d3.select('#category-selector').property('value');
    var frequencyValue = d3.select('#frequency-selector').property('value');

    var d = getMouseOverDataPoint(masterMapping[categoryValue][frequencyValue], this);

    mouseOverDataPoint.select("circle").attr("transform", "translate(" + (margin.left + x(d.date)) + "," + (margin.top + y(d.value)) + ")");

    ttContainer.style("left", d3.event.pageX + "px").style("top", d3.event.pageY + "px");

    var mouseOverDateText = dateFormatter(d.date);

    var todayDataPoint = dollarFormatter(getMouseOverDataPoint(masterMapping[categoryValue]["today"], this).value);
    var mtdDataPoint = dollarFormatter(getMouseOverDataPoint(masterMapping[categoryValue]["mtd"], this).value);
    var fytdDataPoint = dollarFormatter(getMouseOverDataPoint(masterMapping[categoryValue]["fytd"], this).value);

    ttContainer.select(".dts-tt-category").text(d.name);
    ttContainer.select(".dts-tt-date").text(mouseOverDateText);

    ttContainer.select(".dts-tt-daily-value").text(todayDataPoint);
    ttContainer.select(".dts-tt-mtd-value").text(mtdDataPoint);
    ttContainer.select(".dts-tt-fytd-value").text(fytdDataPoint);
  }
}

var sharedCategories = [{
  categories: ["Food Stamps", "Supple Nutrition Assist Program ( SNAP )"],
  date: new Date("2010-03-31"),
  footnote: "The shaded region indicates inactive or retired programs. On March 31, 2010, the Food Stamp Program was renamed Supplemental Nutrition Assistance Program (SNAP) on the Daily Treasury Statement. Withdrawals previously reported under the Food Stamp Program are now reported under SNAP."
}, {
  categories: ["Medicare", "Medicare Advantage Part C D Payments", "Marketplace Payments", "Medicare and Other CMS Payments"],
  date: new Date("2014-10-01"),
  footnote: "The shaded region indicates inactive or retired programs. Beginning October 1, 2014, payments previously reported under the Medicare line were expanded to three lines: Medicare and other CMS payments, Medicare Advantage - Part C&D payments, and Marketplace payments."
}];

var mapping = {};

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = sharedCategories[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var item = _step3.value;
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = item.categories[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var categoryName = _step6.value;

        mapping[categoryName] = { categories: item.categories, date: item.date, footnote: item.footnote };
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var masterMapping = {};

function getCombinedCategory(combinedArray) {
  var result = [];
  var remember = {};

  combinedArray.forEach(function (obj) {
    if (remember[obj.date]) {
      remember[obj.date].value += obj.value;
    } else {
      var clonedObj = Object.assign({}, obj);
      remember[obj.date] = clonedObj;
      result.push(clonedObj);
    }
  });

  return result;
}

function createMasterMapping() {
  for (var key in optionsDict) {
    masterMapping[key] = { "today": [], "mtd": [], "fytd": [] };

    if (mapping.hasOwnProperty(key)) {
      for (var i = 0; i < mapping[key].categories.length; i++) {
        var cateName = mapping[key].categories[i];

        masterMapping[key]["today"].push({ "name": cateName, values: optionsDict[cateName]["today"], date: mapping[key].date, footnote: mapping[key].footnote, color: lineColors[i] });
        masterMapping[key]["mtd"].push({ "name": cateName, values: optionsDict[cateName]["mtd"], date: mapping[key].date, footnote: mapping[key].footnote, color: lineColors[i] });
        masterMapping[key]["fytd"].push({ "name": cateName, values: optionsDict[cateName]["fytd"], date: mapping[key].date, footnote: mapping[key].footnote, color: lineColors[i] });
      }
    } else {
      masterMapping[key]["today"].push({ "name": key, values: optionsDict[key]["today"], date: new Date("1970-01-01"), footnote: "", color: lineColors[0] });
      masterMapping[key]["mtd"].push({ "name": key, values: optionsDict[key]["mtd"], date: new Date("1970-01-01"), footnote: "", color: lineColors[0] });
      masterMapping[key]["fytd"].push({ "name": key, values: optionsDict[key]["fytd"], date: new Date("1970-01-01"), footnote: "", color: lineColors[0] });
    }
  }

  var combinedToday = [];
  var combinedMTD = [];
  var combinedFYTD = [];

  var medicareGrouping = sharedCategories[1];

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = medicareGrouping.categories[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var cateName = _step4.value;
      // Only get combined for the medicare grouping
      combinedToday.push.apply(combinedToday, optionsDict[cateName]["today"]);
      combinedMTD.push.apply(combinedMTD, optionsDict[cateName]["mtd"]);
      combinedFYTD.push.apply(combinedFYTD, optionsDict[cateName]["fytd"]);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  var combinedDailyValues = getCombinedCategory(combinedToday);
  var combinedMTDValues = getCombinedCategory(combinedMTD);
  var combinedFYTDValues = getCombinedCategory(combinedFYTD);

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = medicareGrouping.categories[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var cateName = _step5.value;
      // Only get combined for the medicare grouping
      masterMapping[cateName]["today"].push({ "name": "Combined", values: combinedDailyValues, date: medicareGrouping.date, footnote: medicareGrouping.footnote, color: lineColors[lineColors.length - 1] });
      masterMapping[cateName]["mtd"].push({ "name": "Combined", values: combinedMTDValues, date: medicareGrouping.date, footnote: medicareGrouping.footnote, color: lineColors[lineColors.length - 1] });
      masterMapping[cateName]["fytd"].push({ "name": "Combined", values: combinedFYTDValues, date: medicareGrouping.date, footnote: medicareGrouping.footnote, color: lineColors[lineColors.length - 1] });
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }
}

function getFiscalYear(theDate) {
  var fullYear = theDate.getFullYear();

  return theDate.getMonth() + 1 >= 10 ? fullYear + 1 : fullYear;
}

function transposeKVToArray(frequency) {
  return Object.keys(allToSpending[frequency]).map(function (k) {
    return { date: new Date(k), value: allToSpending[frequency][k] };
  });
}

function getYearToSpendingArray(allCategoriesFYTD) {
  var yearToSpendingArray = [];

  for (var i = 0; i < allCategoriesFYTD.length - 1; i++) {
    var curItem = allCategoriesFYTD[i];
    var nextItem = allCategoriesFYTD[i + 1];

    if (nextItem.value < curItem.value) {
      // Fiscal year end
      yearToSpendingArray.push({ year: getFiscalYear(curItem.date).toString(), spending: curItem.value });
    }
  }

  var latestForCurrentYear = allCategoriesFYTD[allCategoriesFYTD.length - 1];
  yearToSpendingArray.push({ year: getFiscalYear(latestForCurrentYear.date).toString(), spending: latestForCurrentYear.value });

  return yearToSpendingArray;
}

var categoryToActiveWithinAYear = {};

var formatMillisecond = d3.timeFormat(".%L"),
    formatSecond = d3.timeFormat(":%S"),
    formatMinute = d3.timeFormat("%I:%M"),
    formatHour = d3.timeFormat("%I %p"),
    formatDay = d3.timeFormat("%a %d"),
    formatWeek = d3.timeFormat("%b %d"),
    formatMonth = d3.timeFormat("%b"),
    formatYear = d3.timeFormat("%Y");

// Define filter conditions
function multiFormat(date) {
  return (d3.timeSecond(date) < date ? formatMillisecond : d3.timeMinute(date) < date ? formatSecond : d3.timeHour(date) < date ? formatMinute : d3.timeDay(date) < date ? formatHour : d3.timeMonth(date) < date ? d3.timeWeek(date) < date ? formatDay : formatWeek : d3.timeYear(date) < date ? formatMonth : formatYear)(date);
}

d3.csv("/data-lab-data/dts/dts.csv", type, function (error, _data) {
  if (error) throw error;

  optionsData = [];
  dateScaleValues = [];
  allToSpending = { "today": {}, "mtd": {}, "fytd": {} };
  categoryToSpendingPrevFY = {};

  optionsDict = {};

  data = _data;

  data.forEach(function (d) {
    //d.date = parseDate(d.date);
    d.today = +d.today * 1000000;
    d.mtd = +d.mtd * 1000000;
    d.fytd = +d.fytd * 1000000;

    var lastYear = new Date(lastDate);
    lastYear.setFullYear(lastYear.getFullYear() - 1);

    if (!categoryToActiveWithinAYear.hasOwnProperty(d.item_raw)) {
      categoryToActiveWithinAYear[d.item_raw] = false;
    }

    if (!categoryToActiveWithinAYear[d.item_raw]) {
      if (Math.abs(d.date.getTime() - lastYear.getTime()) < 31557600000) {
        categoryToActiveWithinAYear[d.item_raw] = true;
      }
    }

    var currentYear = new Date().getFullYear();
    var prevFYStart = new Date("10/01/" + (currentYear - 2)).getTime();
    var prevFYEnd = new Date("09/30/" + (currentYear - 1)).getTime();

    if (d.date.getTime() >= prevFYStart && d.date.getTime() <= prevFYEnd) {
      categoryToSpendingPrevFY[d.item_raw] = (categoryToSpendingPrevFY[d.item_raw] || 0) + d.today;
    }

    if (d.item_raw === "Public Debt Cash Redemp ( Table III B )") {
      allToSpending["today"][d.date] = (allToSpending["today"][d.date] || 0) - d.today;
      allToSpending["mtd"][d.date] = (allToSpending["mtd"][d.date] || 0) - d.mtd;
      allToSpending["fytd"][d.date] = (allToSpending["fytd"][d.date] || 0) - d.fytd;
    }

    if (d.item_raw === "Total Withdrawals ( excluding transfers )") {
      allToSpending["today"][d.date] = (allToSpending["today"][d.date] || 0) + d.today;
      allToSpending["mtd"][d.date] = (allToSpending["mtd"][d.date] || 0) + d.mtd;
      allToSpending["fytd"][d.date] = (allToSpending["fytd"][d.date] || 0) + d.fytd;

      dateScaleValues.push(d.date);
    }

    optionsData.push(d.item_raw);

    if (!optionsDict.hasOwnProperty(d.item_raw)) {
      optionsDict[d.item_raw] = { today: [], mtd: [], fytd: [] };
    }

    optionsDict[d.item_raw]['today'].push({ date: d.date, value: d.today });
    optionsDict[d.item_raw]['mtd'].push({ date: d.date, value: d.mtd });
    optionsDict[d.item_raw]['fytd'].push({ date: d.date, value: d.fytd });
  });

  allToSpending["today"] = transposeKVToArray("today");
  allToSpending["mtd"] = transposeKVToArray("mtd");
  allToSpending["fytd"] = transposeKVToArray("fytd");

  todayAllCategorySpending = allToSpending["today"][allToSpending["today"].length - 1].value;

  drawChart();
});

function drawChart() {
  init();

  lastDate = data[data.length - 1].date;

  d3.select(".daily-spending-subtext").text("Amount Spent On " + dateFormatter(lastDate));

  d3.select(".header-updated-when").text("Updated " + dateFormatter(lastDate));

  x = d3.scaleTime().domain(d3.extent(dateScaleValues)).range([0, width]);
  x2 = d3.scaleTime().domain(d3.extent(dateScaleValues)).range([0, width]);

  xAxis = d3.axisBottom(x).tickFormat(multiFormat).ticks(d3.timeMonth.every(3));
  xAxis2 = d3.axisBottom(x2).ticks(d3.timeYear.every(2));

  optionsDict["All Categories"] = allToSpending;

  createMasterMapping();

  allOptions = [].concat(_toConsumableArray(new Set(optionsData)));
  allOptions.sort();

  var condensedOptions = Object.keys(categoryToSpendingPrevFY).sort(function (a, b) {
    return categoryToSpendingPrevFY[b] - categoryToSpendingPrevFY[a];
  }).slice(0, 10);

  var activeOptions = [];
  var inactiveOptions = [];

  for (var catKey in categoryToActiveWithinAYear) {
    if (categoryToActiveWithinAYear[catKey]) {
      activeOptions.push(catKey);
    } else {
      inactiveOptions.push(catKey);
    }
  }

  activeOptions.sort();
  inactiveOptions.sort();

  createSelect(condensedOptions, activeOptions, inactiveOptions);

  var theFrequency = getFrequencyFromURL();
  var theCategory = getCategoryFromURL(allOptions);

  d3.select('#frequency-selector').property('value', theFrequency);
  d3.select('#category-selector').property('value', theCategory);

  d3.select(".daily-spending-amount").text(dollarFormatter(todayAllCategorySpending));

  // data.sort(function(a, b) { return a.date - b.date; });

  var graphData = getGraphData();

  createGraph(graphData);
  updateGraph(graphData);

  setTooltipActiveTimeframe(theFrequency);

  var yearToSpendingArray = getYearToSpendingArray(optionsDict["All Categories"]["fytd"]);

  function toggleButtonBgColor(context) {
    d3.select(".viz-tsbfy-bar-view").style("background-color", "rgb(250, 250, 250)");
    d3.select(".viz-tsbfy-table-view").style("background-color", "rgb(250, 250, 250)");

    d3.select(context).style("background-color", "rgb(255, 255, 255)");
  }

  d3.select(".viz-tsbfy-bar-view").on("click", function () {
    toggleButtonBgColor(this);
    createBarChart(yearToSpendingArray);
  });

  d3.select(".viz-tsbfy-table-view").on("click", function () {
    toggleButtonBgColor(this);
    createTable(yearToSpendingArray);
  });

  createBarChart(yearToSpendingArray);

  d3.select(".viz-tsbfy-bar-view").style("background-color", "rgb(255, 255, 255)");
}

function getFrequencyFromURL() {
  var frequency = getQueryStringValue('frequency');
  var possibleFrequencies = ["today", "mtd", "fytd"];

  if (!possibleFrequencies.includes(frequency)) {
    frequency = "today";
  }

  return frequency;
}

function getCategoryFromURL(allOptions) {
  var category = getQueryStringValue('category');

  if (!allOptions.includes(category)) {
    category = "All Categories";
  }

  return category;
}

function type(d) {
  d.date = parseDateYMD(d.date);
  d.value = +d.value; // is this wrong? should it be fytd, mtd, and today instead? also multiply?
  return d;
}

var debounce = undefined,
    previousWidth = undefined;

window.addEventListener('resize', function () {
  if (debounce) {
    clearTimeout(debounce);
  }

  if (previousWidth === window.innerWidth) {
    return;
  }

  previousWidth = window.innerWidth;

  debounce = setTimeout(function () {
    d3.select('#svg-wrapper').selectAll('*').remove();
    drawChart('redraw');
  }, 300);
});