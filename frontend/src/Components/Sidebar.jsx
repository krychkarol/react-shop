import React from 'react'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='category active'>
                <div className='title'>
                    Broda
                </div>
                <div className='list'>
                    <div className='item'>Olejki</div>
                    <div className='item'>Odżywki</div>
                    <div className='item'>Szampony</div>
                    <div className='item'>Farby</div>
                </div>
            </div>
            <div className='category'>
                <div className='title'>
                    Włosy
                </div>
                <div className='list'>
                    <div className='item'>Pasty</div>
                    <div className='item'>Pudry</div>
                    <div className='item'>Szampony</div>
                    <div className='item'>Odżywki</div>
                    <div className='item'>Farby</div>
                </div>
            </div>
            <div className='category'>
                <div className='title'>
                    Akcesoria
                </div>
                <div className='list'>
                    <div className='item'>Szczotki</div>
                    <div className='item'>Grzebienie</div>
                    <div className='item'>Kartacze</div>
                    <div className='item'>Inne</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
