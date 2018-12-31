import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';

 class DefaultLayout extends Component {

  render() {
    return (


<footer id="footer" class="section">

<div class="container">

    <div class="row">

        <div class="col-md-6">
            <div class="footer-logo">
                <a class="logo" href="index.html">
                    <img src="/images/logo.png" alt="logo"/>
                </a>
            </div>
        </div>

        <div class="col-md-6">
            <ul class="footer-nav">
                <li><a href="/index">Home</a></li>
                <li><a href="/social">About</a></li>
                <li><a href="/social">Courses</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>

    </div>

    <div id="bottom-footer" class="row">

        <div class="col-md-4 col-md-push-8">
            <ul class="footer-social">
                <li><a href="/social" class="facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a href="/social" class="twitter"><i class="fa fa-twitter"></i></a></li>
                <li><a href="/social" class="google-plus"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="/social" class="instagram"><i class="fa fa-instagram"></i></a></li>
                <li><a href="/social" class="youtube"><i class="fa fa-youtube"></i></a></li>
                <li><a href="/social" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul>
        </div>

        <div class="col-md-8 col-md-pull-4">
            <div class="footer-copyright">
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
