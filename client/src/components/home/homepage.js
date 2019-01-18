import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import * as actions from  "../../common/actions"
import {connect} from 'react-redux'
import Arts from './arts'
import Comics from './comics'
import Technology from './technology'
import Films from './films'
import Food from './food'
import Crafts from './craft'
import Games from './games'
import Music from './music.js'
import Publishing from './publish'
import TopLiked from './topLiked'
import FeaturedCategory from './featuredCategory'
import $ from 'jquery'
// import firebase from 'firebase'


class HomePage extends Component {
 

  componentDidMount(){


    $('html, body').animate({scrollTop: 0}, 'fast');

  }
  render() {
    return (
      <div>  
         
        <div className="height-400" style={{"backgroundColor" : "#7395AE" }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="single-blog-title text-center">
                                <h3>We connect Investors to Creators </h3>
                                <p style={{"color" : "#FFFFFF"}}>Fund Raiser is a funding platform for creative projects. A home for film, music, art, theater, games, comics, design, photography, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    <div className="main-content-wrapper section-padding-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="post-content-area mb-50">
                        <div className="world-catagory-area">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="title">Featured Projects</li>
                                <li className="nav-item">
                                    <a className="nav-link" id="tab2" data-toggle="tab" href="#world-tab-2" role="tab" aria-controls="world-tab-2" aria-selected="false">Arts</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="tab3" data-toggle="tab" href="#world-tab-3" role="tab" aria-controls="world-tab-3" aria-selected="false">Comics & Illustration</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="tab4" data-toggle="tab" href="#world-tab-4" role="tab" aria-controls="world-tab-4" aria-selected="false"> 
                                       Design & Tech 
                                     </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="tab5" data-toggle="tab" href="#world-tab-5" role="tab" aria-controls="world-tab-5" aria-selected="false">Film</a>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                                    <div className="dropdown-menu">
                                        <a  className="nav-link" id="tab6" data-toggle="tab" href="#world-tab-6" role="tab" aria-controls="world-tab-6" aria-selected="false">Food</a>
                                        <a  className="nav-link" id="tab0" data-toggle="tab" href="#world-tab-0" role="tab" aria-controls="world-tab-0" aria-selected="false">Craft</a>

                                        <a className="nav-link" id="tab7" data-toggle="tab" href="#world-tab-7" role="tab" aria-controls="world-tab-7" aria-selected="false">Games</a>
                                        <a className="nav-link" id="tab8" data-toggle="tab" href="#world-tab-8" role="tab" aria-controls="world-tab-8" aria-selected="false">Music</a>
                                        <a className="nav-link" id="tab9" data-toggle="tab" href="#world-tab-9" role="tab" aria-controls="world-tab-9" aria-selected="false">Publishing</a>
                                    </div>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">

                                <div className="tab-pane fade show active" id="world-tab-1" role="tabpanel" aria-labelledby="tab1">
                                  <Arts/>
                                </div>

                                <div className="tab-pane fade" id="world-tab-2" role="tabpanel" aria-labelledby="tab2">
                                   <Arts/>
                                </div>

                                <div className="tab-pane fade" id="world-tab-3" role="tabpanel" aria-labelledby="tab3">
                                    <Comics/>
                                </div>

                                <div className="tab-pane fade" id="world-tab-4" role="tabpanel" aria-labelledby="tab4">
                                   <Technology/>
                                </div>

                                <div className="tab-pane fade" id="world-tab-5" role="tabpanel" aria-labelledby="tab5">
                                   <Films/>
                                </div>

                                <div className="tab-pane fade" id="world-tab-6" role="tabpanel" aria-labelledby="tab6">
                                   <Food/>
                                </div>
                                <div className="tab-pane fade" id="world-tab-0" role="tabpanel" aria-labelledby="tab0">
                                   <Crafts/>
                                </div>
                                <div className="tab-pane fade" id="world-tab-7" role="tabpanel" aria-labelledby="tab7">
                                   <Games/>
                                </div>

                                <div className="tab-pane fade" id="world-tab-8" role="tabpanel" aria-labelledby="tab8">
                                   <Music/>
                                </div>

                                <div className="tab-pane fade" id="world-tab-9" role="tabpanel" aria-labelledby="tab9">
                                   <Publishing/>
                                </div>
                            </div>
                        </div>

                       {/* jsdjkadjkadjkadjahdjkadhjkadhajkd */}
                       <FeaturedCategory/>
                    </div>
                </div>

                <div className="col-12 col-md-8 col-lg-4">
                    <div className="post-sidebar-area wow fadeInUpBig" data-wow-delay="0.2s"> 
                      {/* asdadadadad */}
                        <TopLiked/>
                        <div className="sidebar-widget-area">
                            <h5 className="title">Stay Connected</h5>
                            <div className="widget-content">
                                <div className="social-area d-flex justify-content-between">
                                    <a href="/"><i className="fa fa-facebook"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-pinterest"></i></a>
                                    <a href="/"><i className="fa fa-vimeo"></i></a>
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                    <a href="/"><i className="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-widget-area">
                            <h5 className="title">Today’s Pick</h5>
                            <div className="widget-content">
                                <div className="single-blog-post todays-pick">
                                    <div className="post-thumbnail">
                                        <img src="img/blog-img/b22.jpg" alt=""/>
                                    </div>
                                    <div className="post-content px-0 pb-0">
                                        <a href="/" className="headline">
                                            <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommended">
                            <h3>Recommended For You</h3>
            </div>
            <div className="row justify-content-center">


                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.2s">
                        <div className="post-thumbnail">
                            <img src="img/blog-img/b4.jpg" alt=""/>
                            <div className="post-content d-flex align-items-center justify-content-between">
                                <div className="post-tag"><a href="/">travel</a></div>
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.4s">
                        <div className="post-thumbnail">
                            <img src="img/blog-img/b5.jpg" alt=""/>
                            <div className="post-content d-flex align-items-center justify-content-between">
                                <div className="post-tag"><a href="/">travel</a></div>
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.6s">
                        <div className="post-thumbnail">
                            <img src="img/blog-img/b6.jpg" alt=""/>
                            <div className="post-content d-flex align-items-center justify-content-between">
                                <div className="post-tag"><a href="/">travel</a></div>
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.6s">
                        <div className="post-thumbnail">
                            <img src="img/blog-img/b6.jpg" alt=""/>
                            <div className="post-content d-flex align-items-center justify-content-between">
                                <div className="post-tag"><a href="/">travel</a></div>
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.6s">
                        <div className="post-thumbnail">
                            <img src="img/blog-img/b6.jpg" alt=""/>
                            <div className="post-content d-flex align-items-center justify-content-between">
                                <div className="post-tag"><a href="/">travel</a></div>
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post post-style-3 mt-50 wow fadeInUpBig" data-wow-delay="0.6s">
                        <div className="post-thumbnail">
                            <img src="img/blog-img/b6.jpg" alt=""/>
                            <div className="post-content d-flex align-items-center justify-content-between">
                                <div className="post-tag"><a href="/">travel</a></div>
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="world-latest-articles">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="title">
                            <h5>Latest Articles</h5>
                        </div>

                        <div className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.2s">
                            <div className="post-thumbnail">
                                <img src="img/blog-img/b18.jpg" alt=""/>
                            </div>
                            <div className="post-content">
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.3s">
                            <div className="post-thumbnail">
                                <img src="img/blog-img/b19.jpg" alt=""/>
                            </div>
                            <div className="post-content">
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.4s">
                            <div className="post-thumbnail">
                                <img src="img/blog-img/b20.jpg" alt=""/>
                            </div>
                            <div className="post-content">
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="single-blog-post post-style-4 d-flex align-items-center wow fadeInUpBig" data-wow-delay="0.5s">
                            <div className="post-thumbnail">
                                <img src="img/blog-img/b21.jpg" alt=""/>
                            </div>
                            <div className="post-content">
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="title">
                            <h5>Most Popular Videos</h5>
                        </div>

                        <div className="single-blog-post wow fadeInUpBig" data-wow-delay="0.2s">
                            <div className="post-thumbnail">
                                <img src="img/blog-img/b7.jpg" alt=""/>
                                <div className="post-cta"><a href="/">travel</a></div>
                                <a href="https://www.youtube.com/watch?v=IhnqEwFSJRg" className="video-btn"><i className="fa fa-play"></i></a>
                            </div>
                            <div className="post-content">
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="single-blog-post wow fadeInUpBig" data-wow-delay="0.4s">
                            <div className="post-thumbnail">
                                <img src="img/blog-img/b8.jpg" alt=""/>
                                <div className="post-cta"><a href="/">travel</a></div>
                                <a href="https://www.youtube.com/watch?v=IhnqEwFSJRg" className="video-btn"><i className="fa fa-play"></i></a>
                            </div>
                            <div className="post-content">
                                <a href="/" className="headline">
                                    <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                </a>
                                <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                <div className="post-meta">
                                    <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="load-more-btn mt-50 text-center">
                        <a href="/" className="btn world-btn">Load More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>  

    );
  }
}

function mapStateToProps(state){
 return {
    loginStatus: state.User.loginStatus,
    userEmail : state.User.userEmail,
    userName : state.User.userName
 }
}

const mapDispatchToProps = dispatch => {
  return {
      changeUserState : (payload)=>{dispatch(actions.user.changeUserState(payload))},
      setUserDetailsForThirdPartyLogin : (payload)=>{dispatch(actions.thirdPartyLogin.thirdPartyUser(payload))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

