import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
import {Carousel} from 'react-bootstrap'
import $ from 'jquery'
import LikeButton from './likeButton'


 class Crafts extends Component {
  constructor(props){
      super(props)
       this.changeStatus =  this.changeStatus.bind(this)
  }   
  componentDidMount(){
    // $(document).foundation();
     this.props.fetch({category : 'crafts'})
    //  $(document).foundation();

    // $('.button-like')
    //     .bind('click', function(event) {
    //         console.log(event)
    //     $(".button-like").toggleClass("liked");
    //     })
  }
  changeStatus(event){
      event.target.classList.toggle("liked");
     }
  render() {
      return (

        <div className="row">
        <div className="col-12 col-md-12">
            <Carousel indicators={false}>
                {
                    this.props.crafts.length > 0 &&  this.props.crafts.map((project,i)=>{
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
                                  <LikeButton/>
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
     crafts : state.projectInfo.crafts
 }
}

const mapDispatchToProps = dispatch => {
  return {
      fetch : (payload)=>{dispatch(actions.fetchProjects.fetchProjects(payload))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Crafts);

