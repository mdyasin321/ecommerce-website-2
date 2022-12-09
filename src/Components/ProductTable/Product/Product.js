import React from 'react';


import classes from './Product.module.css';
// import { Link } from 'react-router-dom';

const Product =(props)=>{
    return <div className={classes.product}>
                <div>
                    {/* <Link to={props.detail}>
                       <img src={props.image} alt='yasin'></img>
                    </Link> */}
                     <a href='#'>
                       <img src={props.image} alt='yasin'></img>
                    </a>
                </div>
                <div className={classes.productDetails}>
                <h2>Model:{props.title}</h2>
                <h4>Made by: <span >{props.company}</span></h4>
                <h4>
                     <strong> Price : <span>$</span>{props.price}</strong>
                </h4>
                </div>
    
            </div>
          
}

export default Product;

