import React, {Component} from 'react';
import * as d3 from "d3";

class Test extends Component {

  constructor (props) {
    super(props);
    this.state = {
      color: "blue"
    };
  }

  componentDidMount () {

  }

  update_state_color () {
    this.setState({color: "red"});
  }

  update_dom_color_d3 () {
    d3.select("#bla").style("background", "green");
  }

  render () {

    return (
      <div id="bla" style={{ background: this.state.color }}>
        <h1>D3 / Gatsby / React Test</h1>
        <button
          type='button'
          onClick={() => this.update_state_color()}
        >
          Change background color state to red
        </button>
        <button
          type='button'
          onClick={() => this.update_dom_color_d3()}
        >
          Change background color accessing DOM to green
        </button>
      </div>
    );
  }
}

export default Test;
