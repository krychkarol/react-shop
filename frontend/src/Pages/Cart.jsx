import React from 'react'
import { useSelector } from 'react-redux';
import CartDetails from '../Components/CartDetails'
import TitleBar from '../Components/TitleBar';

const Cart = () => {

    const cart = useSelector(state => state.cart);

    return (
        <div className='cart'>
            {cart.cartQty === 0 ? 
                <TitleBar title='Koszyk jest pusty' subtitle='Wróć do sklepu i dodaj produkty do koszyka :)'/>
            :   <CartDetails/>}
        </div>
    )
}

export default Cart
