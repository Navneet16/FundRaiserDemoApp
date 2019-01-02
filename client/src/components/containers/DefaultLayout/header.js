import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';

 class Header extends Component {

  render() {
    return (
     <header id="header">
        <div className="container">

            <div className="navbar-header">
                <div className="navbar-brand">
                    <a className="logo" href="/">
                        <img src="/images/logo.png" alt="logo"/>
                    </a>
                </div>

                <button className="navbar-toggle">
                    <span></span>
                </button>
            </div>

            <nav id="nav">
                <ul className="main-menu nav navbar-nav navbar-right">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

        </div>
    </header>
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
export default Header
