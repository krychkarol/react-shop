import React from 'react'
import ProductCard from './ProductCard';

const ProductList = () => {

    //TMP DATA
    const data = [
       {
            id: 1,
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'Olejek do brody',
            price: 25.23,
            link: ''
        },
        {
            id: 2,
            img: 'https://cdn.shopify.com/s/files/1/0270/2793/1234/products/0014_olejek-do-brody-MONOLIT_2048x2048.png?v=1601750588',
            desc: 'Olejek do brody',
            price: 35.23,
            link: ''
        },
        {
            id: 3,
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'Olejek do brody',
            price: 45.23,
            link: ''
        },
        {
            id: 4,
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'Olejek do brody',
            price: 55.23,
            link: ''
        },
        {
            id: 5,
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'Olejek do brody',
            price: 25.23,
            link: ''
        },
        {
            id: 6,
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'Olejek do brody',
            price: 35.23,
            link: ''
        },
        {
            id: 7,
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'Olejek do brody',
            price: 45.23,
            link: ''
        },
        {
            id: 8,
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'Olejek do brody',
            price: 55.23,
            link: ''
        },
    ];
    
    return (
        <div className='product-list'>
            {data.map(product => <ProductCard product={product} key={product.id}/>)}
        </div>
    )
}

export default ProductList
