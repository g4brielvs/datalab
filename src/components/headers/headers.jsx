import React from 'react';
import GenericHeader from './genericHeader'

export class StorypageHeader extends React.Component {
    render() {
        return <GenericHeader isHome={false} />
    }
}

export class ToolpageHeader extends React.Component {
    render() {
        return <GenericHeader isHome={false} />
    }
}

export class HomepageHeader extends React.Component {
    render() {
        return <GenericHeader isHome={true} />
    }
}