import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'

 class Arts extends Component {
  componentDidMount(){
      this.props.fetch({category : 'arts'})
  }
  render() {
      return (

                                     <div className="row">
                                        <div className="col-12 col-md-12">
                                            <div className="world-catagory-slider owl-carousel wow fadeInUpBig" data-wow-delay="0.1s">
                                                {
                                                 this.props.arts.length > 0 &&  this.props.arts.map((project)=>{
                                                     return (
                                                        <div className="single-blog-post">
                                                        <div className="post-thumbnail">
                                                            <img src="img/blog-img/b1.jpg" alt=""/>
                                                            <div className="post-cta"><a href="/">arts</a></div>
                                                        </div>
                                                        <div className="post-content">
                                                            <a href="/" className="headline">
                                                                <h5>{project.name}</h5>
                                                            </a>
                                                            <p>{project.description}</p>

                                                            <div className="post-meta">
                                                                <p><a href="/" className="post-author">By {project.creator}</a> on <a href="/" className="post-date">{project.createdOn}</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                     )
                                                 })
                                            }

                                            </div>
                                        </div>
                                  </div> 
    );
  }
}

function mapStateToProps(state){
 return {
     arts : state.projectInfo.arts
 }
}

const mapDispatchToProps = dispatch => {
  return {
      fetch : (payload)=>{dispatch(actions.fetchProjects.fetchProjects(payload))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Arts);

