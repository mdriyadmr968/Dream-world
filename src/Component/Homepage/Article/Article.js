import React from 'react';
import './Article.css'

const Article = () => {
    return (
      <div>
        <div>
          <div className="container">
            <div className="top-blogs">
              <h2 className="section">Recent post</h2>
              <p className='section-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos excepturi blanditiis deleniti optio possimus?</p>
              <div className="blogs">
                <article className="blog">
                  <div className="thumbnail">
                    <img
                      src="https://tripandtravelblog.com/wp-content/uploads/2021/10/young-family-on-vacation-on-the-beach-family-trave-ZSHEZLP-324x235.jpg"
                      alt=""
                    />
                  </div>
                  <div className="blog-info">
                    <div>
                      <h3 className="blog-title">
                        4 Reasons Why You Should Travel as a Family
                      </h3>
                      <p className="blog-author">
                        By <a href="/">alan walker</a>
                      </p>
                    </div>
                  </div>
                </article>
                <article className="blog">
                  <div className="thumbnail">
                    <img
                      src="https://tripandtravelblog.com/wp-content/uploads/2017/09/Amsterdam-a.jpg"
                      alt=""
                    />
                  </div>
                  <div className="blog-info">
                    <div>
                      <h3 className="blog-title">
                        Europe’s Best Nightlife Destinations
                      </h3>
                      <p className="blog-author">
                        By <a href="/">john snow</a>
                      </p>
                    </div>
                  </div>
                </article>
                <article className="blog">
                  <div className="thumbnail">
                    <img
                      src="https://tripandtravelblog.com/wp-content/uploads/2017/12/Nightlife-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="blog-info">
                    <div>
                      <h3 className="blog-title">
                        Nightlife Activities for Every Traveler
                      </h3>
                      <p className="blog-author">
                        By <a href="/">shifat hasan</a>
                      </p>
                    </div>
                  </div>
                </article>
                <article className="blog">
                  <div className="thumbnail">
                    <img
                      src="https://tripandtravelblog.com/wp-content/uploads/2021/07/paradis-hotel-PQX5MKN-696x464.jpg"
                      alt=""
                    />
                  </div>
                  <div className="blog-info">
                    <div className="blog-title">
                      <h3 className="blog-title">
                        5 Things to Look for in a Good Hotel
                      </h3>
                      <p className="blog-author">
                        By <a href="/">md riyad</a>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Article;