import React from "react"
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
      showAnalysesTable: false,
      showExpressTable: false,
      showFFGTable: false,
      showResourcesTable: false,
      showGlossaryTable: false,
      showSomething: ''
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleAnalyses = this.handleAnalyses.bind(this);
    this.handleExpress = this.handleExpress.bind(this);
    this.handleFFG = this.handleFFG.bind(this);
    this.handleResources = this.handleResources.bind(this);
    this.handleGlossary = this.handleGlossary.bind(this);
    this.handleTableOut = this.handleTableOut.bind(this);
    this.renderFFGtd = this.renderFFGtd.bind(this);
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
      this.setState({isSticky: true});
    }
  };

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
    this.setState({
      showAnalysesTable: true,
      showExpressTable: false,
      showFFGTable: false,
      showResourcesTable: false,
      showGlossaryTable: false,
    });
  }

  handleExpress() {
    this.setState({
      showExpressTable: true,
      showAnalysesTable: false,
      showFFGTable: false,
      showResourcesTable: false,
      showGlossaryTable: false,
    });
  }

  handleFFG() {
    this.setState({
      showExpressTable: false,
      showAnalysesTable: false,
      showFFGTable: true,
      showResourcesTable: false,
      showGlossaryTable: false,
    });
  }

  handleResources() {
    this.setState({
      showExpressTable: false,
      showAnalysesTable: false,
      showFFGTable: false,
      showResourcesTable: true,
      showGlossaryTable: false,
    });
  }

  handleGlossary() {
    this.setState({
      showExpressTable: false,
      showAnalysesTable: false,
      showFFGTable: false,
      showResourcesTable: false,
      showGlossaryTable: true,
    });
  }

  handleTableOut(e) {
    e.stopPropagation();
    this.setState({
      showExpressTable: false,
      showAnalysesTable: false,
      showFFGTable: false,
      showResourcesTable: false,
      showGlossaryTable: false,
    });
  }

  renderFFGtd(name) {
    let data = this.props.megamenuItems[2].ffg;
    let dataFilter = data.filter(x => x.header == name)
    return dataFilter.map((item) => {
      return (
        <td className='data-table-td'>
          <a href={item.link}>{item.name}</a>
        </td>
      );
    })
  }

  renderTabletd(data) {
    return data.map((item) => {
      return (
        <td className='data-table-td'>
          <a href={item.link}>{item.name}</a>
        </td>
      );
    })
  }

  render() {

    console.log(this.state.showSomething);

    const listItems = this.props.headerItems;
    let isSticky = this.state.isSticky;
    const top = this.state.top;      
    const that = this; // used to preserve this inside nested map in render return

    let returnItems = listItems.map((item, i) => {
      return <li className='navListItem' key={i} onMouseOver={that.handleMouseOver}>
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
          <table className={`data-table ${this.state.showAnalysesTable ? `active-table` : ``}`} onMouseLeave={this.handleTableOut}>
            <tbody className='data-table-body'>
              <tr className='data-row'>{this.renderTabletd(this.props.megamenuItems[0].analyses.slice(0, 3))}</tr>
              <tr className='data-row'>{this.renderTabletd(this.props.megamenuItems[0].analyses.slice(3, 6))}</tr>
              <tr className='data-row'>{this.renderTabletd(this.props.megamenuItems[0].analyses.slice(6, 9))}</tr>
            </tbody>
          </table>

          <table className={`data-table ${this.state.showExpressTable ? `active-table` : ``}`} onMouseLeave={this.handleTableOut}>
            <tbody className='data-table-body'>
              <tr className='data-row'>{this.renderTabletd(this.props.megamenuItems[1].express)}</tr>
            </tbody>
          </table>

          <table className={`data-table ${this.state.showFFGTable ? `active-table` : ``}`} onMouseLeave={this.handleTableOut}>
            <tr className='header-row'>
              <th className='data-table-header'>Overview</th>
              <th className='data-table-header'>Revenue</th>
              <th className='data-table-header'>Spending</th>
              <th className='data-table-header'>Deficit</th>
              <th className='data-table-header'>Debt</th>
            </tr>
            <tbody className='data-table-body'>
              <tr className='data-row'>{this.renderFFGtd('Overview')}</tr>
              <tr className='data-row'>{this.renderFFGtd('Revenue')}</tr>
              <tr className='data-row'>{this.renderFFGtd('Spending')}</tr>
              <tr className='data-row'>{this.renderFFGtd('Deficit')}</tr>
              <tr className='data-row'>{this.renderFFGtd('Debt')}</tr>
            </tbody>
          </table>

          <table className={`data-table ${this.state.showResourcesTable ? `active-table` : ``}`} onMouseLeave={this.handleTableOut}>
            <tbody className='data-table-body'>
              <tr className='data-row'>{this.renderTabletd(this.props.megamenuItems[3].resources).slice(0, 2)}</tr>
              <tr className='data-row'>{this.renderTabletd(this.props.megamenuItems[3].resources).slice(2, 4)}</tr>
            </tbody>
          </table>

          <table className={`data-table ${this.state.showGlossaryTable ? `active-table` : ``}`} onMouseLeave={this.handleTableOut}>
            <tbody className='data-table-body'>
              <tr className='data-row'>{this.renderTabletd(this.props.megamenuItems[4].glossary)}</tr>
            </tbody>
          </table>

        </div>

      </header>
    );
  }
};

export default PageHeader;
