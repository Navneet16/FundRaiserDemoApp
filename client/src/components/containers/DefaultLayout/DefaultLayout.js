import React, { Component } from 'react';
import {  Route, Redirect} from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import {HomePage} from '../../home'
import {Project} from '../../Projects'
import {Blog} from '../../blog'
import {Regular} from '../../regular'
import {Contact} from '../../contact'
 
 
 class DefaultLayout extends Component {

  render() {
    return (
       <div> 
          <Header/>
              <Route exact path='/' component={HomePage} />
              <Route path='/project' component={Project} />
              <Route path='/blog' component={Blog} />
              <Route path='/regular' component={Regular} />
              <Route path='/contact' component={Contact} />
              <Redirect to='/' />

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
