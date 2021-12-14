import React from 'react'

const ProductCard = ({product}) => {

    return (
        <div className='product-card'>
            <div className='wrapper'>
                <div className='image'>
                    <img src={product.img} alt='#'/>
                </div>
                <div className='desc'>
                    {product.desc}
                </div>
                <div className='price'>
                    {product.price} zł
                </div>
                <button>Szczegóły</button>
            </div>
        </div>
    )
}

export default ProductCard
