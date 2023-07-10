import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

function Wishlist() {
  return (
    <>
     <Meta title={'Wish-List'}/>
    <BreadCrumb title='Wishlist'/>
    <div className='wishlist-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row '>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
            <img src='images/cross.svg' alt='' className='img-fluid cross position-absolute'/>
              <div className='wishlist-card-image'>
                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
              </div>
              <div className='px-2 py-2 '>
              <h5 className='title'>CURREN Brand Chronograph Quartz Watch Men Sports Watches Male.</h5>
              <h6 className='price mt-3'>Rwf 5000</h6>
              </div>
            </div>
            
          </div>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
            <img src='images/cross.svg' alt='' className='img-fluid cross position-absolute'/>
              <div className='wishlist-card-image'>
                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
              </div>
              <div className='px-2 py-2 '>
              <h5 className='title'>CURREN Brand Chronograph Quartz Watch Men Sports Watches Male.</h5>
              <h6 className='price mt-3'>Rwf 5000</h6>
              </div>
            </div>
            
          </div>
          <div className='col-3'>
            <div className='wishlist-card position-relative'>
            <img src='images/cross.svg' alt='' className='img-fluid cross position-absolute'/>
              <div className='wishlist-card-image'>
                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
              </div>
              <div className='px-2 py-2 '>
              <h5 className='title'>CURREN Brand Chronograph Quartz Watch Men Sports Watches Male.</h5>
              <h6 className='price mt-3'>Rwf 5000</h6>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Wishlist