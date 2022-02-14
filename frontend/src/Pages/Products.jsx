import React from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../Components/Filter';
import ProductList from '../Components/ProductList';
import Sidebar from '../Components/Sidebar';
import { useState } from 'react';

const Products = ({categories}) => {

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    let location = useLocation();
    const category = capitalizeFirstLetter(decodeURIComponent(location.pathname.split('/')[2]));
    const subcategory = capitalizeFirstLetter(decodeURIComponent(location.pathname.split('/')[3]));

    const [ sort, setSort] = useState("DEFAULT");

    return (
        <div className='products'>
            <Sidebar categories={categories} category={category} subcategory={subcategory}/>
            <div className='main'>
                <Filter sort={e => setSort(e.target.value)}/>
                <ProductList category={category} subcategory={subcategory} sort={sort}/>
            </div>
        </div>
    )
}

export default Products
