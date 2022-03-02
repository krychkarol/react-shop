import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TitleBar from '../Components/TitleBar';
import { clearCart } from '../Redux/cartRedux';
import { userReq } from '../request';

const Summary = () => {

    const location = useLocation();
    const stripeData = location.state?.stripe;

    const dispatch = useDispatch();

    const cartData = useSelector(state => state.cart);
    const currentUser = useSelector(state => state.user.currentUser);

    const [ order, setOrder ] = useState(null);
    const [ cart, setCart ] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try{
                const res = await userReq.post("orders" , {
                    userId: currentUser._id,
                    products: cartData.products.map(item => ({
                        productId: item._id,
                        qty: item.qty,
                    })),
                    amount: cartData.total,
                    adress: stripeData.billing_details.address
                });
                setOrder(res.data)
            }catch{}
        };
        if(cartData.cartQty !== 0){
           createOrder();
           setCart(cartData);
           dispatch(clearCart())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='summary'>
            {order ? 
            <>
                <TitleBar title='Zamówienie zostało pomyślnie zrealizowane' subtitle='Dziękujemy i zapraszamy ponownie !'/>
                <TitleBar title='Podsumowanie' subtitle={'ID: ' + order._id}/>

                <div className='list'>
                    {cart.products.map(product => (
                    <>
                        <div className='item'>
                            <div className='wrapper'>
                                <div className='details'>
                                    <div>{product.name}</div>
                                </div>
                                <div className='qty'>
                                    <div>Ilość: {product.qty}</div>
                                </div>
                                <div className='price'>
                                    {(product.price * product.qty).toFixed(2)} zł
                                </div>    
                            </div>
                        </div>
                    <hr/>
                    </>))}
                </div>
                <div className='list'>
                        <div className='item'>
                            <div className='sum'>
                                Łącznie: {cart.total} zł
                            </div>
                        </div>
                </div>
            </> : <TitleBar title='Coś poszło nie tak :('/>}
        </div>
    )
}

export default Summary