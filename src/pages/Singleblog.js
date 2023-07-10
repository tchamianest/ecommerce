import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import blog from '../images/blog-1.jpg';

function Singleblog() {
  return (
    <>
    <Meta title={'Blog-Page'}/>
    <BreadCrumb title='Blog  -Page'/>
    <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row '>
                <div className='col-3'>
                <div className='filter-card mb-3'>
            <h3 className='filter-title'>
              Find  By Categoliers
            </h3>
            <div>
              <ul className='ps-0'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/store'>Ourstore</Link></li>
                <li><Link to='/blogs'>blog</Link></li>
                <li><Link to='wishlist'>wishlist</Link></li>
              </ul>
            </div>
          </div>
                </div>
                <div className='col-9'>
                    <div className='single-blog-card'>
                        <Link to='/blogs'className='d-flex align-items-center gap-10 mb-4'><BsArrowLeft /> Go back to Blogs</Link>
                        <h3 className='title'>
                            A beutiful sunday Morning Renaissance
                        </h3>
                        <img src={blog}className='img-fluid w-100 my-4' alt='blogimage'/>
                        <p><b>Contact Verified Suppliers Online. Millions of Products at Factory Prices. Source Direct from Global Suppliers - Low MOQ, Great Deals, Customizable. Most Popular. Logistics Service. Trade Assurance. Production Monitoring. Types:...</b> <br />
                        <div>
                        A blog is a type of website or an online platform where individuals or groups regularly publish written content in a chronological format. The term "blog" is a shortened form of "weblog." Blogs often serve as online journals or informational sites where authors share their thoughts, opinions, expertise, or experiences on various topics.

Typically, blog posts are displayed in reverse chronological order, with the most recent entry appearing at the top. Blogs cover a wide range of subjects, including personal interests, hobbies, travel experiences, technology, fashion, cooking, politics, and more. Some blogs focus on specific niches or industries, while others are more general and eclectic in their content.

Bloggers can write articles, share photographs, videos, or podcasts, and interact with their readers through comments and discussions. Blogs often provide opportunities for readers to subscribe or follow the site, allowing them to receive updates whenever new content is published.

In recent years, the rise of social media platforms and other content-sharing websites has led to the popularity of microblogging, where shorter and more concise posts are published regularly. Examples of popular blogging platforms include WordPress, Blogger, Medium, and Tumblr, among others.
                        </div>
                       
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Singleblog