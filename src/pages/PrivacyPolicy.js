import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

function PrivacyPolicy() {
  return (
    <>
    <Meta title={'PrivacyPolicy'}/>
    <BreadCrumb title='Privacy Policy'/>
    <section className='policy-wrapper py-5 home-wrapper'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='cl-12'>
                    <div className='policy'></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PrivacyPolicy