import React from "react"
import ReactDOM from 'react-dom';
import "./page.scss"

//import datalabLogo from "../logos/datalab";
import TagLine from '../../svgs/Logo-with-tagline.svg'
import NoTagLine from '../../svgs/Logo-without-tagline.svg'
import Arrow from '../../svgs/arrow.svg'

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
      top: 29,
      showAnalysesUl: false,
      showExpressUl: false,
      showFFGUl: false,
      showResourcesUl: false,
      showGlossaryUl: false,
      mouseOnUlPanel: false,
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleAnalyses = this.handleAnalyses.bind(this);
    this.handleExpress = this.handleExpress.bind(this);
    this.handleFFG = this.handleFFG.bind(this);
    this.handleResources = this.handleResources.bind(this);
    this.handleGlossary = this.handleGlossary.bind(this);
    this.handleUlOut = this.handleUlOut.bind(this);
  };

  componentDidMount() {

    document.addEventListener('scroll', () => {
      const isSticky = window.scrollY > 100;
      if (isSticky !== this.state.isSticky) {
        this.setState({ isSticky })
      }
    });

    document.addEventListener('scroll', () => {
      const max = 29;
      let top = max - window.pageYOffset;
      if (window.pageYOffset > max) {
        top = 0;
      }
      this.setState({ top });
    });
  };

  componentWillUnmount() {
    document.removeEventListener('scroll');
  }

  handleMouseOver(e) {
    let target = e.target.getAttribute('data-target');
    switch (target) {
      case "Analyses":
        this.handleAnalyses();
        break;
      case "DataLab Express": 
        this.handleExpress();
        break;
      case "America's Finance Guide":
        this.handleFFG();
        break;
      case "Resources":
        this.handleResources();
        break;
      case "Glossary":
        this.handleGlossary();
        break;
    }
  }

    handleAnalyses() {
      console.log('handle Analyses');
      this.setState({
          showAnalysesUl: true,
          showExpressUl: false,
          showFFGUl: false,
          showResourcesUl: false,
          showGlossaryUl: false,
        });
    }

    handleExpress() {
      console.log('handle express');
      this.setState({
        showExpressUl: true,
        showAnalysesUl: false,
        showFFGUl: false,
        showResourcesUl: false,
        showGlossaryUl: false,
      });
    }

    handleFFG() {
      console.log('handle FFG');
      this.setState({
        showExpressUl: false,
        showAnalysesUl: false,
        showFFGUl: true,
        showResourcesUl: false,
        showGlossaryUl: false,
      });
    }

    handleResources() {
      console.log('handle resources');
      this.setState({
        showExpressUl: false,
        showAnalysesUl: false,
        showFFGUl: false,
        showResourcesUl: true,
        showGlossaryUl: false,
      });
    }

    handleGlossary() {
      console.log('handle glossary');
      this.setState({
        showExpressUl: false,
        showAnalysesUl: false,
        showFFGUl: false,
        showResourcesUl: false,
        showGlossaryUl: true,
      });
    }

    handleUlOut(e) {
      e.stopPropagation();
      this.setState({
        showExpressUl: false,
        showAnalysesUl: false,
        showFFGUl: false,
        showResourcesUl: false,
        showGlossaryUl: false,
      });
    }


  render() {

    const listItems = this.props.headerItems;
    const isSticky = this.state.isSticky;
    const top = this.state.top;
    const that = this; // used to preserve this inside nested map in render return

    console.log(this.state);

    let returnItems = listItems.map((item, i) => {
      return <li className='navListItem' key={i} onMouseOver={that.handleMouseOver}>
        <a href='#' data-target={item}> {item} <span><Arrow /></span></a>
      </li>;
    });

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

            <nav className={`header-nav ${isSticky ? `tight` : ``}`}>
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
          <ul className={`ul-dropdown ${this.state.showAnalysesUl ? `active`: ``}`} id='subnav-analysis' onMouseLeave={this.handleUlOut}>
            {this.props.megamenuItems[0].analyses.map(function (x, i) {
              // consider going back to this whole section and rewriting
              // the whole data structure itself. (props) Should be able to just
              // loop through them all with perhaps nested forEach and Map
              return <li className='secondaryNavli' key={i}><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
          <ul className={`ul-dropdown ${this.state.showExpressUl ? `active`: ``}`} id='subnav-express' onMouseLeave={this.handleUlOut}>
            {this.props.megamenuItems[1].express.map(function (x, i) {
              return <li className='secondaryNavli' key={i} ><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
          <ul className={`ul-dropdown ${this.state.showFFGUl ? `active`: ``}`} id='subnav-ffg' onMouseLeave={this.handleUlOut}>
            {this.props.megamenuItems[2].ffg.map(function (x, i) {
              return <li className='secondaryNavli' key={i} ><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
          <ul className={`ul-dropdown ${this.state.showResourcesUl ? `active`: ``}`} id='subnav-resources' onMouseLeave={this.handleUlOut}>
            {this.props.megamenuItems[3].resources.map(function (x, i) {
              return <li className='secondaryNavli' key={i} ><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
          <ul className={`ul-dropdown ${this.state.showGlossaryUl ? `active`: ``}`} id='subnav-glossary' ref='Glossary' onMouseLeave={this.handleUlOut}>
            {this.props.megamenuItems[4].glossary.map(function (x, i) {
              return <li className='secondaryNavli' key={i} ><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
        </div>

      </header>
    );
  }
};



export default PageHeader;
