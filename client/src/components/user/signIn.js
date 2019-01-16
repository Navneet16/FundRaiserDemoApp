import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
import { GoogleLogin , GoogleLogout } from 'react-google-login';
import {Carousel} from 'react-bootstrap'
import $ from 'jquery'
const clientId = '1078969805161-6bhv7n6pa83jc5vhi33b4bqr2sddflju.apps.googleusercontent.com'
                                            

 class SignIn extends Component {
    constructor(props){
        super(props)
         this.success =  this.success.bind(this)
         this.error =  this.error.bind(this)
         this.loading =  this.loading.bind(this)
         this.logout =  this.logout.bind(this)
 } 


    success(e){
        this.props.changeUserState({
            status : true
        })
        this.props.setUserDetailsForGoogleLogin({
            userName : e.w3.ig,
            userEmail : e.w3.U3
        })
        this.props.history.replace("/")
      }
      error(e){
        console.log(e,"error")
      }
      loading(e){
        console.log(e,"loading")
      }
      logout(e){
        console.log(e,"logout")
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
                            <GoogleLogin
                            clientId={clientId}
                            scope="https://www.googleapis.com/auth/analytics"
                            onSuccess={this.success}
                            onFailure={this.error}
                            onRequest={this.loading}
                            offline={false}
                            approvalPrompt="force"
                            responseType="id_token"
                            isSignedIn
                            theme="dark"o
                            // disabled
                            // prompt="consent"
                            // className='button'
                            // style={{ color: 'red' }}
                            >
                            <span style={{display: 'none'}}>Login with Google</span>
                            </GoogleLogin>
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
      fetch : ()=>{dispatch(actions.topLiked.fetchTopLikedProjects())},
      changeUserState : (payload)=>{dispatch(actions.user.changeUserState(payload))},
      clear : ()=>{dispatch(actions.clearState.clearTopLiked())},
      setUserDetailsForGoogleLogin : (payload)=>{dispatch(actions.user.setUserDetails(payload))}
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

