import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
// import "./Products.css"

const Products = () => {

  const [products,setProducts] = useState([]);

  useEffect( () => {

    fetch('http://localhost:5000/laptop')
    .then(res => res.json())
    .then(data => setProducts(data));

  },[])

        
 
    return (
        <div className="product-title">
            <h1 className="text-success text-center mt-5 mb-5">All Brand Laptops</h1>
            <div className="container">
            <div className='row row-eq-height'>

        

        {
          products.map( product => <Product

            key ={product._id}
            product= {product}
            
            ></Product>)
          }
          </div>
        
    </div>
    </div>
);
      
        
};

export default Products;