import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import Specialproduct from '../components/Specialproduct';
import {Helmet} from "react-helmet";

const Home=()=> {
  return (
   <>
    <Helmet>
               
               <title>Tchami Shop</title>
    </Helmet>
   <section className='home-wrapper-1 py-5'>
    <div className='container-xxl'>
      <div className='row'>
       <div className='col-6'>
         <div  className='main-banner  position-relative'>
           <img 
            src='images/main-banner-1.jpg' 
            className='img-fluid rounded-3' 
            alt='main banner'
           />
           <div className='main-banner-content position-absolute'>
             <h4>SUPERCHARGED FOR PROS.</h4>
             <h5>ipad S13+ Pro</h5>
             <p>From Rwf 1000 or Rwf 2000Rwf</p>
             <Link className='button'> Buy Now</Link>
           </div>
         </div>
       </div>
       <div className='col-6'>
        <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
         <div  className='small-banner position-relative'>
            <img 
             src='images/catbanner-01.jpg' 
             className='img-fluid rounded-3' 
             alt='main banner'
            />
            <div className='small-banner-content position-absolute'>
              <h4>BEST SELL.</h4>
              <h5>ipad S13+ Pro</h5>
              <p>From Rwf 1000 or  Rwf 2000Rwf</p>
            </div>
         </div>
         <div  className='small-banner position-relative'>
            <img 
             src='images/catbanner-02.jpg' 
             className='img-fluid rounded-3' 
             alt='main banner'
            />
            <div className='small-banner-content position-absolute'>
              <h4>NEW ARRIVAL.</h4>
              <h5>Buy Watchs</h5>
              <p>From Rwf 1000 or Rwf 2000Rwf</p>
            </div>
         </div>
         <div  className='small-banner  position-relative'>
            <img 
             src='images/catbanner-03.jpg' 
             className='img-fluid rounded-3' 
             alt='main banner'
            />
            <div className='small-banner-content position-absolute'>
              <h4>IHAHIRE NATWE!</h4>
              <h5>ipad S13+ Pro</h5>
              <p>From Rwf 1000 or Rwf 2000Rwf</p>
            </div>
         </div>
         <div  className='small-banner  position-relative'>
            <img 
             src='images/catbanner-04.jpg' 
             className='img-fluid rounded-3' 
             alt='main banner'
            />
            <div className='small-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>ipad S13+ Pro</h5>
              <p>From Rwf 1000 or Rwf 2000Rwf</p>
            </div>
         </div>
        </div>
       </div>
      </div>

    </div>
   </section>
   <section className='home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='servies d-flex gap-15 justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-10'>
              <img src='images/service.png' alt='services'/>
             <div>
              <h6> Free Shipping </h6>
              <p className='mb-0'>All older from 10k Rwf</p>
             </div>
            </div>
            <div className='d-flex align-items-center gap-10'>
            <img src='images/service-02.png' alt='services'/>
             <div>
              <h6> Dail Suprise Offer</h6>
              <p className='mb-0'>Save upto 25% offer</p>
             </div>
            </div>
            <div className='d-flex align-items-center gap-10'>
             <img src='images/service-03.png' alt='services'/>
             <div>
              <h6>Support 24/7</h6>
              <p className='mb-0'>shop with an Expert</p>
             </div>
            </div>
            <div className='d-flex align-items-center gap-10'>
             <img src='images/service-04.png' alt='services'/>
             <div>
              <h6>Affordeble Prices</h6>
              <p className='mb-0'>Get factory Default Price</p>
             </div>
            </div>
            <div className='d-flex align-items-center gap-10'>
             <img src='images/service-05.png' alt='services'/>
             <div>
              <h6>Secure Payments</h6>
              <p className='mb-0'>100% protect our paayment with mobile money</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
   <section className='home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='categories flex-wrap d-flex justify-content-between align-items-center'>
            <div className='d-flex gap- align-items-center'>
              <div>
                <h6>Cameras</h6>
                <p>10 items</p>
              </div>
              <img src='images/camera.jpg' alt='camera'/>
            </div>
            <div className='d-flex gap- align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10 items</p>
              </div>
              <img src='images/tv.jpg' alt='camera'/>
            </div>
            <div className='d-flex gap- align-items-center'>
              <div>
                <h6>Smart Watchs</h6>
                <p>10 items</p>
              </div>
              <img src='images/camera.jpg' alt='camera'/>
            </div>
            <div className='d-flex gap- align-items-center'>
              <div>
                <h6>Music and Gaming</h6>
                <p>10 items</p>
              </div>
              <img src='images/headphone.jpg' alt='camera'/>
            </div>
            <div className='d-flex gap- align-items-center'>
              <div>
                <h6>Cameras</h6>
                <p>10 items</p>
              </div>
              <img src='images/camera.jpg' alt='camera'/>
            </div>
            <div className='d-flex gap- align-items-center'>
              <div>
                <h6>Smart Tv</h6>
                <p>10 items</p>
              </div>
              <img src='images/tv.jpg' alt='camera'/>
            </div>
            <div className='d-flex gap- align-items-center'>
              <div>
                <h6>Smart Watchs</h6>
                <p>10 items</p>
              </div>
              <img src='images/camera.jpg' alt='camera'/>
            </div>
            <div className='d-flex gap- align-items-center'>
              <div>
                <h6>Music and Gaming</h6>
                <p>10 items</p>
              </div>
              <img src='images/headphone.jpg' alt='camera'/>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
   <section className='featured-wrapper py-5  home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row '>
        <div className='col-12'>
          <h3 className='section-heading'>Featured collection</h3>
        </div>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
   </section>
   <section className='famous-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous-1.webp' className='img-fluid' alt='famous'/>
            <div className='famous-content position-absolute'>
               <h5>Big Screen</h5>
               <h6>Smalt watchs SEries 7</h6>
               <p>From 5000rwf or 16rwf/moth for 24mo</p>
            </div>
            
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous-2.webp' className='img-fluid' alt='famous'/>
            <div className='famous-content position-absolute'>
               <h5 className='text-dark'>studio Display</h5>
               <h6 className='text-dark'>600 nits of brightness.</h6>
               <p className='text-dark'>27-inch 5K Retina display</p>
            </div>
            
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous-3.webp' className='img-fluid' alt='famous'/>
            <div className='famous-content position-absolute'>
               <h5 className='text-dark'>SMART PHONES</h5>
               <h6 className='text-dark'>Smartphone 13 Pro</h6>
               <p className='text-dark'>Now in Green From $999.00 or $41.62/mo for 24mo Footnote</p>
            </div>
            
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous-4.webp' className='img-fluid' alt='famous'/>
            <div className='famous-content position-absolute'>
               <h5 className='text-dark'>Home speakers</h5>
               <h6 className='text-dark'>room-filling sound.</h6>
               <p className='text-dark'>From $699 or $116.58/mo for 12mo.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
   </section>
   <section className='special-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Special Product</h3>
        </div>
      </div>
      <div className='row '>
        <Specialproduct/>
        <Specialproduct/>
        <Specialproduct/>
        <Specialproduct/>
      </div>
    </div>
   </section>
   <section className='popular-wrapper py-5  home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row '>
        <div className='col-12'>
          <h3 className='section-heading'>Our popular Product</h3>
        </div>
      </div>
      <div className='row'>
       
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
   </section>
   <section className='marque-wrapper home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='marquee-inner-wrapper card-wrapper '>
            <Marquee className='d-flex'>
              <div className='mx-4 w-25'>
                <img src='images/brand-01.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-02.png' alt='brand '/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-03.png' alt='brand '/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-04.png' alt='brand '/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-05.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-06.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-07.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-08.png' alt='brand'/>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
   </section>
   <section className='blog-wrapper py-5  home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row '>
        <div className='col-12'>
          <h3 className='section-heading'>Our Latest Blogs</h3>
        </div>
      </div>
      <div className='row '>
        <div className='col-3'>
          <BlogCard />
        </div>
        <div className='col-3'>
          <BlogCard />
        </div>
        <div className='col-3'>
          <BlogCard />
        </div>
        <div className='col-3'>
          <BlogCard />
        </div>
      </div>
    </div>
   </section>
   </>
  )
}

export default Home