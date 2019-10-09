import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  returnActiveList = data => {
    return data.map((item, i) => {
      return (
        <li className='data-list-li' key={i}>
          <a className='data-list-a' href={item.link}>{item.name}</a>
        </li>
      );
    });
  }

  render() {
    return (
      (() => {
        if (this.props.activeItem == 'Analyses ') {
          return (
            <div className='data-list' onMouseLeave={this.props.mouseHandle}>
              <section className='data-list-section data-list-section__analyses'>
                <h4 className='section-title'>Topical Analyses</h4>
                <ul className='data-list-ul data-list-ul__analyses'>{this.returnActiveList(this.state.data[0].analyses.slice(0, 3))}</ul>
              </section>
              <section className='data-list-section data-list-section__analyses'>
                <h4 className='section-title'>Contract Analyses</h4>
                <ul className='data-list-ul data-list-ul__analyses'>{this.returnActiveList(this.state.data[0].analyses.slice(3, 6))}</ul>
              </section>
              <section className='data-list-section data-list-section__analyses'>
                <h4 className='section-title'>Financial Data Visualizations</h4>
                <ul className='data-list-ul data-list-ul__analyses'>{this.returnActiveList(this.state.data[0].analyses.slice(6, 9))}</ul>
              </section>
            </div>
          );
        }
        if (this.props.activeItem == 'DataLab Express ') {
          return (
            <div className='data-list' onMouseLeave={this.props.mouseHandle}>
              <section className='data-list-section data-list-section__express'>
                <ul className='data-list-ul data-list-ul__express'>{this.returnActiveList(this.state.data[1].express)}</ul>
              </section>
            </div>
          );
        }
        if (this.props.activeItem == "America's Finance Guide ") {
          return (
            <div className='data-list' onMouseLeave={this.props.mouseHandle}>
              <section className='data-list-section'>
                <h4 className='section-title'>Overview</h4>
                <ul className='data-list-ul--ffg'>{this.returnActiveList(this.state.data[2].ffg.slice(0, 1))}</ul>
              </section>
              <section className='data-list-section'>
                <h4 className='section-title'>Revenue</h4>
                <ul className='data-list-ul--ffg'>{this.returnActiveList(this.state.data[2].ffg.slice(1, 5))}</ul>
              </section>
              <section className='data-list-section'>
                <h4 className='section-title'>Spending</h4>
                <ul className='data-list-ul--ffg'>{this.returnActiveList(this.state.data[2].ffg.slice(5, 9))}</ul>
              </section>
              <section className='data-list-section'>
                <h4 className='section-title'>Deficit</h4>
                <ul className='data-list-ul--ffg'>{this.returnActiveList(this.state.data[2].ffg.slice(9, 12))}</ul>
              </section>
              <section className='data-list-section'>
                <h4 className='section-title'>Debt</h4>
                <ul className='data-list-ul--ffg'>{this.returnActiveList(this.state.data[2].ffg.slice(12, 16))}</ul>
              </section>
            </div>
          );
        }
        if (this.props.activeItem == "Resources ") {
          return (
            <div className='data-list' onMouseLeave={this.props.mouseHandle}>
              <section className='data-list-section data-list-section__resources'>
                <ul className='data-list-ul data-list-ul__resources'>{this.returnActiveList(this.state.data[3].resources)}</ul>
              </section>
            </div>
          );
        }
        if (this.props.activeItem == " Glossary") {
          return (
            <div className='data-list' onMouseLeave={this.props.mouseHandle}>
              <section className='data-list-section data-list-section__glossary'>
                <ul className='data-list-ul data-list-ul__glossary'>{this.returnActiveList(this.state.data[4].glossary)}</ul>
              </section>
            </div>
          );
        } else {
          return (
            <></>
          );
        }
      })()

    );
  }
}

export default Dropdown;
