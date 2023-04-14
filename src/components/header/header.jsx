import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className='header'>
            <nav>
                <ul className="ul-items">
                    <li className="li-items">
                        <Link to='/women'></Link>
                        <Link to='/men'></Link>
                        <Link to='/denim'></Link>
                        <Link to='/shop'></Link>
                        <Link to='/about'></Link>
                    </li>
                </ul>
                <div className='logo'>
                    <h1>eShop</h1>
                </div>
            </nav>
        </div> 
    );
}
 
export default Header;