import React, { Component } from 'react';
import {  Route, Redirect} from 'react-router-dom';
import Header from './header'
import Footer from './footer'
import {HomePage} from '../../home'
import {Project} from '../../Projects'
import {Blog} from '../../blog'
import {Regular} from '../../regular'
import {Contact} from '../../contact'
import {SignIn} from '../../user'
import {connect} from 'react-redux'


 
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
              {!this.props.loginStatus && <Route path='/signin' component={SignIn} />}
              <Redirect to='/' />
          <Footer/>
       </div> 
    );
  }
}

function mapStateToProps(state){
 return {
  loginStatus: state.User.loginStatus

 }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, null)(DefaultLayout);
