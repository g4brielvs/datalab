import React, { useEffect, useState, withState } from "react"

import * as d3 from "d3v3";
import './sunburst.scss';


function Sunburst(props) {

  const [categoryState, setCategoryState] = useState('Contract');

  // Default values set from props
  const data = props.items;
  const title = props.title.categoryLabel;
  const centerTextHeading = props.title['centerText'];
  const levels = props.levels;
  const leaf = props.leaf;
  const wedgeColors = props.wedgeColors;
  const centerColor = props.centerColor;        // transparent to show #center

  // Other variables
  const formatNumber = d3.format('$,.0f');
  let centerGroup;
  let chartData;                               // ref to current data parent (only for center label)
  let svg;
  let hierarchy, chartArray;
  let innerRadius;
  let maxHeight = document.body.clientWidth;
  let width = maxHeight;
  let height = maxHeight;

  function buildDataHierarchy(title, dataArray) {
    const data = { name: title, children: [] };

    dataArray.forEach(d => {
      // Keep this as a reference to the current level
      let depthCursor = data.children;
      // Go down one level at a time
      levels.forEach((property, depth) => {

        // Look to see if a branch has already been created
        let index;
        depthCursor.forEach((child, i) => {
          if (d[property] == child.name) {
            index = i;
          }
        });
        // Add a branch if it isn't there
        if (isNaN(index)) {
          depthCursor.push({ 'name': d[property], 'children': [] });
          index = depthCursor.length - 1;
        }
        // Now reference the new child array as we go deeper into the tree
        depthCursor = depthCursor[index].children;
        // This is a leaf, so add the last element to the specified branch
        if (depth === levels.length - 1) {
          depthCursor.push({ 'name': d[leaf.name], 'size': d[leaf.size] });
        }
      });
    });

    return data;
  }

  function isMobile() {
    const maxThreshold = 768;
    return document.body.clientWidth <= maxThreshold;
  }

  function isTablet() {
    const minThreshold = 769;
    const maxThreshold = 1199;
    return (minThreshold <= document.body.clientWidth && document.body.clientWidth <= maxThreshold);
  }

  function getWedgeColor(d) {
    if (d.depth === 0) {
      return centerColor;
    }
    while (d.depth > 1) { //fill with colorIndex color (or ancestors')
      d = d.parent;
    }
    return wedgeColors[d.colorIndex];
  }

  /* The useEffect Hook is for running side effects outside of React,
     for instance inserting elements into the DOM using D3 */
  useEffect(() => {

    let radius = Math.min(width, height) / 2;
    let xScale = d3.scale.linear().range([0, 2 * Math.PI]);
    let yScale = d3.scale.sqrt().range([0, radius]);


    // Initialize d3 visualization
    const partition = d3.layout.partition().value(d => d.size);
    const arc = d3.svg.arc()
      .startAngle(d => Math.max(0, Math.min(2 * Math.PI, xScale(d.x))))
      .endAngle(d => Math.max(0, Math.min(2 * Math.PI, xScale(d.x + d.dx))))
      .innerRadius(function(d) {
        if(d.depth === 1 && (!innerRadius || innerRadius > 0)) {
          innerRadius = Math.max(0, yScale(d.y));
        }
        return Math.max(0, yScale(d.y));
      })
      .outerRadius(d => Math.max(0, yScale(d.y + d.dy)))

    d3.select(self.frameElement).style('height', height + 'px');

    // Create hierarchy (which sorts by total value), then add colorIndex to 1st level nodes
    hierarchy = buildDataHierarchy(title, data, levels);

    chartArray = partition.nodes(hierarchy)
      .filter(d => d.depth < 3); // leave off recipients
    hierarchy.children.forEach((node, index) => {
      node.colorIndex = index % wedgeColors.length;
    });


    // Function calls
    drawChart(chartArray); // default chart is all grants

    // Functions
    function drawChart(data) {
      createChart();
      refreshData(data);
    }

    function createChart() {
      d3.select("#sunburst").selectAll("*").remove();

      svg = d3.select('#sunburst')
        .attr('style', `width: ${width}px; height: ${height}px`)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');
    }

    function refreshData(data) {
      svg.selectAll('path').remove();
      const paths = svg.selectAll('path').data(data);
      paths.enter().append('path')
        .attr('d', arc)
        .attr('class', d => 'depth' + d.depth)
        .attr('fill', d => getWedgeColor(d))
        // .on('mouseover', hover)
        .on('click', click)
        .append('title').text(function(d) {
        const name = d.name.replace(/CFDA/i, '').replace(/PSC/i, '').trim();
        return name;
      });

      click(data[0]); // simulate clicking center to reset zoom
    }

    function click(d) {
      setCategoryState(d.name);
      updateCenter(d);
      svg.transition()
        .duration(750)
        .tween('scale', () => {

          // adjust xScale domain values to expand/contract selected sector (no changes to radii (y))
          const i = d3.interpolateArray(xScale.domain(), [d.x, d.x + d.dx]);
          return t => {
            xScale.domain(i(t));
          };
        })
        .selectAll('path')
        .attrTween('d', d => function () {
          return arc(d);
        });
    }

    function updateCenter(d) {
      chartData = chartArray[0];
      const boundingBox = innerRadius * 2/Math.sqrt(2);

      d3.select('text#tab').remove();

      let labelFontSize = 1;
      const lineHeight = 1.1;
      const doubleSpace = 2;
      const mediumText = 1.25;
      const largeText = 1.75;
      const exLargeText = 2;

      let wordWrapRatio = isMobile() ? 5.5 : isTablet() ? 3 : 2;
      let smWordWrapRatio = isMobile() ? 3 : isTablet() ? 2 : 1;

      centerGroup = svg.append('svg:text')
        .attr('id', 'tab');

      if (d.depth === 0) {

        setCenterTextLines('center-heading', centerTextHeading, mediumText, '0');
        setCenterTextLines('center-amount', formatNumber(d.value), largeText, lineHeight);

        props.showDetails(null); // hide details panel

      } else if (d.depth === 1) {

        // category
        setCenterTextLines('center-heading', 'Category', labelFontSize, '0');
        setWrappedCenterTextLines('center-title', d.name, mediumText, lineHeight, boundingBox * smWordWrapRatio);
        setCenterTextLines('center-heading', 'Total FY2018 Funding', labelFontSize, doubleSpace);
        setCenterTextLines('center-amount', formatNumber(d.value), largeText, lineHeight);

        props.showDetails(null); // hide details panel

      } else {

        setCenterTextLines('center-heading', 'Category', mediumText, '0');
        setWrappedCenterTextLines('center-title', d.parent.name, largeText, lineHeight, boundingBox * smWordWrapRatio);
        setCenterTextLines('center-heading', 'Sub-Category', mediumText, lineHeight * 2);
        setWrappedCenterTextLines('center-title', d.name, largeText, lineHeight, innerRadius * wordWrapRatio);
        setCenterTextLines('center-amount', formatNumber(d.value), exLargeText, lineHeight * 2);

        props.showDetails(d); // show details in panel
        // console.log(d);
      }

      /* Scale text to fit */
      const bbox = centerGroup.node().getBBox();
      const maxHeight = bbox.height;
      const maxWidth = bbox.width;
      let scale = 1;

      if(maxHeight >= maxWidth) {
        if (maxHeight > boundingBox) {
          scale = boundingBox / maxHeight;
          centerGroup.attr("transform", "scale(" + scale + ")");
        }

      } else {
        if(maxWidth > boundingBox) {
          scale = boundingBox / maxWidth;
          centerGroup.attr("transform", "scale(" + scale + ")");
        }
      }

      const padding = 16 * scale; // 1em = 16px

      centerGroup.style('cursor', 'pointer')
        .attr('y', -maxHeight / 2 + padding)
        .on('click', function() {
          click(chartData);
        })

    }

    function setCenterTextLines(className, centerTextHeading, textSize, lineHeight) {
      centerGroup.append('tspan')
        .attr('x', '0')
        .attr('text-anchor', 'middle')
        .text(centerTextHeading)
        .attr('class', className)
        .style('font-size', function() {
          return `${textSize}em`;
        })
        .attr('dy', `${lineHeight}em`)
    }

    function setWrappedCenterTextLines(className, centerTextHeading, textSize, lineHeight, boundingBox) {
      centerGroup.append('tspan')
        .attr('x', '0')
        .attr('text-anchor', 'middle')
        .text(centerTextHeading)
        .attr('class', className)
        .style('font-size', function() {
          return `${textSize}em`;
        })
        .attr('dy', `${lineHeight}em`)
        .call(wordWrap, boundingBox)
    }

    function wordWrap(text, maxWidth) {
      var words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineHeight = 1.1,
        tspan;

      tspan = text.text(null)
        .append("tspan")
        .attr("x", 0);

      while (words.length > 0) {
        word = words.pop();
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() >= maxWidth) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan")
            .attr("x", 0)
            .attr("dy", lineHeight + "em")
            .text(word);
        }
      }
    }
  }, [categoryState]);


  return (
    <>
      <div id='chart-area'>
          <div id='chart-container'>
            <div id='investment-sunburst'>
              <div id='investment-sunburst-viz'>
                <div id='sunburst'>
                </div>
                <p className="cu-header__blurb">To return to a higher level click the center node</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


export default Sunburst