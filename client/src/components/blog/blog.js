import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
// import PromotionalSection from './promotionalSection'
import $ from 'jquery'

 class Blog extends Component {
  componentDidMount(){
    $('html, body').animate({scrollTop: 0}, 'fast');

  }
  render() {
    return (
      <div>    
    <div className="hero-area height-600 bg-img background-overlay" style={{"backgroundImage" : "url(img/blog-img/bg2.jpg)"}}>
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="single-blog-title text-center">
                        <div className="post-cta"><a href="/">travel</a></div>
                        <h3>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="main-content-wrapper section-padding-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="single-blog-content mb-100">
                        <div className="post-meta">
                            <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                        </div>
                        <div className="post-content">
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus eget purus id felis dignissim convallis. Suspendisse et augue dui. Morbi gravida sed justo vel venenatis. Ut tempor pretium maximus. Donec libero diam, faucibus vitae lectus nec, accumsan gravida dui. Nam interdum mi eget lacus aliquet, sit amet ultricies magna pharetra. In ut odio a ligula egestas pretium et quis sapien. Etiam faucibus magna eu porta vulputate. Aliquam euismod rhoncus malesuada. Nunc rutrum hendrerit semper.</h6>
                            <h6>Maecenas vitae sem varius, imperdiet nisi a, tristique nisi. Sed scelerisque suscipit leo cursus accumsan. Donec vel turpis quam. Mauris non nisl nec nunc gravida ullamcorper id vestibulum magna. Donec non velit finibus, laoreet arcu nec, facilisis augue. Aliquam sed purus id erat accumsan congue. Mauris semper ullamcorper nibh non pellentesque. Aenean euismod purus sit amet quam vehicula ornare.</h6>
                            <blockquote className="mb-30">
                                <h6>Aliquam auctor lacus a dapibus pulvinar. Morbi in elit erat. Quisque et augue nec tortor blandit hendrerit eget sit amet sapien. Curabitur at tincidunt metus, quis porta ex. Duis lacinia metus vel eros cursus pretium eget.</h6>
                                <div className="post-author">
                                    <p>Robert Morgan</p>
                                </div>
                            </blockquote>
                            <h6>Donec orci dolor, pretium in luctus id, consequat vitae nibh. Quisque hendrerit, lorem sit amet mollis malesuada, urna orci volutpat ex, sed scelerisque nunc velit et massa. Sed maximus id erat vel feugiat. Phasellus bibendum nisi non urna bibendum elementum. Aenean tincidunt nibh vitae ex facilisis ultrices. Integer ornare efficitur ultrices. Integer neque lectus, venenatis at pulvinar quis, aliquet id neque. Mauris ultrices consequat velit, sed dignissim elit posuere in. Cras vitae dictum dui.</h6>
                            <ul className="post-tags">
                                <li><a href="/">Manual</a></li>
                                <li><a href="/">Liberty</a></li>
                                <li><a href="/">Recommendations</a></li>
                                <li><a href="/">Interpritation</a></li>
                            </ul>
                            <div className="post-meta second-part">
                                <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-8 col-lg-4">
                    <div className="post-sidebar-area mb-100">
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
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post">
                        <div className="post-thumbnail">
                            <img src="img/blog-img/b1.jpg" alt=""/>
                            <div className="post-cta"><a href="/">travel</a></div>
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

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post">
                        <div className="post-thumbnail">
                            <img src="img/blog-img/b2.jpg" alt=""/>
                            <div className="post-cta"><a href="/">travel</a></div>
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

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="single-blog-post">
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
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="post-a-comment-area mt-70">
                        <h5>Get in Touch</h5>
                        <form action="/" method="post">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="group">
                                        <input type="text" name="name" id="name" required/>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Enter your name</label>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="group">
                                        <input type="email" name="email" id="email" required/>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Enter your email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="group">
                                        <textarea name="message" id="message" required></textarea>
                                        <span className="highlight"></span>
                                        <span className="bar"></span>
                                        <label>Enter your comment</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn world-btn">Post comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-12 col-lg-8">
                    <div className="comment_area clearfix mt-70">
                        <ol>
                            <li className="single_comment_area">
                                <div className="comment-content">
                                    <div className="comment-meta d-flex align-items-center justify-content-between">
                                        <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                        <a href="/" className="comment-reply btn world-btn">Reply</a>
                                    </div>
                                    <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                                </div>
                                <ol className="children">
                                    <li className="single_comment_area">
                                        <div className="comment-content">
                                            <div className="comment-meta d-flex align-items-center justify-content-between">
                                                <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                                <a href="/" className="comment-reply btn world-btn">Reply</a>
                                            </div>
                                            <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                            
                            <li className="single_comment_area">
                                <div className="comment-content">
                                    <div className="comment-meta d-flex align-items-center justify-content-between">
                                        <p><a href="/" className="post-author">Katy Liu</a> on <a href="/" className="post-date">Sep 29, 2017 at 9:48 am</a></p>
                                        <a href="/" className="comment-reply btn world-btn">Reply</a>
                                    </div>
                                    <p>Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                                </div>
                            </li>
                            
                        </ol>
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
export default Blog

