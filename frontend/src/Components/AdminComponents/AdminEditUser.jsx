import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from '../../Redux/api';
import TitleBar from '../TitleBar';

const AdminEditUser = () => {

    const dispatch = useDispatch();

    let navigate = useNavigate();

    let location = useLocation();
    const userId = location.pathname.split('/')[3];

    const user = useSelector(state => state.admin.user.users.find(item => item._id === userId));

    const [ inputs, setInputs ] = useState({
        username: user.username,
        email: user.email,
    });

    const handleChange = e => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        });
    };

    const handleUpdate = async (id, user) => {
        await updateUser(id, user, dispatch);
        navigate('/admin/uzytkownicy');
    };



    return (
        // SCSS => _adminProduct 
        <div className='admin-edit-user'>
            <div className='top'>
                <TitleBar title='Edytuj' subtitle={`ID: `+ user._id}/>
                <Link to={'/admin/uzytkownicy'}>
                    <button>Lista Użytkowników</button>
                </Link>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div className='name'>
                        <label>Nazwa</label>
                        <input name='username' type='text' value={inputs.username} onChange={handleChange}/>
                    </div>
                    <div className='email'>
                        <label>Email</label>
                        <input name='email' type='text' value={inputs.email} onChange={handleChange}/>
                    </div>
                </div>
            </div>
            <div className='save'>
                <button onClick={() =>handleUpdate(userId, inputs)}>Zapisz zmiany</button>
            </div>
        </div>
    )
}

export default AdminEditUser
