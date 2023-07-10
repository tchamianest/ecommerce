import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg"
import wishlist from "../images/wishlist.svg"
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import addcart from "../images/add-cart.svg"
import camera from "../images/camera.jpg"
import view from "../images/view.svg"



const ProductCard = (props) => {
    const { grid } =props;
    let location =useLocation();
  return (
   <>
   <div className={`${location.pathname==="/store"? `gr-${grid}` : "col-3"}`}>
    <Link to=':id' className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
            <Link ><img src={wish} alt='wishlist'/></Link>
        </div>
        <div className='product-image'>
            <img src={watch} className='img-fluid' alt='product iamges'/>
            <img src={camera} className='img-fluid' alt='product iamges'/>
        </div>
        <div className='product-details'>
            <h6 className='brand'>havels</h6>
            <h5 className='product-title'>
                kids Teeshart bulk 10 pack milti color for chlidren
            </h5>
            <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block" :"d-none"}`}>
                Choose from a range of versatile designs that effortlessly enhance any outfit. Experience the epitome of elegance and discover your perfect watch today.
                </p>
            <p className='price'>Rwf 5000</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <Link>
                <img src={prodcompare} alt='view'/>
                </Link>
                <Link>
                <img src={view} alt=''/>
                </Link>
                <Link>
                <img src={addcart} alt=''/>
                </Link>
            </div>
        </div>
    </Link>
   </div>
   <div className={`${location.pathname==="/store"? `gr-${grid}` : "col-3"}`}>
   <Link className='product-card position-relative'>
       <div className='wishlist-icon position-absolute'>
           <Link><img src={wish} alt='wishlist'/></Link>
       </div>
       <div className='product-image'>
           <img src={watch} className='img-fluid' alt='product iamges'/>
           <img src={camera} className='img-fluid' alt='product iamges'/>
       </div>
       <div className='product-details'>
           <h6 className='brand'>havels</h6>
           <h5 className='product-title'>
               kids Teeshart bulk 10 pack milti color for chlidren
           </h5>
           <ReactStars
               count={5}
               size={24}
               value={3}
               edit={false}
               activeColor="#ffd700"
               />
               <p className={`description ${grid===12 ? "d-block" :"d-none"}`}>
                Choose from a range of versatile designs that effortlessly enhance any outfit. Experience the epitome of elegance and discover your perfect watch today
                </p>
           <p className='price'>Rwf 5000</p>
       </div>
       <div className='action-bar position-absolute'>
           <div className='d-flex flex-column gap-15'>
               <Link>
               <img src={prodcompare} alt='view'/>
               </Link>
               <Link>
               <img src={view} alt=''/>
               </Link>
               <Link>
               <img src={addcart} alt=''/>
               </Link>
           </div>
       </div>
   </Link>
  </div>
   </>
  )
}

export default ProductCard