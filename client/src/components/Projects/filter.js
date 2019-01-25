import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
      console.log(this.state)
    return (
      <div>
        <div className="container">
        <div className="row">
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Click Here</Button>
        <Modal show={this.state.modal} className={this.props.className} id="mr-top">
        <ModalBody>
          <div className="input-group">
    <input type="text" className="form-control input-width" placeholder="Search"/>
    <div className="input-group-btn">
      <button className="btn btn-default button-width" type="submit">
        <i className="glyphicon glyphicon-search"></i>
      </button>
    </div>
  </div>
          
          
    <div className="container" id="widthSet">
        <div className="col-md-6">
          <nav className="nav-sidebar">
          <ul className="nav inline">
                <li className="active"><a href="#tab1" data-toggle="tab" className="trans">One</a></li>
                <li className=""><a href="#tab2" data-toggle="tab" className="trans">Two</a></li>
                <li className=""><a href="#tab3" data-toggle="tab" className="trans">Three</a></li>                              
                <li className=""><a href="#tab4" data-toggle="tab" className="trans">Four</a></li>                              
          </ul>
        </nav>
      </div>
        <div className="col-md-6">
<div className="tab-content block">
<div className="tab-pane active text-style " id="tab1">
 <div className="col-md-12 pt-3">
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option>Brand</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                                                      <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                                                      <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                                                      <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option>Brand</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>

                       
</div>
</div>
<div className="tab-pane text-style" id="tab2">
<div className="col-md-12 pt-3">
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-2</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-2</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-2</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-2</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                                                   
</div>
</div>
<div className="tab-pane text-style" id="tab3">
<div className="col-md-12 pt-3">
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-3</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                            <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-3</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                            <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-3</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                            <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-3</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                                                   
</div>
</div>
<div className="tab-pane text-style" id="tab4">
<div className="col-md-12 pt-3">
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-4</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-4</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-4</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                           <div className="form-group shadow">
                              <select id="inputState " className="form-control border-r-none">
                                <option >Brand-4</option>
                                <option>BMW</option>
                                <option>Audi</option>
                                <option>Maruti</option>
                                <option>Tesla</option>
                              </select>
                           </div>
                                                   
</div>
</div>

</div>
</div>
    </div>                      
      
          </ModalBody>
        </Modal>
      </div>
      </div>
      </div>
    );
  }
}

export default Filter;