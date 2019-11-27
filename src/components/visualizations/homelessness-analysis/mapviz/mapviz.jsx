import React, { useEffect, useState } from "react"
import * as d3 from 'd3v3';
import d3Tip from 'd3-tip';
d3.tip = d3Tip;

import ControlBar from "../../../control-bar/control-bar"
import Reset from "../../../reset/reset"
import Share from "../../../share/share"
import dataSource from '../utils/data-module';

/* Extracted and adapted from fedscope.js an trreemap-module.js */

export default function Mapviz(props) {

  const {mem} = dataSource;
  const us = mem.us;
  const tableData = mem.pop;

  const absWidth = 1024;
  const absHeight = 575;
  const margin = {
    top: 100,
    right: 50,
    bottom: 15,
    left: 100
  };
  const la = us.features.filter((d) => d.properties.coc_number === 'CA-600');
  const formatNumber = d3.format('$,.0f');
  const OtherformatNumber = d3.format(',.0f');
  const panel2Width = absWidth - margin.left - margin.right;
  const panel2Height = absHeight - margin.top - margin.bottom;
  const matrixWidth = (absWidth / 1.85) - margin.left - margin.right;
  const mapWidth = panel2Width - matrixWidth - margin.left - margin.right - 45;
  const mapHeight = panel2Height / 3;
  const infoWidth = panel2Width - matrixWidth - margin.left - margin.right;
  const infoHeight = panel2Height / 3;
  const width = 1000;
  const height = 600;
  let map1Centered = null;
  let map2Centered = la[0];
  let path, g;


  function GenMap(){
    d3.select('#container').append('div').attr('id', 'viz_container');
    // let centered = null;

    // D3 Projection
    const projection = d3.geo.albersUsa()
      .translate([width / 2, height / 2]) // translate to center of screen
      .scale([1200]); // scale things down so see entire US ---1455

    // Define path generator
    path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
      .projection(projection); // tell path generator to use albersUsa projection

    d3.select('#viz_container')
      .append('div')
      .attr('id', 'map_container')
      .attr('width', width)
      .attr('height', height);

    const mapSvg = d3.select('#map_container')
      .append('svg')
      .attr('id', 'svg')
      .attr('width', '100%')
      .attr('height', '575px')
      .attr('viewBox', '0 0 950 575')
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const tip = d3.tip()
      .attr('class', 'homeless-analysis d3-tip')
      .style('background', '#ffffff')
      .style('color', '#333')
      .style('border', 'solid 1px #BFBCBC')
      .style('padding', '25px')
      .style('width', '300px')
      .offset([-10, -10])
      .html((d) => `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0;`
        + ` padding-bottom:15px; font-weight: bold; color:#555555">`
        + `${d.properties.coc_number}: ${d.properties.COCNAME}</p><br>` +
        `<p style="color: #0071BC; margin: 0; padding-bottom:0; font-size: 20px; line-height: 22px">`
        + `Total Homeless: ${getValue(d)}</p><br>` +
        `<ul style="list-style-type: circle; margin:0; padding:0 0 0 15px">` +
        `<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; padding:0">`
        + `Sheltered Homeless: ${getSheltered(d)}</li>` +
        `<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; padding:0">`
        + `Unsheltered Homeless: ${getUnsheltered(d)}</li></ul><br>` +
        `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic">`
        + ` Double click to zoom in/zoom out</p>`);

    mapSvg.append('circle').attr('id', 'tipfollowscursor_1');
    mapSvg.call(tip);

    g = mapSvg.append('g')
      .attr('class', 'counties')
      .selectAll('path')
      .data(us.features)
      .enter()
      .append('path')
      .attr('class', 'coc')
      .attr('data-coc', (d) => d.properties.coc_number)
      .attr('data-state', (d) => d.properties.state)
      .attr('data-name', (d) => d.properties.name)
      .attr('d', path);

    // todo - Add in functionality for the click function which includes updating
    // the tables in the 'Federal Spending on Homelessness by Region' section
    g.on('mouseover', (d) => {
      const target = d3.select('#tipfollowscursor_1')
        .attr('cx', d3.event.offsetX)
        .attr('cy', d3.event.offsetY - 30)
        .node();
      tip.show(d, target);
    })
      .on('mouseout', tip.hide)
      .on('dblclick', setZoom)
      // .on("click", (d) => {
      //   BarChart(d);
      //   createCoCTable(d);
      //   makeMapTitle(d);
      //   StateBarChart(d);
      //   createContact(d);
      //   p21ClickedP1(d);
      // })

      .style('fill', getColor);
  }

  function setZoom(d) {
    let x;
    let y;
    let k;

    // todo - Add in tracking event
    // window.Analytics.event({
    //   category: 'Homelessness Analysis - Panel 1 - Double Click CoC',
    //   action: `${d.properties.coc_number} - ${d.properties.COCNAME}`
    // });

    if (d && map1Centered !== d) {
      const centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];

      if (d.properties.COCNAME === 'Hawaii Balance of State CoC') {
        k = 6.0;
      } else if (d.properties.COCNAME === 'Alaska Balance of State CoC') {
        k = 4.0;
      } else if (d.properties.COCNAME === 'Maine Balance of State CoC') {
        k = 5.0;
      } else if (d.properties.Shape__Are <= 0.4) {
        k = 17.0;
      } else if (d.properties.Shape__Are > 0.4 && d.properties.Shape__Are <= 1) {
        k = 14.0;
      } else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
        k = 12.0;
      } else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
        k = 6.0;
      } else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
        k = 3.0;
      } else {
        k = 2.0;
      }
      map1Centered = d;
    } else {
      x = width / 2;
      y = height / 2;
      k = 1;
      map1Centered = null;
    }

    g.selectAll('path')
      .classed('active', map1Centered && d === map1Centered);

    g.transition()
      .duration(750)
      .attr('transform', `translate(${width / 2},${height / 2})scale(${k})translate(${-x},${-y})`)
      .style('stroke-width', `${0.25 / k}px`);
  }

  function getColor(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        if (tableData[i].total_homeless <= 0) {
          return ('#EEEEFF');
        }
        else if (tableData[i].total_homeless <= 200) {
          return ('#E1E1F4');
        }
        else if (tableData[i].total_homeless <= 300) {
          return ('#D6D6EA');
        }
        else if (tableData[i].total_homeless <= 500) {
          return ('#D0D0F0');
        }
        else if (tableData[i].total_homeless <= 700) {
          return ('#B8B8D1');
        }
        else if (tableData[i].total_homeless <= 1000) {
          return ('#ACACC6');
        }
        else if (tableData[i].total_homeless <= 1500) {
          return ('#9E9EBA');
        }
        else if (tableData[i].total_homeless <= 2000) {
          return ('#9595AD');
        }
        else if (tableData[i].total_homeless <= 2500) {
          return ('#8888A5');
        }
        else if (tableData[i].total_homeless <= 3000) {
          return ('#7F7FA0');
        }
        else if (tableData[i].total_homeless <= 3500) {
          return ('#72729B');
        }
        else if (tableData[i].total_homeless <= 4000) {
          return ('#656593');
        }
        else if (tableData[i].total_homeless <= 5000) {
          return ('#5E5D91');
        }
        else if (tableData[i].total_homeless <= 6000) {
          return ('#534E89');
        }
        else if (tableData[i].total_homeless <= 7000) {
          return ('#4D4484');
        }
        else if (tableData[i].total_homeless <= 8000) {
          return ('#45387A');
        }
        else if (tableData[i].total_homeless <= 12000) {
          return ('#392870');
        }
        else if (tableData[i].total_homeless <= 77000) {
          return ('#311C66');
        }

        return ('#FFAD29');
      }
    }
    return '#000000';
  }

    function createCoCTable(d8) {
      $('#panel_coc').empty();
      cocPanel.append('div')
        .attr('id', 'coc_info')
        .attr('height', infoHeight + margin.top + margin.bottom)
        .attr('width', '100%')
        .html(MakeCoCTable(d8));
    }

    function makeMapTitle(d9) {
      return mapTitle.html(`<h5>${d9.properties.coc_number}: ${d9.properties.COCNAME}</h5>`);
    }

    function StateBarChart(d) {
      d3.select('#panel_info > svg').remove();
      d3.select('#p2_4_cfda_legend_title').remove();
      d3.select('#p2_4_cfda_legend').remove();

      const cfdaLegend22 = d3.select('#p2_2_legend')
        .append('div')
        .attr('width', '100%')
        .attr('height', '30px')
        .attr('id', 'p2_2_cfda_legend');

      const cfdaLegend = d3.select('#p2_4_legend')
        .append('div')
        .attr('width', '100%')
        .attr('height', '30px')
        .attr('id', 'p2_4_cfda_legend');

      const cfdaColor = ['#324D5C', '#2A5DA8', '#F53855', '#E37B40', '#F0CA4D'];

      const cfdaLegendKeyValues = ['Housing', 'Education', 'Employment', 'Support Services', 'Health'];

      for (let i = 0; i < 5; i++) {
        const k = cfdaLegend22.append('div')
          .attr('id', 'p2_2_legend_key');

        k.append('div')
          .attr('id', 'p2_2_key')
          .style('position', 'relative')
          .append('svg')
          .attr('height', '40px')
          .attr('width', '53px')
          .append('circle')
          .attr('cx', 7)
          .attr('cy', 7)
          .attr('r', 7)
          .attr('height', 20)
          .attr('width', 20)
          .style('fill', () => cfdaColor[i]);

        k.append('div')
          .attr('id', 'p2_2_key_value')
          .style('position', 'relative')
          .style('color', 'blue')
          .html(`<p>${cfdaLegendKeyValues[i]}</p>`);


        const l = cfdaLegend.append('div')
          .attr('id', 'p2_4_legend_key');

        l.append('div')
          .attr('id', 'p2_4_key')
          .style('position', 'relative')
          .append('svg')
          .attr('height', '40px')
          .attr('width', '53px')
          .append('circle')
          .attr('cx', 7)
          .attr('cy', 7)
          .attr('r', 7)
          .attr('height', 20)
          .attr('width', 20)
          .style('fill', () => cfdaColor[i]);

        l.append('div')
          .attr('id', 'p2_4_key_value')
          .style('position', 'relative')
          .style('color', 'blue')
          .html(`<p>${cfdaLegendKeyValues[i]}</p>`);
      }

      d3.select('#p2_4_legend_title')
        .append('div')
        .attr('id', 'p2_4_cfda_legend_title')
        .attr('class', 'legend-header')
        .html(`<h5>Federal Programs Serving ${getState(d)}</h5>`);

      const p24MatrixSvg = d3.select('#panel_info').append('svg')
        .attr('width', '100%')
        .attr('height', mapHeight + margin.top + margin.bottom + 140)
        .attr('transform', `translate(${0},${10})`);

      p24MatrixSvg.call(p23BarTip);

      function filterStateBarChart(cfdaStateData) {
        return cfdaStateData.State_code === d.properties.STUSAB;
      }

      const initial = cfdaState.filter(filterStateBarChart);
      const initialBar = initial.filter(filterCfdaAmount);

      const axisMargin = 5;
      const xWidth = document.getElementById("panel_matrix").offsetWidth - 50;
      const barHeight = 20;
      const barPadding = 5;
      let labelWidth = 0;

      const max = d3.max(initialBar, (da) => da.fed_funding);

      const bar = p24MatrixSvg.selectAll('g')
        .data(initialBar)
        .enter()
        .append('g');

      bar.attr('class', 'bar')
        .attr('cx', 0)
        .style('fill', (db) => {
          if (db.category === 'Housing') {
            return '#324D5C';
          } else if (db.category === 'Health') {
            return '#F0CA4D';
          } else if (db.category === 'Education') {
            return '#2A5DA8';
          } else if (db.category === 'Support Services') {
            return '#E37B40';
          } else if (db.category === 'Employment') {
            return '#F53855';
          }
          return '#000000';
        })
        .attr('transform', (db, i) => `translate(5,${i * (barHeight + barPadding)})`)
        .on('mouseover', p23BarTip.show)
        .on('mouseout', p23BarTip.hide)
        .on('click', barClick);

      bar.append('text')
        .attr('class', 'label')
        .attr('x', 0)
        .attr('y', barHeight / 2)
        .attr('dy', '.35em') // vertical align middle
        .text((dc) => getProgram(dc))
        .each(() => {
          labelWidth = 75;
        });

      const scale = d3.scale.linear()
        .domain([0, max])
        .range([0, xWidth - labelWidth]);

      const p2XAxis = d3.svg.axis()
        .scale(scale)
        .tickSize((-p2MatrixSvg[0][0].attributes[1].nodeValue + axisMargin) - 50)
        .tickFormat((dg) => formatNumber(dg));

      bar.append('rect')
        .attr('transform', `translate(${labelWidth},0)`)
        .attr('margin-left', 5)
        .attr('height', barHeight)
        .attr('width', (de) => scale(de.fed_funding));

      p24MatrixSvg.insert('g', ':first-child')
        .attr('class', 'axisHorizontal2')
        .attr('transform', `translate(${80},${325})`)
        .call(p2XAxis)
        .selectAll('text')
        .attr('y', 10)
        .attr('x', 0)
        .attr('dy', '.35em')
        .attr('transform', 'rotate(-35)')
        .style('font-size', '12')
        .style('text-anchor', 'end');
    }


    function createContact(d) {
      $('#contact_panel').empty();
      $('#contact_info').remove();

      contactPanel.append('div')
        .attr('id', 'contact_info')
        .attr("height", infoHeight)
        .attr("width", infoWidth)
        .html(makeContactTable(d));
    }

    function p21ClickedP1(d) {
      let k;
      const centroid = p21Path.centroid(d);
      const x = centroid[0];
      const y = centroid[1];

      if (d.properties.COCNAME === 'Hawaii Balance of State CoC') {
        k = 6.0;
      } else if (d.properties.COCNAME === 'Alaska Balance of State CoC') {
        k = 4.0;
      } else if (d.properties.COCNAME === 'Maine Balance of State CoC') {
        k = 5.0;
      } else if (d.properties.Shape__Are <= 0.4) {
        k = 17.0;
      } else if (d.properties.Shape__Are > 0.4 && d.properties.Shape__Are <= 1) {
        k = 14.0;
      } else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
        k = 12.0;
      } else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
        k = 6.0;
      } else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
        k = 3.0;
      } else {
        k = 2.0;
      }
      map2Centered = d;

      m.selectAll('p2_1_path')
        .classed('active', map2Centered && d === map2Centered);

      m.transition()
        .duration(750)
        .attr('transform', `translate(${mapWidth / 1.35},${mapHeight / 1.1})scale(${k})translate(${-x},${-y})`)
        .style('stroke-width', `${0.15 / k}px`);
    }

  function filterCfdaAmount(x) {
    return x.fed_funding > 0;
  }

  function getValue(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        return OtherformatNumber(tableData[i].total_homeless);
      }
    }
    return 0;
  }

  function getSheltered(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        return OtherformatNumber(tableData[i].sheltered_homeless);
      }
    }
    return 0;
  }

  function getUnsheltered(d) {
    for (let i = 0; i < tableData.length; i++) {
      if (d.properties.coc_number === tableData[i].coc_number) {
        return OtherformatNumber(tableData[i].unsheltered_homeless);
      }
    }
    return 0;
  }

  useEffect(() => {
    GenMap();
  });


  return (<>
      <ControlBar>
        <Reset _resetClick={function(){
          setZoom(null);
        }}/>
        <Share location={props.location}/>
      </ControlBar>
      <div className="viz-container homeless-analysis">
        <div id="container" height="100%" width="100%"/>
      </div>
    </>
  )
}
