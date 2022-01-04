import React, { useState } from 'react'
import TitleBar from '../TitleBar';

const AdminProduct = () => {

    //TMP DATA

    const category = [
        {
            id: 1,
            name: 'kategoria 1',
            subcategories: ['k1 sub1', 'k1 sub2', 'k1 sub3', 'k1 sub4']
        },
        {
            id: 1,
            name: 'kategoria 2',
            subcategories: ['k2 sub1', 'k2 sub2', 'k2 sub3', 'k2 sub4']
        },
        {
            id: 1,
            name: 'kategoria 3',
            subcategories: ['k3 sub1', 'k3 sub2', 'k3 sub3', 'k3 sub4']
        },
    ]


    const data = 
        {
            id: '21839dashda17131sad',
            name: 'Olejek do brody',
            category: category[1].name,
            subcategory: category[1].subcategories[2],
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'LOREM IPSUM dsaadsj dsaj odasdasl, saduhmkd asnjdnais mkldas asbl 123 das dnsanld',
            price: 25.23,
            stock: 20,
            link: ''
        };

        const [inputs, setInputs] = useState(data);

        const handleChange = e => {
            setInputs(prev => {
                return {...prev, [e.target.name]: e.target.value}
            });
          };


    return (
        <div className='admin-product'>
            <div className='top'>
                <TitleBar title='Edytuj' subtitle={`ID: `+ data.id}/>
                <button>Usuń produkt</button>
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
                            {category.map(option => (
                                <option value={option.name}>{option.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='subcategory'>
                        <label>Podkategoria</label>
                        <select name='subcategory' value={inputs.subcategory} onChange={handleChange}>
                            {category.map(option => {
                                if(option.name === inputs.category){
                                    return option.subcategories.map(option => (
                                       <option value={option}>{option}</option> 
                                    ))    
                                }
                            })}
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
                    <div className='url'>
                        <label>Wpisz URL</label>
                        <input name='img' type='text' value={inputs.img} onChange={handleChange}/>
                    </div>
                    <div className='or'>
                        Albo
                    </div>
                    <div className='file'>
                        <div className="file1">
                            <label htmlFor='file'>Wybierz plik i dodaj</label>
                            <input type='file' id='file' />
                        </div>
                        <div className="file2">
                            +
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() =>console.log(data)}>przed</button>
            <button onClick={() =>console.log(inputs)}>po</button>
        </div>
    )
}

export default AdminProduct
