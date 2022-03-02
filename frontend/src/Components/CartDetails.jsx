import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import { userReq } from '../request';
import { Link, useNavigate } from 'react-router-dom';
import { addQty, deleteProduct, removeQty } from '../Redux/cartRedux';

const CartDetails = () => {

    const KEY = process.env.REACT_APP_STRIPE

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [ stripeToken, setStripeToken ] = useState();

    const cart = useSelector(state => state.cart);

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const req = async () => {
            try{
                const res = await userReq.post('/stripe/payment', {
                    tokenId: stripeToken.id,
                    amount: Math.round(cart.total * 100)
                });
                navigate('/podsumowanie', {state: {stripe: res.data}});
            }catch{}
        }
        stripeToken && req();
    },[stripeToken, navigate, cart]);

    const handleAddQty = (id) => {
        dispatch(addQty(id))
    };

    const handleRemoveQty = (qty, id) => {
        if(qty > 0)
        dispatch(removeQty(id))
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <div className='cart-details'>
            <div className='title'>Twój koszyk</div>
            <div className='top'>
                <Link to={'/'}>
                    <button>Wróć do sklepu</button>
                </Link>
            </div>
            <div className='bottom'>
                <div className='list'>
                    {cart.products.map(product => (
                    <>
                        <div className='item'>
                            <div className='image'>
                                <img src={product.img} alt='#'/>
                            </div>
                            <div className='wrapper'>
                                <div className='details'>
                                    <div>{product.name}</div>
                                </div>
                                <div className='qty'>
                                    <RemoveIcon className='icon'onClick={() => handleRemoveQty(product.qty, product._id)}/>
                                    <div>{product.qty}</div>
                                    <AddIcon className='icon' onClick={() => handleAddQty(product._id)}/>
                                </div>
                                <div className='price'>
                                    {(product.price * product.qty).toFixed(2)} zł
                                </div>    
                            </div>
                            <div className='delete'>
                                <DeleteIcon className='icon' onClick={() => handleDelete(product._id)}/>
                            </div>
                        </div>
                    <hr/>
                    </>))}
                </div>
                <div className='summary'>
                    <div className='title'>
                        Podsumowanie
                    </div>
                    <div className='price'>
                        Cena: {cart.total.toFixed(2)} zł
                    </div>
                    <StripeCheckout
                        name='Brodacz'
                        billingAddress
                        shippingAddress
                        description={`Zapłać ${cart.total} zł`}
                        amount={Math.round(cart.total * 100)}
                        token={onToken}
                        stripeKey={KEY}
                        currency='PLN'
                    >
                        <button>Zapłać</button>
                    </StripeCheckout>
                    
                </div>
            </div>
            
        </div>
    )
}

export default CartDetails
