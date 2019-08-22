import React, { Component } from "react"
import { graphql } from "gatsby"
import * as d3 from "d3"
import Home from "../../components/layouts/home/home"
import SEO from "../../components/seo"

class Sankey extends Component {

  componentDidMount() {

    this.RadioSankeyFY19();
  }

  margin = {
    top: 0,
    right: 0,
    bottom: 10,
    left: 0
  };

  width = 548 - this.margin.left - this.margin.right;
  height = 608 - this.margin.top - this.margin.bottom;


  formatNumber = d3.format("$,.0f"); // zero decimal places
  format = (d) => this.formatNumber(d);

  color = [{
    name: "Social Security",
    color: "#143e64"
  }, {
    name: "Medicare",
    color: "#2869a4"
  }, {
    name: "Income Security",
    color: "#0086c8"
  }, {
    name: "Health",
    color: "#29e0ff"
  }, {
    name: "Net Interest",
    color: "#00b5db"
  }, {
    name: "National Defense",
    color: "#aae1f4"
  }, {
    name: "General Government",
    color: "#143e64"
  }, {
    name: "Agriculture",
    color: "#2869a4"
  }, {
    name: "Education, Training, Employment, and Social Services",
    color: "#0086c8"
  }, {
    name: "Veterans Benefits and Services",
    color: "#29e0ff"
  }, {
    name: "Regional Development, Commerce, and Housing",
    color: "#00b5db"
  }, {
    name: "Natural ResourcesRow and Environment",
    color: "#aae1f4"
  }, {
    name: "Administration of Justice",
    color: "#143e64"
  }, {
    name: "Transportation",
    color: "#2869a4"
  }, {
    name: "International Affairs",
    color: "#0086c8"
  }, {
    name: "Energy, Science, Space, and Technology",
    color: "#29e0ff"
  }, {
    name: "Insurance Claims and Indemnities",
    color: "#461e45"
  }, {
    name: "Grants, Subsidies, and Contributions",
    color: "#783877"
  }, {
    name: "Interest and Dividends",
    color: "#b56db4"
  }, {
    name: "Personnel Compensation and Benefits",
    color: "#e0b1df"
  }, {
    name: "Refunds",
    color: "#f8dbf8"
  }, {
    name: "Advisory, R&D, Medical, and Other Contracts",
    color: "#783877"
  }, {
    name: "Acquisition of Assets",
    color: "#783877"
  }, {
    name: "Printing and Supplies",
    color: "#b56db4"
  }, {
    name: "Other",
    color: "#e0b1df"
  }, {
    name: "Travel and Transportation",
    color: "#f8dbf8"
  }, {
    name: "Rent, Communications, and Utilities",
    color: "#461e45"
  }];

  d3Sankey = d3.sankey = () => {
    const sankey = {};
    let nodeWidth = 30;
    let nodePadding = 8;
    let size = [1, 1];
    let nodes = [];
    let links = [];

    sankey.nodeWidth = function sNodeWidth(nArg) {
      if (nArg == null) { return nodeWidth; }
      nodeWidth = +nArg;
      return sankey;
    };

    sankey.nodePadding = function sNodePadding(nArg) {
      if (nArg == null) { return nodePadding; }
      nodePadding = +nArg;
      return sankey;
    };

    sankey.nodes = function sNodes(nArg) {
      if (nArg == null) { return nodes; }
      nodes = nArg;
      return sankey;
    };

    sankey.links = function sLinks(nArg) {
      if (nArg == null) { return links; }
      links = nArg;
      return sankey;
    };

    sankey.size = function sSize(nArg) {
      if (nArg == null) { return size; }
      size = nArg;
      return sankey;
    };

    sankey.link = () => {
      let curvature = 0.5;

      function link(d) {
        const x0 = d.source.x + d.source.dx;
        const x1 = d.target.x;
        const xi = d3.interpolateNumber(x0, x1);
        const x2 = xi(curvature);
        const x3 = xi(1 - curvature);
        const y0 = d.source.y + d.sy + (d.dy / 2);
        const y1 = d.target.y + d.ty + (d.dy / 2);
        return `M${x0},${y0
          }C${x2},${y0
          } ${x3},${y1
          } ${x1},${y1}`;
      }

      link.curvature = (nArg) => {
        if (nArg == null) { return curvature; }
        curvature = +nArg;
        return link;
      };

      return link;
    };

    function center(node) {
      return node.y + (node.dy / 2);
    }

    function value(link) {
      return link.value;
    }

    // Populate the sourceLinks and targetLinks for each node.
    // Also, if the source and target are not objects, assume they are indices.
    function computeNodeLinks() {
      nodes.forEach((node) => {
        node.sourceLinks = [];
        node.targetLinks = [];
      });
      console.log(links);
      links.forEach((link) => {
        let source = link.source;
        let target = link.target;
        if (typeof source === "number") {
          link.source = nodes[link.source];
          source = link.source;
        }
        if (typeof target === "number") {
          link.target = nodes[link.target];
          target = link.target;
        }
        source.sourceLinks.push(link);
        target.targetLinks.push(link);
      });
    }

    // Compute the value (size) of each node by summing the associated links.
    function computeNodeValues() {
      nodes.forEach((node) => {
        node.value = Math.max(
          d3.sum(node.sourceLinks, value),
          d3.sum(node.targetLinks, value)
        );
      });
    }

    function moveSinksRight(x) {
      nodes.forEach((node) => {
        if (!node.sourceLinks.length) {
          node.x = x - 1;
        }
      });
    }

    function scaleNodeBreadths(kx) {
      nodes.forEach((node) => {
        node.x *= kx;
      });
    }

    // Iteratively assign the breadth (x-position) for each node.
    // Nodes are assigned the maximum breadth of incoming neighbors plus one;
    // nodes with no incoming links are assigned breadth zero, while
    // nodes with no outgoing links are assigned the maximum breadth.
    function computeNodeBreadths() {
      let remainingNodes = nodes;
      let nextNodes;
      let x = 0;

      const breadthFunc = (node) => {
        node.x = x;
        node.dx = nodeWidth;
        node.sourceLinks.forEach((link) => {
          nextNodes.push(link.target);
        });
      };

      while (remainingNodes.length) {
        nextNodes = [];
        remainingNodes.forEach(breadthFunc);
        remainingNodes = nextNodes;
        x += 1;
      }

      moveSinksRight(x);
      scaleNodeBreadths((548 - nodeWidth) / (x - 1));
    }

    function computeNodeDepths(iterations) {
      const nodesByBreadth = d3.nest()
        .key((d) => d.x)
        .sortKeys(d3.ascending)
        .entries(nodes)
        .map((d) => d.values);

      function relaxLeftToRight(alpha) {
        function weightedSource(link) {
          return center(link.source) * link.value;
        }

        nodesByBreadth.forEach((innerNodes) => {
          innerNodes.forEach((node) => {
            if (node.targetLinks.length) {
              const y = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
              node.y += (y - center(node)) * alpha;
            }
          });
        });
      }

      function relaxRightToLeft(alpha) {
        function weightedTarget(link) {
          return center(link.target) * link.value;
        }

        nodesByBreadth.slice().reverse().forEach((innerNodes) => {
          innerNodes.forEach((node) => {
            if (node.sourceLinks.length) {
              const y = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
              node.y += (y - center(node)) * alpha;
            }
          });
        });
      }

      function resolveCollisions() {
        nodesByBreadth.forEach((innerNodes) => {
          let node;
          let dy;
          let y0 = 0;
          const n = innerNodes.length;
          let i;

          // Push any overlapping nodes down.
          /* nodes.sort(ascendingDepth);*/
          for (i = 0; i < n; ++i) {
            node = innerNodes[i];
            dy = y0 - node.y;
            if (dy > 0) node.y += dy;
            y0 = node.y + node.dy + nodePadding;
          }

          // If the bottommost node goes outside the bounds, push it back up.
          dy = y0 - nodePadding - size[1];
          if (dy > 0) {
            node.y -= dy;
            y0 = node.y;

            // Push any overlapping nodes back up.
            for (i = n - 2; i >= 0; --i) {
              node = innerNodes[i];
              dy = (node.y + node.dy + nodePadding) - y0;
              if (dy > 0) node.y -= dy;
              y0 = node.y;
            }
          }
        });
      }

      function initializeNodeDepth() {
        const ky = d3.min(nodesByBreadth, (innerNodes) => (size[1] - ((innerNodes.length - 1) * nodePadding)) / d3.sum(innerNodes, value));

        nodesByBreadth.forEach((innerNodes) => {
          innerNodes.forEach((node, i) => {
            node.y = i;
            node.dy = node.value * ky;
          });
        });

        links.forEach((link) => {
          link.dy = link.value * ky;
        });
      }

      initializeNodeDepth();
      resolveCollisions();
      for (let alpha = 1; iterations > 0; --iterations) {
        relaxRightToLeft(alpha *= 0.99);
        resolveCollisions();
        relaxLeftToRight(alpha);
        resolveCollisions();
      }
    }

    function computeLinkDepths() {
      function ascendingSourceDepth(a, b) {
        return a.source.y - b.source.y;
      }

      function ascendingTargetDepth(a, b) {
        return a.target.y - b.target.y;
      }

      nodes.forEach((node) => {
        node.sourceLinks.sort(ascendingTargetDepth);
        node.targetLinks.sort(ascendingSourceDepth);
      });
      nodes.forEach((node) => {
        let sy = 0;
        let ty = 0;
        node.sourceLinks.forEach((link) => {
          link.sy = sy;
          sy += link.dy;
        });
        node.targetLinks.forEach((link) => {
          link.ty = ty;
          ty += link.dy;
        });
      });
    }

    sankey.layout = (iterations) => {
      computeNodeLinks();
      computeNodeValues();
      computeNodeBreadths();
      computeNodeDepths(iterations);
      computeLinkDepths();
      return sankey;
    };

    sankey.relayout = () => {
      computeLinkDepths();
      return sankey;
    };

    return sankey;
  };

  makeSankey(data, sPanel, sTitle, descriptions) {
    // append the svg canvas to the page
    const svg = d3.select("#sankey-viz").append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .attr('viewBox', `0 0 ${this.width + this.margin.left + this.margin.right} ${this.height + this.margin.top + this.margin.bottom}`)
      .attr("class", "sankey-viz-svg")
      .append("g")
      .attr("transform",
        `translate(${this.margin.left},${this.margin.top})`);

    // Set the sankey diagram properties
    const sankey = d3.sankey()
      .nodeWidth(25)
      .nodePadding(8)
      .size([this.width, this.height]);

    const path = sankey.link();

    const legend = d3.select("#sankey-table");

    // set up graph in same style as original example but empty
    const graph = {
      nodes: [],
      links: []
    };

    data.forEach((d) => {
      graph.nodes.push({
        name: d.source
      });
      graph.nodes.push({
        name: d.target
      });

      graph.links.push({
        source: d.source,
        target: d.target,
        value: +d.value
      });

    });

    // return only the distinct / unique nodes
    graph.nodes = d3.keys(d3.nest()
      .key((d) => d.name)
      .map(graph.nodes));
    graph.nodes.sort((x, y) => d3.ascending(x.value, y.value));

    // loop through each link replacing the text with its home from node
    graph.links.forEach((d, i) => {
      graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
      graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
    });

    // now loop through each nodes to make nodes an array of objects rather than an array of strings
    graph.nodes.forEach((d, i) => {
      graph.nodes[i] = {
        name: d
      };
    });

    sankey
      .nodes(graph.nodes)
      .links(graph.links)
      .layout(200);

    // add in the links
    const link = svg.append("g").selectAll(".link")
      .data(graph.links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", path)
      .attr("id", (d, i) => {
        d.id = i;
        return `link-${i}`;
      })
      .style("stroke-width", (d) => Math.max(1, d.dy))
      .sort((a, b) => b.dy - a.dy);

    link.append("title")
      .text((d) => `${d.source.name} → ${d.target.name}\n${this.format(d.value)}`);

    function highlightLink(id, opacity) {
      d3.select(`#link-${id}`).style("stroke-opacity", opacity);
    }

    function unhighlightLink(id, opacity) {
      d3.select(`#link-${id}`).style("stroke-opacity", opacity);
    }

    let lastClickedNode = null;

    function removeHighlight(node, savedThis) {
      let remainingNodes = [];
      let nextNodes = [];

      if (savedThis == null) { return; }

      let strokeOpacity = 0;
      if (d3.select(savedThis).attr("data-clicked") === "1") {
        d3.select(savedThis).attr("data-clicked", "0");
        strokeOpacity = 0.1;
      }
      else {
        d3.select(savedThis).attr("data-clicked", "1");
        strokeOpacity = 0.3;
      }

      const traverse = [{
        linkType: "sourceLinks",
        nodeType: "target"
      }, {
        linkType: "targetLinks",
        nodeType: "source"
      }];

      traverse.forEach((step) => {
        node[step.linkType].forEach((nodeLink) => {
          remainingNodes.push(nodeLink[step.nodeType]);
          unhighlightLink(nodeLink.id, strokeOpacity);
        });

        const traverseFunc = (innerNode) => {
          innerNode[step.linkType].forEach((nodeLink) => {
            nextNodes.push(nodeLink[step.nodeType]);
            unhighlightLink(nodeLink.id, strokeOpacity);
          });
        };

        while (remainingNodes.length) {
          nextNodes = [];
          remainingNodes.forEach(traverseFunc);
          remainingNodes = nextNodes;
        }
      });
      d3.selectAll("#tab").remove();
      d3.selectAll("#tab_2").remove();
      d3.selectAll("#tab_3").remove();
      d3.selectAll("#description").remove();
    }


    let savedThis = null;

    function highlightNodeLinks(innerNode) {
      if (lastClickedNode != null) {
        removeHighlight(lastClickedNode, savedThis);
      }

      lastClickedNode = innerNode;
      savedThis = this;

      let remainingNodes = [];
      let nextNodes = [];

      let strokeOpacity = 0;
      if (d3.select(this).attr("data-clicked") === "1") {
        d3.select(this).attr("data-clicked", "0");
        strokeOpacity = 0.1;
      }
      else {
        d3.select(this).attr("data-clicked", "1");
        strokeOpacity = 0.3;
      }

      legend.append("div")
        .attr("id", "tab_3")
        .style("margin-top", "20px")
        .html("<div>Negative values are not included in the visualization.</div>");

      const traverse = [{
        linkType: "sourceLinks",
        nodeType: "target"
      }, {
        linkType: "targetLinks",
        nodeType: "source"
      }];

      traverse.forEach((step) => {
        innerNode[step.linkType].forEach((nodeLink) => {
          remainingNodes.push(nodeLink[step.nodeType]);
          highlightLink(nodeLink.id, strokeOpacity);
        });

        const traverseFunc = (remainingNode) => {
          remainingNode[step.linkType].forEach((nodeLink) => {
            nextNodes.push(nodeLink[step.nodeType]);
            highlightLink(nodeLink.id, strokeOpacity);
          });
        };

        while (remainingNodes.length) {
          nextNodes = [];
          remainingNodes.forEach(traverseFunc);
          remainingNodes = nextNodes;
        }
      });
    }

    const node = svg.append("g").selectAll(".node")
      .data(graph.nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .on("click", highlightNodeLinks);
    // .on("mouseout", removeHighlight)
    /* .call(d3.behavior.drag()
        .origin((d) => d)
        .on("drag", dragmove)); */

    node.append("rect")
      .attr("height", (d) => d.dy)
      .attr("width", sankey.nodeWidth())
      .style("fill", (d) => {
        for (let i = 0; i < this.color.length; i++) {
          if (d.name === this.color[i].name) {
            return this.color[i].color;
          }
        }
        return "";
      });

    node.append("text")
      .attr("x", -6)
      .attr("y", (d) => d.dy / 3)
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("transform", null)
      .text((d) => d.name)
      .filter((d) => d.x < this.width / 2)
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start");
  }


  RadioSankeyFY19() {
    const data = this.props.data.allSankeyV1Fy19Csv.nodes;
    const sPanel = this.props.data.allSankeyPanelV1Fy19Csv.nodes;
    const sTitle = this.props.data.allSankeyTitlesV1Fy19Csv.nodes;
    const descriptions = this.props.data.allDescriptionsCsv.nodes;

    this.makeSankey(data, sPanel, sTitle, descriptions);
  }

  render(){
    return  <Home>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <div className="viz-container">
          <div className="budget-sankey">
            <div id="sankey-container">
              <div id="sankey-viz">
                <div className="sankey-brackets">
                  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 664.4">
                    <defs>
                      <clipPath id="clip-path">
                        <path className="cls-1" d="M1 239h19v165H1z"/>
                      </clipPath>
                      <clipPath id="clip-path-2">
                        <path className="cls-1" d="M-84-1392h1440v3335H-84z"/>
                      </clipPath>
                      <clipPath id="clip-path-3">
                        <path className="cls-1" transform="rotate(-89 628.9976 362.5353)" d="M556 353.03h146v19H556z"/>
                      </clipPath>
                    </defs>
                    <g className="cls-3" clipPath="url(#clip-path)">
                      <path className="cls-4"
                            d="M7.19 402.43v-3.51c0-2.39.81-4.07 2.88-4.07a2.57 2.57 0 0 1 2.57 2.07h.08c.27-1.72 1.2-2.73 2.82-2.73 2.33 0 3.46 1.83 3.46 4.46v3.78zm5-3.26c0-2-.72-2.84-2-2.84s-1.82.95-1.82 2.77v1.82h3.85zm5.58-.3c0-2-.74-3.21-2.34-3.21s-2.12 1.14-2.12 3.21v2.05h4.46zM7.19 391.4v-1.51h7c2.84 0 3.74-1.21 3.74-2.74s-.9-2.81-3.74-2.81h-7v-1.44h6.93c3.8 0 5.1 1.84 5.1 4.25s-1.3 4.25-5.1 4.25zM7.19 379.23v-3c0-3.64 2.1-5.58 5.85-5.58s6 1.94 6 5.51v3zm10.59-2.84c0-2.78-1.75-4.14-4.74-4.14s-4.63 1.36-4.63 4.14v1.33h9.37zM7 362.85a4.62 4.62 0 0 1 1.46-3.39l1 .87a3.2 3.2 0 0 0-1.09 2.5c0 2.4 1.83 3.93 4.77 3.93s4.84-1.41 4.84-3.93a3.31 3.31 0 0 0-.7-2.14h-3.16v2.5h-1.24v-3.87h5a5.35 5.35 0 0 1 1.34 3.68c0 3.1-2.27 5.32-6.13 5.32S7 366 7 362.85zM7.19 356v-6.8h1.26v5.29h3.71V350h1.28v4.47h4.28V349H19v7zM8.45 343.56v3.58H7.19v-8.66h1.26v3.58H19v1.5zM7.19 331.64v-6.82h1.26v5.31h4v-4.5h1.26v4.5H19v1.51zM7.19 322.3v-1.51h7c2.84 0 3.74-1.21 3.74-2.74s-.9-2.81-3.74-2.81h-7v-1.44h6.93c3.8 0 5.1 1.84 5.1 4.25s-1.3 4.25-5.1 4.25zM7.19 310.13v-1.55l7.42-4.28 2.45-1.3c-1.19.07-2.52.19-3.77.19h-6.1v-1.42H19v1.55l-7.44 4.27-2.43 1.28v.07c1.19-.07 2.45-.18 3.69-.18H19v1.42zM7 293.39a4.36 4.36 0 0 1 1.46-3.22l1 .84a3.18 3.18 0 0 0-1.09 2.36c0 2.25 1.83 3.75 4.77 3.75s4.84-1.43 4.84-3.68a3.47 3.47 0 0 0-1.31-2.7l.92-.84a4.5 4.5 0 0 1 1.71 3.58c0 3-2.27 5.18-6.13 5.18S7 296.41 7 293.39zM8.45 285.06v3.58H7.19V280h1.26v3.58H19v1.5zM7.19 277.37v-1.51H19v1.51zM13 272.82c-3.78 0-6.07-2.09-6.07-5.06s2.31-5 6.07-5 6.18 2.08 6.18 5-2.34 5.06-6.18 5.06zm0-8.56c-2.93 0-4.75 1.39-4.75 3.5s1.82 3.51 4.75 3.51 4.86-1.39 4.86-3.51-1.86-3.5-4.86-3.5zM7.19 259.59V258l7.42-4.28 2.45-1.28v-.07c-1.19.07-2.52.2-3.77.2h-6.1v-1.43H19v1.55L11.56 257l-2.43 1.28v.07c1.19-.07 2.45-.18 3.69-.18H19v1.42z"/>
                    </g>
                    <g className="cls-3" clipPath="url(#clip-path-3)">
                      <path className="cls-4"
                            d="M627.72 290.38c3.78.07 6 2.2 6 5.17s-2.4 5-6.16 4.93-6.14-2.19-6.08-5.14 2.44-5.02 6.24-4.96zm-.15 8.56c2.93.05 4.78-1.31 4.81-3.41s-1.75-3.55-4.69-3.6-4.88 1.3-4.92 3.43 1.85 3.52 4.8 3.58zM633.34 303.62l-.06 3.51c0 2.4-.88 4.06-2.95 4a2.56 2.56 0 0 1-2.54-2.11h-.07c-.3 1.72-1.26 2.71-2.88 2.68-2.32 0-3.42-1.89-3.38-4.52l.07-3.78zM622.66 307c0 2 .68 3.22 2.28 3.25s2.14-1.1 2.18-3.17v-2.05l-4.47-.08zm5.58-.21c0 2 .67 2.86 2 2.88s1.83-.92 1.86-2.74v-1.81l-3.86-.07zM623.77 314.28a2.28 2.28 0 0 0-1.37 2c0 1.26.69 1.9 2.49 1.93l8.19.14v1.5l-8.34-.15c-2 0-3.67-1-3.63-3.32a3.43 3.43 0 0 1 1.89-3.18zM633 323.55l-.12 6.8h-1.26l.1-5.29L628 325l-.08 4.47h-1.28l.08-4.47-4.29-.07-.09 5.47h-1.28l.12-7zM633 338.13a4.35 4.35 0 0 1-1.51 3.2l-.94-.87a3.13 3.13 0 0 0 1.14-2.34c0-2.25-1.77-3.77-4.71-3.82s-4.86 1.33-4.9 3.59a3.45 3.45 0 0 0 1.26 2.72l-.93.83a4.56 4.56 0 0 1-1.65-3.61c.06-3 2.36-5.15 6.22-5.08s6.02 2.35 6.02 5.38zM631.33 346.44l.06-3.59h1.27l-.16 8.65h-1.26l.07-3.58-10.55-.18v-1.5zM632.52 363a4.36 4.36 0 0 1-1.51 3.19l-.94-.86a3.2 3.2 0 0 0 1.14-2.34c0-2.25-1.77-3.78-4.71-3.83s-4.87 1.34-4.91 3.59a3.44 3.44 0 0 0 1.27 2.72l-.93.83a4.48 4.48 0 0 1-1.65-3.61c.05-3 2.36-5.14 6.21-5.08s6.08 2.33 6.03 5.39zM632.2 369.15v1.51l-10.53-.18-.09 5.15h-1.28l.12-6.66zM623.73 383.71l.08-4.3-3.59-1.2v-1.53l11.78 4.21v1.69l-11.88 3.79v-1.59zm1.21-.35l1.81-.53c1.32-.39 2.63-.75 4-1.1v-.07c-1.36-.41-2.65-.81-4-1.24l-1.79-.61zM622.62 388.63a4.57 4.57 0 0 0-1.53 3.23c0 1.55.73 2.48 1.88 2.5s1.6-.84 2.12-1.95l.77-1.68a3.34 3.34 0 0 1 3.08-2.34c1.8 0 3.11 1.64 3.07 3.78a4.79 4.79 0 0 1-1.52 3.45l-1-.81a3.77 3.77 0 0 0 1.17-2.66c0-1.33-.63-2.22-1.69-2.24s-1.59 1-2 1.92l-.75 1.68c-.62 1.36-1.45 2.41-3.19 2.38s-3.34-1.61-3.3-4.09a5.67 5.67 0 0 1 1.82-4.09zM622.44 398.81a4.57 4.57 0 0 0-1.53 3.23c0 1.55.73 2.48 1.88 2.5s1.6-.84 2.12-1.94l.77-1.68a3.36 3.36 0 0 1 3.09-2.35c1.8 0 3.1 1.64 3.06 3.79a4.79 4.79 0 0 1-1.52 3.44l-.95-.8a3.85 3.85 0 0 0 1.16-2.67c0-1.33-.63-2.22-1.69-2.24s-1.59 1-2 1.93l-.75 1.68c-.61 1.35-1.44 2.4-3.19 2.37s-3.34-1.61-3.3-4.09a5.69 5.69 0 0 1 1.82-4.09z"/>
                    </g>
                    <g className="cls-3">
                      <path className="cls-6" d="M11.5 5.5h27.54v2H11.5z"/>
                      <path className="cls-6" d="M11.5 5.88h2v231.16h-2zM600.96 48.5h27.54v2h-27.54z"/>
                      <path className="cls-6" d="M626.5 48.88h2v231.16h-2zM8.5 650.5h27.54v2H8.5z"/>
                      <path className="cls-6" d="M8.5 420.96h2v231.16h-2zM597.96 651.5h27.54v2h-27.54z"/>
                      <path className="cls-6" d="M623.5 421.96h2v231.16h-2z"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div id="sankey-table"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="entry-about-container">
            <div className="entry-about-title-container">
              <h2 className="entry-about-title">How We Conducted This Analysis</h2>
              <div className="entry-about-divider"></div>
            </div>
            <div className="entry-about-body-container">
              <h3 className="entry-about-body">This analysis was conducted using agency account obligation data reported
                to USAspending.gov, which is available to the public. Each reported account is aligned to a single Budget
                Function and is further broken out by the dollars obligated under each Object Class (data can be found via
                the TAS/categories endpoint within the DATA Act API).</h3>

              <a href="budget-function-more.html" className="button-read-more"><span>Read More ⟶</span></a>

            </div>
          </div>
        </div>
      </div>
    </Home>

  }
}

export default Sankey;

export const IndexQuery = graphql`
  query {
    allSankeyV1Fy19Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyPanelV1Fy19Csv {
      nodes {
        source
        target
        value
      }
    },
    allSankeyTitlesV1Fy19Csv {
      nodes {
        name
        value
      }
    },
     allDescriptionsCsv {
      nodes {
        name
        desc
      }
    },
  }
`
