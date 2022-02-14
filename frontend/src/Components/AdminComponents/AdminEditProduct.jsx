import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProduct } from '../../Redux/api';
import TitleBar from '../TitleBar';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';

const AdminEditProduct = ({categories}) => {

    const dispatch = useDispatch();

    let navigate = useNavigate();

    let location = useLocation();
    const productId = location.pathname.split('/')[3];

    const product = useSelector(state => state.admin.product.products.find(item => item._id === productId));

    const [ file, setFile ] = useState(); //TODO
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

    const handleUpdate = async (id, product) => {
        await updateProduct(id, product, dispatch);
        navigate('/admin/produkty');
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
                default: 
                    //
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

    return (
        <div className='admin-edit-product'>
            <div className='top'>
                <TitleBar title='Edytuj' subtitle={`ID: `+ product._id}/>
                <Link to={'/admin/produkty'}>
                    <button>Lista Produktów</button>
                </Link>
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
                            <input name='img' type='file' id='file' onChange={(e) => setFile(e.target.files[0])}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='save'>
                <button onClick={() =>handleUpdate(productId, inputs)}>Zapisz zmiany</button>
            </div>
        </div>
    )
}

export default AdminEditProduct
