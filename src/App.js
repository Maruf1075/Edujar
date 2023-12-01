import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen,setisOpen] = useState(false);
  return (
    <div className="main">
    
      <header className="header">

          <a href="#" className="logo">Edujar</a>

          <div className={`bx bx-menu ${isOpen ? 'bx-x':''}`} id="menu-icon" onClick={()=> setisOpen(!isOpen)}>
          </div>

          <nav className={`navbar ${isOpen ? 'active':''}`} onClick={()=> setisOpen(!isOpen)}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#course">Course</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
          </nav>

          <nav className="navbar">

              <a href="#" className="btn">Login</a>
              <a href="#" className="btn btn-2">Get Started</a>

          </nav>

      </header>

      <section className="home" id="home">

          <div className="home-content">

              <h1>
                  <span>Best Courses</span> are waiting to enrich your skill
                  
                  <i className='bx bx-plus ml'></i>
                  <i className='bx bx-plus'></i>
                  <i className='bx bx-plus'></i>
                  
              </h1>
              <p>
                  Provides you with latest online learning system and material that help your knowlege growing.
              </p>

              <div className="nav-search">
                  <div className="search-icon">
                      <i className='bx bx-search'></i>
                  </div>
                  <input placeholder="Want to learn?" className="search-input" />

                  <a href="#" className="btn btn-2">Explore</a>

              </div>

          </div>

          <div className="home-img">
              <img src={require("./assets/course.png")}/>
          </div>


      </section>

      <div className="head" id="about">
          <h1>Our Course Partners</h1>
      </div>

      <div className="course">

          <img src={require("./assets/hubspot.png")}/>
          <img src={require("./assets/monday.png")}/>
          <img src={require("./assets/gitlab.png")}/>
          <img src={require("./assets/loom.jpg")}/>
          <img src={require("./assets/livechat.png")}/>

      </div>

      <section className="popular" id="course">

          <div className="pop">
              <h1>Popular <span>Courses</span></h1>

              <div className="pop-box">

                  <a href="#" className="btn btn-2">Design</a>
                  <a href="#" className="btn">Development</a>
                  <a href="#" className="btn">Business</a>
                  <a href="#" className="btn">Data Science</a>
                  <a href="#" className="btn">Marketing</a>

              </div>

          </div>

          <div className="course-container">

              <div className="course-box">
                  <img src={require("./assets/portfolio1.jpg")}/>

                  <div className="course-info">
  
                      <div className="course-in">
                          <i className='bx bx-play-circle'></i>
                          <p>10x Lesson</p>
                      </div>
                      
                      
                      <a href="#" className="btn btn-2">Design</a>

                  </div>

                  <div className="course-name">

                      <h1>
                          Python for Financial Analysis Next and Algorithmic Trading
                      </h1>

                  </div>

                  <div className="course-teacher">

                      <div className="course-v">
                          <img src={require("./assets/myself.jpeg")}/>
                          <div className="name">
                              <p className="name-1">Adam Smith</p>
                              <p>Python Developer</p>
                          </div>
                      </div>
                      
                      <div className="stud">
                          <p>50+ Student</p>
                      </div>
                      
                  </div>

                  <div className="stars">
                      <div className="star">
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bx-star' ></i>
                      </div>
                      <a href="#">Enroll Now</a>
                  </div>

              </div>

              <div className="course-box">
                  <img src={require("./assets/portfolio2.jpg")} alt=""/>

                  <div className="course-info">

                      <div className="course-in">
                          <i className='bx bx-play-circle'></i>
                          <p>10x Lesson</p>
                      </div>
                      <a href="#" className="btn btn-2">Design</a>

                  </div>

                  <div className="course-name">

                      <h1>
                          Python for Financial Analysis Next and Algorithmic Trading
                      </h1>

                  </div>

                  <div className="course-teacher">

                      <div className="course-v">
                          <img src={require("./assets/myself.jpeg")}/>
                          <div className="name">
                              <p className="name-1">Adam Smith</p>
                              <p>Python Developer</p>
                          </div>
                      </div>
                      
                      <div className="stud">
                          <p>50+ Student</p>
                      </div>
                      
                  </div>

                  <div className="stars">
                      <div className="star">
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bx-star' ></i>
                      </div>
                      <a href="#">Enroll Now</a>
                  </div>
              </div>

              <div className="course-box">
                  <img src={require("./assets/portfolio4.jpg")} alt=""/>

                  <div className="course-info">

                      <div className="course-in">
                          <i className='bx bx-play-circle'></i>
                          <p>10x Lesson</p>
                      </div>
                      <a href="#" className="btn btn-2">Design</a>

                  </div>

                  <div className="course-name">

                      <h1>
                          Python for Financial Analysis Next and Algorithmic Trading
                      </h1>

                  </div>

                  <div className="course-teacher">
                      <div className="course-v">
                          <img src={require("./assets/myself.jpeg")}/>
                          <div className="name">
                              <p className="name-1">Adam Smith</p>
                              <p>Python Developer</p>
                          </div>
                      </div>

                      <div className="stud">
                          <p>50+ Student</p>
                      </div>
                      
                  </div>

                  <div className="stars">
                      <div className="star">
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bx-star' ></i>
                      </div>
                      <a href="#">Enroll Now</a>
                  </div>
              </div>

              <div className="course-box">
                  <img src={require("./assets/portfolio5.jpg")} alt=""/>

                  <div className="course-info">

                      <div className="course-in">
                          <i className='bx bx-play-circle'></i>
                          <p>10x Lesson</p>
                      </div>
                      <a href="#" className="btn btn-2">Design</a>

                  </div>

                  <div className="course-name">

                      <h1>
                          Python for Financial Analysis Next and Algorithmic Trading
                      </h1>

                  </div>

                  <div className="course-teacher">
                      <div className="course-v">
                          <img src={require("./assets/myself.jpeg")}/>
                          <div className="name">
                              <p className="name-1">Adam Smith</p>
                              <p>Python Developer</p>
                          </div>
                      </div>
                      <div className="stud">
                          <p>50+ Student</p>
                      </div>
                      
                  </div>

                  <div className="stars">
                      <div className="star">
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bx-star' ></i>
                      </div>
                      <a href="#">Enroll Now</a>
                  </div>
              </div>

              <div className="course-box">
                  <img src={require("./assets/portfolio3.jpg")} alt=""/>

                  <div className="course-info">

                      <div className="course-in">
                          <i className='bx bx-play-circle'></i>
                          <p>10x Lesson</p>
                      </div>
                      <a href="#" className="btn btn-2">Design</a>

                  </div>

                  <div className="course-name">

                      <h1>
                          Python for Financial Analysis Next and Algorithmic Trading
                      </h1>

                  </div>

                  <div className="course-teacher">
                      <div className="course-v">
                          <img src={require("./assets/myself.jpeg")}/>
                          <div className="name">
                              <p className="name-1">Adam Smith</p>
                              <p>Python Developer</p>
                          </div>
                      </div>
                      <div className="stud">
                          <p>50+ Student</p>
                      </div>
                      
                  </div>

                  <div className="stars">
                      <div className="star">
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bx-star' ></i>
                      </div>
                      <a href="#">Enroll Now</a>
                  </div>
              </div>

              <div className="course-box">
                  <img src={require("./assets/portfolio6.jpg")} alt=""/>

                  <div className="course-info">

                      <div className="course-in">
                          <i className='bx bx-play-circle'></i>
                          <p>10x Lesson</p>
                      </div>
                      <a href="#" className="btn btn-2">Design</a>

                  </div>

                  <div className="course-name">

                      <h1>
                          Python for Financial Analysis Next and Algorithmic Trading
                      </h1>

                  </div>

                  <div className="course-teacher">
                      <div className="course-v">
                          <img src={require("./assets/myself.jpeg")}/>
                          <div className="name">
                              <p className="name-1">Adam Smith</p>
                              <p>Python Developer</p>
                          </div>
                      </div>
                      <div className="stud">
                          <p>50+ Student</p>
                      </div>
                      
                  </div>

                  <div className="stars">
                      <div className="star">
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                          <i className='bx bx-star' ></i>
                      </div>
                      <a href="#">Enroll Now</a>
                  </div>

              </div>
            </div>

      </section>

      <div className="enroll">

          <a href="#" className="btn btn-2">Explore All Courses</a>

      </div>

      <section className="list" id="blog">

          <div className="pop-category">
              <h1>Most Popular <span>Category</span></h1>
          </div>

          <div className="list-name">

              <div className="list-item">
                  <i className='bx bxl-sketch'></i>
                  <p>Design</p>
                  <i className='bx bxs-right-arrow-alt try-1'></i>
              </div>

              <div className="list-item">
                  <i className='bx bxl-deviantart' ></i>
                  <p>Development</p>
                  <i className='bx bxs-right-arrow-alt try-1'></i>
              </div>

              <div className="list-item">
                  <i className='bx bxs-devices' ></i>
                  <p>Professional Dev.</p>
                  <i className='bx bxs-right-arrow-alt try-1'></i>
              </div>

              <div className="list-item">
                  <i className='bx bx-image'></i>
                  <p>Photography</p>
                  <i className='bx bxs-right-arrow-alt try-1'></i>
              </div>

              <div className="list-item">
                  <i className='bx bxs-data'></i>
                  <p>Data Science</p>
                  <i className='bx bxs-right-arrow-alt try-1'></i>
              </div>

              <div className="list-item">
                  <i className='bx bxs-business'></i>
                  <p>Business</p>
                  <i className='bx bxs-right-arrow-alt try-1'></i>
              </div>

              <div className="list-item">
                  <i className='bx bx-store-alt'></i>
                  <p>Marketing</p>
                  <i className='bx bxs-right-arrow-alt try-1'></i>
              </div>

              <div className="list-item">
                  <i className='bx bx-music'></i>
                  <p>Music</p>
                  <i className='bx bxs-right-arrow-alt try-1'></i>
              </div>

          </div>

      </section>

      <section className="difference">

          <div className="difference-content">

              <h1>
                  What is our <span>difference</span>   
              </h1>
              <p>
                  Provides you with latest online learning system and material that help your knowlege growing. They are available for a reasonable price too.
              </p>
              <p>
                  Provides you with latest online learning system and material.
              </p>

              <div className="btn-holder">
                  <a href="#" className="btn btn-2">Learn More</a>
              </div>
              
          </div>

          <img src={require("./assets/diff.png")}/>

          <div className="list-holder">

              <div className="list-1">
                  <i className='bx bxs-graduation'></i>
                  <div className="name">
                      <p className="name-1">300</p>
                      <p>Instructor</p>
                  </div>
              </div>

              <div className="list-1">
                  <i className='bx bx-male-female'></i>
                  <div className="name">
                      <p className="name-1">20,000+</p>
                      <p>Student</p>
                  </div>
              </div>

              <div className="list-1">
                  <i className='bx bx-video'></i>
                  <div className="name">
                      <p className="name-1">10,000+</p>
                      <p>Video</p>
                  </div>
              </div>

              <div className="list-1">
                  <i className='bx bx-user'></i>
                  <div className="name">
                      <p className="name-1">1,00,000+</p>
                      <p>User's</p>
                  </div>
              </div>

          </div>

      </section>

      <div className="testi">
          <h1>Testimonials</h1>
      </div>

      <section>

          <div className="testimonial">

              <div className="test-box">

                  <div className="test-name">
      
                      <div className="course-teacher">

                          <div className="course-bond">
                              <img src={require("./assets/myself.jpeg")}/>
                              <div className="name">
                                  <p className="name-1">Adam Smith</p>
                                  <p>Python Developer</p>
                              </div>
                              
                          </div>
                          
                      
                      
                          <div className="stars">
                              <div className="star">
                              <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                              <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                              <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                              <i className='bx bxs-star' style={{color: '#f3e207'}}  ></i>
                              <i className='bx bx-star' ></i>
                              </div>
                          </div>
                      
                      </div>
                  </div>
      
                  <div className="test-p">
      
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusantium, accusamus esse 
                      provident officiis quasi totam quis aliquam, ipsum nesciunt iste voluptas dolor quas quidem molestiae
                      natus suscipit illum rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      
                  </div>
      
                  <div className="test-sign">
                      <i className='bx bx-left-arrow-alt'></i>
                      <i className='bx bx-right-arrow-alt' ></i>
                  </div>
                    
              </div>
      
              <div className="test-pic">
      
                  <img src={require("./assets/neal1.1.jpg")} className="img-1"/>
                  <img src={require("./assets/instagram-03.jpg")} className="img-2"/>
                  <img src={require("./assets/women-03.jpg")} className="img-3"/>
                  <img src={require("./assets/myself.jpeg")} className="img-4"/>
                  <img src={require("./assets/instagram-05.jpg")} className="img-5"/>
      
              </div>

          </div>    

      </section>


      <section className="join" id="contact">

          <div className="join-p">

              <h1>
                  Join our <span>world's largest</span> learning platform today
              </h1>

              <p>Start learning by registering and get 30 days free trial</p>

          </div>

          <div className="join-btn">
              <a href="#" className="btn join-btn-1">Join as Instructor</a>
              <a href="#" className="btn btn-2">Join as Student</a>
          </div>

      </section>

      <section className="footer">

          <div className="footer-div">

              <div className="foot-edu">
                  <h1>Edujar</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod, laboriosam eius 
                      pariatur minus accusantium, fugit harum ratione beatae distinctio deleniti debitis 
                      eligendi dolorem alias excepturi quo.</p>
              </div>
              <div className="foot-link">
                  <h2>Quick Links</h2>
                  <div className="links">
                      <a href="#">About</a>
                      <a href="#">Blog</a>
                      <a href="#">Course</a>
                      <a href="#">Contact</a>
                  </div>
              </div>
              <div className="foot-contact">
                  <h2>Contact Us</h2>
                  <div className="number">
                      <div className="number-1">
                          <i className='bx bx-phone'></i>
                          <p>[209]555-0104</p>
                      </div>
                      <div className="email">
                          <i className='bx bx-envelope'></i>
                          <p>michelle.rivera@example.com</p>
                      </div>
                  </div>
      
              </div>
      
              <div className="address">
                  <i className='bx bx-map'></i>
                  <p>2715 Ash Dr San Jose, South Dakota 83475</p>
              </div>

          </div>

          
      </section>


</div>
  );
}

export default App;
