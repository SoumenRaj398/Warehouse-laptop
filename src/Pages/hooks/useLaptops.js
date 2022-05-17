import { useEffect, useState } from "react";

const useLaptops = () => {

    const [products,setProducts] = useState([]);

  useEffect( () => {

    fetch('http://localhost:5000/laptop')
    .then(res => res.json())
    .then(data => setProducts(data));

  },[products])

  return [products,setProducts]
}

export default useLaptops;