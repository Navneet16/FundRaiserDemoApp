import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import Header from './header'
import Footer from './footer'

 
 class DefaultLayout extends Component {

  render() {
    return (
       <div> 
          <Header/>
          <Footer/>
       </div> 
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
