import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <Meta title={'Login-Page'}/>
    <BreadCrumb title='Login-page'/>
    <div className='login-wrapper py-5 home-wrapper-2 '>
        <div className='container-xxl'>
            <div className='row '>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Login </h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                <input type='email' name='email' placeholder='Email' className='form-control'/>
                            </div>
                            <div className='mt-1'>
                                <input type='password'name='password' placeholder='Password' className='form-control'/>
                            </div>
                            <div className=''>
                                <Link className='forget' to='/forget-password'>Forget Password ?</Link>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Login</button>
                                    <Link className='button signup'to='/signup'>SignUp</Link>
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

export default Login