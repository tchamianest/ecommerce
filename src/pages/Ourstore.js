import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from '../components/Color'


const  Ourstore=()=> {
  const [grid, setGrid]=useState(4);
  return <>
     <Meta title={'Ourstore'}/>
  <BreadCrumb title='Our Store'/>
  <div className='store-wrapper home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-2'>
          <div className='filter-card mb-3'>
            <h3 className='filter-title'>
              Shop By Categoliers
            </h3>
            <div>
              <ul className='ps-0'>
                <li>Watchs</li>
                <li>Tv</li>
                <li>Camera</li>
                <li>Laptop</li>
              </ul>
            </div>
          </div>
          <div className='filter-card mb-3'>
             <h3 className='filter-title'>
              Filter BY Price
             </h3>
             <div>
              <h5 className='sub-title'>Availability</h5>
              <div>
                <div className='form-check'>
                <input className='form-check-input' type="checkbox" value="" id=''/>
                <label className='form-check-label' htmlfor="">
                  In stock (1)
                </label>
                </div>
                <div className='form-check'>
                <input className='form-check-input' type="checkbox" value="" id=''/>
                <label className='form-check-label' htmlfor="">
                  Out of Stock(0)
                </label>
                </div>
              </div>
              <h5 className='sub-title'>Price</h5>
              <div className='d-flex align-items-center gap-10'>
                <div className="form-floating ">
                <input type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="From"/>
                <label htmlfor="floatingInput">
                  From</label>
                </div>
                <div className="form-floating ">
                <input type="email" 
                className="form-control " 
                id="floatingInput1" 
                placeholder="To"/>
                <label htmlfor="floatingInput">
                  To</label>
                </div>
              </div>
              <h5 className='sub-title'>Color</h5>
                <div >
                  <Color />
                </div>
                <h5 className='sub-title'>Size</h5>
                <div>
                  <div className='form-check'>
                   <input className='form-check-input' type="checkbox" value="" id='color-1'/>
                   <label className='form-check-label' htmlfor="color-1">
                   S(1)
                   </label>
                  </div>
                  <div className='form-check'>
                   <input className='form-check-input' type="checkbox" value="" id='color-2'/>
                   <label className='form-check-label' htmlfor="color-2">
                   M(1)
                   </label>
                  </div>
                  <div className='form-check'>
                   <input className='form-check-input' type="checkbox" value="" id='color-3'/>
                   <label className='form-check-label' htmlfor="color-3">
                   L(1)
                   </label>
                  </div>
                  <div className='form-check'>
                   <input className='form-check-input' type="checkbox" value="" id='color-4'/>
                   <label className='form-check-label' htmlfor="color-4">
                   XL(1)
                   </label>
                  </div>
                  <div className='form-check'>
                   <input className='form-check-input' type="checkbox" value="" id='color-5'/>
                   <label className='form-check-label' htmlfor="color-5">
                   XXL(1)
                   </label>
                  </div>
                </div>            
             </div>
          </div>
          <div className='filter-card mb-3'>
             <h3 className='filter-title'>
              Product Tags
             </h3>
             <div>
              <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                <span className='badge bg-light text-secondary rounded-3 py-3'>
                  Headphone
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-3'>
                  Laptop
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-3'>
                  Mobile
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-3'>
                  Watchs
                </span>
              </div>
             </div>
          </div>
          <div className='filter-card mb-3'>
             <h3 className='filter-title'>
              Random Products
             </h3>
             <div>
              <div className='random-products mb-4 d-flex'>
                <div className='w-25'>
                  <img src='images/watch.jpg' className="img-fluid" alt='watch'/>
                </div>
                <div className='w-75'>
                  <h5>Kids headphone bulk 1 pack multi colored for student </h5>
                  <ReactStars
                    count={4}
                    size={24}
                    value={2}
                    activeColor='#ffd700'
                  />
                  <b>RWf 3k</b>
                </div>
              </div>
              <div className='random-products  d-flex'>
                <div className='w-25'>
                  <img src='images/camera.jpg' className="img-fluid" alt='watch'/>
                </div>
                <div className='w-75'>
                  <h5>Kids headphone bulk 1 pack multi colored for student </h5>
                  <ReactStars
                    count={4}
                    size={24}
                    value={2}
                    activeColor='#ffd700'
                  />
                  <b>RWf 200k</b>
                </div>
              </div>
             </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='filter-sort-grid mb-4'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center gap-10'>
              <p className='mb-0 d-block' style={{"width":"100px"}}>Sort By:</p>
              <select name='' className='form-control form-select' id=''>
                <option value=''>Best Selling</option>
                <option value=''>Alphabetically A-Z</option>
                <option value=''>Price low to high</option>
                <option value=''>Price high to Low</option>
                <option value=''>Date old to new</option>
                <option value=''>Date new to old</option>

              </select>
              </div>
              <div className='d-flex align-items-center gap-10'>
                <p className='totalproducts mb-0'>21 products</p>
                <div className='d-flex gap-10 align-items-center grid'>
                  <img onClick={()=>{
                    setGrid(4);
                  }} 
                   src='images/gr3.svg' className='d-block img-fluid' alt='grid'/>
                  <img onClick={()=>{
                    setGrid(3);
                  }} 
                   src='images/gr4.svg' className='d-block img-fluid ' alt='grid'/>
                  <img onClick={()=>{
                    setGrid(12);
                  }} 
                   src='images/gr.svg' className='d-block img-fluid' alt='grid'/>
                  <img onClick={()=>{
                    setGrid(6);
                  }} 
                   src='images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                  
                 
                </div>
              </div>
            </div>
          </div>
          <div className='products-list pb-5'>
            <div className='d-flex gap-10 flex-wrap'>
            <ProductCard grid={grid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Ourstore