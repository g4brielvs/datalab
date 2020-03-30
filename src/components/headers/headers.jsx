import React from 'react';
import GenericHeader from './genericHeader';

export class StorypageHeader extends React.Component {
    render() {
      return <GenericHeader isHome={false} />;
    }
}

export class ToolpageHeader extends React.Component {
    render() {
      return <GenericHeader isHome={false} />;
    }
}

export class HomepageHeader extends React.Component {
    render() {
      return <GenericHeader isHome={true} />;
    }
}

// not to be confused with homepage. (HeaderOnly layout!)
export class HeadOnly extends React.Component {
  render() {
    return <GenericHeader isHome={false} />;
  }
}

export class FAQHeader extends React.Component {
  render() {
    return <GenericHeader isHome={false} />;
  }
}

export class DsmHeader extends React.Component {
  render() {
    return <GenericHeader isHome={false} />;
  }
}

export class AFGHeader extends React.Component {
	render() {
		return <GenericHeader isHome={false} />;
	}
}

