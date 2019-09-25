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
      isMouseOverUlorLi: false,
      showAnalysesUl: false,
      showAnalysesUl: false,
      showAnalysesUl: false,
      showAnalysesUl: false,
      showAnalysesUl: false,
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleULMouseOver = this.handleULMouseOver.bind(this);
    this.handleULMouseOut = this.handleULMouseOut.bind(this);
    this.handleInnerLiOver = this.handleInnerLiOver.bind(this);
    this.handleInnerLiOut = this.handleInnerLiOut.bind(this);
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
    let options = ['Analyses', 'DataLab Express', "America's Finance Guide", 'Resources', 'Glossary'];
    let target = e.target.getAttribute('data-target');
    let node = this.refs[target];
    let newOptions = options.filter(x => x != target);
    node.classList.add('active');

    // make sure if we mouse over another one
    // we dont ever have 2 active states!
    newOptions.forEach(x => {
      this.refs[x].classList.remove('active');
    });
  }

  handleMouseOut(e) {
    let target = e.target.getAttribute('data-target');
    let node = this.refs[target];

    if (this.state.isMouseOverUlorLi) {      
      setTimeout(() => {
        node.classList.remove('active');
      }, 700)    
    }
  }

  handleULMouseOver(e) {
    this.setState({isMouseOverUlorLi: true});
    console.log('ul mouseover');
    let target = e.target.getAttribute('data-ul-target');
    let node = this.refs[target];
    node.classList.add('active');
  }

  handleULMouseOut(e) {
    this.setState({isMouseOverUlorLi: false});
    let target = e.target.getAttribute('data-ul-target');
    let node = this.refs[target];
  }

  handleInnerLiOver(e) {
    console.log('li mouseover');
    this.setState({isMouseOverUlorLi: true});
  }

  handleInnerLiOut(e) {
    console.log('we out this bitch li');
    this.setState({isMouseOverUlorLi: false});
    let target = e.target.getAttribute('data-target');
    let node = this.refs[target];
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(node);
    if (this.state.isMouseOverUlorLi) {
      setTimeout(() => {
        node.classList.remove('active');
      }, 700)
    }
  }
  
  render() {

    let listItems = this.props.headerItems;
    console.log(this.state);    

    let returnItems = listItems.map((item, i) => {
      return <li className='navListItem' key={i} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
        <a href='#' data-target={item} ref={item}> {item} <span><Arrow /></span></a>
      </li>;
    });

    const isSticky = this.state.isSticky;
    const top = this.state.top;
    let that = this; // used to preserve this inside nested map in render return

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
          <ul className={`ul-dropdown`} id='subnav-analysis' ref='Analyses' data-ul-target='Analyses' onMouseEnter={this.handleULMouseOver} onMouseLeave={this.handleULMouseOut}>
            {this.props.megamenuItems[0].analyses.map(function (x, i) {
              // consider going back to this whole section and rewriting
              // the whole data structure itself. (props) Should be able to just
              // loop through them all with perhaps nested forEach and Map
              return <li className='secondaryNavli' key={i} ref='Analyses' data-target='Analyses' onMouseEnter={that.handleInnerLiOver} onMouseLeave={that.handleInnerLiOut}><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
          <ul className={`ul-dropdown`} id='subnav-express' ref='DataLab Express' onMouseEnter={this.handleULMouseOver} onMouseEnter={this.handleULMouseOut} data-ul-target='DataLab Express'>
            {this.props.megamenuItems[1].express.map(function (x, i) {
              return <li className='secondaryNavli' ref='DataLab Express' data-target='DataLab Express' key={i}><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
          <ul className='ul-dropdown' id='subnav-ffg' ref="America's Finance Guide" data-ul-target="America's Finance Guide" onMouseOver={this.handleULMouseOver} onMouseOut={this.handleULMouseOut}>
            {this.props.megamenuItems[2].ffg.map(function (x, i) {
              return <li className='secondaryNavli' ref="America's Finance Guide" data-target="America's Finance Guide" key={i}><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
          <ul className='ul-dropdown' id='subnav-resources' ref='Resources' data-ul-target='Resources' onMouseOver={this.handleULMouseOver} onMouseOut={this.handleULMouseOut}>
            {this.props.megamenuItems[3].resources.map(function (x, i) {
              return <li className='secondaryNavli' ref="Resources" data-target='Resources' key={i}><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
          <ul className='ul-dropdown' id='subnav-glossary' ref='Glossary' data-ul-target='Glossary' onMouseOver={this.handleULMouseOver} onMouseOut={this.handleULMouseOut}>
            {this.props.megamenuItems[4].glossary.map(function (x, i) {
              return <li className='secondaryNavli' ref="Glossary" data-target='Glossary' key={i}><a href={x.link}> {x.name}</a></li>;
            })}
          </ul>
        </div>

      </header>
    );
  }
};



export default PageHeader;
