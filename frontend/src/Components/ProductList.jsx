import React, { useEffect, useState } from 'react'
import { publicReq } from '../request';
import ProductCard from './ProductCard';

const ProductList = ({category , subcategory , sort}) => {

    const [ products, setProducts ] = useState([]);
    const [ sortProducts, setSortProducts ] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try{
                const res = await publicReq.get(
                        category === 'New' ? // FOR HOME PAGE - NEWEST PRODUCTS
                        `products?new=true`
                    :   category === 'Pokaz' ? // FOR SEARCH LABEL IN NAVBAR - SUBCATEGORY = SEARCH NAME
                        `products?name=${subcategory}`
                    :   subcategory ==='Wszystko' ? // FOR PRODUCTS PAGE - SHOW ALL PRODUCTS IN CATEGORY, OR IN SUBCATEGORY
                        `products?category=${category}`
                    :   `products?category=${category}&subcategory=${subcategory}`
                );
                setProducts(res.data); // UNSORT
                setSortProducts(res.data); // DEFAULT 
            }
            catch(err){}
        };
        getProducts();
    },[category, subcategory])

    useEffect(() => {
        if(sort === 'asc')
            setSortProducts(products =>
                [...products].sort((a, b) => a.price - b.price)
            );
        else if(sort === 'desc')
            setSortProducts(products =>
                [...products].sort((a, b) => b.price - a.price)
            );
        else if(sort === 'DEFAULT')
            setSortProducts(products);
    },[sort, products])

    return (
        <div className='product-list'>
            {sortProducts.map(product => <ProductCard product={product} key={product._id}/>)}
        </div>
    )
}

export default ProductList
