import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';

 class DefaultLayout extends Component {

  render() {
    return (


        <footer className="footer-area fixFooter">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="footer-single-widget">
                        <a href="/"><img src="img/core-img/logo.png" alt=""/></a>
                        <div className="copywrite-text mt-30">
                            <p>
                                Copyright &copy;{new Date().getFullYear()}
                           </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="footer-single-widget">
                        <ul className="footer-menu d-flex justify-content-between">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Fashion</a></li>
                            <li><a href="/">Lifestyle</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Gadgets</a></li>
                            <li><a href="/">Video</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="footer-single-widget">
                        <h5>Subscribe</h5>
                        <form action="/" method="post">
                            <input type="email" name="email" id="email" placeholder="Enter your mail"/>
                            <button type="button"><i className="fa fa-arrow-right"></i></button>
                        </form>
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
