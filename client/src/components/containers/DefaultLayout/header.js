import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

 class Header extends Component {

  render() {
    return (
      <div>  
        {/* <div id="preloader">
        <div className="preload-content">
            <div id="world-load"></div>
        </div>
    </div> */}
       <header className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg">
                        <NavLink className="navbar-brand"  to="/">Fund Raiser</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#worldNav" aria-controls="worldNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="worldNav">
                            <ul className="navbar-nav ml-auto" style={{"color" : "#ffffff!important"}}>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                        
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/project">Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog">Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</span>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink className="dropdown-item" to="/regular">Home</NavLink>
                                        <NavLink className="dropdown-item" to="/regular">Catagory</NavLink>
                                        <NavLink className="dropdown-item" to="/regular">Single Blog</NavLink>
                                        <NavLink className="dropdown-item" to="/regular">Regular Page</NavLink>
                                        <NavLink className="dropdown-item" to="/rr">Contact</NavLink>
                                    </div>
                                </li>
                            </ul>
                            <div id="search-wrapper">
                                <form action="/">
                                    <input type="text" id="search" placeholder="Search something..."/>
                                    <div id="close-icon"></div>
                                    <input className="d-none" type="submit" value=""/>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </div>
    );
  }
}

// function mapStateToProps(state){
//  return {
//   currentNetwork: state.setNetwork.network,
//   mnemonic: state.walletGenerationAndDetails.mnemonic
//  }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setNetwork: (network) => dispatch(actions.setNetwork(network))
//   }
// }

// export default connect(null, null)(DefaultLayout);
export default Header
