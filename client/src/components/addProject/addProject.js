import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
// import PromotionalSection from './promotionalSection'
import $ from 'jquery'
import {connect} from 'react-redux'
import * as actions from  "../../common/actions"
import countryList from 'react-select-country-list'

import SelectCategory from './addCategory'
import AddDescription from './addDescription'
import SelectCountry from './selectCountry'

 class AddProject extends Component {
    constructor(props) {
        super(props);
        this.onChange1 =  this.onChange1.bind(this)
        this.onChange2 =  this.onChange2.bind(this)
        this.submitCategory =  this.submitCategory.bind(this)
        this.previuosCategory =  this.previuosCategory.bind(this)
        this.nextCountry =  this.nextCountry.bind(this)
        this.onChangeDescription =  this.onChangeDescription.bind(this)
        this.changeHandler =  this.changeHandler.bind(this)
        this.previuosDescription =  this.previuosDescription.bind(this)
        this.finalizeProject =  this.finalizeProject.bind(this)


        this.options = countryList().getData()
        this.state = { value1: '' , value2 : '' , description : '', country : '', options: this.options};
      }

  componentDidMount(){
    $('html, body').animate({scrollTop: 0}, 'fast');

  }
  onChange1(e) {
    this.setState({
      value1: e.target.value
    })
  }
  onChange2(e) {
  this.setState({
    value2: e.target.value
  })
}
changeHandler = value => {
  this.setState({ country : value })
}

onChangeDescription(e) {
  if(e.target.value.match(/\S+/g).length <= 150){
    this.setState({
      description: e.target.value
    })
  }
}
submitCategory(e){
  e.preventDefault()
  if(this.state.value1 && this.state.value2){
        this.props.setSection('projectDescription')
  }
}
previuosCategory(e){
  e.preventDefault()
  this.props.setSection('selectCategorySection')
}
previuosDescription(e){
  e.preventDefault()
  this.props.setSection('projectDescription')
}
nextCountry(e){
  e.preventDefault()
  if(this.state.description && this.state.description.match(/\S+/g).length !== 0){
    this.props.setSection('selectCountry')
  }
}
finalizeProject(e){
  e.preventDefault()
  if(this.state.country && this.state.description && this.state.value1 && this.state.value2){
     this.props.finalizeProject({
       email : this.props.userEmail,
       token : this.props.userToken,
       category : this.state.value1,
       subCategory : this.state.value2,
       description : this.state.description,
       country : this.state.country.label
     })
  }
}

  render() {
    let sectionToShow;
    if (this.props.selectCategorySection ) {
      sectionToShow = <SelectCategory {...this}/>
    }else if(this.props.projectDescription){
      sectionToShow = <AddDescription {...this}/>
    }else if(this.props.selectCountry){
      sectionToShow= <SelectCountry {...this}/>
    }
    else{
      sectionToShow = <SelectCategory {...this}/>

    }
    return (
        <div>    
        {/* <div className="hero-area height-400 bg-img background-overlay" style={{"backgroundImage" : "url(img/blog-img/bg4.jpg)"}}></div> */}

    <section className="contact-area section-padding-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-6">
                    <div className="contact-form">
                        <h5 className="addProjectHeading">Add Project</h5>
                       {
                         sectionToShow
                       }

      </div>
    
                    </div>
            </div>
        </div>
    </section>
  </div>   
     

    );
  }
}

function mapStateToProps(state){
 return {
  selectCategorySection: state.addProjectSection.selectCategorySection,
  projectDescription: state.addProjectSection.projectDescription,
  selectCountry: state.addProjectSection.selectCountry,
  loginStatus: state.User.loginStatus,
  userEmail : state.User.userEmail,
  userToken : state.User.userToken
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSection : (payload)=>{dispatch(actions.addProject.setSection(payload))},
    finalizeProject : (payload)=>{dispatch(actions.addProject.submitProject(payload))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);

