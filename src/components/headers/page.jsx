import React from "react";
import "./page.scss";

import TagLine from '../../svgs/Logo-with-tagline.svg';
import NoTagLine from '../../svgs/Logo-without-tagline.svg';
import Arrow from '../../svgs/arrow.svg';
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
      top: 29,
      activeItem: '',
      showMobileMenu: false,
      width: window.innerWidth,
      menuData: this.props.megamenuItems,
    };
    this.updateWidth = this.updateWidth.bind(this);
  };

  componentDidMount() {
    if (this.props.isHome == true) {
      document.addEventListener('scroll', () => {
        let isSticky = window.scrollY > 100;
        this.setState({ isSticky: isSticky });
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

    window.addEventListener('resize', this.updateWidth);

    // if we're NOT on the homepage...
    if (this.props.isHome == false) {
      this.setState({ isSticky: true });
    }
  };

  updateWidth() {
    this.setState({ width: window.innerWidth });
  };

  handleMouseLeave = e => {
    e.stopPropagation();
    this.setState({ activeItem: '' });
  };

  burgerClick = () =>  {
    this.setState({showMobileMenu: !this.state.showMobileMenu});
  };

  render() {
    const listItems = this.props.headerItems;
    let isSticky = this.state.isSticky;
    const top = this.state.top;
    const isTablet = this.state.width < 955;

    let returnItems = listItems.map((item, i) => {
      return <li className='navListItem' key={item} onMouseOver={that.handleMouseOver}>
        <a href='#' data-target={item}> {item} <span><ExpandMoreIcon /></span></a>
      </li>;
    });

    let logoToggler;
    if (isTablet) {
      logoToggler = 'row';
    } else if (!isSticky) {
      logoToggler = 'col';
    } else if (isSticky && isTablet) {
      logoToggler = 'row';
    }
    
    return (
      <header id="header" style={{ top: `${top}px` }}>
        <div className={`header__main ${isSticky ? `tight` : ``}`}>
          <div className={`header-logo__wrapper ${logoToggler}`}>
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
              <span className={`${isSticky && isTablet ? `burger-menu-skinny` : `navbar-toggle`}`} id="burger-navbar-toggle" onClick={this.burgerClick}>
                <FontAwesomeIcon icon={faBars} />
              </span>
              <ul className="nav" id="burger-menu">
                {returnItems}
              </ul>
            </nav>
          </div>
        </div>

        <div className="header__sub">
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
