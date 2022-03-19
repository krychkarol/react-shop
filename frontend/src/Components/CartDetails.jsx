import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import { publicReq, userReq } from '../request';
import { Link, useNavigate } from 'react-router-dom';
import { addQty, deleteProduct, removeQty } from '../Redux/cartRedux';

const CartDetails = () => {

    const KEY = process.env.REACT_APP_STRIPE

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [ stripeToken, setStripeToken ] = useState();
    const [ errorMsg, setErrorMsg ] = useState([]);

    const cart = useSelector(state => state.cart);

    const onToken = async (token) => {
        let error = false;
        setErrorMsg([]);
        for(let i = 0; i < cart.cartQty; i++){
            let res = await publicReq.get("products/"+ cart.products[i]._id);
            if(res.data.stock < cart.products[i].qty){                
                error = true;
                setErrorMsg(prev => ([...prev,  (res.data.stock === 0 ?
                                                ("Produkt " + cart.products[i].name + " nie jest już dostępny") :
                                                ("Produkt " + cart.products[i].name + " nie jest już dostępny w takiej ilośći. Pozostało: " + res.data.stock))]));
            }
        }
        !error && setStripeToken(token)
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

    const handleAddQty = (id, stock, qty) => {
        if(stock > qty)
        dispatch(addQty(id))
    };

    const handleRemoveQty = (qty, id) => {
        if(qty > 1)
        dispatch(removeQty(id))
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }

    return (
        <div className='cart-details'>
            <div className='title'>Twój koszyk</div>
            {errorMsg.map(msg => (<div className="error">{msg}</div>))}
            <div className='top'>
                <Link to={'/'}>
                    <button>Wróć do sklepu</button>
                </Link>
            </div>
            <div className='bottom'>
                <div className='list'>
                    {cart.products.map(product => (
                    <div key={product._id}>
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
                                    <AddIcon className='icon' onClick={() => handleAddQty(product._id, product.stock, product.qty)}/>
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
                    </div>))}
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
