import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
import {Carousel} from 'react-bootstrap'
import $ from 'jquery'
                                            
import LikeButton from './likeButton'

 class TopLiked extends Component {
  constructor(props){
      super(props)
       this.changeStatus =  this.changeStatus.bind(this)
  }   
  componentDidMount(){
    // $(document).foundation();
     this.props.fetch()
    //  $(document).foundation();

$(function() {
  $('.button-like')
    .bind('click', function(event) {
      $(".button-like").toggleClass("liked");
    })
});


  }
  changeStatus(event){
        //  event.target.classList.toggle("liked");
     }
  componentWillUnmount(){
        this.props.clear()
  }    
  render() {
      return (

        <div className="sidebar-widget-area">
            <h5 className="title">Most Liked</h5>
            <div className="widget-content">
                {
                    this.props.topLiked.length > 0 &&  this.props.topLiked.map((project,i)=>{
                        return(
                            <div className="single-blog-post post-style-2 d-flex align-items-center widget-post" key={i}>
                                <div className="post-thumbnail">
                                    <img src="img/blog-img/b11.jpg" alt=""/>
                                </div>
                                <div className="post-content-box">
                                <div className="post-content">
                                    <a href="/" className="headline">
                                        <h5 className="mb-0">{project.name}</h5>
                                    </a>
                                </div>
                                <div className="post-content-button">
                                    <LikeButton/>
                                </div>
                                </div>    
                            </div>
                         )   
                        })
                }
          </div> 

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
      clear : ()=>{dispatch(actions.clearState.clearTopLiked())}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLiked);

