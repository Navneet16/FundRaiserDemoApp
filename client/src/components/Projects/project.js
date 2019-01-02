import React, { Component } from 'react';
// import {  Route, Switch } from 'react-router-dom';
import PromotionalSection from './promotionalSection'

 class Project extends Component {

  render() {
    return (
      <div>    
        <div className="hero-area section">
        <PromotionalSection/>
        
        </div>
        
        <div id="blog" className="section">
        
        <div className="container">
        
          <div className="row">
        
            <div id="main" className="col-md-9">
        
              <div className="row">
        
                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="blog-img">
                      <a href="blog-post.html">
                        <img src="/images/blog01.jpg" alt=""/>
                      </a>
                    </div>
                    <h4><a href="blog-post.html">Pro eu error molestie deserunt. At per viderer bonorum persecuti.</a></h4>
                    <div className="blog-meta">
                      <span className="blog-meta-author">By: <a href="/toEdt">John Doe</a></span>
                      <div className="pull-right">
                        <span>18 Oct, 2017</span>
                        <span className="blog-meta-comments"><a href="/toEdt"><i className="fa fa-comments"></i> 35</a></span>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="blog-img">
                      <a href="blog-post.html">
                        <img src="/images/blog02.jpg" alt=""/>
                      </a>
                    </div>
                    <h4><a href="blog-post.html">Pro eu error molestie deserunt. At per viderer bonorum persecuti.</a></h4>
                    <div className="blog-meta">
                      <span className="blog-meta-author">By: <a href="/toEdt">John Doe</a></span>
                      <div className="pull-right">
                        <span>18 Oct, 2017</span>
                        <span className="blog-meta-comments"><a href="/toEdt"><i className="fa fa-comments"></i> 35</a></span>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="blog-img">
                      <a href="blog-post.html">
                        <img src="/images/blog03.jpg" alt=""/>
                      </a>
                    </div>
                    <h4><a href="blog-post.html">Pro eu error molestie deserunt. At per viderer bonorum persecuti.</a></h4>
                    <div className="blog-meta">
                      <span className="blog-meta-author">By: <a href="/toEdt">John Doe</a></span>
                      <div className="pull-right">
                        <span>18 Oct, 2017</span>
                        <span className="blog-meta-comments"><a href="/toEdt"><i className="fa fa-comments"></i> 35</a></span>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className="col-md-6">
                  <div className="single-blog">
                    <div className="blog-img">
                      <a href="blog-post.html">
                        <img src="/images/blog04.jpg" alt=""/>
                      </a>
                    </div>
                    <h4><a href="blog-post.html">Pro eu error molestie deserunt. At per viderer bonorum persecuti.</a></h4>
                    <div className="blog-meta">
                      <span className="blog-meta-author">By: <a href="/toEdt">John Doe</a></span>
                      <div className="pull-right">
                        <span>18 Oct, 2017</span>
                        <span className="blog-meta-comments"><a href="/toEdt"><i className="fa fa-comments"></i> 35</a></span>
                      </div>
                    </div>
                  </div>
                </div>
        
              </div>
        
              <div className="row">
        
                <div className="col-md-12">
                  <div className="post-pagination">
                    <a href="/toEdt" className="pagination-back pull-left">Back</a>
                    <ul className="pages">
                      <li className="active">1</li>
                      <li><a href="/toEdt">2</a></li>
                      <li><a href="/toEdt">3</a></li>
                      <li><a href="/toEdt">4</a></li>
                    </ul>
                    <a href="/toEdt" className="pagination-next pull-right">Next</a>
                  </div>
                </div>
        
              </div>
            </div>
        
            <div id="aside" className="col-md-3">
        
              <div className="widget search-widget">
                <form>
                  <input className="input" type="text" name="search"/>
                  <button><i className="fa fa-search"></i></button>
                </form>
              </div>
        
              <div className="widget category-widget">
                <h3>Categories</h3>
                <a className="category" href="/toEdt">Web <span>12</span></a>
                <a className="category" href="/toEdt">Css <span>5</span></a>
                <a className="category" href="/toEdt">Wordpress <span>24</span></a>
                <a className="category" href="/toEdt">Html <span>78</span></a>
                <a className="category" href="/toEdt">Business <span>36</span></a>
              </div>
        
              <div className="widget posts-widget">
                <h3>Recents Posts</h3>
        
                <div className="single-post">
                  <a className="single-post-img" href="blog-post.html">
                    <img src="./img/post01.jpg" alt=""/>
                  </a>
                  <a href="blog-post.html">Pro eu error molestie deserunt.</a>
                  <p><small>By : John Doe .18 Oct, 2017</small></p>
                </div>
        
                <div className="single-post">
                  <a className="single-post-img" href="blog-post.html">
                    <img src="./img/post02.jpg" alt=""/>
                  </a>
                  <a href="blog-post.html">Pro eu error molestie deserunt.</a>
                  <p><small>By : John Doe .18 Oct, 2017</small></p>
                </div>
        
                <div className="single-post">
                  <a className="single-post-img" href="blog-post.html">
                    <img src="./img/post03.jpg" alt=""/>
                  </a>
                  <a href="blog-post.html">Pro eu error molestie deserunt.</a>
                  <p><small>By : John Doe .18 Oct, 2017</small></p>
                </div>
        
              </div>
        
              <div className="widget tags-widget">
                <h3>Tags</h3>
                <a className="tag" href="/toEdt">Web</a>
                <a className="tag" href="/toEdt">Photography</a>
                <a className="tag" href="/toEdt">Css</a>
                <a className="tag" href="/toEdt">Responsive</a>
                <a className="tag" href="/toEdt">Wordpress</a>
                <a className="tag" href="/toEdt">Html</a>
                <a className="tag" href="/toEdt">Website</a>
                <a className="tag" href="/toEdt">Business</a>
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

