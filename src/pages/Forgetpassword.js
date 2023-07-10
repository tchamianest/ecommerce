import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

function Forgetpassword() {
  return (
    <>
    <Meta title={'Forget Password'}/>
    <BreadCrumb title='Forget Password'/>
    <div className='login-wrapper py-5 home-wrapper-2 '>
        <div className='container-xxl'>
            <div className='row '>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Your Password </h3>
                        <p className='text-center mt-2 mb-3 '>
                            We will send you an email to reset your password
                        </p>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                <input type='email' name='email' placeholder='Email' className='form-control'/>
                            </div>
                            <div className=''>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Submit</button>
                                </div>
                                <div className='mt-3 d-flex justify-content-center align-items-center '>
                                  <Link to='/login'className=''>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Forgetpassword