import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import watch from '../images/watch.jpg'

const Checkout = () => {
  return (
    <>
    <div className='checkout-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>Teezens</h3>
                        <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                           <ol className="breadcrumb">
                             <li className="breadcrumb-item"><Link to='/' >Home</Link></li> &nbsp; /
                             <li className="breadcrumb-item active" aria-current="page">Library</li>&nbsp; /
                             <li className="breadcrumb-item active" aria-current="page">Information</li>
                           </ol>
                        </nav>
                        <h4 className='title total'>Contact Information</h4>
                        <p className='user-details total'>
                            Ernest Kalisa (tchamianest@gmail.com)
                        </p>
                        <label className='mb-5 d-flex gap-10'><input className='ml-3' type='checkbox' />This information is yours?</label>
                        <form action='' className='d-flex flex-wrap gap-15 justify-content-between '>
                            <div className='w-100'>
                                <select name='' className='form-control form-select' id=''>
                                    <option value='' selected='true'>Select Province</option>
                                    <option value='' selected=''>Kigali City</option>
                                    <option value='' selected=''>South Province</option>
                                    <option value='' selected=''>North Province</option>
                                    <option value='' selected=''>East Province</option>
                                    <option value='' selected=''>West Province</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text' placeholder='First Name' className='form-control'/>
                            </div>
                            <div className='flex-grow-1'>
                                <input type='text'  placeholder='Last Name' className='form-control'/>
                            </div>
                            <div className='w-100'> 
                                <input type='text' placeholder='Address' className='form-control'/>
                            </div>
                            <div className='w-100'> 
                                <input type='text' placeholder='Apartment , Suit , Street ,etc..' className='form-control'/>
                            </div>
                            <div className='flex-grow-1'>
                            <input type='text' placeholder='village' className='form-control'/>
                            </div>
                            <div className='flex-grow-1'> 
                            <select name='' className='form-control form-select' id=''>
                                <option value='' selected disabled>Select State</option>
                            </select>
                            </div>
                            <div className='flex-grow-1'>
                            <input type='text' placeholder='Zip Code'className='form-control'/>
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to='/cart' className='text-dark'><BiArrowBack className='me-2'/>Return to Cart</Link>
                                    <Link to='' className='button'>Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5 border-left'>
                    <div className='border-bottom py-4 mb-2'>
                       <div className='d-flex gap-10 mb-2 align-items-center'>
                       <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span style={{top:'-10px',right:'2px'}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                <img className='img-fluid' src={watch} alt='Product'/></div>
                            <div>
                                <h5 className='total-price'>Watchs</h5>
                                <p className='total-price'>s /#AB5A5A</p>
                            </div>
                        </div>
                        <div className='lex-grow-1'>
                            <h5 className='total'>RWF 1000</h5>
                        </div>
                       </div>
                    </div>
                    <div className='border-bottom py-4 mb-2 '>
                     <div className='d-flex justify-content-between align-items-center'>
                        <p className='total'>Sub-Total</p>
                        <p className='total-price'> Rwf 1000</p>
                     </div>                   
                     <div>
                        <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0 total'>Shipping</p>
                        <p className='mb-0 total-price'>Rwf 1000</p>
                       </div>
                     </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='total'>Total</h4>
                        <h4 className='total-price'>Rwf 100000</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Checkout