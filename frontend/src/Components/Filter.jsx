import React from 'react';

const Filter = () => {
    return (
        <div className='filter'>
            <div className='text'>
                Sortuj wg:
            </div>
            <select defaultValue={'DEFAULT'}>
                <option value='DEFAULT'>Brak</option>
                <option value='asc'>Cena rosnąco</option>
                <option value='desc'>Cena malejąco</option>
            </select>
        </div>
    )
}

export default Filter
