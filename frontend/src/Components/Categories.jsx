import React from 'react'
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {

    return (
        <div className='categories'>
            <div className='wrapper'>
                {categories.map((item, index) => (
                    <div className='item' key={index}>
                        <Link to={`/produkty/${item.name.toLowerCase()}/wszystko`} className='link'>
                                <img src={item.img} alt='#'/>
                                <div className='info'>
                                    <div className='desc'>
                                        {item.name}
                                    </div>
                                    <button>Pokaż</button>
                                </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories
