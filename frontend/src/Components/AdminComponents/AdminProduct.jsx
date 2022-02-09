import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateProduct } from '../../Redux/api';
import TitleBar from '../TitleBar';

const AdminProduct = ({categories}) => {

    const dispatch = useDispatch();

    let location = useLocation();
    const productId = location.pathname.split('/')[3];

    const product = useSelector(state => state.admin.product.products.find(item => item._id === productId));

    const [ file, setFile ] = useState(""); //TODO
    const [ inputs, setInputs ] = useState({
        name: product.name,
        category: product.category,
        subcategory: product.subcategory,
        price: product.price,
        stock: product.stock,
        desc: product.desc,
        img: product.img
    });

    const handleChange = e => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    };

    const handleupdate = (id, product) => {
        updateProduct(id, product, dispatch)
    }

    return (
        <div className='admin-product'>
            <div className='top'>
                <TitleBar title='Edytuj' subtitle={`ID: `+ product._id}/>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div className='name'>
                        <label>Nazwa</label>
                        <input name='name' type='text' value={inputs.name} onChange={handleChange}/>
                    </div>
                    <div className='category'>
                        <label>Kategoria</label>
                        <select name='category' value={inputs.category} onChange={handleChange}>
                            {categories.map(option => (
                                <option value={option.name} key={option.name}>{option.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='subcategory'>
                        <label>Podkategoria</label>
                        <select name='subcategory' value={inputs.subcategory} onChange={handleChange}>
                            {categories.map(option => (
                                option.name === inputs.category && option.subcategory.map(option => (
                                    <option value={option} key={option}>{option}</option> 
                                ))
                            ))}
                        </select>
                    </div>
                    <div className='price'>
                        <label>Cena</label>
                        <input name='price' type='number' value={inputs.price} onChange={handleChange}/>
                    </div>
                    <div className='stock'>
                        <label>Ilosc w magazynie</label>
                        <input name='stock' type='number' value={inputs.stock} onChange={handleChange}/>
                    </div>
                    <div className='desc'>
                        <label>Opis</label>
                        <textarea name='desc' value={inputs.desc} onChange={handleChange}/>
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
            <div className='save'>
                <button onClick={() =>handleupdate(productId, inputs)}>Zapisz zmiany</button>
            </div>
        </div>
    )
}

export default AdminProduct
