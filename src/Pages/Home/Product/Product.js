import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Product.css";

const Product = ({product}) => {

    const {_id,Name, Price ,Quantity,Details, img ,SupplierName} = product;

    const navigate=useNavigate();
    

    const  navigateToItemDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
     
        <div className='col-md-4 col-sm-12'>
       <div className='card'>                          
            <img src ={img} alt="" className='card-img-top  ' />
             <h2 className='card-title'>{Name}</h2>
             <h4>Price:{Price}</h4>
         <h5>Details:{Details}</h5>
             <h2>SupplierName:{SupplierName}</h2>
          <button onClick={ () => navigateToItemDetail(_id)}class="btn btn-primary">Update></button> 
  </div>
  </div>
    );
};

export default Product;