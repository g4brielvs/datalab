import React from "react";
import "./page.scss";

import TagLine from '../../svgs/Logo-with-tagline.svg';
import NoTagLine from '../../svgs/Logo-without-tagline.svg';
import Arrow from '../../svgs/arrow.svg';
import Book from '../../svgs/book.svg';
import Dropdown from '../../components/headers/dropdown.jsx';
import MobileMenu from '../../components/headers/mobile-menu.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
      top: 0,
      skinnyTop: 29,
      skinnySub: 80,
      activeItem: '',
      showMobileMenu: false,
      menuData: this.props.megamenuItems,
    };
  };

  componentDidMount() {

    // homepage listener...
    if (this.props.isHome == true) {
      document.addEventListener('scroll', () => {
        let isSticky = window.scrollY > 135;
        this.setState({ isSticky: isSticky });
      });
    }

    // not on homepage..
    if (this.props.isHome == false) {
      document.addEventListener('scroll', () => {
        const max = 29;
        let skinnyTop = max - window.pageYOffset;
        if (window.pageYOffset > max) {
          skinnyTop = 0;
        }
        this.setState({ skinnyTop });
      });
    }

    // not on homepage...
    if (this.props.isHome == false) {
      document.addEventListener('scroll', () => {
        const max = 80;
        let skinnySub = max - window.pageYOffset;
        if (window.pageYOffset > 51) {
          skinnySub = 50;
        }
        this.setState({ skinnySub });
      });
    }

    // if we're NOT on the homepage...
    // always set to true!
    if (this.props.isHome == false) {
      this.setState({ isSticky: true });
    }
  };

  handleMouseLeave = e => {
    e.stopPropagation();
    this.setState({ activeItem: '' });
  };

  burgerClick = () =>  {
    this.setState({showMobileMenu: !this.state.showMobileMenu});
  };

  handleItemClick = e => {
    this.setState({ activeItem: e.target.innerText });
  };

  render() {

    let isSticky = this.state.isSticky;
    
    return (
      <header id="header"  className={`${isSticky ? `header-container-sticky` : ``}`}>
        <div style={{top: this.props.isHome == true ? `` : `${this.state.skinnyTop}px`}} className={`header__main ${isSticky ? `tight` : ``} ${this.props.isHome ? `` : ``}`}>
          <div className={`header-logo__wrapper ${!isSticky ? `col`: ``}`}>
            <a href="/">
              <div className='header-logo__container'>
                {isSticky ? (
                  <NoTagLine />
                ) : (
                  <TagLine />
                )}
              </div>
            </a>

            <nav className={`header-nav ${isSticky ? `tight` : ``} ${this.props.isHome ? `` : `tight`}`}>
              <span className={`navbar-toggle`} id="burger-navbar-toggle" onClick={this.burgerClick}>
                <FontAwesomeIcon icon={faBars} />
              </span>
              <ul className="nav" id="burger-menu">
                <li className='navListItem' onMouseOver={this.handleItemClick}>
                  <a href='#' className='navListAnchor'>Analyses <span className='navListArrow'><Arrow /></span></a>
                </li>
                <li className='navListItem' onMouseOver={this.handleItemClick}>
                  <a href='#' className='navListAnchor'>DataLab Express <span className='navListArrow'><Arrow /></span></a>
                </li>
                <li className='navListItem' onMouseOver={this.handleItemClick}>
                  <a href='#' className='navListAnchor'>America's Finance Guide <span className='navListArrow'><Arrow /></span></a>
                </li>
                <li className='navListItem' onMouseOver={this.handleItemClick}>
                  <a href='#' className='navListAnchor'>Resources <span className='navListArrow'><Arrow /></span></a>
                </li>
                <li className='navListItem'>
                  <a href='#' className='navListAnchor'><span className='navListArrow'><Book/></span> Glossary </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        <div className={`header__sub ${isSticky ? `tight` : ``}`} style={{top: this.props.isHome == true ? `` : `${this.state.skinnySub}px`}}>
          <Dropdown activeItem={this.state.activeItem}
                    mouseHandle={this.handleMouseLeave}
                    data={this.props.megamenuItems} />

          { this.state.showMobileMenu
            ? <MobileMenu showMenu={this.state.showMobileMenu} headerItems={this.props.headerItems} data={this.props.megamenuItems} />
            : <></>
          }
          
        </div>
      </header>
    );
  }
};

export default PageHeader;
