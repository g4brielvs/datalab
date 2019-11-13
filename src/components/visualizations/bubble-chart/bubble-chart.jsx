import './bubble-chart.scss';
import React, { Component } from "react";

import * as d3 from "d3v3";
import * as _ from "lodash";

export default class BubbleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      data: props.items
    };

    this.color = [
      '#c8ac7f', '#C6919E', '#C99E7F', '#879BBA', '#A3D1CC', '#88A6A0', '#879BBA', '#A3D1CC', '#80AEC4', '#C9BB7F', '#C6919E', '#879BBA', '#C99E7F',
      '#879BBA', '#C6919E', '#A3D1CC', '#80AEC4', '#C9BB7F', '#88A6A0', '#c8ac7f', '#C99E7F', '#879BBA', '#A3D1CC', '#88A6A0', '#80AEC4', '#C9BB7F',
      '#80AEC4', '#C99E7F', '#C6919E', '#879BBA', '#A3D1CC', '#88A6A0', '#80AEC4', '#C9BB7F', '#C9BB7F', '#c8ac7f', '#C6919E', '#879BBA', '#A3D1CC',
      '#88A6A0', '#80AEC4', '#C9BB7F', '#c8ac7f', '#c8ac7f', '#C99E7F', '#879BBA', '#A3D1CC', '#88A6A0', '#80AEC4', '#C9BB7F'
    ];

    this.widthPercentage = .7;
    this.margin = 20;
    this.resize = false;
    this.maxHeight = 700;

    this.bubbleChartContainer;
    this.detailContainer;
    this.detailContainerActiveClass;
    this.node;
    this.circle;
    this.focused;
    this.view;
    this.bubbleSvg;
    this.recipient;
    this.root;
    this.nodes;
    this.calculatedWidth;
    this.width;
    this.diameter;
    this.pack;

    this.chartInit = this.chartInit.bind(this);
    this.circleFill = this.circleFill.bind(this);
    this.isZoomedIn = this.isZoomedIn.bind(this);
    this.setLegendLeft = this.setLegendLeft.bind(this);
    this.calculateTextFontSize = this.calculateTextFontSize.bind(this);
    this.isTablet = this.isTablet.bind(this);
    this.isDesktop = this.isDesktop.bind(this);
    this.drawBubbleChart = this.drawBubbleChart.bind(this);
    this.zoom = this.zoom.bind(this);
    this.zoomTo = this.zoomTo.bind(this);
    this.selectSubAgency = this.selectSubAgency.bind(this);
    this.click = this.click.bind(this);
    this.transformData = this.transformData.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  chartInit() {
    this.root = this.transformData(this.state.data);
    this.nodes = this.pack.nodes(this.root);
    this.drawBubbleChart(this.root);
    const classContext = this;

    d3.select(this.bubbleChartContainer)
      .on("click", function () {
        const currentState = classContext.state.selectedItem;

        if (!currentState || (currentState && currentState.depth !== 2)) {
          classContext.setLegendLeft(false);
          classContext.updateSelection(null);
          classContext.zoom(classContext.root);
        }
      });

    this.zoomTo([this.root.x, this.root.y, this.root.r * 2 + this.margin]);
  }

  /* Set color for sub-agency circles */
  circleFill(d) {
    if (d['color']) {
      return d.color;
    }
  }

  updateSelection(d) {
    this.setState({ selectedItem: d });
  }

  isZoomedIn(d) {
    if (d.depth === 2 && this.focused === d.parent || d.depth === 1 && this.focused === d) {
      return true;
    }
    return false;
  }

  setLegendLeft(leftState) {
    d3.select('#agency-legend_colorKey').classed("left", leftState);
  }

  /* Calculate text font size for bubbles before and after zoom */
  calculateTextFontSize(d, context) {
    let radius = 0;
    let labelWidth;
    const classContext = this;

    if (!this.resize) {
      if (d.fontsize) {
        //if fontsize is already calculated use that.
        return d.fontsize;
      }
      if (!d.computed) {
        //if computed not present get & store the getComputedTextLength() of the text field
        d.computed = context.getComputedTextLength();
      }
    }

    if (d.computed != 0) {
      //if computed is not 0 then get the visual radius of DOM
      //if radius present in DOM use that
      radius = d.r ? d.r : 0;
      labelWidth = radius * 2 * classContext.diameter / (d.parent.r * 2 + classContext.margin) - classContext.margin;
      // labelWidth = radius * 2 * this.diameter / (d.parent.r * 2 + this.margin) - this.margin;
      d.fontsize = labelWidth / d.computed > 0 ? labelWidth / d.computed + "em" : 0.01 + "em";
      return d.fontsize;
    }
  }

  isTablet() {
    const minThreshold = 949;
    const maxThreshold = 1199;

    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      if (typeof window !== 'undefined') {
        return (minThreshold <= window.innerWidth && window.innerWidth <= maxThreshold);
      }
    }
    return false;
  }

  isDesktop() {
    const threshold = 1200;
    if (typeof window !== 'undefined') {
      return (threshold <= window.innerWidth);
    }
  }

  drawBubbleChart(root) {
    const targetWidth = this.width;
    focus = root;
    this.diameter = this.width = this.calculatedWidth < this.maxHeight ? this.calculatedWidth : this.maxHeight;
    const classContext = this;

    d3.select(this.bubbleChartContainer)
      .attr('style', "width: " + this.width + "px; height: " + this.width + "px;")

    this.bubbleSvg = d3.select(this.bubbleChartContainer).append("svg")
      .attr("id", "chart")
      .attr("width", targetWidth)
      .attr("height", targetWidth)
      .append("g")
      .attr("transform", "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")")

    this.circle = this.bubbleSvg.selectAll("circle")
      .data(this.nodes)
      .enter().append("circle")
      .attr("class", function (d) {
        return d.parent ? d.children ? "node" : "node--leaf" : "node--root";
      })
      .style("fill", this.circleFill)
      .attr("r", function (d) {
        if (d.r > 0) {
          return d.r;
        }
      })
      .attr("id", function (d) {
        let name = d.name.replace(/ /g, "_");
        if (d.depth > 1 && d.name === d.parent.name) {
          name += '_sub'
        }
        return name;
      })
      .on("click", this.click)
      .on("mouseover", function (d) {
        if (!classContext.isTablet()) {
          // tip.show(d);
        }
      })
      .on("mouseout", function (d) {
        // tip.hide(d);
      })

    this.bubbleSvg.selectAll("text")
      .data(this.nodes)
      .enter().append("text")
      .attr("font-family", "Source Sans Pro")
      .attr("class", "label")
      .attr("id", function (d) {
        let name = "text_" + d.name.replace(/ /g, "_");
        if (d.depth > 1 && d.name === d.parent.name) {
          name += '_sub'
        }
        return name;
      })
      .style("fill-opacity", function (d) {
        return d.parent === root ? 1 : 0;
      })
      .style("display", function (d) {
        return d.parent === root ? null : "none";
      })
      .text(function (d) {
        return d.name;
      })
      .style("font-size", function (d) {
        return classContext.calculateTextFontSize(d, this)
      })
      .attr("text-anchor", "middle")
      .on("click", this.click)
      .on("mouseover", function (d) {
        // const elName = d.name.replace(/ /g,"_");
        if (!classContext.isTablet()) {
          // tip.show(d);
        }
      })

    this.node = this.bubbleSvg.selectAll("circle,text");
  }

  // Zoom into a specific circle
  zoom(d) {
    this.focused = d;
    const classContext = this;
    const transition = d3.transition()
      .duration(d3.event && d3.event.altKey ? 7500 : 750)
      .tween("zoom", function (d) {
        var i = d3.interpolateZoom(classContext.view, [classContext.focused.x, classContext.focused.y, classContext.focused.r * 2 + classContext.margin]);
        return function (t) {
          classContext.zoomTo(i(t));
        };
      })

    transition.selectAll(".node--root")
      .style("fill-opacity", function () {
        return classContext.focused.name === "flare" ? 1 : 0;
      })

    transition.selectAll("text.label")
      .style("fill-opacity", function (d) {
        return d.parent === classContext.focused ? 1 : 0;
      })
      .each("start", function (d) {
        if (d.parent === classContext.focused) {
          this.style.display = "inline";
        } else {
          this.style.display = "none";
        }
      })
      .each("end", function (d) {
        if (d.parent !== classContext.focused) {
          this.style.display = "none";
        } else {
          this.style.display = "inline";
        }
      })

    // hide the text
    setTimeout(function () {
      // show the text
      d3.selectAll("text.label").filter(function (d) {
        return d.parent === classContext.focused || this.style.display === "inline";
      }).style("font-size", function (d) {
        return classContext.calculateTextFontSize(d, this)
      });
    }, 100);
  }

  zoomTo(v) {
    var k = this.diameter / v[2];
    this.view = v;
    this.node.attr("transform", function (d) {
      return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
    });
    this.circle.attr("r", function (d) {
      return d.r * k;
    });
  }

  selectSubAgency(d) {
    const elSelector = "circle.node--leaf[id='" + d.name.replace(/ /g, "_") + "']";
    circle.classed('active', false);
    d3.select(elSelector).classed("active", true);
    if (this.focused !== d) {
      this.zoom(d.parent);
      d3.event.stopPropagation();
    }
  }

  click(d) {
    this.circle.classed('active', false);

    // need to check if focus is d, maybe?
    if (this.isZoomedIn(d)) {
      if (d.depth === 2) {
        d3.event && d3.event.stopPropagation();
        this.updateSelection(d.parent);
        this.props.showDetails(d); // show details in panel

        const elName = "circle.node--leaf#" + d.name.replace(/ /g, "_");
        d3.select(elName).classed("active", true);

      } else if (d.depth === 1) {
        this.setLegendLeft(false);
        this.updateSelection(null);
        this.props.showDetails(null); // hide details panel

        if (this.focused !== d) {
          this.zoom(d);
          d3.event && d3.event.stopPropagation();
        }
      }
    } else {
      if (d.depth === 2) {
        this.setLegendLeft(true);
        this.updateSelection(d.parent);
        this.props.showDetails(null); // hide details panel

        // check if a bubble is already selected
        if (this.focused !== d.parent) {
          this.zoom(d.parent);
          d3.event && d3.event.stopPropagation();
        }
      } else if (d.depth === 1) {
        this.setLegendLeft(true);
        this.updateSelection(d);
        this.props.showDetails(null); // hide details panel

        if (this.focused !== d) {
          this.zoom(d);
          d3.event && d3.event.stopPropagation();
        }
      }
    }
  }

  clickById(id) {
    let d;
    this.root.children.some(agency => {
      if (d = agency.children.find(sub => sub.id === id)) {
        return true;
      }
    });
    this.click(d);
  }

  /*
  * Function to Transform Data (needs to be refactored)
   */

  transformData(data) {
    let result = _.groupBy(data, 'agency');
    var i = 0;
    let tempRoot = {
      "name": "flare",
      "children": []
    };

    for (let agency in result) {
      result[agency] = _.groupBy(result[agency], 'subagency');
      tempRoot.children.push({ "name": agency, "children": [] });
      for (let subagency in result[agency]) {
        let id = null;
        if (result[agency][subagency] && result[agency][subagency].length > 0) {
          id = result[agency][subagency][0].id;
          result[agency][subagency] = result[agency][subagency][0].obligation;
        } else {
          result[agency][subagency] = 0;
        }
        tempRoot.children[i].children.push({ "name": subagency, "id": id, "children": [], "color": null, "size": result[agency][subagency] });
      }
      i++;
    }
    this.recipient = result;

    // add color
    for (let i = 0; i < tempRoot.children.length; i++) {
      for (let j = 0; j < tempRoot.children[i].children.length; j++) {
        tempRoot.children[i].children[j].color = this.color[i];
      }
    }
    return tempRoot;
  }


  componentDidMount() {

    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      this.bubbleChartContainer = document.getElementById('agency-bubbleChart');
      this.calculatedWidth = window.innerWidth * this.widthPercentage;
      this.width = window.innerWidth * this.widthPercentage;
      this.diameter = this.width;
    }

    this.detailContainer = d3.select('#bubble-detail section.bubble-detail');
    this.detailContainerActiveClass = 'bubble-detail--active';

    this.pack = d3.layout
      .pack()
      .padding(2)
      .size([this.diameter - this.margin, this.diameter - this.margin])
      .value(function (d) {
        if (d.size > 0) {
          return d.size;
        }
      })
      .sort(function (a, b) {
        var threshold = 100;
        if ((a.value > threshold) && (b.value > threshold)) {
          return b.value - a.value;
        } else {
          return -1;
        }
      });

    this.chartInit();

    if (typeof window !== 'undefined') {
      const classContext = this;
      // Redraw based on the new size whenever the browser window is resized.
      window.addEventListener("resize", function () {
        d3.select("#agency-bubbleChart").selectAll("*").remove();
        if (classContext.root) {
          classContext.maxHeight = window.innerWidth * classContext.widthPercentage;
          classContext.calculatedWidth = window.innerWidth * classContext.widthPercentage;
          classContext.diameter = classContext.width = window.innerWidth * classContext.widthPercentage;
          classContext.resize = true;
          classContext.drawBubbleChart(classContext.root);
          classContext.resize = false;

          // check the state here and replay
          const chartState = classContext.state.selectedItem;
          if (chartState) {
            classContext.zoom(chartState);
          } else {
            classContext.zoomTo([classContext.root.x, classContext.root.y, classContext.root.r * 2 + classContext.margin]);
          }
        }
      });
    }
  };

  render() {
    return (
      <div id="chart-area">
        <div id="bubble-detail"></div>
        <div id="chart-container">

          <div id="agency-investments__content">
            <div id="bubbleChartContainer" className="bubbleChartContainer">

              {/*<div id='agency-legend_colorKey'>*/}
              {/*<div className='legend_circleKeyLabel'><span>Agency</span></div>*/}
              {/*<div className='legend_circleKeyLabel'><span>Sub-Agency</span></div>*/}
              {/*<svg id='agency-legend_scaleKey'></svg>*/}
              {/*</div>*/}

              <div id="agency-bubbleChart"></div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

// export default BubbleChart;