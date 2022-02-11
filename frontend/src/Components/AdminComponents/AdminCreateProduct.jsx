import React, { useState } from 'react';
import TitleBar from '../TitleBar';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from 'react';
import app from '../../firebase';
import { createProduct } from '../../Redux/api';
import { useDispatch } from 'react-redux';

const AdminCreateProduct = ({categories}) => {

    const dispatch = useDispatch();

    const [ inputs, setInputs ] = useState({img:'https://via.placeholder.com/1/292929/FFFFFF/'});
    const [ file, setFile ] = useState(null);

    const handleChange = e => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    };

    useEffect(() => {
        if(file)
        {
            const fileName = new Date().getTime() + file.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, fileName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs(prev => {
                        return {...prev, img: downloadURL}
                    });
                });
                }
            );
        }
    },[file]);

    const handleCreate = (product) => {
        createProduct(product, dispatch)
    };

    return (
        <div className='admin-create-product'>
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
                        <input name='img' type='file' id='file' onChange={(e) => setFile(e.target.files[0])}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='create'>
            <button onClick={() =>handleCreate(inputs)}>Utwórz produkt</button>
        </div>
    </div>
    );
};

export default AdminCreateProduct;
