import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {

    return (
        <Link to={`/produkt/${product._id}`} className='link'>
            <div className='product-card'>
                <div className='wrapper'>
                    <div className='image'>
                        <img src={product.img} alt='#'/>
                    </div>
                    <div className='desc'>
                        {product.name}
                    </div>
                    <div className='price'>
                        {product.price} zł
                    </div>
                    <button>Szczegóły</button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
