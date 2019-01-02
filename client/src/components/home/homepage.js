import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';

 class HomePage extends Component {

  render() {
    return (
     <div>
        <div id="home" className="hero-area">

        <div className="bg-image bg-parallax overlay" style={{"backgroundImage" : "url(/images/home-background.jpg)"}}></div>

        <div className="home-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="white-text">Edusite Free Online Training Courses</h1>
                        <p className="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.</p>
                        <a className="main-button icon-button" href="/">Get Started!</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div id="about" className="section">

        <div className="container">

            <div className="row">

                <div className="col-md-6">
                    <div className="section-header">
                        <h2>Welcome to Edusite</h2>
                        <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
                    </div>

                    <div className="feature">
                        <i className="feature-icon fa fa-flask"></i>
                        <div className="feature-content">
                            <h4>Online Courses </h4>
                            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <i className="feature-icon fa fa-users"></i>
                        <div className="feature-content">
                            <h4>Expert Teachers</h4>
                            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                    </div>

                    <div className="feature">
                        <i className="feature-icon fa fa-comments"></i>
                        <div className="feature-content">
                            <h4>Community</h4>
                            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                    </div>

                </div>

                <div className="col-md-6">
                    <div className="about-img">
                        <img src="./images/about.png" alt=""/>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <div id="courses" className="section">

        <div className="container">

            <div className="row">
                <div className="section-header text-center">
                    <h2>Explore Courses</h2>
                    <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
                </div>
            </div>

            <div id="courses-wrapper">

                <div className="row">

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="course">
                            <a href="/" className="course-img">
                                <img src="./images/course01.jpg" alt=""/>
                                <i className="course-link-icon fa fa-link"></i>
                            </a>
                            <a className="course-title" href="/">Beginner to Pro in Excel: Financial Modeling and Valuation</a>
                            <div className="course-details">
                                <span className="course-category">Business</span>
                                <span className="course-price course-free">Free</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="course">
                            <a href="/" className="course-img">
                                <img src="./images/course02.jpg" alt=""/>
                                <i className="course-link-icon fa fa-link"></i>
                            </a>
                            <a className="course-title" href="/">Introduction to CSS </a>
                            <div className="course-details">
                                <span className="course-category">Web Design</span>
                                <span className="course-price course-premium">Premium</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="course">
                            <a href="/" className="course-img">
                                <img src="./images/course03.jpg" alt=""/>
                                <i className="course-link-icon fa fa-link"></i>
                            </a>
                            <a className="course-title" href="/">The Ultimate Drawing Course | From Beginner To Advanced</a>
                            <div className="course-details">
                                <span className="course-category">Drawing</span>
                                <span className="course-price course-premium">Premium</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="course">
                            <a href="/" className="course-img">
                                <img src="./images/course04.jpg" alt=""/>
                                <i className="course-link-icon fa fa-link"></i>
                            </a>
                            <a className="course-title" href="/">The Complete Web Development Course</a>
                            <div className="course-details">
                                <span className="course-category">Web Development</span>
                                <span className="course-price course-free">Free</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="course">
                            <a href="/" className="course-img">
                                <img src="./images/course05.jpg" alt=""/>
                                <i className="course-link-icon fa fa-link"></i>
                            </a>
                            <a className="course-title" href="/">PHP Tips, Tricks, and Techniques</a>
                            <div className="course-details">
                                <span className="course-category">Web Development</span>
                                <span className="course-price course-free">Free</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="course">
                            <a href="/" className="course-img">
                                <img src="./images/course06.jpg" alt=""/>
                                <i className="course-link-icon fa fa-link"></i>
                            </a>
                            <a className="course-title" href="/">All You Need To Know About Web Design</a>
                            <div className="course-details">
                                <span className="course-category">Web Design</span>
                                <span className="course-price course-free">Free</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="course">
                            <a href="/" className="course-img">
                                <img src="./images/course07.jpg" alt=""/>
                                <i className="course-link-icon fa fa-link"></i>
                            </a>
                            <a className="course-title" href="/">How to Get Started in Photography</a>
                            <div className="course-details">
                                <span className="course-category">Photography</span>
                                <span className="course-price course-free">Free</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-6 col-xs-6">
                        <div className="course">
                            <a href="/" className="course-img">
                                <img src="./images/course08.jpg" alt=""/>
                                <i className="course-link-icon fa fa-link"></i>
                            </a>
                            <a className="course-title" href="/">Typography From A to Z</a>
                            <div className="course-details">
                                <span className="course-category">Typography</span>
                                <span className="course-price course-free">Free</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="center-btn">
                    <a className="main-button icon-button" href="/">More Courses</a>
                </div>
            </div>

        </div>

    </div>

    <div id="cta" className="section">

        <div className="bg-image bg-parallax overlay" style={{"backgroundImage" : "url(./images/cta1-background.jpg)"}}></div>

        <div className="container">
            <div className="row">

                <div className="col-md-6">
                    <h2 className="white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis.</h2>
                    <p className="lead white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                    <a className="main-button icon-button" href="/">Get Started!</a>
                </div>

            </div>

        </div>

    </div>

    <div id="why-us" className="section">

        <div className="container">

            <div className="row">
                <div className="section-header text-center">
                    <h2>Why Edusite</h2>
                    <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
                </div>

                <div className="col-md-4">
                    <div className="feature">
                        <i className="feature-icon fa fa-flask"></i>
                        <div className="feature-content">
                            <h4>Online Courses</h4>
                            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="feature">
                        <i className="feature-icon fa fa-users"></i>
                        <div className="feature-content">
                            <h4>Expert Teachers</h4>
                            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="feature">
                        <i className="feature-icon fa fa-comments"></i>
                        <div className="feature-content">
                            <h4>Community</h4>
                            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* <hr className="section-hr"> */}

            <div className="row">

                <div className="col-md-6">
                    <h3>Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>
                    <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
                    <p>No vel facete sententiae, quodsi dolores no quo, pri ex tamquam interesset necessitatibus. Te denique cotidieque delicatissimi sed. Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At sed malis hendrerit, elitr deseruisse in sit, sit ei facilisi mediocrem.</p>
                </div>

                <div className="col-md-5 col-md-offset-1">
                    <a className="about-video" href="/">
                        <img src="./images/about-video.jpg" alt=""/>
                        <i className="play-icon fa fa-play"></i>
                    </a>
                </div>

            </div>
           {/* </hr> */}
        </div>

    </div>

    <div id="contact-cta" className="section">

        <div className="bg-image bg-parallax overlay" style={{"backgroundImage" : "url(./images/cta2-background.jpg)"}}></div>

        <div className="container">

            <div className="row">

                <div className="col-md-8 col-md-offset-2 text-center">
                    <h2 className="white-text">Contact Us</h2>
                    <p className="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
                    <a className="main-button icon-button" href="/">Contact Us Now</a>
                </div>

            </div>

        </div>

    </div>
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
export default HomePage

