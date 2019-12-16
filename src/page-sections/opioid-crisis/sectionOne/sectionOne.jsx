import React from 'react';
//import StoryHeading from '../../components/section-elements/story-heading/story-heading';
//import ControlBar from "../../components/control-bar/control-bar";

export default class SectionOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('mounting section one');
  };

  render() {
    return <p>
      section one hey
    </p>;
  };
};
