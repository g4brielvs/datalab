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
      hiddenNav: true,
    };
    //this.fixNav = this.fixNav.bind(this);
  };

  componentDidMount() {

    document.addEventListener('scroll', () => {
      const isSticky = window.scrollY > 100;
      if (isSticky !== this.state.isSticky) {
        this.setState({ isSticky })
      }
      console.log(this.state);
    });

    document.addEventListener('scroll', () => {
      const max = 29;
      let top = max - window.pageYOffset;
      if (window.pageYOffset > max) {
        top = 0;
      }
      this.setState({top});
    });
  };

  
  componentWillUnmount() {
    document.removeEventListener('scroll');
  }

  render() {
    let listItems = this.props.headerItems;
    let returnItems = listItems.map(function (item) {
      return <li className='navListItem'>
        <a href='#'>{item} <span><Arrow /></span></a>
      </li>;
    });

    const isSticky = this.state.isSticky;
    const top = this.state.top

    return (
      <header id="header" style={{top: `${top}px`}}>
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
          <ul className="dropdown-ul-section" id="subnav-analyses">
            <li className="secondaryNavli"><a href="/colleges-and-universities.html">Colleges and Universities</a></li>
            <li className="secondaryNavli"><a href="/dts.html">DTS Tracker</a></li>
            <li className="secondaryNavli"><a href="/contracts-over-time.html">Contract Spending Analysis</a></li>
            <li className="secondaryNavli"><a href="/federal-account-explorer.html">Federal Account Explorer</a></li>
            <li className="secondaryNavli"><a href="/contract-explorer.html">Contract Explorer</a></li>
            <li className="secondaryNavli"><a href="/homelessness-analysis.html">Homelessness Analysis</a></li>
            <li className="secondaryNavli"><a href="/budget-function.html">Budget Function</a></li>
            <li className="secondaryNavli"><a href="/federal-employees.html">Federal Employees</a></li>
            <li className="secondaryNavli"><a href="/competition-in-contracting.html">Competition in Contracting</a></li>
          </ul>
          <ul className="dropdown-ul-section" id="subnav-resources">
            <li className="secondaryNavli"><a href="/assets/analyst-guide-1-2.pdf">Analyst Guide</a></li>
            <li className="secondaryNavli"><a href="http://api.usaspending.gov/">API Guide</a></li>
            <li className="secondaryNavli"><a href="https://www.fiscal.treasury.gov/data-transparency/DAIMS-current.html">Data Model</a></li>
            <li className="secondaryNavli"><a href="/student-innovators-toolbox.html">Student Innovator's Toolbox</a></li>
          </ul>
          <ul className="dropdown-ul-section" id="subnav-ffg">
            <li className="secondaryNavli"><a href="/americas-finance-guide/">Overview</a></li>
            <li className="secondaryNavli"><a href="/americas-finance-guide/revenue/">Revenue</a></li>
            <li className="secondaryNavli"><a href="/americas-finance-guide/spending/">Spending</a></li>
            <li className="secondaryNavli"><a href="/americas-finance-guide/deficit/">Deficit</a></li>
            <li className="secondaryNavli"><a href="/americas-finance-guide/debt/">Debt</a></li>
            <li className="secondaryNavli">
            </li>
          </ul>
        </div>

      </header>
    );
  }
};



export default PageHeader;
