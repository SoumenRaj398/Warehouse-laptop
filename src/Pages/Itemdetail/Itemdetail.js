import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Itemdetail = () => {
    const {productId} = useParams();
    return (
        <div>
            <h2 className="text-danger text-center">Welcome To My Warehouse:{productId}</h2>
            <div className="text-success text-center mt-5">
            <Link to ="/checkout">
            <button className="text-success">Checkout Here</button>

            </Link>
            


            </div>
           
        </div>
    );
};

export default Itemdetail;