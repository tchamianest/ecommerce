import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='foote-top-data d-flex gap-30 align-items-center'>
              <img src='images/newsletter.png' alt='newsletter'/>
              <h2 className='mb-0 text-white'> Sign up for NewProduct</h2>
            </div>
          </div>
          <div className='col-7'>

          <div className="input-group ">
              <input 
               type="text" 
               className="form-control py-1"
               placeholder="Enter Your Email ..." 
               aria-label="Enter Your Email ..."
               aria-describedby="basic-addon2"/>
             <span className="input-group-text py-3"
              id="basic-addon2">
              Subscribe 
             </span>
            </div>

          </div>
          </div>
        </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white'> Contact Us</h4>
            <div>
              <address className='text-white fs-6'>KGL 250 AV ,Nyamirambo <br/> Rwampara<br/>
              PinCode: 22222</address>
              <a href='tel:+250 789 696 745' className='mt-3 d-block mb-3 text-white'>
                +250 789 696 745
              </a>
              <a href='mailto:tchamianest@gmail.com' className='mt-2 d-block mb-3 text-white'>
                tchamianest@gmail.com
              </a>
              <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href=''> <BsInstagram className='fs-4'/></a>
                <a className='text-white' href='https://www.linkedin.com/in/iradukunda-ernest-391bb7272/'><BsLinkedin className='fs-4'/></a>
                <a className='text-white' href='https://github.com/tchamianest'><BsGithub className='fs-4'/></a>
                <a className='text-white' href=''><BsYoutube className=' fs-4'/></a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white'>Information</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white mb-1 py-2 'to='/privacypolicy'>Privacy Policy </Link>
              <Link className='text-white mb-1 py-2'to='refundpolicy'> Refund Policy</Link>
              <Link className='text-white mb-1 py-2' to='shippingpolicy'> Shipping Policy</Link>
              <Link className='text-white mb-1 py-2' to='termsandconditions'> Terms Of Services</Link>
              <Link className='text-white mb-1 py-2' to='blogs'> Blog Page</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white'>Account</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white mb-1 py-2'> About Us</Link>
              <Link className='text-white mb-1 py-2'> Faq</Link>
              <Link className='text-white mb-1 py-2'> Contact Us</Link>
              <Link className='text-white mb-1 py-2'> Client Testmonio</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white'> Quick Links</h4>
            <div className='footer-link d-flex flex-column'>
              <Link className='text-white mb-1 py-2'> Golden Bijou</Link>
              <Link className='text-white mb-1 py-2'> Mans Cloths</Link>
              <Link className='text-white mb-1 py-2'> Womens Cloth</Link>
              <Link className='text-white mb-1 py-2'> Smart Watchs</Link>
              <Link className='text-white mb-1 py-2'> Shoes</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-center mb-0 text-white'>&copy: {new Date().getFullYear()}:Powered by Tchami Anest Developer's </p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer