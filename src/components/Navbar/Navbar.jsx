import React from 'react';
import { Toggle } from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll/modules';

export const Navbar = () => {
  return (
    <div className='n-wrapper' id="Navbar">
        <div className="n-left">
            <div className="n-name">Jeton</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>

                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonial' smooth={true} activeClass='activeClass'>    
                        <li>Testimonials</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                        <li>Works</li>
                    </Link>
                        

                </ul>
            </div>
            <Link spy={true} to='contact' smooth={true} >
                <button className="button n-button">
                
                    Contact
                </button>
            </Link>
        </div>
    </div>
 )
}
