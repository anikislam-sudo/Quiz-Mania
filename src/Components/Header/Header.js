import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/ready-for-the-quiz-neon-signs-style-text-free-vector.jpg';
import "./Header.css"
const Header = () => {
    return (
        <div>
    
        <nav className='header-container'>
            <div className='color'>
                <h2>Quiz Mania</h2>
                </div>
        <div>
            <Link to="/">Topics</Link>
            <Link to="/chart">Chart</Link>
            <Link to="/blog">Blog</Link>
            
           </div>
            </nav>
            <div className='container'>
            <img src={logo} alt="Logo" />

            <div className='description'>
            <h4>Quiz Tips</h4>
            <p>1.First of all you need to focus your question paper.</p>
            <p>2. At a glance, you will see all the questions. </p>
            <p>3. Dont waste time in one question. </p>
            <p>4. "Multiple Choice” questions will only allow  select one answer. </p>
            </div>
            
            </div>

            </div>
        
    );
};

export default Header;