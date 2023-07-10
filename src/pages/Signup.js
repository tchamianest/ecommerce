import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

function Signup() {
  return (
    <>
    <Meta title={'Sign Up'}/>
    <BreadCrumb title='Sign Up'/>
    <div className='login-wrapper py-5 home-wrapper-2 '>
        <div className='container-xxl'>
            <div className='row '>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Create Account </h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div className='mt-1'>
                                <input type='text' name='Firstname' placeholder='First name' className='form-control'/>
                            </div>
                            <div className='mt-1'>
                                <input type='text' name='Lastname' placeholder='Last name' className='form-control'/>
                            </div>
                            <div className='mt-1'>
                                <input type='email' name='email' placeholder='Email' className='form-control'/>
                            </div>
                            <div className='mt-1'>
                                <input type='password'name='password' placeholder='Password' className='form-control'/>
                            </div>
                            <div className=''>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Sign Up</button>
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

export default Signup