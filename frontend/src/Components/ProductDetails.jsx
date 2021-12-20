import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductDetails = () => {
    return (
        <div className='product-details'>
            <div className='wrapper'>
                <div className='image'>
                    <img src='https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png' alt='#'/>
                </div>
                <div className='info'>
                    <div className='title'>
                        Olejek do brody
                    </div>
                    <div className='desc'>
                        Morbi at ornare tortor. Cras eget molestie dui, 
                        vitae tempor tortor. Aliquam congue vehicula elit a egestas. 
                        Integer et vehicula erat. Sed a tortor volutpat, mattis quam vel.
                    </div>
                    <div className='price'>
                        50 zł
                    </div>
                    <div className='add'>
                        <div className='amount'>
                            <div>Ilość:</div> 
                            <RemoveIcon className='icon'/>
                            <div className='qty'>1</div>
                            <AddIcon className='icon'/>
                        </div>
                        <button>Do Koszyka</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
