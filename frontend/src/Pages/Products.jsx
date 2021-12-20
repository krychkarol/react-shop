import React from 'react'
import Filter from '../Components/Filter'
import ProductList from '../Components/ProductList'
import Sidebar from '../Components/Sidebar'

const Products = () => {
    return (
        <div className='products'>
            <Sidebar/>
            <div className='main'>
                <Filter/>
                <ProductList/>
            </div>
        </div>
    )
}

export default Products
