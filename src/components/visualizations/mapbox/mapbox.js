import React, { useEffect } from 'react';
import * as $ from "jquery";
import mapboxgl from 'mapbox-gl';
import * as d3 from 'd3';
import { StaticQuery, graphql } from 'gatsby';
import axios from 'axios';


class Mapbox extends React.Component {
  constructor(props) {
    super(props);

//    let query = axios('../../../data/mapbox_data.geojson').then((res) => {
//      console.log(res);
//      return res;
//    });

    this.state = {
      data: null
    };
  };

  createMap() {
    let map = new mapboxgl.Map({
	container: 'collegesMap', // container id
	style: 'mapbox://styles/usaspending/cjvduv2b7fwlc1fnv9iyihkqo', // stylesheet location
	center: [-80.59179687498357, 40.66995747013945], // usa
	zoom: 3 // starting zoom (3 default)
    });

//    map.scrollZoom.disable();

  }



  componentDidMount() {
    console.log('mounted');
    console.log(this.data);
    mapboxgl.accessToken = 'pk.eyJ1IjoidXNhc3BlbmRpbmciLCJhIjoiY2l6ZnZjcmh0MDBtbDMybWt6NDR4cjR6ZSJ9.zsCqjJgrMDOA-i1RcCvGvg';
    this.createMap();
  };


  render() {
    return(
	<div id="collegesMap"></div>
    );
  };
};

export default Mapbox;
