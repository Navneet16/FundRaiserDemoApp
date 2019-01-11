import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
import {Carousel} from 'react-bootstrap'
import $ from 'jquery'

 class Publish extends Component {
  constructor(props){
      super(props)
       this.changeStatus =  this.changeStatus.bind(this)
  }   
  componentDidMount(){
    // $(document).foundation();
     this.props.fetch({category : 'publish'})
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
  render() {
      return (

        <div className="row">
        <div className="col-12 col-md-12">
            <Carousel indicators={false}>
                {
                    this.props.publish.length > 0 &&  this.props.publish.map((project,i)=>{
                    return(
                    <Carousel.Item key={i}>   
                            <img width={"100%"}  alt="900x500" src="img/blog-img/b1.jpg" />
                            <Carousel.Caption>
                                <div >
                                    <h3 className="projectname">{project.name}</h3>
                                    <p className="projectdescription">{project.description}</p>
                                    <p className="projecttimeandcreator">By <a className="projectdescription post-author" href="/">{project.creator}</a> on {project.createdOn}</p>
                                </div>
                                <div>
                                    <button onClick={this.changeStatus} className="button button-like">
                                        <i className="fa fa-heart"></i>
                                        <span>Like</span>
                                    </button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                      )   
                    })

                }

            </Carousel>
        </div>
    </div> 
    );
  }
}

function mapStateToProps(state){
 return {
     publish : state.projectInfo.publish
 }
}

const mapDispatchToProps = dispatch => {
  return {
      fetch : (payload)=>{dispatch(actions.fetchProjects.fetchProjects(payload))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Publish);

