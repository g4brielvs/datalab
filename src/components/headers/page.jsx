import React from "react";
import styles from "./page.module.scss";

import TagLine from '../../svgs/Logo-with-tagline.svg';
import NoTagLine from '../../svgs/Logo-without-tagline.svg';
import TagLineMobile from '../../svgs/logo-tablet-mobile.svg';

import Arrow from '../../svgs/arrow.svg';
import Book from '../../svgs/book.svg';
import Dropdown from '../../components/headers/dropdown.jsx';
import MobileMenu from '../../components/headers/mobile-menu.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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


    // if we're NOT on the homepage...
    // always set to true!
    if (this.props.isHome == false) {
      this.setState({ isSticky: true });
    }

    // homepage listener...
    if (this.props.isHome == true) {
      document.addEventListener('scroll', () => {
        let isSticky = window.pageYOffset > 135;        
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

  };

  handleMouseLeave = e => {
    e.stopPropagation();
    this.setState({ activeItem: ' ' });
  };

  burgerClick = () =>  {
    this.setState({showMobileMenu: !this.state.showMobileMenu});
  };

  handleItemHover = e => {
    if (!e.target.innerText) {
      return this.setState({activeItem: ' '});
    }
    this.setState({ activeItem: e.target.innerText });
    // shim for datalab express as we do not need it currently
    if (e.target.innerText.toString().trim() === "DataLab Express") {
      this.setState({ activeItem: ' ' });
    }
  };

  tagLineCheck = (isSticky, isMobile) => {
    if (isSticky) {
      if (isMobile) {
        return(<TagLineMobile/>);
      }
      return(<NoTagLine/>);
    } else {
      if (isMobile) {
        return(<TagLineMobile/>);
      }
      return(<TagLine/>);
    }
  };

  render() {

    let isSticky = this.state.isSticky;
    let isMobile = window.innerWidth < 495 ? true : false; // 495 arbitrary value when position absolute hits
    
    return (
      <header id={styles.header} className={`${isSticky ? ' ' + styles.headerContainer : ``}`}>
        <div style={{top: this.props.isHome == true ? `` : `${this.state.skinnyTop}px`}} className={`${styles.main} ${isSticky ? styles.tight : ``} ${this.props.isHome ? `` : ``}`}>
          <div className={`${styles.logoWrapper} ${!isSticky ? ' ' + styles.col : ``}`}>
            <a href="/">
              <div>
                {this.tagLineCheck(isSticky, isMobile)}
              </div>
            </a>
            
            <nav className={`${styles.nav} ${isSticky ? ' ' + styles.tight : ``} ${this.props.isHome ? `` : ' ' + styles.tight}`}>
              <span className={styles.toggle} onClick={this.burgerClick}>
                <FontAwesomeIcon icon={faBars} />
              </span>
              <ul className={styles.ulNav} id={styles.burgerMenu}>
                <li className={styles.item} onMouseOver={this.handleItemHover}>
                  <button className={styles.anchor}>Analyses <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.handleItemHover}>
                  <button className={styles.anchor}>DataLab Express <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.handleItemHover}>
                  <button className={styles.anchor}>America's Finance Guide <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item} onMouseOver={this.handleItemHover}>
                  <button className={styles.anchor}>Resources <span className={styles.arrow}><Arrow /></span></button>
                </li>
                <li className={styles.item}>
                  <button className={styles.anchor}><span className={styles.arrow}><Book/></span> Glossary </button>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        <div className={`${styles.sub} ${isSticky ? ' ' + styles.tight : ``}`} style={{top: this.props.isHome == true ? `` : `${this.state.skinnySub}px`}}>
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
