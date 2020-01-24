import React, { Component } from "react";
import d3 from "d3v3";
import homeImg from '../../../static/homelessness-analysis/images/Cluster-1/Bed.svg';

const width = 600, height = 50;
const lightColors = [
  d3.rgb(255, 224, 146).toString(),
  d3.rgb(255, 223, 156).toString(),
  d3.rgb(255, 224, 142).toString(),
  d3.rgb(255, 224, 137).toString(),
  d3.rgb(255, 223, 151).toString()
];
const  b = {
  w: 125, h: 30, s: 3, t: 10, homeW: 40
};
var handleClick, handleHover, handleUnhover;

const drawbread = (d, i) => {
  var points = [];
    points.push("0,0");
    points.push(b.w + ",0");
    points.push(b.w + b.t + "," + (b.h / 2));
    points.push(b.w + "," + b.h);
    points.push("0," + b.h);
    points.push(b.t + "," + (b.h / 2));
  return points.join(" ");
};

const getTrailHierarchy = (activeNode, colors, RArray) => {
  let HArray = RArray || [];

  if (activeNode.depth > 1) {
    HArray.push({name: activeNode.name,
      depth: activeNode.depth,
      parent: activeNode.parent});
  } else {
    HArray.push({name: activeNode.name,
      depth: activeNode.depth});
  }

  if(activeNode.depth > 0){
    getTrailHierarchy(activeNode.parent, colors, HArray)
  } else {
    updateBreadcrumbs(colors, HArray.reverse());
  }
}

// Update the breadcrumb trail to show the current sequence and percentage.
const updateBreadcrumbs = (colors, root) => {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
    .selectAll("g")
    .data(root, d => { return d.name + d.depth; });

  var entering = g.enter().append("svg:g");
  // Add breadcrumb and label for entering nodes.
  //var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
    .attr("points", drawbread)
    .style("fill", d => findColor(d))
    .style("opacity", d => { return (d.depth === 0 ? 0 : 1) })

  entering.append('svg:image')
    .attr('xlink:href', d => { return d.depth === 0 ? homeImg : null })

  entering.append( "svg:text")
    .attr("x", d => { return ((d.depth === 0 ? b.homeW : b.w) + b.t) / 2; })
    .attr("y", b.h / 2)
    .attr("dy", "0.35em" )
    .attr("text-anchor", "middle")
    .attr("fill", d =>
    {
      return (d.depth === 0 || lightColors.includes(findColor(d).toString())  ? "black" : "white")
    })
    .text( d => {
      if(d.depth === 0) return '';
      if(d.depth < 3){
        return String(d.name);
      }
      return String(d.name)
          .substring(0,4)
          .trimRight() + "...";
    })
    .style("cursor", "pointer")
    // .on("click", d => {handleHover(d); handleClick(d)});

  g.attr("transform", function(d, i) {
    var trans =  "translate(" + i * (b.w + b.s) + ", 0)";
    var hometrans =  "translate(" + (i * (b.w + b.s) - (b.w - b.homeW)) + ", 0)";
    return (d.depth > 0 ? hometrans : trans)
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
    .style("visibility", "");

}


const findColor = (node) => {
  switch (node.depth) {
    case 0: // root
      return "#3f88ff";
    case 1: // agency
      return '#DAF7A6';
    case 2: // subagency
      return '#FF5733';
    case 3: // contractor
      return '#581845';
    default:
      return "#62ff4a";
  }
}

class BreadCrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      root: [],
      activePanelNode: {},
      staticData:{}
    };
  }

  componentDidMount() {

    // handleClick = this.props.handleClick;
    // handleHover = this.props.handleHover;
    // handleUnhover = this.props.handleUnhover;

    const activeNode = {
      name: 'BAH',
        depth: 3,
        parent: {
        name: 'FS',
          depth: 2,
          parent: {
            name: 'Treasury',
            depth: 1,
            parent: {
              name: 'home',
              depth: 0
            }
          }
        }
      };


    getTrailHierarchy(activeNode, lightColors);

  }

  render() {
    return (
      <div id="sequence">
        <svg id="trail" style={{width:width, height:height}}>

        </svg>
      </div>
    );
  }
}

export default BreadCrumbs;