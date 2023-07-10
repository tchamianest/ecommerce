import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Ourstore from './pages/Ourstore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgetpassword from './pages/Forgetpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import Singleblog from './pages/Singleblog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import Singleproduct from './pages/Singleproduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='product' element={<Ourstore/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='blog/:id' element={<Singleblog/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='compare-product' element={<CompareProduct/>}/>
      <Route path='wish-list' element={<Wishlist/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='forget-password' element={<Forgetpassword/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='reset-password' element={<Resetpassword/>}/>
      <Route path='privacypolicy' element={<PrivacyPolicy/>}/>
      <Route path='refundpolicy' element={<RefundPolicy/>}/>
      <Route path='shippingpolicy' element={<ShippingPolicy/>}/>
      <Route path='termsandconditions' element={<TermAndCondition/>}/>
      <Route path='product/:id' element={<Singleproduct/>}/>





      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
