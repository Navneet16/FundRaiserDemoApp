import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';

 class DefaultLayout extends Component {

  render() {
    return (


<footer id="footer" className="section">

<div className="container">

    <div className="row">

        <div className="col-md-6">
            <div className="footer-logo">
                <a className="logo" href="index.html">
                    <img src="/images/logo.png" alt="logo"/>
                </a>
            </div>
        </div>

        <div className="col-md-6">
            <ul className="footer-nav">
                <li><a href="/index">Home</a></li>
                <li><a href="/social">About</a></li>
                <li><a href="/social">Courses</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

    </div>

    <div id="bottom-footer" className="row">

        <div className="col-md-4 col-md-push-8">
            <ul className="footer-social">
                <li><a href="/social" className="facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="/social" className="twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="/social" className="google-plus"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="/social" className="instagram"><i className="fa fa-instagram"></i></a></li>
                <li><a href="/social" className="youtube"><i className="fa fa-youtube"></i></a></li>
                <li><a href="/social" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </div>

        <div className="col-md-8 col-md-pull-4">
            <div className="footer-copyright">
                <span>&copy; Copyright {(new Date()).getFullYear()} All Rights Reserved</span>
            </div>
        </div>

    </div>

</div>

</footer>

    );
  }
}

// function mapStateToProps(state){
//  return {
//   currentNetwork: state.setNetwork.network,
//   mnemonic: state.walletGenerationAndDetails.mnemonic
//  }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setNetwork: (network) => dispatch(actions.setNetwork(network))
//   }
// }

// export default connect(null, null)(DefaultLayout);
export default DefaultLayout
