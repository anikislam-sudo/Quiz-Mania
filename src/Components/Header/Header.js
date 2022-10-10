import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/ready-for-the-quiz-neon-signs-style-text-free-vector.jpg';
import "./Header.css"
const Header = () => {
    return (
        <div>
    
        <nav className='header-container'>
            <div>
                <h2>Quiz Mania</h2>
            </div>
            <Link to="/">Topics</Link>
            <Link to="/chart">Chart</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
           
            </nav>
           

            </div>
        
    );
};

export default Header;