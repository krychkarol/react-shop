import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({categories, category, subcategory}) => {

    return (
        <div className='sidebar'>
            {categories.map(item => 
                <div className={item.name === category ? 'category active' : 'category'} key={item._id}>
                    <Link to={`/produkty/${item.name}/wszystko`} className='link'>
                        <div className='title'>
                            {item.name}
                        </div>
                    </Link>
                    
                    <div className='list'>
                        {item.subcategory.map((items, index) =>
                            <Link to={`/produkty/${item.name}/${items}`} className='link' key={index}>
                                <div className={items === subcategory ? 'item active' : 'item'}  key={items}>
                                    {items}
                                </div>
                            </Link>
                        )}
                    </div>
                </div>   
            )}
        </div>
    )
}

export default Sidebar
