import React, { Component } from 'react';
import Accordion from '../accordion/accordion';
import './sourcesMethodology.scss'

class SourcesMethodology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        e.stopPropagation();
        
        this.setState(state => ({
            open: !state.open
          }));
    }

    render() {
        return (
            <div className="sources-methodology">
            <Accordion title="Data Sources and Methodology">
                {this.props.children}
            </Accordion>
            </div>
        )
    }
}

export default SourcesMethodology
