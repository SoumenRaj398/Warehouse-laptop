import React from 'react';
import Product from '../Home/Product/Product';
import useLaptops from '../hooks/useLaptops';
import "./Manageitems.css";


const ManageItems = () => {
    const [products,setProducts]= useLaptops([]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are you confirm');
        if(proceed){
            const url =`http://localhost:5000/laptop/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                const remaining = products.filter(product=>product._id !== id)
                setProducts(remaining);
            })

        }
    }
    return (
       
        <div className='container'>
             <h2 className='text-success text-center'>All Laptops</h2>
             <div className="row row-eq-height">
             {
                products.map(product=> <Product 
                key={product._id}
                product={product}
                deleteme={true}
                ></Product> )
            }
             </div>
             
           
            
            
        </div>
    );
};

export default ManageItems;