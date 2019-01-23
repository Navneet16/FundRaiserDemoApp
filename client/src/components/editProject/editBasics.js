import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
// import PromotionalSection from './promotionalSection'
import $ from 'jquery'

 class EditProjectBasics extends Component {
  componentDidMount(){
    $('html, body').animate({scrollTop: 0}, 'fast');

  }
  render() {
    return (
  
     <div>
       
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
export default EditProjectBasics

