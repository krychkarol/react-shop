import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const CartDetails = () => {
    return (
        <div className='cart-details'>
            <div className='title'>Twój koszyk</div>
            <div className='top'>
                    <button>Wróć do sklepu</button>
            </div>
            <div className='bottom'>
                <div className='list'>
                    {/* map */}
                    <>
                    <div className='item'>
                        <div className='image'>
                            <img src='https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png' alt='#'/>
                        </div>
                        <div className='wrapper'>
                            <div className='details'>
                                <div>Olejek do brody</div>
                            </div>
                            <div className='qty'>
                                <RemoveIcon className='icon'/>
                                <div>1</div>
                                <AddIcon className='icon'/>
                            </div>
                            <div className='price'>
                                42.67 zł
                            </div>    
                        </div>
                        <div className='delete'>
                            <DeleteIcon className='icon'/>
                        </div>
                    </div>
                    <hr/>
                    </>
                </div>
                <div className='summary'>
                    <div className='title'>
                        Podsumowanie
                    </div>
                    <div className='price'>
                        Cena: 42.67 zł
                    </div>
                    <button>Zapłać</button>
                </div>
            </div>
            
        </div>
    )
}

export default CartDetails
