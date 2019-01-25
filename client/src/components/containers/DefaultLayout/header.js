import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as actions from  "../../../common/actions"
import {connect} from 'react-redux'
import firebase from 'firebase'


firebase.initializeApp({
    apiKey: "AIzaSyAkXmJezXTsVLlN7v4iTQyEiZ1GPY_8VvU",
    authDomain: "fundraiser-1547536034572.firebaseapp.com"
})



 class Header extends Component {
    constructor(props){
        super(props)
         this.logOut =  this.logOut.bind(this)
    }   
 componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {

        if(user){

            this.props.changeUserState({
                status : true
            })
         this.props.setUserDetailsForThirdPartyLogin({
            userEmail : user.email,
            token : user.ra
          })
      
            // that.forceUpdate()
        }else{
                this.props.changeUserState({
                    status : null
                })
                this.props.setUserDetailsForThirdPartyLogin({
                userEmail : null
            })
        }
    })
 }    
 logOut(){
    //  console.log('llllll')
     this.props.signOut({
         token : this.props.userToken,
         userEmail : this.props.userEmail
     });
     firebase.auth().signOut()
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
                                    <NavLink className="nav-link" to="/editProject/basics">Contact</NavLink>
                                </li>
                                {
                                    !this.props.loginStatus ?

                                        ""  :
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/addProject">Add Project</NavLink>
                                    </li>
                                }
                                {
                                    !this.props.loginStatus ?

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/signin">Sign in</NavLink>
                                        </li>   :
                                        
                                         <li className="nav-item dropdown">
                                         <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> { `${this.props.userEmail}`}</span>
                                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                             <NavLink className="dropdown-item" to="/regular">Home</NavLink>
                                             <NavLink className="dropdown-item" to="/regular">Catagory</NavLink>
                                             <NavLink className="dropdown-item" to="/regular">Single Blog</NavLink>
                                             <NavLink className="dropdown-item" to="/regular">Regular Page</NavLink>
                                             <button className="dropdown-item" onClick={this.logOut}>Log Out!</button>
                                                 
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
   userToken : state.User.userToken
 }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserState : (payload)=>{dispatch(actions.user.changeUserState(payload))},
    setUserDetailsForThirdPartyLogin : (payload)=>{dispatch(actions.thirdPartyLogin.thirdPartyUser(payload))},
    signOut : (payload)=>{dispatch(actions.thirdPartylogOut.thirdPartylogOut(payload))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
