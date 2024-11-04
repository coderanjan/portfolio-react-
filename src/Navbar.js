import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    
        <div className='nav-left'>
            <a href='' className='nav-logo-content'>
                ANJAN
            </a>
        </div>

        <div className='nav-right'>
        <ul className='nav-right-heading'>
            <li>
                <a href="" className='nav-content'>

                    introduction

                </a>
            </li>

            <li>
                <a href="" className='nav-content'>
                    about
                </a>
            </li>

            <li>
                <a href="" className='nav-content'>
                    skill
                </a>
            </li>

            <li>
                <a href="" className='nav-content'>
                    project
                </a>
            </li>

            <li>
                <a href="" className='nav-content'>
                    experience
                </a>
            </li>

            <li>
                <a href="" className='nav-content'>
                    contact
                </a>
            </li>
        </ul>
        </div>
    
    </nav>
  );
};

export default Navbar