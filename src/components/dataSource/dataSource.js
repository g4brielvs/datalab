import React, { Component } from "react"
import ExternalLink from '../externalLink/externalLink';
import getDataSource from './getDataSources';

class DataSource extends Component {
    render() {
        const data = getDataSource(this.props.dataKey);
        
        return <ExternalLink href={data.href} linkText={data.linkText} />
    }
}

export default DataSource
