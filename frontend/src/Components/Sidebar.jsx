import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({categories, category, subcategory}) => {

    const [ sortedCategories, setSortedCategories ] = useState([])

    useEffect(() => {
        setSortedCategories(categories.sort((a, b) => a.order - b.order))

    },[categories])

    return (
        <div className='sidebar'>
            {sortedCategories.map(item => 
                <div className={item.name === category ? 'category active' : 'category'} key={item._id}>
                    <Link to={`/produkty/${item.name}/wszystko`} className='link'>
                        <div className='title'>
                            {item.name}
                        </div>
                    </Link>
                    
                    <div className='list'>
                        {item.subcategory.map(items =>
                            <Link to={`/produkty/${item.name}/${items}`} className='link'>
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
