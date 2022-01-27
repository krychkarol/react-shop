import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetails from '../Components/ProductDetails';
import { publicReq } from '../request';

const Product = () => {

    let location = useLocation();
    const id = location.pathname.split('/')[2];

    const [ product, setProduct ] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicReq.get(`products/${id}`);
                setProduct(res.data);
            }catch(err){}
        }
        getProduct();
    },[id])

    return (
        <div className='product'>
            <ProductDetails product={product}/>
            {/* TODO
                Podobne produkty
             */}
        </div>
    )
}

export default Product
