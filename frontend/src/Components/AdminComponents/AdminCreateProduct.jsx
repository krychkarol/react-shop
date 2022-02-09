import React, { useState } from 'react';
import TitleBar from '../TitleBar';

const AdminCreateProduct = ({categories}) => {

    const [ inputs, setInputs ] = useState({img:'https://via.placeholder.com/300/292929/FFFFFF/'});

    const handleChange = e => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    };


    return (
        <div className='admin-product'>
        <div className='top'>
            <TitleBar title='Utwórz' subtitle='Nowy produkt'/>
        </div>
        <div className='bottom'>
            <div className='left'>
                <div className='name'>
                    <label>Nazwa</label>
                    <input name='name' type='text' onChange={handleChange}/>
                </div>
                <div className='category'>
                    <label>Kategoria</label>
                    <select name='category' placeholder='category' onChange={handleChange}>
                        <option value='DEFAULT'>Wybierz...</option>
                        {categories.map(option => (
                            <option value={option.name} key={option.name}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div className='subcategory'>
                    <label>Podkategoria</label>
                    <select name='subcategory' onChange={handleChange}>
                        <option value='DEFAULT'>Wybierz...</option>
                        {categories.map(option => (
                            option.name === inputs.category && option.subcategory.map(option => (
                                <option value={option} key={option}>{option}</option> 
                            ))
                        ))}
                    </select>
                </div>
                <div className='price'>
                    <label>Cena</label>
                    <input name='price' type='number' onChange={handleChange}/>
                </div>
                <div className='stock'>
                    <label>Ilosc w magazynie</label>
                    <input name='stock' type='number' onChange={handleChange}/>
                </div>
                <div className='desc'>
                    <label>Opis</label>
                    <textarea name='desc' onChange={handleChange}/>
                </div>
            </div>
            <div className='right'>
                <div className='image'>
                    <img src={inputs.img} alt='#'/>
                </div>
                <div className='file'>
                    <div className='file1'>
                        <label htmlFor='file'>Wybierz plik i dodaj</label>
                        <input type='file' id='file' />
                    </div>
                </div>
            </div>
        </div>
        <div className='create'>
            <button>Utwórz produkt</button>
        </div>
        <button onClick={() => console.log(inputs)}>test</button>
    </div>
    );
};

export default AdminCreateProduct;
