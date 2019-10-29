import React, { useEffect } from 'react';

import * as d3 from "d3v3";
import * as $ from "jquery";
import './sunburst.scss';


function Sunburst(props) {

  // TODO Change this to set state
  // function setCategoryState(d) {
  //   _categoryState = d;
  // }
  //
  // function getCategoryState() {
  //   return _categoryState;
  // }


  /* The useEffect Hook is for running side effects outside of React,
     for instance inserting elements into the DOM using D3 */
  useEffect(() => {

    // Default values set from props
    const data = props.items;
    const title = props.title.categoryLabel;
    const centerTextHeading = props.title['centerText'];
    const levels = props.levels;
    const leaf = props.leaf;
    const wedgeColors = props.wedgeColors;
    const centerColor = props.centerColor;        // transparent to show #center
    const hasCenterText = "hasCenterText" in props ? props.hasCenterText : false;  // Contract Explorer doesn't have center text, C & U does

    // Other variables
    const formatNumber = d3.format('$,.0f');
    let centerGroup;
    let chartData;                               // ref to current data parent (only for center label)
    let svg;
    let hierarchy, chartArray;
    let innerRadius;
    let calculatedWidth = 700;
    let maxHeight = 700;
    let width = 700;
    let height = 700;
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
      .filter(d => d.depth <= 3); // leave off recipients
    hierarchy.children.forEach((node, index) => {
      node.colorIndex = index % wedgeColors.length;
    });


    // Function calls
    drawChart(chartArray); // default chart is all grants

    // TODO: Out of scope of ticket
    // enable search/filter
    // if (sunburst) {
    //   sunburst.onSearchSelect = click;
    //   sunburst.init();
    //   sunburst.setSearchData(chartArray);
    // }

    // Functions

    // TODO: Don't care about mobile just yet

    function isMobile() {
      const maxThreshold = 768;
      return window.innerWidth <= maxThreshold;
    }

    function isTablet() {
      const minThreshold = 769;
      const maxThreshold = 1199;

      return (minThreshold <= window.innerWidth && window.innerWidth <= maxThreshold);

    }

    function updateCenter(d) {
      chartData = chartArray[0];

      d3.select('text#tab').remove();
      const boundingBox = innerRadius * 2/Math.sqrt(2);

      let labelFontSize = 1;
      const lineHeight = 1.1;
      const doubleSpace = 2;
      const mediumText = 1.25;
      const largeText = 1.75;
      const exLargeText = 2;

      let wordWrapMultiplier = isMobile() ? 5.5 : isTablet() ? 3 : 2;
      let smWordWrapMultiplier = isMobile() ? 3 : isTablet() ? 2 : 1;

      if (d.depth === 0) {

        centerGroup = svg.append('svg:text')
          .attr('id', 'tab');

        centerGroup.append('tspan')
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text(centerTextHeading)
          .attr('class', 'center-heading')
          .style('font-size', function() {
            return labelFontSize * mediumText + "em";
          })
          .attr('dy', '0')

        centerGroup.append('tspan')
          .attr('dy', lineHeight + "em")
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text(formatNumber(d.value))
          .attr('class', 'center-amount')
          .style('font-size', labelFontSize * largeText + "em")

          props.showDetails(null); // hide details panel

      } else if (d.depth === 1) {
        centerGroup = svg.append('svg:text')
          .attr('id', 'tab');

        // category
        centerGroup.append('tspan')
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text('Category')
          .attr('class', 'center-heading')
          .style('font-size', labelFontSize + "em")
          .attr('dy', '0')

        centerGroup.append('tspan')
          .attr('dy', lineHeight + "em")
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text(d.name)
          .attr('class', 'center-title')
          .style('font-size', labelFontSize * mediumText + "em")
          .call(wordWrap, boundingBox * smWordWrapMultiplier)

        centerGroup.append('tspan')
          .attr('dy', lineHeight * doubleSpace + "em")
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text('Total FY2018 Funding')
          .attr('class', 'center-heading')
          .style('font-size', labelFontSize + "em")

        centerGroup.append('tspan')
          .attr('dy', lineHeight + "em")
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text(formatNumber(d.value))
          .attr('class', 'center-amount')
          .style('font-size', labelFontSize * largeText + "em")

          props.showDetails(null); // hide details panel

      } else {
        centerGroup = svg.append('svg:text')
          .attr('id', 'tab');

        centerGroup.append('tspan')
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text('Category')
          .attr('class', 'center-heading')
          .style('font-size', labelFontSize * mediumText + "em")
          .attr('dy', '0')

        centerGroup.append('tspan')
          .attr('dy', lineHeight + "em")
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text(d.parent.name)
          .attr('class', 'center-title')
          .style('font-size', labelFontSize * largeText + "em")
          .call(wordWrap, boundingBox * smWordWrapMultiplier)


        centerGroup.append('tspan')
          .attr('dy', lineHeight * 2 + "em")
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text('Sub-Category')
          .attr('class', 'center-heading')
          .style('font-size', labelFontSize * mediumText + "em")

        centerGroup.append('tspan')
          .attr('dy', lineHeight + "em")
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text(d.name)
          .attr('class', 'center-title')
          .style('font-size', labelFontSize * largeText + "em")
          .call(wordWrap, innerRadius * wordWrapMultiplier)

        centerGroup.append('tspan')
          .attr('dy', lineHeight * 2 + "em")
          .attr('x', '0')
          .attr('text-anchor', 'middle')
          .text(formatNumber(d.value))
          .attr('class', 'center-amount')
          .style('font-size', labelFontSize * exLargeText + "em")
          
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

    function getWedgeColor(d) {
      if (d.depth === 0) {
        return centerColor;
      }
      while (d.depth > 1) { //fill with colorIndex color (or ancestors')
        d = d.parent;
      }

      return wedgeColors[d.colorIndex];
    }

    function drawChart(data) {
      createChart();
      refreshData(data);
    }

    function createChart() {
      const widthPercentage = .7;
      //TODO can I use window here???
      // calculatedWidth = window.innerWidth * widthPercentage;
      calculatedWidth = 700;
      maxHeight = 700;
      width = 700;
      height = 700;

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
          const name = d.name ? d.name.replace(/CFDA/i, '').replace(/PSC/i, '').trim() : '';
          return name;
      });

      click(data[0]); // simulate clicking center to reset zoom
    }

    function click(d) {
      // setCategoryState(d);

      if (hasCenterText) { updateCenter(d); }

      svg.transition()
        .duration(750)
        .tween('scale', () => {

          // adjust xScale domain values to expand/contract selected sector (no changes to radii (y))
          const i = d3.interpolateArray(xScale.domain(), [d.x, d.x + d.dx]);
          console.log(xScale.domain());
          return t => {
            xScale.domain(i(t));
          };
        })
        .selectAll('path')
        .attrTween('d', d => function () {
          return arc(d);
        });
    }

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


// TODO: Fix the responsiveness
// Redraw based on the new size whenever the browser window is resized.
//     window.addEventListener("resize", function() {
//       catCalculatedWidth = window.innerWidth * widthPercentage;
//       catMaxHeight = document.getElementById("sunburst").clientHeight;
//       width = catCalculatedWidth < catMaxHeight ? catCalculatedWidth : catMaxHeight;
//       height = width;
//       radius = Math.min(width, height) / 2;
//       xScale = d3.scale.linear().range([0, 2 * Math.PI]);
//       yScale = d3.scale.sqrt().range([0, radius]);
//
//       const state = getCategoryState();
//
//       if (chartArray) {
//         drawChart (chartArray);
//       } else if (scopedData) {
//         drawChart (scopedData);
//       }
//
//       if (state) click(state);
//     });


  });


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