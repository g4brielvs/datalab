import React, { Component } from 'react';
import './info-banner.scss';
import './header.scss';
import './universal-banner.scss';
import './subnav.scss';

class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };

    this.debounce = null;

    this.toggle = this.toggle.bind(this);
  }

  toggle(target) {
    const delay = target === 'clear' ? 500 : 0,
      self = this;

    clearTimeout(this.debounce);

    this.debounce = setTimeout(function () {
      self.setState(state => ({
        active: target
      }));
    }, delay)
  }

  render() {
    return (
      <>
        <header className="official-banner">
          <ul className="official-banner__site-list">
            <li className="official-banner__site-item">
              <a className="official-banner__site-link" href="https://www.usaspending.gov">USAspending.gov</a>
            </li>
            <li className="official-banner__site-item official-banner__site-item_spacer" aria-hidden="true">
              |
                    </li>
            <li className="official-banner__site-item">
              <a className="official-banner__site-link" href="https://datalab.usaspending.gov">Data Lab</a>
            </li>
          </ul>
          <div className="official-banner__wrapper">
            <div className="official-banner__text">An official website of the U.S. government</div>
            <img className="official-banner__flag" src="/header/us_flag_small.png" alt="U.S. flag" />
          </div>
        </header>

        <header id="header">
          <div className="header__main">
            <a className="header-logo header-logo--init" href="/">
              <div className="header-logo__wrapper">
                <img src="/header-svg/data-lab-logo.svg" className="header-logo__img" id="master-logo" alt="DataLab logo" />
                <img src="/header-svg/two-line.png" className="header-logo__two-line header-logo__tagline active" id="two-line-tag" alt="Visualizations to help you understand government finance" />
              </div>
              <img src="/header-svg/one-line.png" className="header-logo__tagline" id="one-line-tag" alt="Visualizations to help you understand government finance" />
            </a>

            <nav className="header-nav">
              <span className="navbar-toggle" id="burger-navbar-toggle">
                <i className="fas fa-bars"> </i>
              </span>
              <ul className="nav" id="burger-menu">
                <li className="navListItem desktop-nav-item" data-target="analyses">
                  <a href="#"
                    onMouseEnter={this.toggle.bind(this, 'analyses')}
                    onMouseLeave={this.toggle.bind(this, 'clear')}
                  >ANALYSES
                    <img src="/header/arrow.svg" className="header__chevron" alt="down arrow" />
                  </a>
                </li>
                <li className="navListItem desktop-nav-item" data-target="resources">
                  <a href="#"
                    onMouseEnter={this.toggle.bind(this, 'resources')}
                    onMouseLeave={this.toggle.bind(this, 'clear')}
                  >RESOURCES</a>
                  <img src="/header/arrow.svg" className="header__chevron" alt="down arrow" />
                </li>
                <li className="navListItem desktop-nav-item active" data-target="ffg">
                  <a href="/americas-finance-guide/" id="ffgNavAnchor"
                    onMouseEnter={this.toggle.bind(this, 'afg')}
                    onMouseLeave={this.toggle.bind(this, 'clear')}
                  >AMERICA'S FINANCE GUIDE</a>
                  <img src="/header/arrow.svg" className="header__chevron" alt="down arrow" />
                </li>
              </ul>
            </nav>
          </div>

          <div className="header__sub">
            <ul className={this.state.active === 'analyses' ? 'dropdown-ul-section active' : 'dropdown-ul-section'} id="subnav-analyses"
              onMouseEnter={this.toggle.bind(this, 'analyses')}
              onMouseLeave={this.toggle.bind(this, 'clear')}>
              <li className="secondaryNavli"><a href="/dts.html">DTS Tracker</a></li>
              <li className="secondaryNavli"><a href="/contracts-over-time.html">Contract Spending Analysis</a></li>
              <li className="secondaryNavli"><a href="/federal-account-explorer.html">Federal Account Explorer</a></li>
              <li className="secondaryNavli"><a href="/contract-explorer.html">Contract Explorer</a></li>
              <li className="secondaryNavli"><a href="/homelessness-analysis.html">Homelessness Analysis</a></li>
              <li className="secondaryNavli"><a href="/budget-function.html">Budget Function</a></li>
              <li className="secondaryNavli"><a href="/federal-employees.html">Federal Employees</a></li>
              <li className="secondaryNavli"><a href="/competition-in-contracting.html">Competition in Contracting</a></li>
            </ul>
            <ul className={this.state.active === 'resources' ? 'dropdown-ul-section active' : 'dropdown-ul-section'} id="subnav-resources"
              onMouseEnter={this.toggle.bind(this, 'resources')}
              onMouseLeave={this.toggle.bind(this, 'clear')}>
              <li className="secondaryNavli"><a href="/assets/analyst-guide-1-2.pdf">Analyst Guide</a></li>
              <li className="secondaryNavli"><a href="http://api.usaspending.gov/">API Guide</a></li>
              <li className="secondaryNavli"><a href="https://www.fiscal.treasury.gov/data-transparency/DAIMS-current.html">Data Model</a></li>
              <li className="secondaryNavli"><a href="/student-innovators-toolbox.html">Student Innovator's Toolbox</a></li>
            </ul>
            <ul className={this.state.active === 'afg' ? 'dropdown-ul-section active' : 'dropdown-ul-section'} id="subnav-ffg"
              onMouseEnter={this.toggle.bind(this, 'afg')}
              onMouseLeave={this.toggle.bind(this, 'clear')}>
              <li className="secondaryNavli"><a href="/americas-finance-guide/">Overview</a></li>
              <li className="secondaryNavli"><a href="/americas-finance-guide/revenue">Revenue</a></li>
              <li className="secondaryNavli"><a href="/americas-finance-guide/spending">Spending</a></li>
              <li className="secondaryNavli"><a href="/americas-finance-guide/deficit">Deficit</a></li>
              <li className="secondaryNavli"><a href="/americas-finance-guide/debt">Debt</a></li>
              <li className="secondaryNavli">
                <button id="ffg-glossary-trigger">
                  <img src="/header/definition.svg" alt="definition icon" width="12px" /> <span className="text-element">Glossary</span>
                </button>
              </li>
            </ul>
          </div>

        </header>
      </>
    )
  }
}

export default SiteHeader