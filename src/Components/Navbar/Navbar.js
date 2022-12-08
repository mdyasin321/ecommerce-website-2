
import React from 'react';
import classes from './Navbar.module.css';

const Navbar =()=>{
    return (
    <header className={classes.navbar}>
        <div>
           <a href='#'> <strong>Flipkart</strong></a>
        </div>
        <nav>
            <ul>
                <li><input type="text" name="Search for Products"></input></li>
                <li><button>Login</button></li>
                <li><a href="#" >Become a Seller</a></li>
                <li><a href="#" >More</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar;