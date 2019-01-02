import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

 class Header extends Component {

  render() {
    return (
      <div>  
        <div id="preloader">
        <div class="preload-content">
            <div id="world-load"></div>
        </div>
    </div>
       <header className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html"><img src="img/core-img/logo.png" alt="Logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/worldNav" aria-controls="worldNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="worldNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="index.html">Home</a>
                                        <a className="dropdown-item" href="catagory.html">Catagory</a>
                                        <a className="dropdown-item" href="single-blog.html">Single Blog</a>
                                        <a className="dropdown-item" href="regular-page.html">Regular Page</a>
                                        <a className="dropdown-item" href="contact.html">Contact</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Gadgets</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Lifestyle</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Video</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
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
