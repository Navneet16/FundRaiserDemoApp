import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
import $ from 'jquery'
import StyledFirebaseAuth from 'react-firebaseui/FirebaseAuth';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

class SignIn extends Component {

    uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
            ],
            callbacks: {
                signInSuccess: () => false
            }
    }


    componentDidMount(){

        
    $('html, body').animate({scrollTop: 0}, 'fast');
    }
  render() {
      return ( 
        <div>    
        <div className="hero-area height-400 bg-img background-overlay" style={{"backgroundImage" : "url(img/blog-img/bg4.jpg)"}}></div>

    <section className="contact-area section-padding-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-6">
                    <div className="contact-form">
                        <h5>Login</h5>
                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-12">
                                    <div className="group">
                                        <input type="text" name="name" id="name" required/>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Enter your name</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="group">
                                        <input type="email" name="email" id="email" required/>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Enter your email</label>
                                    </div>
                                </div>
                                <div className="col-md-12 login-button">
                                    <button type="submit" className="btn world-btn">Log me In!</button>
                                </div>
                            </div>
                        </form>
                        <div className="or-box">
                            <span className="or">OR</span>
                        </div>

                         <div className="social-link">
                     
                        </div>  
                        <div>
                                    
                                           
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                             
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>  
    );
  }
}

function mapStateToProps(state){
 return {
    topLiked : state.topLikedProjects.topLiked
 }
}

const mapDispatchToProps = dispatch => {
  return {
      clear : ()=>{dispatch(actions.clearState.clearTopLiked())},
      changeUserState : (payload)=>{dispatch(actions.user.changeUserState(payload))},
      setUserDetailsForThirdPartyLogin : (payload)=>{dispatch(actions.user.regsterUserDetails(payload))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

