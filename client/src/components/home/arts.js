import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
import {Carousel} from 'react-bootstrap'

 class Arts extends Component {
  componentDidMount(){
      this.props.fetch({category : 'arts'})
  }
  render() {
      return (

        <div className="row">
        <div className="col-12 col-md-12">
            <Carousel indicators={false}>
                {
                    this.props.arts.length > 0 &&  this.props.arts.map((project,i)=>{
                    return(
                    <Carousel.Item key={i}>   
                            <img width={"100%"}  alt="900x500" src="img/blog-img/b1.jpg" />
                            <Carousel.Caption>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <p><a href="/" className="post-author">By {project.creator}</a> on <a href="/" className="post-date">{project.createdOn}</a></p>

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
     arts : state.projectInfo.arts
 }
}

const mapDispatchToProps = dispatch => {
  return {
      fetch : (payload)=>{dispatch(actions.fetchProjects.fetchProjects(payload))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Arts);

