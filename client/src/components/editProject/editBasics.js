import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
// import PromotionalSection from './promotionalSection'
import $ from 'jquery'
import {
  Row,
  Col,
 DropdownItem} from 'reactstrap';
 import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
 
class EditProjectBasics extends Component {
  constructor(props){
       super(props)
       this.droppedImage = this.droppedImage.bind(this)
       this.droppedVideo = this.droppedVideo.bind(this)
       this.onchangeTitle = this.onchangeTitle.bind(this)
       this.submitBasics = this.submitBasics.bind(this)

       this.state={
         title : '',
         subTitle : '',
         droppedImage : '',
         droppedVideo : ''
       }
  }
  componentDidMount(){
    $('html, body').animate({scrollTop: 0}, 'fast');

  }
  onchangeTitle(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  droppedImage(e){
   var a = document.getElementById("file").files
    this.setState({
      droppedImage : a
    })
  }
  
  droppedVideo(e){
    var v = document.getElementById("fileVideo").files
    this.setState({
      droppedVideo : v
    })
  }
  submitBasics(){
    console.log(this.state.subTitle, this.state.title , this.state.droppedImage)
     if(this.state.subTitle && this.state.title){
         this.props.submitBasics({
           title : this.state.title,
           subtitle : this.state.subTitle,
           image : this.state.droppedImage,
           video : this.state.droppedVideo
         })
     }
  }
  
  render() {
       console.log(this.state)
      return (
        <div>    
        {/* <div className="hero-area height-400 bg-img background-overlay" style={{"backgroundImage" : "url(img/blog-img/bg4.jpg)"}}></div> */}

    <section className="contact-area section-padding-100">
                                    <div>
                    <DropdownItem divider />    
                    <Row>
                      <Col xs={12} md={12}>
                        <code className="text-center">
                          <h3>Start with the basics</h3>
                          <p>Make it easy for people to learn about your project.</p>
                        </code>
                      </Col>
                    </Row>
                    <DropdownItem divider /> 
                 </div>
                 <div>
                    <DropdownItem divider />    
                    <Row>
                      <Col xs={6} md={6}>
                         <div className="projectTitleSet">
                          <h3 className="float-left">Project title</h3><br/><br/>
                          <p className="float-left">Write a clear, brief title that helps people quickly understand the gist of your project.</p>
                         </div>
                      </Col>
                      <Col xs={6} md={6}>
                         <div className="projectTitleSet">
                          <label className="field a-field a-field_a1 page__field">
      <input className="field__input a-field__input" value={this.state.title} name="title" onChange={this.onchangeTitle} placeholder="e.g. Stanislav" required/>
      <span className="a-field__label-wrap">
        <span className="a-field__label">Title</span>
      </span>
    </label>
                          <span> 60/150</span>
                         </div>
                         <div className="projectTitleSet">
                          <label className="field a-field a-field_a1 page__field">
      <input className="field__input a-field__input" placeholder="e.g. Stanislav" value={this.state.subTitle}  name="subTitle" onChange={this.onchangeTitle}  required/>
      <span className="a-field__label-wrap">
        <span className="a-field__label">SubTitle</span>
      </span>
    </label>
                         </div>
                      </Col>
                    </Row>
                    <DropdownItem divider /> 
                 </div>
                 <div>
                    <DropdownItem divider />    
                    <Row>
                      <Col xs={6} md={6}>
                         <div className="projectTitleSet">
                          <h3 className="float-left">Project image</h3><br/><br/>
                          <p className="float-left">
Add an image that clearly represents your project.

Choose one that looks good at different sizes. It will appear in different sizes in different places: on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.

You may want to avoid including banners, badges, and text because they may not be legible at smaller sizes.

Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.</p>
                         </div>
                      </Col>
                      <Col xs={6} md={6}>
  
                         <form method="post" action="#" id="#"  onChange={this.droppedImage}>
           
              
              
              
           <div className="form-group files color">
             <input type="file" id="file" className="form-control" multiple=""/>
           </div>
           
         
       </form>
     
                      </Col>
                    </Row>
                    <DropdownItem divider /> 
                 </div>

                 <div>
                    <DropdownItem divider />    
                    <Row>
                      <Col xs={6} md={6}>
                         <div className="projectTitleSet">
                          <h3 className="float-left">Project video (optional)</h3><br/><br/>
                          <p className="float-left">
                          Add a video that describes your project.

Tell people what you’re raising funds to do, how you plan to make it happen, who you are, and why you care about this project.

After you’ve uploaded your video, use our editor to add captions and subtitles so your project is more accessible to everyone.</p>
                         </div>
                      </Col>
                      <Col xs={6} md={6}>
  
                         <form method="post" action="#" id="#"  onChange={this.droppedVideo}>
           
              
              
              
           <div className="form-group files color">
             <input type="file" id="fileVideo" className="form-control" multiple=""/>
           </div>
           
         
       </form>
     
                      </Col>
                    </Row>
                    <DropdownItem divider /> 
                 </div>
                 

                 <div>
                    <DropdownItem divider />    
                    <Row>
                      <Col xs={12} md={12}>
                        <code className="text-center">
                        <div className="nextButton" >
                        <button onClick={this.submitBasics} className="btn world-btn">Next:</button>
                </div>
                        </code>
                      </Col>
                    </Row>
                 </div>




    </section>
  </div>  


    );
  }
}

function mapStateToProps(state){
 return {
 }
}

const mapDispatchToProps = dispatch => {
  return {
    submitBasics : (payload)=>{dispatch(actions.user.submitUserBasics(payload))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectBasics);
