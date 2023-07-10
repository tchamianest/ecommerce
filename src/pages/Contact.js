import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'

const Contact = () => {
  return (
    <>
    <Meta title={'Contact US'}/>
    <BreadCrumb title='Contact Us'/>
    <div className='contact-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3987.4600021120823!2d30.060990028835757!3d-1.9700791224942409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1685985799511!5m2!1sen!2srw"
            width="600" 
            height="450" 
            className='border-0 w-100'
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">

          </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-iner-wrapper d-flex justify-content-between '>
              <div>
                <h3 className='contact-title mb-4 '>Contact Us</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' className='form-control' placeholder='Enter Name'/>
                  </div>
                  <div>
                    <input type='email' className='form-control' placeholder='Email'/>
                  </div>
                  <div>
                    <input type='tel' className='form-control'placeholder='Enter Name'/>
                  </div>
                  <div>
                    <textarea 
                    name="" id='' 
                    cols='30' 
                    rows='3' 
                    className='w-100 form-control'
                    placeholder='Comment'>

                  </textarea>
                  </div>
                  <div >
                  <button  className='button'>Submit..</button>
                  </div>
                </form>
              </div>
              <div>
              <h3 className='contact-title mb-4'>Get in TOuch With US</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineHome className='fs-5'/>
                    <address className='mb-0'>Kgl 250 AV ,Near Nyamirambo Rwampara</address>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiPhoneCall className='fs-5'/>
                    <a href='tel:+250 789 696 745' className='mb-0'>+250 789 696 745</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center' >
                    <AiOutlineMail className='fs-5'/>
                    <a href='mailto:tchamianest@gmail.com'>tchamianest@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiInfoCircle className='fs-5'/>
                    <p className='mb-0'>Monday -- Friday From: 09 AM - 10 PM</p>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact