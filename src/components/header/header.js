import React, {Component} from 'react';
import * as $ from "jquery";
import "./header.scss"

class Header extends Component {

  constructor (props) {
    super(props);

    this.headerHeight = null;
    this.availableNav = [];
    this.subNavHideTimeout = null;
    this.headerContainers = {};
    this.mobileContainers = {};
    this.desktopMin = 956;
    this.superMobile = 450;
    this.twolineCollision = 1350;
    this.logoMarginOffset = 149;

    // Mini-Navs
    this.analysesNav = '.secondaryNavAnalyses';
    this.resourcesNav = '.secondaryNavResources';
    this.ffgNav = '.secondaryNavFFG';

    // Main Header Li's for hover
    this.analysesText = '.analysesText';
    this.resourcesText = '.resourcesText';
    this.ffgText = '.ffgText';
  }

  componentDidMount() {
    $(this).scrollTop(0); // on refresh - put page top always
    const isLanding = $('body').hasClass('landing');

    this.setContainers();
    this.setCurrentSectionActive();
    this.setHeaderHeight();
    //    adaptToHeaderHeight();
    this.setMobileContainers();
    this.listAvailableNav();
    this.setDropdownHeaderSection();
    this.setMobileBurger();
//    toggleIcons(); // add this back when using "x" for mobile resize
    this.triggerMobileEvents();
    this.setTagVisibility(isLanding);

    window.addEventListener('resize', function(){
      // this.setTagVisibility(isLanding);
      // this.setHeaderHeight();
      //      adaptToHeaderHeight();
    });

    if (isLanding) {
      this.repositionHeaderItems('moveLogo');
      this.setInitialLogoPosition();
    } else {
      this.repositionHeaderItems();
    }
  }


  setMobileContainers() {
    this.mobileContainers.menu = $('#mobileSection');
    this.mobileContainers.burgerMenu = $('#burger-navbar-toggle');
    this.mobileContainers.analysesAnchor = $('#analysesAnchor');
    this.mobileContainers.resourcesAnchor = $('#resourcesAnchor');
    this.mobileContainers.ffgAnchor = $('#ffgAnchor');
    this.mobileContainers.mobileAnalyses = $('#mobileAnalyses');
    this.mobileContainers.mobileResources = $('#mobileResources');
    this.mobileContainers.mobileFFG = $('#mobileFFG');
    this.mobileContainers.mobileNav = $('#mobile-nav');
    this.mobileContainers.analysesAnchor = $('#analysesAnchor');
    this.mobileContainers.resourcesAnchor = $('#resourcesAnchor');
    this.mobileContainers.ffgAnchor = $('#ffgAnchor');
  }

  setContainers() {
    this.headerContainers.header = $('#header');
    this.headerContainers.header__main = $('.header__main');
    this.headerContainers.header__sub = $('.header__sub');
    this.headerContainers.headerLogo = $('.header-logo');
    this.headerContainers.masterLogo = $('#master-logo');
    this.headerContainers.oneTag = $('#one-line-tag');
    this.headerContainers.twoTag = $('#two-line-tag');
    this.headerContainers.navLi = $('.navListItem');
    this.headerContainers.desktopNavItem = $('.desktop-nav-item');
    this.headerContainers.dropdown = $('.dropdown-ul-section');
    this.headerContainers.body = $('body');
  }

  forceLogoLeft(width) {
    this.headerContainers.headerLogo.css('left', '0%').css('margin-left', '0px');
    this.headerContainers.twoTag.css('opacity', '1');
  }

  fixNav(y) {
    const max = 29;
    let yOffset = max - y;
    if (y > max) {
      yOffset = 0;
    }
    this.headerContainers.header.css('top', yOffset + 'px');
  }

  fixMobileNav(y, width) {
    const max = 110;
    if (width >= this.superMobile) {
      let yOffset = max - y;
      if (y > 29) {
        yOffset = 80;
      }
      this.mobileContainers.mobileNav.css('top', yOffset + 'px');
    }
  }

  fixSuperMobileNav(y, width) {
    const max = 110;
    if (width <= this.superMobile) {
      let yOffset = max - y;
      if (y > 29) {
        yOffset = 80;
      }
      this.mobileContainers.mobileNav.css('top', yOffset + 'px');
    }
  }

  toggleIcons() {
    $('.navbar-toggle').click(function(){
      $(this).find('i').toggleClass('fa-times');
    });
  }

  triggerMobileEvents() {
    this.mobileContainers.analysesAnchor.click(function() {
      this.mobileContainers.mobileAnalyses.toggle('slow');
    });

    this.mobileContainers.resourcesAnchor.click(function() {
      this.mobileContainers.mobileResources.toggle('slow');
    });

    this.mobileContainers.ffgAnchor.click(function() {
      this.mobileContainers.mobileFFG.toggle('slow');
    });

  }


  moveLogo(y, width) {
    const max = 200;
    let p = 50;
    let steps = p / max; // .25
    let leftPos = (max - y) * steps;

    let mSteps = -this.logoMarginOffset / max;

    let leftMargin = 0 - (max - y) * mSteps;

    if (width > this.desktopMin && width < this.twolineCollision) {
      this.forceLogoLeft(width);
      return;
    }

    if (width < this.desktopMin) {
      this.headerContainers.headerLogo.css('left', '50%').css('margin-left', this.logoMarginOffset + 'px');
      return;
    }

    leftPos = leftPos < 0 ? 0 : leftPos;
    leftMargin = leftMargin > 0 ? 0 : leftMargin;

    this.headerContainers.headerLogo.css('left', leftPos + '%').css('margin-left', leftMargin + 'px');

    if (width >= 1115) {
      this.transitionTags(max, y);
    }

  }

  setTagVisibility(isLanding){
    const w = window.innerWidth;
    const hasTight = this.headerContainers.header__main.hasClass('tight');

    if (w <= 1115) {
      this.headerContainers.oneTag.removeClass('active');
      this.headerContainers.twoTag.removeClass('active');
    } else if (w < this.twolineCollision || !isLanding) {
      this.headerContainers.oneTag.removeClass('active');
      this.headerContainers.twoTag.addClass('active');
    } else {
      this.headerContainers.oneTag.addClass('active');
      this.headerContainers.twoTag.removeClass('active');
    }

    //     if (hasTight) {
    //       console.log(hasTight, 'force logo left');
    //       forceLogoLeft(w);
    // //      headerContainers.oneTag.addClass()

    //     }

    // if (hasTight && w <= 1115) {
    //   console.log('tight header remove');
    //   headerContainers.oneTag.removeClass('active');
    //   headerContainers.twoTag.removeClass('active');
    // } else if (hasTight && w < twolineCollision || !isLanding) {
    //   headerContainers.oneTag.removeClass('active');
    //   headerContainers.twoTag.addClass('active');
    // }

  }

  transitionTags(scrollMax, y) {

    const halfMax = scrollMax / 2;
    const min = halfMax - 10;
    const max = halfMax + 10;
    const range = max - min;
    let steps = 1 / range;
    let ratio;
    if (y >= min && y <= max)  {
      ratio = (y - min) * steps;
      this.headerContainers.twoTag.addClass('active').css('opacity', ratio);
      this.headerContainers.oneTag.css('opacity', 1 - ratio).addClass('active');
    } else if (y < min) {
      this.headerContainers.oneTag.css('opacity', '1').addClass('active');
      this.headerContainers.twoTag.css('opacity', '0').removeClass('active');
    } else {
      this.headerContainers.oneTag.css('opacity', '0').removeClass('active');
      this.headerContainers.twoTag.css('opacity', '1').addClass('active');
    }

  }


  setHeaderOpacity(y, width) {
    const low = 250;
    const high = 300;
    const range = high - low;

    let opacity = 1;
    let yOffset = y - low;

    if (y >= low && width >= this.desktopMin) {
      opacity = 1 - (yOffset / range);
      opacity = opacity < 0 ? 0 : opacity;
    }

    this.headerContainers.header.css('opacity', opacity);
  }

  setMobileBurger() {
    $('#burger-navbar-toggle').click(function() {
      this.mobileContainers.menu.toggle('slow');
    });
  }

  displaySubNav(event, leave) {
    let targetElement;
    const targetId = $(event.target).data('target');
    if (!targetId) {
      targetElement = $(event.target);
    } else {
      targetElement = $('#subnav-' + targetId);
    }

    if (leave) {
      targetElement.removeClass('active');
      return;
    }
    targetElement.addClass('active');
  }

  showThisNav(triggerId) {
    clearTimeout(this.subNavHideTimeout);
    if (!triggerId) {
      return;
    }
    this.availableNav.forEach(function(id) {
      const targetSubNav = $('#subnav-' + id);
      if (id == triggerId) {
        targetSubNav.addClass('active');
      } else {
        targetSubNav.removeClass('active');
      }
    });
  }


  manageSubNav(e) {
    const triggerId = $(this).data('target');

    if (e.type === 'mouseover') {
      this.showThisNav(triggerId);
      // show then nav!
    } else {
      this.subNavHideTimeout = setTimeout(this.killAllSubNavs, 600);
      // kill everything!
    }
  }

  killAllSubNavs() {
    this.headerContainers.dropdown.removeClass('active');
  }

  listAvailableNav() {
    this.headerContainers.desktopNavItem.each(function(){
      this.availableNav.push($(this).data('target'));
    });
  }

  setDropdownHeaderSection() {

    this.headerContainers.navLi.on('mouseover mouseleave', this.manageSubNav);
    this.headerContainers.dropdown.on('mouseover mouseleave', this.manageSubNav);

    /* Secondary Ul dropdown Section */
    $(this.analysesText).mouseover(function() {
      $(this.analysesNav).css('display', 'block');
      $(this.resourcesNav).css('display', 'none');
      $(this.ffgNav).css('display', 'none');
    });

    $(this.resourcesText).mouseover(function() {
      $(this.resourcesNav).css('display', 'block');
      $(this.analysesNav).css('display', 'none');
      $(this.ffgNav).css('display', 'none');
    });

    $(this.ffgText).mouseover(function() {
      $(this.ffgNav).css('display', 'block');
      $(this.analysesNav).css('display', 'none');
      $(this.resourcesNav).css('display', 'none');
    });

  }

  repositionHeaderItems(shouldMoveLogo) {

    window.addEventListener('scroll', function() {
      let y = window.pageYOffset;
      let width = window.innerWidth;
      this.fixNav(y);
      this.fixMobileNav(y, width);
      this.fixSuperMobileNav(y, width);
      if (shouldMoveLogo) {
        this.moveLogo(y, width);
      }
      if (y > 200 && width >= this.desktopMin) {
        this.headerContainers.header.addClass('tight');
        this.headerContainers.header__main.addClass('tight');
        this.headerContainers.body.addClass('tight-nav');
      } else {
        this.headerContainers.header.removeClass('tight');
        this.headerContainers.header__main.removeClass('tight');
        this.headerContainers.body.removeClass('tight-nav');
      }
    });

    if (shouldMoveLogo) {
      window.addEventListener('resize', this.setInitialLogoPosition);
    }
  }

  setHeaderHeight() {
    this.headerHeight = this.headerContainers.header.outerHeight();
  }

  //  function adaptToHeaderHeight() {
  //    $('#main').css('margin-top', headerHeight + 'px');
  //  }

  setInitialLogoPosition() {
    let width = window.innerWidth;
    const hasTight = this.headerContainers.header.hasClass('tight');
    if (width > this.desktopMin && width < this.twolineCollision) {
      this.forceLogoLeft(width);
    } else if (hasTight) {
      this.forceLogoLeft(width);
      this.headerContainers.oneTag.removeClass('active').css('opacity', '');
      this.headerContainers.twoTag.addClass('active');
      this.headerContainers.twoTag.css('opacity', '1');
    }
    else {
      this.logoMarginOffset = 0 - (this.headerContainers.masterLogo.width() / 2);
      this.headerContainers.headerLogo.css('margin-left', this.logoMarginOffset + 'px').css('left', '50%');
    }

    this.headerContainers.headerLogo.removeClass('header-logo--init');
  }

  populateSectionArray(type) {
    const temp = {};
    temp.analyses = ['/contracts-over-time.html', '/federal-account-explorer.html', '/contract-explorer.html', '/homelessness-analysis.html', '/budget-function.html', '/federal-employees.html', '/competition-in-contracting.html'];
    temp.resources = ['/assets/analyst-guide-1-2.pdf', '/student-innovators-toolbox.html'];
    return temp[type];
  }


  setCurrentSectionActive() {
    const analyses = this.populateSectionArray('analyses');
    const resources = this.populateSectionArray('resources');
    if (window.location.pathname.indexOf('americas-finance-guide') != -1) {
      $('[data-target="ffg"]').addClass('active');
    } else if (analyses.indexOf(window.location.pathname) != -1) {
      $('[data-target="analyses"]').addClass('active');
    } else if (resources.indexOf(window.location.pathname) != -1) {
      $('[data-target="resources"]').addClass('active');
    }
  }


  render(){
    console.log(this.props.id);
    return <div className="dlHeader">
            <header className="official-banner">
              <ul className="official-banner__site-list">
                <li className="official-banner__site-item">
                  <a className="official-banner__site-link" href="https://www.usaspending.gov">
                    USAspending.gov
                  </a>
                </li>
                <li
                  className="official-banner__site-item official-banner__site-item_spacer"
                  aria-hidden="true"
                >
                  |
                </li>
                <li className="official-banner__site-item">
                  <a
                    className="official-banner__site-link"
                    href="https://datalab.usaspending.gov"
                  >
                    Data Lab
                  </a>
                </li>
              </ul>
              <div className="official-banner__wrapper">
                <div className="official-banner__text">
                  An official website of the U.S. government
                </div>
                <img
                  className="official-banner__flag"
                  src="https://datalab.usaspending.gov/assets/header-svg/data-lab-logo.svg"
                  alt="U.S. flag"
                />
              </div>
            </header>
          </div>

  }
}

export default Header;