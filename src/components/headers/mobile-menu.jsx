import React from "react";
import Arrow from '../../svgs/arrow.svg';
import Book from '../../svgs/book.svg';
import Dropdown from '../../components/headers/dropdown.jsx';
import './page.scss';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: '',
      data: this.props.data,
    };
  }

  returnActiveList = data => {
    return data.map((item, i) => {
      return (
        <>
          <li className='data-list-li' key={i}>
            <a className='data-list-a' href={item.link}>{item.name}</a>
          </li>
          <hr id='mobile-hr'/>
        </>
      );
    });
  };

  handleClick = (e) => {
    this.setState({clickedItem: e.target.innerText});
  };

  render() {
    const show = this.props.showMenu;

    return (
      <div>
        <ul className={`mobileDropdown ${show ? `` : `hidden`}`}>
          <li className='navListItemMobile' data-id='0' onClick={this.handleClick}>Analyses<span className='navListArrow'> <Arrow/></span></li>
          <ul className={`toggleList ${this.state.clickedItem == 'Analyses ' ? `` : `hidden`}`}>{this.returnActiveList(this.state.data[0].analyses)}</ul>
          <li className='navListItemMobile' data-id='1' onClick={this.handleClick}>DataLab Express<span className='navListArrow'> <Arrow/></span></li>
          <ul className={`toggleList ${this.state.clickedItem == 'DataLab Express ' ? `` : `hidden`}`}>{this.returnActiveList(this.state.data[1].express)}</ul>
          <li className='navListItemMobile' data-id='2' onClick={this.handleClick}>America's Finance Guide<span className='navListArrow'> <Arrow/></span></li>
          <ul className={`toggleList ${this.state.clickedItem == "America's Finance Guide " ? `` : `hidden`}`}>
            <li className='data-list-li'>
              <a className='data-list-a' href='/overview'>Overview</a>
            </li>
            <hr id='mobile-hr'/>
            <li className='data-list-li'>
              <a className='data-list-a' href='/revenue'>Revenue</a>
            </li>
            <hr id='mobile-hr'/>
            <li className='data-list-li'>
              <a className='data-list-a' href='/spending'>Spending</a>
            </li>
            <hr id='mobile-hr'/>
            <li className='data-list-li'>
              <a className='data-list-a' href='/deficit'>Deficit</a>
            </li>
            <hr id='mobile-hr'/>
            <li className='data-list-li'>
              <a className='data-list-a' href='/debt'>Debt</a>
            </li>
            <hr id='mobile-hr'/>
          </ul>
          <li className='navListItemMobile' data-id='3' onClick={this.handleClick}>Resources<span className='navListArrow'> <Arrow/></span></li>
          <ul className={`toggleList ${this.state.clickedItem == 'Resources ' ? `` : `hidden`}`}>{this.returnActiveList(this.state.data[3].resources)}</ul>
          <li className='navListItemMobile' data-id='4'onClick={this.handleClick}><span className='navListArrow'><Book/></span> Glossary</li>
          <ul className={`toggleList ${this.state.clickedItem == 'Glossary ' ? `` : `hidden`}`}>{this.returnActiveList(this.state.data[4].glossary)}</ul>
        </ul>
        <Dropdown clickedItem={this.state.clickedItem}
                  data={this.state.data} />
      </div>
    );
  };
}

export default MobileMenu;
