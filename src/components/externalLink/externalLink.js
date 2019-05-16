import React, { Component } from 'react';

class ExternalLink extends Component {
    render() {
        return <a href={this.props.href} target="_blank" rel="noopener noreferrer">{this.props.linkText}</a>
    }
}

export default ExternalLink