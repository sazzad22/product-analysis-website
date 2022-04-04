import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='my-3'>
           <Link to='/home' className='font-semibold text-gray-700'>Home</Link> 
           <Link to='/reviews' className='font-semibold text-gray-700'>Reviews</Link> 
           <Link to='/dashboard' className='font-semibold text-gray-700'>Dashboard</Link> 
           <Link to='/blogs' className='font-semibold text-gray-700'>Blogs</Link> 
           <Link to='/about' className='font-semibold text-gray-700'>About</Link> 
        </nav>
    );
};

export default Header;