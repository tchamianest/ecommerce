import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import { useState } from 'react';
import Color from '../components/Color';
import {BiGitCompare} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import watch10 from "../images/watch10.jpg"



function Singleproduct() {
  const [orderedProduct, setorderedProduct]=useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
    <Meta title={'Single Product'}/>
    <BreadCrumb title='Single Product'/>
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'>
                  <div className='main-product-image'>
                    <div>
                    <div className="product-container">
                      <div className="image-wrapper">
                         <img
                          src={watch10}
                          alt="Product Image"
                          className="product-image"
                        />
                      </div>
                   </div>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='main-product-details '>
                    <div className='border-bottom'>
                      <h3>
                        Kids Headphone bulk 10 pack multi Colored For Students
                      </h3>
                    </div>
                    <div className='border-bottom py-3'>
                      <p className='price'>$ 100</p>
                      <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                               count={5}
                               size={24}
                               value={3}
                               edit={false}
                               activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review'> (2 Reviews) </p>
                      </div>
                      <a  href='#review' className='text-dark review-btn'>Write a Review</a>
                    </div>
                    <div className='border-bottom py-3'>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Types :</h3> <p className='product-data'>Watch</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Brand :</h3> <p className='product-data'>Havells</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Category :</h3>  <p className='product-data'>Watch</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Tags :</h3> <p className='product-data'>Watch</p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Availablity :</h3> <p className='product-data'>In Stock</p>
                      </div>
                      <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                        <h3 className='product-heading'>Size :</h3>
                        <div className='d-flex flex-wrap gap-15'>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                          <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                        </div>
                      </div>
                      <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                        <h3 className='product-heading'>Color :</h3>
                        <Color />
                      </div>
                      <div className='d-flex gap-10 align-items-center gap-15 flex-row mt-2 mb-3'>
                        <h3 className='product-heading'>Quantity :</h3>
                        <div className=''>
                          <input 
                           type='number' 
                           name='quantity' 
                           min={1}
                           max={10}
                           className='form-control'
                           style={{width:'60px'}} id=''
                          />
                        </div>
                        <div className='d-flex align-items-center gap-30 ms-5'>
                          <button className='button border-0' type='submit'>ADD TO CART</button>
                          <button className='button signup'to='/signup'>BUY IT NOW</button>
                        </div>
                      </div>
                      <div className='d-flex align-items-center gap-15'>
                        <div>
                          <a href=''><AiOutlineHeart className='fs-5 me-2'/>Add To Wishlist</a>
                        </div>
                        <div>
                        <a href=''><BiGitCompare className='fs-5 me-2'/>Add To Compare</a>
                        </div>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Shipping & Return :</h3>
                         <p className='product-data'>
                          Free shipping and returns available on all orders! <br /> We ship all Us domestic oders within <b>5-10 Bussiness days!</b>
                         </p>
                      </div>
                      <div className='d-flex gap-10 align-items-center my-2'>
                        <h3 className='product-heading'>Copy Product Link :</h3>
                         <a href='javascript:void(0);'onClick={()=>{
                          copyToClipboard('http://localhost:3000/product/:id#review');
                         }}>
                          Click Here to copy Product Link
                         </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div className='decription-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='bg-white p-3'>
                      <h4>Description</h4>
                      <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row '>
                <div className='col-12'>
                  <div className='review-inner-wrapper'>
                  <div className='review-head  d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className='d-flex gap-10 align-items-center '>
                             <ReactStars
                               count={5}
                               size={24}
                               value={3}
                               edit={false}
                               activeColor="#ffd700"
                             />
                             <p className='mb-0'>Based on 2 Reviews</p>
                            </div>
                        </div>
                        {orderedProduct && (
                          <div>
                            <a className='text-dark text-decoration-underline'id='review' href=''>Write a Reviews</a>
                          </div>
                        )}
                    </div>
                    <div className='review-form py-4'>
                    <h4 >writte a reviews</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div >
                           <ReactStars
                               count={5}
                               size={24}
                               value={3}
                               edit={false}
                               activeColor="#ffd700"
                             />
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
                  <div className='d-flex justify-content-end' >
                  <button  className='button'>Submit Review</button>
                  </div>
                </form>
                    </div>
                  </div>                    
                </div>
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
      </div>
    </div>
   </section>
    </>
  )
}

export default Singleproduct