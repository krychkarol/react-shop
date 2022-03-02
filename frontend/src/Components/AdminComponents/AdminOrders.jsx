import React from 'react';
import TitleBar from '../TitleBar';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DataTable from './DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteOrder, getOrders} from '../../Redux/api';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AdminOrders = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.admin.order.orders);

    const [ search, setSearch ] = useState("");
    const [ filterOrders, setFilterOrders ] = useState(orders);

    useEffect(() => {
        const findOrders = () => {
            setFilterOrders(orders.filter(order => {
                return order._id.includes(search) || order.userId.includes(search) ;
            }));
        }
        findOrders();
    },[search, orders]);

    useEffect(() => {
        getOrders(dispatch)
    },[dispatch]);

    const handledelete = (id) =>{
        if (window.confirm('Czy napewno usunąć zamówienie ?')) 
        deleteOrder(id, dispatch)
    };

    const columns = [
        { field: '_id', headerName: 'ID', minWidth: 200, flex: 2},
        { field: 'userId', headerName: 'ID uzytkownika', minWidth: 200, flex: 2},
        { field: 'status', headerName: 'Status', minWidth: 200, flex: 2},
        { field: 'edit', headerName: 'Akcje', minWidth: 100, flex: 1, renderCell: (params) => {
            return (
                <>         
                <Link to={'/admin/zamowienie/' + params.row._id}>
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
        <div className='admin-orders'>
            <div className='top'>
                <TitleBar title='Zarządzaj' subtitle='Zamówienia'/>
            </div>
            <div className='list'>
                <div className='filters'>
                    <div className='search'>
                        <input type='text' placeholder='Szukaj...' onChange={e => setSearch(e.target.value)} />
                        <SearchIcon className='icon'/>
                    </div>
                </div>
                <div className='grid'>
                    <DataTable products={filterOrders} columns={columns}/>
                </div>
            </div>
        </div>
    )
}

export default AdminOrders
