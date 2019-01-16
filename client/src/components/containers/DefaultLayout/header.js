import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { GoogleLogin , GoogleLogout } from 'react-google-login';
import * as actions from  "../../../common/actions"
import {connect} from 'react-redux'
const clientId = '1078969805161-6bhv7n6pa83jc5vhi33b4bqr2sddflju.apps.googleusercontent.com'


 class Header extends Component {
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
      }
      error(e){
        console.log(e,"error")
      }
      loading(e){
        console.log(e,"loading")
      }
      logout(){
        this.props.changeUserState({
            status : false
        })
        this.props.setUserDetailsForGoogleLogin({
          userName : null,
          userEmail : null
      })
      }
  render() {
    return (
      <div>  
        {/* <div id="preloader">
        <div className="preload-content">
            <div id="world-load"></div>
        </div>
    </div> */}
       <header className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg">
                        <NavLink className="navbar-brand"  to="/">Fund Raiser</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#worldNav" aria-controls="worldNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="worldNav">
                            <ul className="navbar-nav ml-auto" style={{"color" : "#ffffff!important"}}>
                             
                         <div hidden>
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
                            theme="dark"
                            disabled
                            // prompt="consent"
                            // className='button'
                            // style={{ color: 'red' }}
                            >
                            <span>Login with Google</span>
                            </GoogleLogin>
                        </div>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                        
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/project">Explore</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog">Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>{
                                    !this.props.loginStatus ?

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/signin">Sign in</NavLink>
                                        </li>   :
                                         <li className="nav-item dropdown">
                                         <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> { `Welcome ${this.props.userName}`}</span>
                                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                             <NavLink className="dropdown-item" to="/regular">Home</NavLink>
                                             <NavLink className="dropdown-item" to="/regular">Catagory</NavLink>
                                             <NavLink className="dropdown-item" to="/regular">Single Blog</NavLink>
                                             <NavLink className="dropdown-item" to="/regular">Regular Page</NavLink>
                                             { this.props.loginWithGoogle &&
                                                <div className="dropdown-item logout-button">
                                                  <GoogleLogout buttonText="Logout" onLogoutSuccess={this.logout} />
                                                </div> 
                                              }
                                              { 
                                                this.props.loginWithFacebook &&
                                                 <div></div>
                                              }
                                                                                            { 
                                                this.props.loginWthGithub &&
                                                 <div></div>
                                              }
                                                                                            { 
                                                this.props.normalLogin &&
                                                  <NavLink className="dropdown-item" to="/regular">Regular Page</NavLink>
                                                 
                                              }
                                         </div>
                                     </li>
                                }
                               
                            </ul>
                            <div id="search-wrapper">
                                <form action="/">
                                    <input type="text" id="search" placeholder="Search something..."/>
                                    <div id="close-icon"></div>
                                    <input className="d-none" type="submit" value=""/>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </div>
    );
  }
}

function mapStateToProps(state){
 return {
   loginStatus: state.User.loginStatus,
   userEmail : state.User.userEmail,
   userName : state.User.userName,
   loginWithGoogle : state.User.loginWithGoogle,
   loginWithFacebook : state.User.loginWithFacebook,
   loginWthGithub : state.User.loginWithGithub,
   normalLogin : state.User.normalLogin
 }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserState : (payload)=>{dispatch(actions.user.changeUserState(payload))},
    setUserDetailsForGoogleLogin : (payload)=>{dispatch(actions.user.setUserDetails(payload))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
