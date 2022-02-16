import React from 'react';
import TitleBar from '../TitleBar';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DataTable from './DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteCategory, getCategory } from '../../Redux/api';
import { Link } from 'react-router-dom';

const AdminCategories = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.admin.category.categories);

    useEffect(() => {
        getCategory(dispatch)
    },[dispatch]);

    const handledelete = (id) =>{
        if (window.confirm('Czy napewno usunąć kategorie ?')) 
        deleteCategory(id, dispatch)
    };


    const columns = [
        { field: '_id', headerName: 'ID', minWidth: 200, flex: 2 },
        { field: 'name', headerName: 'Nazwa', minWidth: 200, flex: 2, renderCell: (params) => {
            return (
              <div className='grid-name'>
                <img className='grid-image' src={params.row.img} alt='' />
                {params.row.name}
              </div>
            );
          },
        },
        { field: 'edit', headerName: 'Akcje', minWidth: 100, flex: 1, renderCell: (params) => {
            return (
                <>         
                <Link to={'/admin/kategoria/' + params.row._id}>
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
        <div className='admin-categories'>
            <div className='top'>
                <TitleBar title='Zarządzaj' subtitle='Kategorie'/>
                <Link to={'/admin/kategoria/nowa'}>
                    <button>Dodaj kategorie</button>
                </Link>
                
            </div>
            <div className='list'>
                <div className='grid'>
                    <DataTable products={categories} columns={columns}/>
                </div>
            </div>
        </div>
    )
}

export default AdminCategories
