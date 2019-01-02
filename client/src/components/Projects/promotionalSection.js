import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 class PromotionalSection extends Component {

  render() {
    return (
            <Carousel showThumbs={false}>
                <div>
                    <img src="/images/chicago.jpg" alt={'error loading'}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/images/chicago.jpg"  alt={'error loading'}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/images/chicago.jpg"  alt={'error loading'} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
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
export default PromotionalSection

