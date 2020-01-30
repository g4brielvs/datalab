import React, { Component } from "react";
import d3 from "d3v3";
import homeImg from '../../../static/images/home-solid.svg';

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

class BreadCrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      root: [],
      activePanelNode: {},
      staticData:{}
    };

    this.updateBreadcrumbs = this.updateBreadcrumbs.bind(this);
    this.findColor = this.findColor.bind(this);
    this.drawbread = this.drawbread.bind(this);
  }

  drawbread () {
    var points = [];
    points.push("0,0");
    points.push(b.w + ",0");
    points.push(b.w + b.t + "," + (b.h / 2));
    points.push(b.w + "," + b.h);
    points.push("0," + b.h);
    points.push(b.t + "," + (b.h / 2));
    return points.join(" ");
  };

  setOpacity (d) {
    switch(d.depth) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return .7;
      case 3:
        return .4;
    }

    return 1;
  };

// Update the breadcrumb trail to show the current sequence and percentage.
  updateBreadcrumbs (colors, items) {
    console.log(colors);
    console.log(items);
    let root = items || [];

    // Data join; key function combines name and depth (= position in sequence).
    var g = d3.select("#trail")
      .selectAll("g")
      .data(root, d => { return d.name + d.depth; });

    var entering = g.enter().append("svg:g");
    // Add breadcrumb and label for entering nodes.
    //var entering = g.enter().append("svg:g");

    entering.append('svg:image')
      .attr('x', d => { return d.depth === 0 ? 10 : null })
      .attr('y', d => { return d.depth === 0 ? 6 : null })
      .attr('width', d => { return d.depth === 0 ? 20 : null })
      .attr('xlink:href', d => { return d.depth === 0 ? homeImg : null })

    entering.append("svg:polygon")
      .attr("points", this.drawbread)
      .style("fill", colors)
      .style("opacity", d => this.setOpacity(d))
    
    entering.append( "svg:text")
      .attr("x", d => { return ((d.depth === 0 ? b.homeW : b.w) + b.t) / 2; })
      .attr("y", b.h / 2)
      .attr("dy", "0.35em" )
      .attr("text-anchor", "middle")
      .attr("fill", d =>
      {
        return (d.depth === 0 || lightColors.includes(this.findColor(d).toString())  ? "black" : "white")
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


  findColor (node) {
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