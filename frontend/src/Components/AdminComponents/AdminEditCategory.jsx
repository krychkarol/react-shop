import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateCategory } from '../../Redux/api';
import TitleBar from '../TitleBar';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';

const AdminEditCategory = () => {

    const dispatch = useDispatch();

    let navigate = useNavigate();

    let location = useLocation();
    const categoryId = location.pathname.split('/')[3];

    const category = useSelector(state => state.admin.category.categories.find(item => item._id === categoryId));

    const [ file, setFile ] = useState(); //TODO
    const [ inputs, setInputs ] = useState({
        name: category.name,
        subcategory: category.subcategory,
        order: category.order,
        img: category.img
    });

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

    const handleUpdate = async (id, category) => {
        await updateCategory(id, category, dispatch);
        navigate('/admin/kategorie');
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
        // SCSS => _adminProduct 
        <div className='admin-edit-category'>
            <div className='top'>
                <TitleBar title='Edytuj' subtitle={`ID: `+ category._id}/>
                <Link to={'/admin/kategorie'}>
                    <button>Lista Kategorii</button>
                </Link>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div className='name'>
                        <label>Nazwa</label>
                        <input name='name' type='text' value={inputs.name} onChange={handleChange}/>
                    </div>
                    <div className='subcategory'>
                        <label>Podkategorie</label>
                        <input name='subcategory' type='text' value={inputs.subcategory} onChange={handleChangeSubcategory}/>
                    </div>
                    <div className='order'>
                        <label>Kolejność</label>
                        <input name='order' type='number' value={inputs.order} onChange={handleChange}/>
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
                <button onClick={() =>handleUpdate(categoryId, inputs)}>Zapisz zmiany</button>
            </div>
        </div>
    )
}

export default AdminEditCategory
