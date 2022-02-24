import React from 'react';
import TitleBar from '../TitleBar';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DataTable from './DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUser, getUsers } from '../../Redux/api';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminUsers = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.admin.user.users);

    const [ search, setSearch ] = useState("");
    const [ filterUsers, setFilterUsers ] = useState(users);

    useEffect(() => {
        const findUsers = () => {
            setFilterUsers(users.filter(user => {
                return user.username.includes(search) || user._id.includes(search) ;
            }));
        }
        findUsers();
    },[search, users]);

    useEffect(() => {
        getUsers(dispatch)
    },[dispatch]);

    const handledelete = (id) =>{
        if (window.confirm('Czy napewno usunąć użytkownika ?')) 
        deleteUser(id, dispatch)
    };

    const columns = [
        { field: '_id', headerName: 'ID', minWidth: 200, flex: 2},
        { field: 'username', headerName: 'Nazwa', minWidth: 200, flex: 2},
        { field: 'edit', headerName: 'Akcje', minWidth: 100, flex: 1, renderCell: (params) => {
            return (
                <>         
                <Link to={'/admin/uzytkownik/' + params.row._id}>
                    <div className='grid-edit'>
                        <ModeEditOutlineOutlinedIcon className='icon'/>
                    </div>
                </Link>
                <div className='btn' onClick={() => handledelete(params.row._id)}>
                    <div className='grid-edit'>
                        <DeleteOutlineIcon className='icon'/>
                    </div>
                </div>
                </>
            );
          },
        },
    ];

    return (
        // SCSS => _adminProducts
        <div className='admin-users'>
            <div className='top'>
                <TitleBar title='Zarządzaj' subtitle='Produkty'/>
            </div>
            <div className='list'>
                <div className='filters'>
                    <div className='search'>
                        <input type='text' placeholder='Szukaj...' onChange={e => setSearch(e.target.value)} />
                        <SearchIcon className='icon'/>
                    </div>
                </div>
                <div className='grid'>
                    <DataTable products={filterUsers} columns={columns}/>
                </div>
            </div>
        </div>
    )
}

export default AdminUsers
