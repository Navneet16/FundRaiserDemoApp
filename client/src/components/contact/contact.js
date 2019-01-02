import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
// import PromotionalSection from './promotionalSection'

 class Contact extends Component {

  render() {
    return (
      <div>    
            <div className="hero-area height-400 bg-img background-overlay" style={{"backgroundImage" : "url(img/blog-img/bg4.jpg)"}}></div>

        <section className="contact-area section-padding-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="contact-form">
                            <h5>Get in Touch</h5>
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="group">
                                            <input type="text" name="name" id="name" required/>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Enter your name</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="group">
                                            <input type="email" name="email" id="email" required/>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Enter your email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group">
                                            <textarea name="message" id="message" required></textarea>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Enter your message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn world-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
export default Contact

