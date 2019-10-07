import React from "react";
import Arrow from '../../svgs/arrow.svg';
import './page.scss';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const show = this.props.showMenu;

    let returnItems = this.props.headerItems.map((item, i) => {
      return <li className='navListItemMobile' key={i} onMouseOver={() => this.setState({ activeItem: item })}>
               <a href='#' className='navListAnchorMobile' data-target={item}> {item} <span className='navListArrow'><Arrow /></span></a>
             </li>;
    });

    return(
      <ul className={`mobileDropdown ${show ? `` : `hidden`}`}>
        {returnItems}
      </ul>
    );
  };
}

export default MobileMenu;
