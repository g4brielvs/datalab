import React from "react"
import "./page.scss"

//import datalabLogo from "../logos/datalab";
import TagLine from '../../svgs/Logo-with-tagline.svg'

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyHeader: true,
      hiddenNav: true,
    };
  };

  componentWillMount() {
    console.log('page header here');
  };

  render() {
    return (
      <header id="header">
        <div className="header__main">
          <a className="header-logo header-logo--init" href="/">
            <div className="header-logo__wrapper">
              <TagLine/>
            </div>
          </a>

          <nav className="header-nav">
            <span className="navbar-toggle" id="burger-navbar-toggle">
              <i className="fas fa-bars"> </i>
            </span>
            <ul className="nav" id="burger-menu">
              <li className="navListItem desktop-nav-item" data-target="analyses">
                <a href="#">ANALYSES</a>
              </li>
              <li className="navListItem desktop-nav-item" data-target="resources">
                <a href="#">RESOURCES</a>
              </li>
              <li className="navListItem desktop-nav-item" data-target="ffg">
                <a href="/americas-finance-guide/" id="ffgNavAnchor">AMERICA'S FINANCE GUIDE</a>
              </li>
            </ul>
          </nav>
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
