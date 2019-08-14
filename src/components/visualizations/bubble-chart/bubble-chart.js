import React, {Component} from 'react';
import * as d3 from "d3";
import * as _ from "lodash";
import * as $ from "jquery";


class BubbleChart extends Component {
//   componentDidMount() {
//
//     // add legend
//     d3.select('#agency-legend_scaleKey').append('circle')
//       .attr('r', 25)
//       .attr('class', 'legend_scaleKeyCircle')
//       .attr('cx', 60)
//       .attr('cy', 65);
//     d3.select('#agency-legend_scaleKey').append('circle')
//       .attr('r', 35)
//       .attr('class', 'legend_scaleKeyCircle')
//       .attr('cx', 60)
//       .attr('cy', 65);
//     d3.select('#agency-legend_scaleKey').append('circle')
//       .attr('r', 45)
//       .attr('class', 'legend_scaleKeyCircle')
//       .attr('cx', 60)
//       .attr('cy', 65);
//
//     console.log(this.props.items);
//     const root = this.transformData(this.props.items);
//     this.nodes = this.pack.nodes(root);
//     this.drawBubbleChart(root);
//
//     d3.select(this.bubbleChartContainer)
//       .on("click", function () {
//         const currentState = this.getChartState();
//         if (!currentState || (currentState && currentState.depth !== 2)) {
//           this.setLegendLeft(false);
//           this.clearChartState();
//           this.zoom(root);
//         }
//       });
//
//     this.zoomTo([root.x, root.y, root.r * 2 + this.margin]);
//     // this.createBubbleTable(data); // has to match csv columns!
//
//     if (!this.bubble.setSearchData) {
//       console.warn('bubble method not available')
//     } else {
//       this.bubble.setSearchData(root);
//       this.bubble.selectSubAgency = this.selectSubAgency;
//       this.bubble.zoom = this.zoom;
//     }
//
// //   bChartBtn.click(function () {
// //     bTableContainer.hide(); // show
// //     bChartContainer.show(); // hide bubble chart
// //   });
// //
// // // table button toggle click
// //   bTableBtn.click(function () {
// //     bTableContainer.show(); // show
// //     bChartContainer.hide(); // hide bubble chart
// //   });
// //
// // // Redraw based on the new size whenever the browser window is resized.
// //   window.addEventListener("resize", function () {
// //     closeDetailPanel();
// //     $("#agency-bubbleChart").empty();
// //     if (root) {
// //       maxHeight = document.getElementById("agency-investments__content").clientHeight;
// //       calculatedWidth = window.innerWidth * widthPercentage;
// //       diameter = bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;
// //       resize = true;
// //       drawBubbleChart(root);
// //       resize = false;
// //
// //       // check the state here and replay
// //       const chartState = getChartState();
// //       if (chartState) {
// //         zoom(chartState);
// //       } else {
// //         zoomTo([root.x, root.y, root.r * 2 + margin]);
// //       }
// //     }
// //   });
// //
// //   tooltipClose.click(function () {
// //     tip.hide();
// //   });
//
//   }
//
//   bubbleChartContainer = document.getElementById('agency-bubbleChart');
//   color = ['#c8ac7f', '#C6919E', '#C99E7F', '#879BBA', '#A3D1CC', '#88A6A0', '#879BBA',
//     '#A3D1CC', '#80AEC4', '#C9BB7F', '#C6919E',
//     '#879BBA', '#C99E7F', '#879BBA', '#C6919E', '#A3D1CC', '#80AEC4', '#C9BB7F',
//     '#88A6A0', '#c8ac7f', '#C99E7F', '#879BBA', '#A3D1CC', '#88A6A0', '#80AEC4', '#C9BB7F',
//     '#80AEC4', '#C99E7F', '#C6919E', '#879BBA', '#A3D1CC', '#88A6A0', '#80AEC4', '#C9BB7F',
//     '#C9BB7F', '#c8ac7f', '#C6919E', '#879BBA', '#A3D1CC', '#88A6A0', '#80AEC4', '#C9BB7F',
//     '#c8ac7f', '#c8ac7f', '#C99E7F', '#879BBA', '#A3D1CC', '#88A6A0', '#80AEC4', '#C9BB7F'];
//
//   bTableBtn = $('#bubble-table-trigger');
//   bTableContainer = $('#bubbleTableContainer');
//   bChartContainer = $('#bubbleChartContainer');
//   bChartBtn = $('#bubble-chart-trigger');
//   tooltipClose = $('.bubble-detail__close');
//
//   detailContainer = d3.select('#bubble-detail section.bubble-detail');
//   detailContainerActiveClass = 'bubble-detail--active';
//   margin = 20;
//
//   node;
//   circle;
//   focus;
//   view;
//   bubbleSvg;
//   recipient;
//   root;
//   nodes;
//   widthPercentage = .7;
//   maxHeight = document.getElementById("agency-investments__content").clientHeight;
//   calculatedWidth = window.innerWidth * this.widthPercentage;
//   bubbleWidth = this.calculatedWidth < this.maxHeight ? this.calculatedWidth : this.maxHeight;
//   diameter = this.bubbleWidth;
//   _chartState;
//   popoverData;
//   tip;
//   resize = false;
//
//   pack = d3.layout.pack()
//     .padding(2)
//     .size([this.diameter - this.margin, this.diameter - this.margin])
//     .value(function (d) {
//       if (d.size > 0) {
//         return d.size;
//       }
//     })
//     .sort(function (a, b) {
//       var threshold = 100;
//       if ((a.value > threshold) && (b.value > threshold)) {
//         return b.value - a.value;
//       } else {
//         return -1;
//       }
//     });
//
//
//   setChartState = function(d) {
//     this._chartState = d;
//   }
//
//   getChartState = function() {
//     return this._chartState;
//   }
//
//   clearChartState = function() {
//     this._chartState = null;
//   }
//
//   /* Set color for sub-agency circles */
//   circleFill = function(d) {
//     if (d['color']) {
//       return d.color;
//     }
//   };
//
//   isZoomedIn = function(d) {
//     if (d.depth === 2 && this.focus === d.parent || d.depth === 1 && this.focus === d) {
//       return true;
//     }
//     return false;
//   }
//
//   setLegendLeft = function(leftState) {
//     d3.select('#agency-legend_colorKey').classed("left", leftState);
//   }
//
//   closeDetailPanel = function() {
//     if (d3.event) d3.event.stopPropagation();
//     this.detailContainer.classed(this.detailContainerActiveClass, false);
//   }
//
//   /* Store the current state */
//
//   /* Calculate text font size for bubbles before and after zoom */
//   calculateTextFontSize = function(d) {
//     let radius = 0;
//     let labelWidth;
//
//     if (!this.resize) {
//       if (d.fontsize) {
//         //if fontsize is already calculated use that.
//         return d.fontsize;
//       }
//       if (!d.computed) {
//         //if computed not present get & store the getComputedTextLength() of the text field
//         d.computed = this.getComputedTextLength();
//       }
//     }
//
//     if (d.computed != 0) {
//       //if computed is not 0 then get the visual radius of DOM
//       //if radius present in DOM use that
//       radius = d.r ? d.r : 0;
//       labelWidth = radius * 2 * this.diameter / (d.parent.r * 2 + this.margin) - this.margin;
//       d.fontsize = labelWidth / d.computed > 0 ? labelWidth / d.computed + "em" : 0.01 + "em";
//       return d.fontsize;
//     }
//   };
//
//   isTablet = function() {
//     const minThreshold = 949;
//     const maxThreshold = 1199;
//
//     if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
//       || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
//       return (minThreshold <= window.innerWidth && window.innerWidth <= maxThreshold);
//     }
//     return false;
//   }
//
//   isDesktop = function() {
//     const threshold = 1200;
//     return (threshold <= window.innerWidth);
//   }
//
//   setAgencyTooltipHtml = function(d) {
//     const elName = "agency_tip_" + d.name.replace(/ /g, "_");
//     let tooltipHtml = "<div class='bubble-chart-tooltip' id='" + elName + "'>";
//
//     if (!this.isDesktop()) {
//       tooltipHtml += "<span class='bubble-detail__close'><i class='fas fa-times'></i></span>";
//     }
//
//     tooltipHtml += "<span class='bubble-detail__agency-label'>Agency</span>" +
//       "<span class='bubble-detail__agency-name'>" + d.name + "</span>" +
//       "<div class='information'><p class='key' style='color: #881E3D;'>Total Investment</p>" +
//       "<span class='bubble-detail__agency-name'>" + formatCurrency(popoverData[d.name].total_investment) + "</span>" +
//       "</div></div>";
//     return tooltipHtml;
//   }
//
//   setSubagencyTooltipHtml= function(d) {
//     const elName = "subagency_tip_" + d.name.replace(/ /g, "_");
//     let tooltipHtml = "<div class='bubble-chart-tooltip' id='" + elName + "'>";
//
//     if (!this.isDesktop()) {
//       tooltipHtml += "<span class='bubble-detail__close'><i class='fas fa-times'></i></span>";
//     }
//
//     tooltipHtml += "<span class='bubble-detail__agency-label'>Agency</span>" +
//       "<span class='bubble-detail__agency-name'>" + d.parent.name + "</span>" +
//       "<span class='bubble-detail__agency-label'>Sub-Agency</span>" +
//       "<span class='bubble-detail__agency-name'>" + d.name + "</span>" +
//       "<div class='information'><p class='key' style='color: #881E3D;'>Total $ of Awards</p>" +
//       "<span class='bubble-detail__agency-name'>" + formatCurrency(d.size) + "</span>" +
//       "</div></div>";
//     return tooltipHtml;
//   }
//
//
//   drawBubbleChart = function(root) {
//     const targetWidth = this.bubbleWidth;
//     this.bubble.chartHeight = targetWidth;
//
//     let tooltipHtml = '<div></div>';
//     this.tip = d3.tip().attr('class', 'd3-tip').html(function (d) {
//       if (isZoomedIn(d)) {
//         if (d.depth === 2) {
//           tooltipHtml = this.setSubagencyTooltipHtml(d);
//         } else if (d.depth === 1) {
//           tooltipHtml = this.setAgencyTooltipHtml(d);
//         }
//       } else {
//         if (d.depth === 2) {
//           tooltipHtml = this.setAgencyTooltipHtml(d.parent);
//         } else if (d.depth === 1) {
//           tooltipHtml = this.setAgencyTooltipHtml(d);
//         }
//       }
//       return tooltipHtml;
//     });
//
//     this.focus = root;
//     this.diameter = this.bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;
//
//     d3.select(this.bubbleChartContainer)
//       .attr('style', "width: " + this.bubbleWidth + "px; height: " + this.bubbleWidth + "px;");
//
//     this.bubbleSvg = d3.select(this.bubbleChartContainer).append("svg")
//       .attr("id", "chart")
//       .attr("width", targetWidth)
//       .attr("height", bubble.chartHeight)
//       .append("g")
//       .attr("transform", "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")")
//     ;
//
//     this.circle = bubbleSvg.selectAll("circle")
//       .data(nodes)
//       .enter().append("circle")
//       .attr("class", function (d) {
//         return d.parent ? d.children ? "node" : "node--leaf" : "node--root";
//       })
//       .style("fill", this.circleFill)
//       .attr("r", function (d) {
//         if (d.r > 0) {
//           return d.r;
//         }
//       })
//       .attr("id", function (d) {
//         let name = d.name.replace(/ /g, "_");
//         if (d.depth > 1 && d.name === d.parent.name) {
//           name += '_sub'
//         }
//         return name;
//       })
//       .on("click", this.bubbleClick)
//       .on("mouseover", function (d) {
//         if (!this.isTablet()) {
//           this.tip.show(d);
//         }
//       })
//       .on("mouseout", function (d) {
//         this.tip.hide(d);
//       });
//
//     this.bubbleSvg.selectAll("text")
//       .data(nodes)
//       .enter().append("text")
//       .attr("font-family", "Source Sans Pro")
//       .attr("class", "label")
//       .attr("id", function (d) {
//         let name = "text_" + d.name.replace(/ /g, "_");
//         if (d.depth > 1 && d.name === d.parent.name) {
//           name += '_sub'
//         }
//         return name;
//       })
//       .style("fill-opacity", function (d) {
//         return d.parent === root ? 1 : 0;
//       })
//       .style("display", function (d) {
//         return d.parent === root ? null : "none";
//       })
//       .text(function (d) {
//         return d.name;
//       })
//       .style("font-size", calculateTextFontSize)
//       .attr("text-anchor", "middle")
//       .on("click", bubbleClick)
//       .on("mouseover", function (d) {
//         // const elName = d.name.replace(/ /g,"_");
//         if (!isTablet()) {
//           tip.show(d);
//         }
//       })
//       .on("mouseout", tip.hide)
//     ;
//     node = bubbleSvg.selectAll("circle,text");
//     bubbleSvg.call(tip);
//   }
//
// // close tooltip
//   closeTooltip = function() {
//     this.tip.hide();
//   }
//
// // Zoom into a specific circle
//   zoom = function(d) {
//     const focus0 = this.focus;
//     this.focus = d;
//
//     this.closeDetailPanel();
//     this.closeTooltip();
//
//     const transition = d3.transition()
//       .duration(d3.event && d3.event.altKey ? 7500 : 750)
//       .tween("zoom", function (d) {
//         var i = d3.interpolateZoom(view, [this.focus.x, this.focus.y, this.focus.r * 2 + margin]);
//         return function (t) {
//           zoomTo(i(t));
//         };
//       })
//     ;
//
//     transition.selectAll(".node--root")
//       .style("fill-opacity", function () {
//         return this.focus.name === "flare" ? 1 : 0;
//       })
//     ;
//
//     transition.selectAll("text.label")
//       .style("fill-opacity", function (d) {
//         return d.parent === this.focus ? 1 : 0;
//       })
//       .each("start", function (d) {
//         if (d.parent === this.focus) {
//           this.style.display = "inline";
//         } else {
//           this.style.display = "none";
//         }
//       })
//       .each("end", function (d) {
//         if (d.parent !== this.focus) {
//           this.style.display = "none";
//         } else {
//           this.style.display = "inline";
//         }
//       });
//
//     // hide the text
//     setTimeout(function () {
//       // show the text
//       d3.selectAll("text.label").filter(function (d) {
//         return d.parent === this.focus || this.style.display === "inline";
//       }).style("font-size", calculateTextFontSize);
//     }, 100);
//   }
//
//   zoomTo = function(v) {
//     var k = diameter / v[2];
//     this.view = v;
//     node.attr("transform", function (d) {
//       return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
//     });
//     this.circle.attr("r", function (d) {
//       return d.r * k;
//     });
//   }
//
//   circleFill = function(d) {
//     if (d['color']) {
//       return d.color;
//     } else if (d.parent && d.parent.name === "flare") {
//       return '#f3f3f3';
//     } else {
//       return '#f8f8f8';
//     }
//   }
//
//   calculateTextFontSize = function(d) {
//     let id = d3.select(this).text();
//     let radius = 0;
//
//     if(d.depth === 2) {
//       if(d.fontsize =  d.r > 30) {
//         d.fontsize = "12px";
//       } else if (d.fontsize =  d.r > 20) {
//         d.fontsize = "4px";
//       } else if (d.fontsize =  d.r > 5) {
//         d.fontsize = "2px";
//       } else {
//         d.fontsize = "1px";
//       }
//     }
//
//     if (d.fontsize){
//       //if fontsize is already calculated use that.
//       return d.fontsize;
//     }
//     if (!d.computed) {
//       //if computed not present get & store the getComputedTextLength() of the text field
//       d.computed = this.getComputedTextLength();
//       if(d.computed != 0){
//         //if computed is not 0 then get the visual radius of DOM
//         //if radius present in DOM use that
//         radius = d.r ? d.r : 0;
//
//         //calculate the font size and store it in object for future
//         d.fontsize = 24 * radius / d.computed + "px";
//         return d.fontsize;
//       }
//     }
//   }
//
//   margin = 20;
//   diameter = 800;
//
//
//   pack = d3.layout.pack()
//     .padding(2)
//     .size([this.diameter - this.margin, this.diameter - this.margin])
//     .value(function(d) {
//       if(d.size > 0) {
//         return d.size;
//       }
//     })
//
//   node;
//   circle;
//   recipientMap;
//
//   drawChart = function(root) {
//     let width = 1600;
//     let height = 2000;
//
//     let aspect = window.innerWidth / window.innerHeight;
//     let targetWidth = window.innerWidth;
//
//
//     let svg = d3.select("body").append("svg")
//       .attr("id", "chart")
//       .attr("width", targetWidth)
//       .attr("height", targetWidth / aspect)
//       .append("g")
//       .attr("transform", "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")");
//
//
//     let focus = root,
//       nodes = this.pack.nodes(root),
//       view;
//
//     let tempZoom = this.zoom;
//
//     this.circle = svg.selectAll("circle")
//       .data(nodes)
//       .enter().append("circle")
//       .attr("class", function(d) {
//         return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root";
//       })
//       .attr("class", "testing")
//       .style("fill", this.circleFill)
//       .attr("r", function(d) {
//         if (d.r > 0) {
//           return d.r;
//         }
//       })
//       .attr("id", function(d) {
//         return d.name;
//       })
//       .on("click", function(d) {
//         // if (focus !== d) tempZoom(d), d3.event.stopPropagation();
//       });
//
//     this.circle.append("svg:title")
//       .text(function(d) {
//         return d.name;
//       })
//
//     let text = svg.selectAll("text")
//       .data(nodes)
//       .enter().append("text")
//       .attr("font-family", "Source Sans Pro")
//       .attr("class", "label")
//       .style("fill-opacity", function(d) {
//         return d.parent === root ? 1 : 0;
//       })
//       .style("display", function(d) {
//         return d.parent === root ? null : "none";
//       })
//       .text(function(d) {
//         return d.name;
//       })
//       .style("font-size", this.calculateTextFontSize)
//       .attr("text-anchor", "middle");
//
//     this.node = svg.selectAll("circle,text");
//
//   }
//
//
//   transformData = function(data) {
//     var result = _.groupBy(data, 'agency');
//     var i = 0;
//     var tempRoot = {
//       "name": "flare",
//       "children": []
//     };
//
//     // Re-structure data
//     for(let agency in result) {
//       result[agency] = _.groupBy(result[agency], 'subagency');
//
//       tempRoot.children.push({"name": agency, "children": []});
//
//       for(let subagency in result[agency]) {
//         result[agency][subagency] = _.groupBy(result[agency][subagency], 'Recipient');
//
//         tempRoot.children[i].children.push({"name": subagency, "children": [], "color": null, "size": 0});
//
//         var rsum;
//         for (let recipient in result[agency][subagency]) {
//           rsum = 0;
//           // start calculating size
//           for (var r = 0; r < result[agency][subagency][recipient].length; r++) {
//             rsum += parseInt(result[agency][subagency][recipient][r].obligation);
//           }
//
//           for (var j = 0; j < tempRoot.children[i].children.length; j++) {
//             tempRoot.children[i].children[j].children.push({"name": recipient, "size": rsum});
//           }
//         }
//       }
//
//       i++;
//     }
//
//     this.recipientMap = result;
//
//     // sum the subagencies obligations
//     for (var i = 0; i < tempRoot.children.length; i++) {
//       for (var j = 0; j < tempRoot.children[i].children.length; j++) {
//         for (var k = 0; k < tempRoot.children[i].children[j].children.length; k++) {
//           tempRoot.children[i].children[j].size += parseInt(tempRoot.children[i].children[j].children[k].size);
//           tempRoot.children[i].children[j].children[k].name = null;
//
//         }
//
//         for (var k = 0; k < tempRoot.children[i].children[j].children.length; k++) {
//           if(tempRoot.children[i].children[j].children[k] &&
//             !tempRoot.children[i].children[j].children[k].name) {
//             delete tempRoot.children[i].children[j].children[k];
//           }
//         }
//
//         delete tempRoot.children[i].children[j].children;
//
//       }
//     }
//
//     // add color
//     for (var i = 0; i < tempRoot.children.length; i++) {
//       for (var j = 0; j < tempRoot.children[i].children.length; j++) {
//         tempRoot.children[i].children[j].color = this.color[i];
//       }
//     }
//     return tempRoot;
//   }
//
// // Zoom into a specific circle
//   zoom = function(d) {
//     let focus0 = this.focus;
//     this.focus = d;
//
//     if (!d.parent || d.parent.name === "flare") {
//       let transition = d3.transition()
//         .duration(d3.event.altKey ? 7500 : 750)
//         .tween("zoom", function(d) {
//           let i = d3.interpolateZoom(this.view, [this.focus.x, this.focus.y, this.focus.r * 2 + this.margin]);
//           return function(t) {
//             this.zoomTo(i(t));
//           };
//         });
//
//       transition.selectAll("text")
//         .filter(function(d) {
//           return d.parent === this.focus || this.style.display === "inline";
//         })
//         .style("fill-opacity", function(d) {
//           return d.parent === this.focus ? 1 : 0;
//         })
//         .each("start", function(d) {
//           if (d.parent === this.focus) this.style.display = "inline";
//         })
//         .each("end", function(d) {
//           if (d.parent !== this.focus) this.style.display = "none";
//         });
//       setTimeout(function() {
//         d3.selectAll("text").filter(function(d) {
//           return d.parent === this.focus || this.style.display === "inline";
//         }).style("font-size", this.calculateTextFontSize);
//       }, 10)
//
//     } else {
//       console.log(this.recipientMap[d.parent.name][d.name]);
//       window.alert('open right window, parent - ' + d.parent.name + ', ' + d.name);
//     }
//
//   }
//
//   zoomTo = function(v) {
//     let k = this.diameter / v[2];
//     this.view = v;
//     this.node.attr("transform", function(d) {
//       return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
//     });
//     this.circle.attr("r", function(d) {
//       return d.r * k;
//     });
//   }
//
//
//
//   selectSubAgency = function(d) {
//     const elSelector = "circle.node--leaf[id='" + d.name.replace(/ /g, "_") + "']";
//     this.circle.classed('active', false);
//     d3.select(elSelector).classed("active", true);
//     if (focus !== d) {
//       zoom(d.parent), d3.event.stopPropagation();
//     }
//   }
//
//   bubbleClick = function(d) {
//     circle.classed('active', false);
//
//     // need to check if focus is d, maybe?
//     if (this.isZoomedIn(d)) {
//       if (d.depth === 2) {
//         d3.event.stopPropagation();
//         this.setChartState(d.parent);
//
//         const elName = "circle.node--leaf#" + d.name.replace(/ /g, "_");
//         d3.select(elName).classed("active", true);
//         this.bubble.activateDetail(d);
//
//       } else if (d.depth === 1) {
//         this.setLegendLeft(false);
//         this.clearChartState();
//         if (this.focus !== d) {
//           this.zoom(d);
//           d3.event.stopPropagation();
//         }
//       }
//     } else {
//       if (d.depth === 2) {
//         this.setLegendLeft(true);
//         this.setChartState(d.parent);
//
//         // check if a bubble is already selected
//         if (this.focus !== d.parent) {
//           this.zoom(d.parent);
//           d3.event.stopPropagation();
//         }
//       } else if (d.depth === 1) {
//         this.setLegendLeft(true);
//         this.setChartState(d);
//
//         if (this.focus !== d) {
//           this.zoom(d);
//           d3.event.stopPropagation();
//         }
//       }
//     }
//   }
//
//
//   transformData = function(data) {
//     let result = _.groupBy(data, 'agency');
//     var i = 0;
//     let tempRoot = {
//       "name": "flare",
//       "children": []
//     };
//
//     // Re-structure data
//     for (let agency in result) {
//       result[agency] = _.groupBy(result[agency], 'subagency');
//       tempRoot.children.push({ "name": agency, "children": [] });
//
//       for (let subagency in result[agency]) {
//         if (result[agency][subagency] && result[agency][subagency].length > 0) {
//           result[agency][subagency] = result[agency][subagency][0].obligation;
//         } else {
//           result[agency][subagency] = 0;
//         }
//         tempRoot.children[i].children.push({ "name": subagency, "children": [], "color": null, "size": result[agency][subagency] });
//       }
//       i++;
//     }
//
//     this.recipient = result;
//
//     // add color
//     for (var i = 0; i < tempRoot.children.length; i++) {
//       for (var j = 0; j < tempRoot.children[i].children.length; j++) {
//         tempRoot.children[i].children[j].color = this.color[i];
//       }
//     }
//     return tempRoot;
//   }

  render(){
    return <div></div>
  }
}

export default BubbleChart



