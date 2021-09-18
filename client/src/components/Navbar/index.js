import React from 'react';
import { Link } from 'react-router-dom';


function Navigation({currentPage, handlePageChange}) {
    return (

        <ul className='nav navigation justify-content-end'>
            <li className='nav-item'>
                <Link to="/"
                   
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Closets"
                    
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Closets
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Login"
                    
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                > 
                    Login
                </Link>
            </li>
            <li className='nav-item'>
                <Link to="/Signup"
                    
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Signup
                </Link>
            </li>
        </ul>
    );
}

export default Navigation;
