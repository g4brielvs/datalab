import React from "react"
import "./page.scss"

import TagLine from '../../svgs/Logo-with-tagline.svg'
import NoTagLine from '../../svgs/Logo-without-tagline.svg'
import Arrow from '../../svgs/arrow.svg'

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
      top: 29,
      activeItem: ''
    };
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.returnActiveList = this.returnActiveList.bind(this);
  };

  componentDidMount() {

    if (this.props.isHome == true) {
      document.addEventListener('scroll', () => {
        let isSticky = window.scrollY > 100;
        if (isSticky !== this.state.isSticky) {
          this.setState({ isSticky })
        }
      });
    }

    document.addEventListener('scroll', () => {
      const max = 29;
      let top = max - window.pageYOffset;
      if (window.pageYOffset > max) {
        top = 0;
      }
      this.setState({ top });
    });

    // if we're NOT on the homepage...
    if (this.props.isHome == false) {
      this.setState({ isSticky: true });
    }
  };

  handleMouseLeave(e) {
    e.stopPropagation();
    this.setState({activeItem: ''});
  }

  returnActiveList(data) {
    return data.map((item) => {
      return (
      <li className='data-list-li'>
        <a className='data-list-a' href={item.link}>{item.name}</a>
      </li>
      );
    })

  }

  render() {

    const listItems = this.props.headerItems;
    let isSticky = this.state.isSticky;
    const top = this.state.top;
    const that = this; // used to preserve this inside nested map in render return

    let returnItems = listItems.map((item, i) => {
      return <li className='navListItem' key={i} onMouseOver={() => this.setState({activeItem: item})}>
        <a href='#' data-target={item}> {item} <span><Arrow /></span></a>
      </li>;
    });

    // the 'header__sub' region can be redone as a component 
    // needed to get working for now... go back and "componentize the table section"
    // TODO! xxx
    return (
      <header id="header" style={{ top: `${top}px` }}>
        <div className={`header__main ${isSticky ? `tight` : ``}`}>
          <div className={`header-logo__wrapper ${isSticky ? `row` : `col`}`}>
            <a href="/">
              <div>
                {isSticky ? (
                  <NoTagLine />
                ) : (
                  <TagLine />
                  )}
              </div>
            </a>

            <nav className={`header-nav ${isSticky ? `tight` : ``} ${this.props.isHome ? `` : `tight`}`}>
              <span className="navbar-toggle" id="burger-navbar-toggle">
                <i className="fas fa-bars"> </i>
              </span>
              <ul className="nav" id="burger-menu">
                {returnItems}
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="header__sub">
        {
        (() => {
          if (this.state.activeItem == 'Analyses') {
            return (
              <div className='data-list' onMouseLeave={this.handleMouseLeave}>
                <ul className='data-list-ul'>{this.returnActiveList(this.props.megamenuItems[0].analyses.slice(0, 3))}</ul>
                <ul className='data-list-ul'>{this.returnActiveList(this.props.megamenuItems[0].analyses.slice(3, 6))}</ul>
                <ul className='data-list-ul'>{this.returnActiveList(this.props.megamenuItems[0].analyses.slice(6, 9))}</ul>
              </div>
            );
          }
          if (this.state.activeItem == 'DataLab Express') {
            return (
              <div className='data-list' onMouseLeave={this.handleMouseLeave}>
                <ul className='data-list-ul'>{this.returnActiveList(this.props.megamenuItems[1].express)}</ul>
              </div>
            );
          }
          if (this.state.activeItem == "America's Finance Guide") {
            return (
              <div className='data-list' onMouseLeave={this.handleMouseLeave}>
                <section className='data-list-section'>
                  <h4 className='section-title'>Overview</h4>
                  <ul className='data-list-ul--ffg'>{this.returnActiveList(this.props.megamenuItems[2].ffg.slice(0,1))}</ul>
                </section>
                <section className='data-list-section'>
                  <h4 className='section-title'>Revenue</h4>
                  <ul className='data-list-ul--ffg'>{this.returnActiveList(this.props.megamenuItems[2].ffg.slice(1,5))}</ul>
                </section>
                <section className='data-list-section'>
                  <h4 className='section-title'>Spending</h4>
                  <ul className='data-list-ul--ffg'>{this.returnActiveList(this.props.megamenuItems[2].ffg.slice(5,9))}</ul>
                </section>
                <section className='data-list-section'>
                  <h4 className='section-title'>Deficit</h4>
                  <ul className='data-list-ul--ffg'>{this.returnActiveList(this.props.megamenuItems[2].ffg.slice(9,12))}</ul>
                </section>
                <section className='data-list-section'>
                  <h4 className='section-title'>Debt</h4>
                  <ul className='data-list-ul--ffg'>{this.returnActiveList(this.props.megamenuItems[2].ffg.slice(12,16))}</ul>
                </section>
              </div>
            );
          }
          if (this.state.activeItem == "Resources") {
            return (
              <div className='data-list' onMouseLeave={this.handleMouseLeave}>
                <ul className='data-list-ul'>{this.returnActiveList(this.props.megamenuItems[3].resources.slice(0,2))}</ul>
                <ul className='data-list-ul'>{this.returnActiveList(this.props.megamenuItems[3].resources.slice(2,4))}</ul>
              </div>
            );
          }
          if (this.state.activeItem == "Glossary") {
            return (
              <div className='data-list' onMouseLeave={this.handleMouseLeave}>
                <ul className='data-list-ul'>{this.returnActiveList(this.props.megamenuItems[4].glossary)}</ul>
              </div>
            );
          }
        })()
      }
        </div>

      </header>
    );
  }
};

export default PageHeader;
