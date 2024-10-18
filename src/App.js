import React, { Component } from 'react';

import { IntroSection, ProjectsSection, SkillsSection } from './components';
import User from './UserDetails';
import './assets/styles.css';
import chart from './assets/images/Group256.png';
import chart2 from './assets/images/Group 264.png';
import chart3 from './assets/images/Group286.png';
import check from './assets/images/check.png';
import eye from './assets/images/eye.png';
import vector from './assets/images/Vector.png';
import vector2 from './assets/images/Vector2.png';
import elipse from './assets/images/elipse.png';
import rectangle from './assets/images/rectangle.png';



import chart4 from './assets/images/chart4.png';
import logo from './assets/images/Logo.png';
import cardImage from './assets/images/Rectangle1270.png';
import man from './assets/images/man.png';
import woman from './assets/images/woman.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class='flex-between'>
          <div>
            <img src={logo} alt="" className='logo' />
          </div>
          <div class='flex-between'>
            <h5 class="font-mono mx-2">
              Product
            </h5>
            <h5 class="font-mono mx-2">
              Services
            </h5>
            <h5 class="font-mono mx-2">
              About
            </h5>
            <button class="login-button font-mono">Log in</button>
          </div>
        </div>



        <div class="frame-284">
          <div class="group-267">

            <h2 class="big-text">
              Save time by building  fast with Boldo Template
            </h2>
            <div class="med-text">
              Funding handshake buyer business-to-business metrics iPad partnership.
              First mover advantage innovator success deployment non-disclosure.
            </div>
            <div className='btn-group'>

              <button class="buy-btn">
                Buy template
              </button>
              <button class="explore-btn">
                Explore
              </button>
            </div>
          </div>
          <div className='hero-graphics'>
            <img src={chart} alt="" className='Group256' />
            <div className='chart-grp'>
              <img src={chart3} alt="" className='chart' />
              <img src={chart2} alt="" className='chart2' />

            </div>

          </div>
        </div>
        <div className='small-section'>
          <img src={logo} alt="" className='logo' />
          <img src={logo} alt="" className='logo' />
          <img src={logo} alt="" className='logo' />
          <img src={logo} alt="" className='logo' />
          <img src={logo} alt="" className='logo' />
          <img src={logo} alt="" className='logo' />

        </div>
        <div className='service-section'>
          <div className='service-container'>
            <h3 className='service-header'>
              Our services
            </h3>
            <h2 className='service-info'>
              Handshake infographic mass market crowdfunding iteration.
            </h2>
          </div>

          <div className='card-div'>
            <div className='card'>
              <img src={cardImage} className='card-image' alt="" />
              <div className='card-info'>
                <p className='card-text'>Cool Feature Title</p>
                <button className='card-btn'>Explore Page</button>

              </div>
            </div>
            <div className='card'>
              <img src={cardImage} className='card-image' alt="" />
              <div className='card-info'>
                <p className='card-text'>Cool Feature Title</p>
                <button className='card-btn'>Explore Page</button>

              </div>
            </div>
            <div className='card'>
              <img src={cardImage} className='card-image' alt="" />
              <div className='card-info'>
                <p className='card-text'>Cool Feature Title</p>
                <button className='card-btn'>Explore Page</button>

              </div>
            </div>

          </div>



        </div>
        <div className='service-section-white'>
          <div className='card-group'>

            <div className='man-img'>

            </div>

            <div className='card-absolute'>
              <img src={chart4} className='card-image-small' alt="" />
              <div className='card-info-black'>
                <h5 className=''>30</h5>
                <h5 className=''>More income in June</h5>
              </div>
            </div>

          </div>
          <div className=''>
            <p className='cta-text'>
              We connect our customers with the best, and help them keep up-and stay open.
            </p>
            <div className='text-icon'>
              <img src={check} className='check' alt="" />
              <p>
                We connect our customers with the best.
              </p>
            </div>
            <div className='text-icon'>
              <img src={check} className='check' alt="" />
              <p>
                We connect our customers with the best.
              </p>
            </div>
            <div className='text-icon'>
              <img src={check} className='check' alt="" />
              <p>
                We connect our customers with the best.
              </p>
            </div>
            <button class="buy-btn">
              Start Now
            </button>

          </div>


        </div>
        <div className='service-section-white'>
          <div className=''>
            <p className='cta-text'>
              We connect our customers with the best, and help them keep up-and stay open.
            </p>
            <div className='text-icon-black-bg'>
              <img src={check} className='check' alt="" />
              <p>
                We connect our customers with the best.
              </p>
            </div>
            <div className='text-icon'>
              <img src={eye} className='check-blk' alt="" />
              <p>
                We connect our customers with the best.
              </p>
            </div>
            <div className='text-icon'>
              <img src={eye} className='check-blk' alt="" />
              <p>
                We connect our customers with the best.
              </p>
            </div>

          </div>
          <div className='card-group'>

            <div className='woman-img'>

            </div>
            <div className='card-absolute'>
              <img src={chart4} className='card-image-small' alt="" />
              <div className='card-info-black'>
                <h5 className=''>30</h5>
                <h5 className=''>More income in June</h5>
              </div>
            </div>

          </div>



        </div>
        <div className='service-section'>
          <div className='ent-section'>
            <div>
              <p className='cta-text-white'>
                We connect our customers with the best, and help them keep up-and stay open.
              </p>
            </div>

            <div className='arrow-section'>
              <img src={vector} className='check-white' alt="" />
              <img src={vector2} className='check-white' alt="" />

            </div>

          </div>
          <div className='card-div'>

            <div className='card-white'>
              <div className='card-info-container-black'>
                <p className='card-text-big'>““Buyer buzz partner network disruptive non-disclosure agreement business””
                </p>
              </div>
              <div className='image-text-grp'>
                <img src={elipse} className='check-white' alt="" />
                <div className='text-grp'>
                  <p className='small-p'>Severus Snape</p>
                  <p className='small-p'>Manager @ Slytherin</p>

                </div>


              </div>
            </div>
            <div className='card-white'>
              <div className='card-info-container-black'>
                <p className='card-text-big'>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”
                </p>
              </div>
              <div className='image-text-grp'>
                <img src={elipse} className='check-white' alt="" />
                <div className='text-grp'>
                  <p className='small-p'>Severus Snape</p>
                  <p className='small-p'>Manager @ Slytherin</p>

                </div>


              </div>
            </div>
            <div className='card-white'>
              <div className='card-info-container-black'>
                <p className='card-text-big'>““Release facebook responsive web design business model canvas seed money monetization.””
                </p>
              </div>
              <div className='image-text-grp'>
                <img src={elipse} className='check-white' alt="" />
                <div className='text-grp'>
                  <p className='small-p'>Severus Snape</p>
                  <p className='small-p'>Manager @ Slytherin</p>

                </div>


              </div>
            </div>

          </div>

        </div>
        <div className='service-section2'>
          <div className=''>
            <img src={rectangle} className='' alt="" />

          </div>
          <div className='ent-section2'>
            <div>
              <p className='cta-text'>
                We connect our customers with the best, and help them keep up-and stay open.
              </p>
            </div>

            <div className='div-50'>
              <div className='text-icon'>
                <p>
                  We connect our customers with the best.
                </p>
                <img src={check} className='check' alt="" />
              </div>
              <div className='text-icon'>
                <p>
                  We connect our customers with the best.
                </p>
                <img src={check} className='check' alt="" />
              </div>

            </div>

          </div>

        </div>
        <div className='service-section3'>
          <div className='service-container'>
            <h3 className='service-header3'>
              Our Blog
            </h3>
            <h2 className='service-info3'>
              Value proposition accelerator product management venture
            </h2>
          </div>

          <div className='card-div'>
            <div className='card-white'>
              <div className='card-info-container-black'>
                <div className='card-image-2'>
                </div>
                <div className='image-text-grp'>
                  <p className='bold-p'>Category <p className='normal-p'>November 22 2021</p></p>
                </div>
                <p className='small-p'>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”
                </p>
              </div>
              <div className='image-text-grp'>
                <img src={elipse} className='check-white' alt="" />
                <div className='text-grp'>
                  <p className='small-p'>Severus Snape</p>
                  <p className='small-p'>Manager @ Slytherin</p>

                </div>


              </div>
            </div>
            <div className='card-white'>
              <div className='card-info-container-black'>
                <div className='card-image-2'>
                </div>
                <div className='image-text-grp'>
                  <p className='bold-p'>Category <p className='normal-p'>November 22 2021</p></p>
                </div>
                <p className='small-p'>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”
                </p>
              </div>
              <div className='image-text-grp'>
                <img src={elipse} className='check-white' alt="" />
                <div className='text-grp'>
                  <p className='small-p'>Severus Snape</p>
                  <p className='small-p'>Manager @ Slytherin</p>

                </div>


              </div>
            </div>
            <div className='card-white'>
              <div className='card-info-container-black'>
                <div className='card-image-2'>
                </div>
                <div className='image-text-grp'>
                  <p className='bold-p'>Category <p className='normal-p'>November 22 2021</p></p>
                </div>
                <p className='small-p'>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”
                </p>
              </div>
              <div className='image-text-grp'>
                <img src={elipse} className='check-white' alt="" />
                <div className='text-grp'>
                  <p className='small-p'>Severus Snape</p>
                  <p className='small-p'>Manager @ Slytherin</p>

                </div>


              </div>
            </div>

          </div>
        </div>
        <div className='small-section'>
          <button class="explore-btn">
            Load More
          </button>

        </div>
        <div className='service-section4'>
          <div className='service-container2'>
            <h2 className='service-info'>
              An enterprise template to ramp up your company website
            </h2>
            <div className='two-btns'>
              <input type="text" className='input-email' placeholder='Your email address' />
              <button class="explore-btn2">
                Start Now
              </button>

            </div>
          </div>

        </div>
        <div className='service-section7'>


          <div className='card-div'>
            <div className='card-white'>
              <div className='card-info-container-black'>
                <img src={logo} alt="" className='logo' />
                <p className='small-p'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
                </p>
                <p className='small-p'>All rights reserved.
                </p>
              </div>
            </div>
            <div className='card-white2'>
              <div className='card-info-container-black'>
                <p className='bold-p'>Landings
                </p>
                <p className='small-p'>Home
                </p>
                <p className='small-p'>Product
                </p>
                <p className='small-p'>Services
                </p>
              </div>
            </div>
            <div className='card-white2'>
              <div className='card-info-container-black'>
                <p className='bold-p'>Landings
                </p>

                <p className='small-p'>Product
                </p>
                <div className='two-container'>
                  <p className='small-p'>Home
                  </p>
                  <button class="explore-btn3">
                    Hiring!
                  </button>

                </div>
                <p className='small-p'>Services
                </p>
              </div>
            </div>
            <div className='card-white2'>
              <div className='card-info-container-black'>
                <p className='bold-p'>Landings
                </p>
                <p className='small-p'>Home
                </p>
                <p className='small-p'>Product
                </p>
                <p className='small-p'>Services
                </p>
              </div>
            </div>

          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;