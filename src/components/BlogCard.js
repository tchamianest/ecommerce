import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return ( 
    <div className='blog-card'>
        <div className='card-image'>
            <img src='images/blog-1.jpg' className='img-fluid w-100' alt='' />
        </div>
        <div className='blog-content'>
            <p className='date'> 1 Dec 2023</p>
            <h5 className='title'> A Beutiiful sunday Morning Renaissance</h5>
            <p className='desc'> Choose the right clothes, and witness the transformative power they hold in evoking joy, confidence, and self-expression.</p>
            <Link to='/blog/:id' className='button'>ReadMore...</Link>
        </div>
    </div>)
}

export default BlogCard