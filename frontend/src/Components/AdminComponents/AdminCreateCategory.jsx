import React, { useState } from 'react';
import TitleBar from '../TitleBar';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from 'react';
import app from '../../firebase';
import { createCategory } from '../../Redux/api';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const AdminCreateCategory = () => {

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const [ inputs, setInputs ] = useState({img:'https://via.placeholder.com/1/292929/FFFFFF/'});
    const [ file, setFile ] = useState(null);

    const handleChange = e => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    };

    const handleChangeSubcategory = e => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value.split(",")}
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

    const handleCreate = async (category) => {
        await createCategory(category, dispatch);
        navigate('/admin/kategorie');
    };

    return (
        // SCSS => _adminProduct 
        <div className='admin-create-category'>
        <div className='top'>
            <TitleBar title='Utwórz' subtitle='Nową kategorię'/>
            <Link to={'/admin/kategorie'}>
                <button>Lista Kategorii</button>
            </Link>
        </div>
        <div className='bottom'>
            <div className='left'>
                <div className='name'>
                    <label>Nazwa</label>
                    <input name='name' type='text' onChange={handleChange}/>
                </div>
                <div className='subcategory'>
                    <label>Podkategorie</label>
                    <input name='subcategory' type='text' onChange={handleChangeSubcategory}/>
                </div>
                <div className='order'>
                    <label>Kolejność</label>
                    <input name='order' type='number' onChange={handleChange}/>
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
            <button onClick={() =>handleCreate(inputs)}>Utwórz kategorię</button>
        </div>
    </div>
    );
};

export default AdminCreateCategory;
