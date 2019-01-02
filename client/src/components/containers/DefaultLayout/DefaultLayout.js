import React, { Component } from 'react';
import {  Route, Switch , Redirect} from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import {HomePage} from '../../home'
import {Project} from '../../Projects'

 
 class DefaultLayout extends Component {

  render() {
    return (
       <div> 
          <Header/>
             <Switch>
              <Route path='/' component={HomePage} />
              <Route path='/project' component={Project} />
              <Redirect to='/' />
            </Switch>

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
