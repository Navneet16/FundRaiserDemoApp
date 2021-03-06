import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
import $ from 'jquery'
import LikeButton from './likeButton'

 class FeaturedCategory extends Component {
  constructor(props){
      super(props)
       this.changeStatus =  this.changeStatus.bind(this)
  }   
  componentDidMount(){
    // $(document).foundation();
     this.props.fetchFeatured()
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
        <div className="world-catagory-area mt-50">
        <ul className="nav nav-tabs" id="myTab2" role="tablist">
            <li className="title">Featured Category : {this.props.categoryType ? this.props.categoryType.slice(0,1).toUpperCase()+this.props.categoryType.slice(1) : ""}</li>
        </ul>
        
        <div className="tab-content" id="myTabContent2">
        
            <div className="tab-pane fade show active" id="world-tab-10" role="tabpanel" aria-labelledby="tab10">
                <div className="row">
                        {
                            this.props.featured.length > 0 &&  this.props.featured.map((project,i)=>{
                            return(
                               <div className="col-12 col-md-6" key={i}>

                                    <div className="single-blog-post wow fadeInUpBig" data-wow-delay="0.2s">
                                    <div className="post-thumbnail">
                                        <img src="img/blog-img/b2.jpg" alt=""/>
                                        <div className="post-cta">
                                           <LikeButton/>
                                        </div>
                                    </div>
                                    <div className="post-content">
                                        <a href="/" className="headline">
                                            <h5>{project.name}</h5>
                                        </a>
                                        <p>{project.description}</p>
                                        <div className="post-meta">
                                            <p><a href="/" className="post-author">{project.creator}</a> on <a href="/" className="post-date">{project.createdOn}</a></p>
                                        </div>
                                    </div>
                                </div> 
                              </div>

                            )   
                         })

                        }
                </div>
            </div>
        
           </div>
        </div> 
    );
  }
}

function mapStateToProps(state){
 return {
     featured: state.featuredCategory.featuredCategory,
     categoryType : state.featuredCategory.categoryType
 }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFeatured : ()=>{dispatch(actions.featuredCategory.fetchFeaturedCategory())},
    clear : ()=>{dispatch(actions.clearState.clearFeatured())}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCategory);


