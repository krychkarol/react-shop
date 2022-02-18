import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateSlide } from '../../Redux/api';
import TitleBar from '../TitleBar';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';

const AdminEditSlide = () => {

    const dispatch = useDispatch();

    let navigate = useNavigate();

    let location = useLocation();
    const slideId = location.pathname.split('/')[3];

    const slide = useSelector(state => state.admin.slider.slides.find(item => item._id === slideId));

    const [ file, setFile ] = useState();
    const [ inputs, setInputs ] = useState({
        name: slide.name,
        path: slide.path,
        desc: slide.desc,
        img: slide.img
    });

    const handleChange = e => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    };

    const handleUpdate = async (id, product) => {
        await updateSlide(id, product, dispatch);
        navigate('/admin/slajder');
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
        <div className='admin-edit-slider'>
            <div className='top'>
                <TitleBar title='Edytuj' subtitle={`ID: `+ slide._id}/>
                <Link to={'/admin/slajder'}>
                    <button>Lista Slajdów</button>
                </Link>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div className='name'>
                        <label>Nazwa</label>
                        <input name='name' type='text' value={inputs.name} onChange={handleChange}/>
                    </div>
                    <div className='path'>
                        <label>Scieżka</label>
                        <input name='path' type='text' value={inputs.path} onChange={handleChange}/>
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
                <button onClick={() =>handleUpdate(slideId, inputs)}>Zapisz zmiany</button>
            </div>
        </div>
    )
}

export default AdminEditSlide
