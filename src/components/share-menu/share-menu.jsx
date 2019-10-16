import React, { Component } from 'react';
import './share-menu.scss';
import shareLogo from '../../images/colleges-and-universities/share.svg'
import facebookLogo from '../../images/colleges-and-universities/facebook.svg'
import twitterLogo from '../../images/colleges-and-universities/twitter.svg'
import linkedinLogo from '../../images/colleges-and-universities/linkedin.svg'
import redditLogo from '../../images/colleges-and-universities/reddit.svg'
import emailLogo from '../../images/colleges-and-universities/email.svg'

class ShareMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleShareClickFacebook = this.handleShareClickFacebook.bind(this);
    this.handleShareClickTwitter = this.handleShareClickTwitter.bind(this);
    this.handleShareClickLinkedin = this.handleShareClickLinkedin.bind(this);
    this.handleShareClickReddit = this.handleShareClickReddit.bind(this);
    this.url = this.props.location ? this.props.location.href : this.props.siteUrl + this.props.pageUrl;
    this.pathName = this.props.location ? this.props.location.pathname : this.props.pageUrl;

    // The following will take the url pathname and make it into the readable text we've used in the past (eg. '/federal-employees' becomes 'Federal Employees')
    if(this.pathName){
      if(this.pathName.charAt(0) === '/'){
        this.pathName = this.pathName.slice(1);
      }

      let pathNameSplit = this.pathName.split('-');
      for(let i = pathNameSplit.length; i--;){
        pathNameSplit[i] = pathNameSplit[i].charAt(0).toUpperCase() + pathNameSplit[i].slice(1);
      }
      this.pathName = pathNameSplit.join(' ');
    }
    this.defaultTitle = `Data Lab - ${this.pathName} - U.S. Treasury`;
    this.title = this.props.title || this.defaultTitle;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickElementOffscreen, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickElementOffscreen, false);
  }

  handleClickElementOffscreen(e) {
    if (this.node && !this.node.contains(e.target) && this.state.show == true) {
      this.setState(prevState => ({ show: !prevState.show }));
    }
  }

  handleShow() {
    if (this.state.show == true) {
      this.handleClickElementOffscreen;
    }
    this.setState(prevState => ({ show: !prevState.show }));
  }

  handleShareClickFacebook(e) {
    let finalUrl = `https://www.facebook.com/sharer/sharer.php?u=${this.props.siteUrl}${this.props.pageUrl}`;
    window.open(finalUrl, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
  }

  handleShareClickTwitter(e) {
    let finalUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.props.text || this.title)}&url=${this.url}`
    window.open(finalUrl, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
  }

  handleShareClickLinkedin(e) {
    let finalUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${this.props.siteUrl}${this.props.pageUrl}`;
    window.open(finalUrl, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
  }

  handleShareClickReddit(e) {
    let finalUrl = `http://www.reddit.com/submit?url=${this.props.siteUrl}${this.props.pageUrl}`;
    window.open(finalUrl, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
  }

  render() {

    // there is an article i read regarding using svgs
    // we shouldn't be importing them as images! we should find a better way...
    const images = [
      {
        src: shareLogo
      },
      {
        src: facebookLogo,
        style: { height: '20px', width: '20px' }
      },
      {
        src: twitterLogo,
        style: { height: '20px', width: '20px' }
      },
      {
        src: redditLogo,
        style: { height: '20px', width: '20px' }
      },
      {
        src: linkedinLogo,
        style: { height: '20px', width: '20px' }
      },
      {
        src: emailLogo,
        style: { height: '20px', width: '20px' }
      },
    ];

    const isShowing = this.state.show;

    // https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ site.baseurl }}{{ page.url }}#{{include.anchor}}')
    // site url is : localhost:8000/
    // base url is : we dont need this
    // page url is : colleges-and-universities

    // TODO, use data-id's to dynamically see if "facebook" or "twitter".. etc..
    return (
      <div className='share-container'>
        <div className="popup new-share-button" onClick={this.handleClickElementOffscreen} ref={node => {this.node = node;}}>
          <span className="viz-share-icon" aria-hidden="true" onClick={this.handleShow}>
            <img src={images[0].src}></img>
            <span className="share-text">Share</span>
          </span>
          <span className={`popuptext right newpopup ${isShowing ? `show` : ``}`} id="sharePopup">
            <div className="share-buttons">
              <ul>
                <li>                  
                  <a href="#" onClick={this.handleShareClick} title="Share on Facebook" data-id="1">
                    <img src={images[1].src} style={images[1].style} className='icon-facebook'></img>
                    <span className="share-button-text">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.handleShareClickTwitter} title="Share on Twitter" data-id='2'>
                    <img src={images[2].src} style={images[2].style} className='icon-twitter share-icon'></img>
                    <span className="share-button-text">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.handleShareClickReddit} title="Share on Reddit" data-id='3'>
                    <img src={images[3].src} style={images[3].style} className='icon-reddit'></img>
                    <span className="share-button-text">Reddit</span>
                  </a>
                </li>
                <li>
                  <a href='#' onClick={this.handleShareClickLinkedin} title="Share on LinkedIn" data-id='4'>
                    <img src={images[4].src} style={images[4].style} className='icon-linkedin'></img>
                    <span className="share-button-text">Linkedin</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:?subject=${this.title}&body=${this.props.text ? this.props.text + '%0D%0A%0D%0A' : ''}Check out this site ${this.url}`} title="Share via Email" data-id='5'>
                    <img src={images[5].src} style={images[5].style} className='icon-envelope' />
                    <span className="share-button-text">Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default ShareMenu;
