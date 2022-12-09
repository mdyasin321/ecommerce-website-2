import React from 'react';
import Product from './Product/Product.js';
import classes from './ProductTable.module.css';


const ProductTable =(props)=>{

    const product= props.details.map((element)=>{
        return (
            <Product 
            image={element.img}
            title={element.title}
            price={element.price}
            company={element.company}
            detail={element.details}></Product>
        )
    })

   

    return (
        <div>
        <h1  style={{marginTop: '80px', textAlign:'center'}}>Our Products</h1>   
        <div className={classes.products}>
        {product}
        </div>
        </div>
    )
}

export default ProductTable;