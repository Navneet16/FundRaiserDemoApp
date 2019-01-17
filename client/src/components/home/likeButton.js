import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'

 class LikeButton extends Component {
  constructor(props){
      super(props)
       this.changeStatus =  this.changeStatus.bind(this)
  }   
  changeStatus(event){
         event.target.classList.toggle("liked");
     }
  render() {
      return (
        <button onClick={this.changeStatus} className="button button-like">
            <i className="fa fa-heart"></i>
            <span>Like</span>
        </button>
    );
  }
}

function mapStateToProps(state){
 return {
     foods : state.projectInfo.foods
 }
}

const mapDispatchToProps = dispatch => {
  return {
      fetch : (payload)=>{dispatch(actions.fetchProjects.fetchProjects(payload))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);

