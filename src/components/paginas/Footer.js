import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './Footer.css'
function Footer() {
    return(
        <div className='footer-container'>
            <section className=' footer-subscription'>
                <p className=' footer-subscription-heading'>
                Enjoy articles about the diffent aspects of Coffe in our lives
                </p>
                <p className='footer-subdcription-text'>
                   Subscribe! you can unsubsribe at any time
                </p>
           <div className='input-areas'>
               <form>
                 <input type="email"  name ="email"className='footer-input' placeholder='Your e-mail'/>
                 <Button  buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
            </section>
              <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to="/">How it works</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/sing-up">Become a writter</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to="/">Submit Videos</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Reviews</Link>  
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">YouTube</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contac Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Places</Link>
                        <Link to="/">Reviews</Link>
                    </div>
               </div>
                </div>
             
               <section className='social-media'>
                   <div className='social-media-wrap'>
                       <div className='footer-logo'>
                           <Link to='/'className='social-logo'>
                           <span>COFFE</span>NOTES<i className='fa fa-coffee'></i> 
                           </Link>
                          </div>
                          <small className='website-rights'>COFFE NOTES ⓒ2021</small>
                          <div className='social-icons'>
                              <Link  to='/' 
                              target="_blank"
                              arial-label="facebook"
                              className='social-icon-link '
                              >
                                  <i className='fab fa-facebook'></i>
                              </Link>
                              <Link  to='/' 
                              target="_blank"
                              arial-label="instagram"
                              className='social-icon-link '
                              >
                                  <i className='fab fa-instagram'></i>
                              </Link>
                              <Link  to='/' 
                              target="_blank"
                              arial-label="twitter"
                              className='social-icon-link '
                              >
                                  <i className='fab fa-twitter'></i>
                              </Link>
                              <Link  to='/' 
                              target="_blank"
                              arial-label="linkedin"
                              className='social-icon-link '
                              >
                                  <i className='fab fa-linkedin'></i>
                              </Link>
                              <Link  to='/' 
                              target="_blank"
                              arial-label="youtube"
                              className='social-icon-link '
                              >
                                  <i className='fab fa-youtube'></i>
                              </Link>
                           </div>
                     </div>
                </section>
        </div>


    )
}

export default Footer