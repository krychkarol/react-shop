import React from 'react';
import { useState } from 'react';

const Filter = ({sort}) => {

    return (
        <div className='filter'>
            <div className='text'>
                Sortuj wg:
            </div>
            <select defaultValue={'DEFAULT'} onChange={sort}>
                <option value='DEFAULT'>Brak</option>
                <option value='asc'>Cena rosnąco</option>
                <option value='desc'>Cena malejąco</option>
            </select>
        </div>
    )
}

export default Filter
