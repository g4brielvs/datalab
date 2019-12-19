import React from "react";
import Arrow from '../../svgs/arrow.svg';
import Book from '../../svgs/book.svg';
import Dropdown from '../../components/headers/dropdown.jsx';
import styles from './page.module.scss';

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
          <li className={styles.dataListLi} key={i}>
            <a className={styles.dataListA} href={item.link}>{item.name}</a>
          </li>
          <hr className={styles.mobileHr}/>
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
        <ul className={`${styles.mobile} ${show ? `` : styles.hidden}`}>
          <li className={styles.item} data-id='0' onClick={this.handleClick}>Analyses<span className={styles.arrow}> <Arrow/></span></li>
          <ul className={`${styles.toggleList} ${this.state.clickedItem == 'Analyses ' ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[0].analyses)}</ul>
          <li className={styles.item} data-id='1' onClick={this.handleClick}>DataLab Express<span className={styles.arrow}> <Arrow/></span></li>
          <ul className={`${styles.toggleList} ${this.state.clickedItem == 'DataLab Express ' ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[1].express)}</ul>
          <li className={styles.item} data-id='2' onClick={this.handleClick}>America's Finance Guide<span className={styles.arrow}> <Arrow/></span></li>
          <ul className={`${styles.toggleList} ${this.state.clickedItem == "America's Finance Guide " ? `` : ' ' + styles.hidden}`}>
            <li className={styles.dataListLi}>
              <a className={styles.dataListA} href='/overview'>Overview</a>
            </li>
            <hr className={styles.mobileHr}/>
            <li className={styles.dataListLi}>
              <a className={styles.dataListA} href='/americas-finance-guide/revenue-and-gdp'>Revenue</a>
            </li>
            <hr className={styles.mobileHr}/>
            <li className={styles.dataListLi}>
              <a className={styles.dataListA} href='/americas-finance-guide/spending-and-gdp'>Spending</a>
            </li>
            <hr className={styles.mobileHr}/>
            <li className={styles.dataListLi}>
              <a className={styles.dataListA} href='/americas-finance-guide/explore-deficit'>Deficit</a>
            </li>
            <hr className={styles.mobileHr}/>
            <li className={styles.dataListLi}>
              <a className={styles.dataListA} href='/americas-finance-guide/explore-debt'>Debt</a>
            </li>
            <hr className={styles.mobileHr}/>
          </ul>
          <li className={styles.item} data-id='3' onClick={this.handleClick}>Resources<span className={styles.arrow}> <Arrow/></span></li>
          <ul className={`${styles.toggleList} ${this.state.clickedItem == 'Resources ' ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[3].resources)}</ul>
          <li className={styles.item} data-id='4'onClick={this.handleClick}><span className={styles.arrow}><Book/></span> Glossary</li>
          <ul className={`${styles.toggleList} ${this.state.clickedItem == 'Glossary ' ? `` : ' ' + styles.hidden}`}>{this.returnActiveList(this.state.data[4].glossary)}</ul>
        </ul>
        <Dropdown clickedItem={this.state.clickedItem}
                  data={this.state.data} />
      </div>
    );
  };
}

export default MobileMenu;
