import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
// import PromotionalSection from './promotionalSection'
import $ from 'jquery'

 class Project extends Component {
  componentDidMount(){
    $('html, body').animate({scrollTop: 0}, 'fast');

  }
  render() {
    return (
      <div>    
        <div className="hero-area height-400 bg-img background-overlay" style={{"backgroundImage": "url(img/blog-img/bg3.jpg)"}}></div>

    <div className="main-content-wrapper section-padding-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="post-content-area mb-100">
                        <div className="world-catagory-area">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="title">Lifestyle</li>

                                <li className="nav-item">
                                    <a className="nav-link active" id="tab1" data-toggle="tab" href="/world-tab-1" role="tab" aria-controls="world-tab-1" aria-selected="true">All</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="tab2" data-toggle="tab" href="/world-tab-2" role="tab" aria-controls="world-tab-2" aria-selected="false">Business</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="tab3" data-toggle="tab" href="/world-tab-3" role="tab" aria-controls="world-tab-3" aria-selected="false">Health &amp; Fitness</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="tab4" data-toggle="tab" href="/world-tab-4" role="tab" aria-controls="world-tab-4" aria-selected="false">Recipes</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" id="tab5" data-toggle="tab" href="/world-tab-5" role="tab" aria-controls="world-tab-5" aria-selected="false">Travel</a>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">

                                <div className="tab-pane fade show active" id="world-tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b18.jpg" alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <NavLink to="/" className="headline">
                                                <h5>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h5>
                                            </NavLink>
                                            <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                                            <div className="post-meta">
                                                <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b23.jpg" alt=""/>
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b24.jpg" alt=""/>
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

                                <div className="tab-pane fade" id="world-tab-2" role="tabpanel" aria-labelledby="tab2">
                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b23.jpg" alt=""/>
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b24.jpg" alt=""/>
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

                                <div className="tab-pane fade" id="world-tab-3" role="tabpanel" aria-labelledby="tab3">
                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b23.jpg" alt=""/>
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b24.jpg" alt=""/>
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

                                <div className="tab-pane fade" id="world-tab-4" role="tabpanel" aria-labelledby="tab4">
                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b23.jpg" alt=""/>
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b24.jpg" alt=""/>
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

                                <div className="tab-pane fade" id="world-tab-5" role="tabpanel" aria-labelledby="tab5">
                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b23.jpg" alt=""/>
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

                                    <div className="single-blog-post post-style-4 d-flex align-items-center">
                                        <div className="post-thumbnail">
                                            <img src="img/blog-img/b24.jpg" alt=""/>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-8 col-lg-4">
                    <div className="post-sidebar-area">
                        <div className="sidebar-widget-area">
                            <h5 className="title">About World</h5>
                            <div className="widget-content">
                                <p>The mango is perfect in that it is always yellow and if it’s not, I don’t want to hear about it. The mango’s only flaw, and it’s a minor one, is the effort it sometimes takes to undress the mango, carve it up in a way that makes sense, and find its way to the mouth.</p>
                            </div>
                        </div>
                        <div className="sidebar-widget-area">
                            <h5 className="title">Top Stories</h5>
                            <div className="widget-content">
                                <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                                    <div className="post-thumbnail">
                                        <img src="img/blog-img/b11.jpg" alt=""/>
                                    </div>
                                    <div className="post-content">
                                        <a href="/" className="headline">
                                            <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                                    <div className="post-thumbnail">
                                        <img src="img/blog-img/b13.jpg" alt=""/>
                                    </div>
                                    <div className="post-content">
                                        <a href="/" className="headline">
                                            <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                                    <div className="post-thumbnail">
                                        <img src="img/blog-img/b14.jpg" alt=""/>
                                    </div>
                                    <div className="post-content">
                                        <a href="/" className="headline">
                                            <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                                    <div className="post-thumbnail">
                                        <img src="img/blog-img/b10.jpg" alt=""/>
                                    </div>
                                    <div className="post-content">
                                        <a href="/" className="headline">
                                            <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                        </a>
                                    </div>
                                </div>
                                <div className="single-blog-post post-style-2 d-flex align-items-center widget-post">
                                    <div className="post-thumbnail">
                                        <img src="img/blog-img/b12.jpg" alt=""/>
                                    </div>
                                    <div className="post-content">
                                        <a href="/" className="headline">
                                            <h5 className="mb-0">How Did van Gogh’s Turbulent Mind Depict One of the Most</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
export default Project

