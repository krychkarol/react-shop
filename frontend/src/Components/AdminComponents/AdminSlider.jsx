import React from 'react';
import TitleBar from '../TitleBar';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DataTable from './DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteSlide, getSlides } from '../../Redux/api';
import { Link } from 'react-router-dom';

const AdminSlider = () => {

    const dispatch = useDispatch();
    const slides = useSelector(state => state.admin.slider.slides);

    useEffect(() => {
        getSlides(dispatch)
    },[dispatch]);

    const handledelete = (id) =>{
        if (window.confirm('Czy napewno usunąć slajd ?')) 
        deleteSlide(id, dispatch)
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
                <Link to={'/admin/slajd/' + params.row._id}>
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
        <div className='admin-slider'>
            <div className='top'>
                <TitleBar title='Zarządzaj' subtitle='Slajdy'/>
                <Link to={'/admin/slajd/nowy'}>
                    <button>Dodaj slajd</button>
                </Link>
                
            </div>
            <div className='list'>
                <div className='grid'>
                    <DataTable products={slides} columns={columns}/>
                </div>
            </div>
        </div>
    )
}

export default AdminSlider
