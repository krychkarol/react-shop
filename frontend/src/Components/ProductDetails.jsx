import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/cartRedux';

const ProductDetails = ({product}) => {

    const [ qty, setQty ] = useState(1);

    const dispatch = useDispatch();

    const handleQty = (action) => {
        if(action === 'remove')
            qty > 1 && setQty(qty - 1)
        else
            product.stock > qty && setQty(qty + 1)
    }

    const handleAddToCart = () => {
        dispatch(addProduct({ ...product, qty}))
    }

    return (
        <div className='product-details'>
            <div className='wrapper'>
                <div className='image'>
                    <img src={product.img} alt='#'/>
                </div>
                <div className='info'>
                    <div className='title'>
                        {product.name}
                    </div>
                    <div className='desc'>
                        {product.desc}
                    </div>
                    <div className='price'>
                        {product.price} zł
                    </div>
                    <div className='add'>
                        <div className='amount'>
                            <div>Ilość:</div> 
                            <RemoveIcon className='icon' onClick={() => handleQty('remove')}/>
                            <div className='qty'>{qty}</div>
                            <AddIcon className='icon' onClick={() => handleQty('add')}/>
                        </div>
                        <button onClick={() => handleAddToCart()}>Do Koszyka</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
