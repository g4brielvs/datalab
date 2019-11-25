import React from "react";
import styles from './page.module.scss';

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
        <li className={styles.li} key={i}>
          <a className={styles.a} href={item.link}>{item.name}</a>
        </li>
      );
    });
  }

  render() {
    return (
      (() => {
        if (this.props.activeItem == "Analyses ") {
          return (
            <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
              <section className={`${styles.section} ${styles.analyses}`}>
                <h4 className={styles.title}>Topical Analyses</h4>
                <ul className={`${styles.ul} ${styles.ulAnalyses}`}>{this.returnActiveList(this.state.data[0].analyses.slice(0, 3))}</ul>
              </section>
              <section className={`${styles.section} ${styles.analyses}`}>
                <h4 className={styles.title}>Contract Analyses</h4>
                <ul className={`${styles.ul} ${styles.ulAnalyses}`}>{this.returnActiveList(this.state.data[0].analyses.slice(3, 6))}</ul>
              </section>
              <section className={`${styles.section} ${styles.analyses}`}>
                <h4 className={styles.title}>Financial Data Visualizations</h4>
                <ul className={`${styles.ul} ${styles.ulAnalyses}`}>{this.returnActiveList(this.state.data[0].analyses.slice(6, 9))}</ul>
              </section>
            </div>
          );
        }
        if (this.props.activeItem == "DataLab Express ") {
          return (
            <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
              <section className={`${styles.section} ${styles.express}`}>
                <ul className={`${styles.ul} ${styles.ulExpress}`}>{this.returnActiveList(this.state.data[1].express)}</ul>
              </section>
            </div>
          );
        }
        if (this.props.activeItem == "America's Finance Guide ") {
          return (
            <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
              <section className={styles.section}>
                <h4 className={styles.title}>Overview</h4>
                <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(0, 1))}</ul>
              </section>
              <section className={styles.section}>
                <h4 className={styles.title}>Revenue</h4>
                <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(1, 5))}</ul>
              </section>
              <section className={styles.section}>
                <h4 className={styles.title}>Spending</h4>
                <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(5, 9))}</ul>
              </section>
              <section className={styles.section}>
                <h4 className={styles.title}>Deficit</h4>
                <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(9, 12))}</ul>
              </section>
              <section className={styles.section}>
                <h4 className={styles.title}>Debt</h4>
                <ul className={styles.ulFfg}>{this.returnActiveList(this.state.data[2].ffg.slice(12, 16))}</ul>
              </section>
            </div>
          );
        }
        if (this.props.activeItem == "Resources ") {
          return (
            <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
              <section className={`${styles.section} ${styles.resources}`}>
                <ul className={`${styles.ul} ${styles.ulResources}`}>{this.returnActiveList(this.state.data[3].resources)}</ul>
              </section>
            </div>
          );
        }
        if (this.props.activeItem == " Glossary") {
          return (
            <div className={styles.dataList} onMouseLeave={this.props.mouseHandle}>
              <section className={`${styles.section} ${styles.glossary}`}>
                <ul className={`${styles.ul} ${styles.ulGlossary}`}>{this.returnActiveList(this.state.data[4].glossary)}</ul>
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
