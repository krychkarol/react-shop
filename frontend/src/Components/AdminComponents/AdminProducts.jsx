import React, { useState } from 'react';
import TitleBar from '../TitleBar';
import SearchIcon from '@mui/icons-material/Search';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DataTable from './DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../../Redux/api';
import { Link } from 'react-router-dom';

const AdminProducts = ({categories}) => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.admin.product.products);

    const [ search, setSearch ] = useState("");
    const [ category, setCategory ] = useState("DEFAULT");
    const [ subcategory, setSubcategory ] = useState("DEFAULT");
    const [ filterProducts, setFilterProducts ] = useState(products);

    useEffect(() => {
        const findProducts = () => {
            if(subcategory !== "DEFAULT")
                setFilterProducts(products.filter(product => {
                    return product.category === category && product.subcategory === subcategory && product.name.includes(search);
                }));
            else if(category === "DEFAULT")
                setFilterProducts(products.filter(product => {
                    return product.name.includes(search);
                }));
            else
                setFilterProducts(products.filter(product => {
                    return product.category === category && product.name.includes(search);
                }));
        }
        findProducts();
    },[search, category, subcategory, products]);

    useEffect(() => {
        const toggleSubcategory = () => {
            const items = document.getElementsByClassName('hide');
            if(category === "DEFAULT"){
                for( var i = 0;  i < items.length; i++){
                items[i].classList.add('inactive');
                }
            }else{
                for( var j = 0;  j < items.length; j++){
                items[j].classList.remove('inactive');
                }
            }
        };
        toggleSubcategory();
        setSubcategory("DEFAULT");
    },[category]);

    useEffect(() => {
        getProducts(dispatch)
    },[dispatch]);

    const handledelete = (id) =>{
        if (window.confirm('Czy napewno usunąć ten produkt ?')) 
        deleteProduct(id, dispatch)
    };

    const columns = [
        { field: '_id', headerName: 'ID', minWidth: 220, flex: 2.2 },
        { field: 'name', headerName: 'Nazwa', minWidth: 200, flex: 2, renderCell: (params) => {
            return (
              <div className='grid-name'>
                <img className='grid-image' src={params.row.img} alt='' />
                {params.row.name}
              </div>
            );
          },
        },
        { field: 'price', headerName: 'Cena', minWidth: 80, flex: 0.8 },
        { field: 'stock', headerName: 'Ilość', minWidth: 80, flex: 0.8 },
        { field: 'edit', headerName: 'Akcje', minWidth: 100, flex: 1, renderCell: (params) => {
            return (
                <>         
                <Link to={'/admin/produkt/' + params.row._id}>
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
        <div className='admin-products'>
            <div className='top'>
                <TitleBar title='Zarządzaj' subtitle='Produkty'/>
                <Link to={'/admin/produkt/nowy'}>
                    <button>Dodaj produkt</button>
                </Link>
                
            </div>
            <div className='list'>
                <div className='filters'>
                    <div className='search'>
                        <input type='text' placeholder='Szukaj...' onChange={e => setSearch(e.target.value)} />
                        <SearchIcon className='icon'/>
                    </div>
                    <div className='filter'>
                        <div className='text'>
                            Kategora:
                        </div>
                        <select name='category' defaultValue={'DEFAULT'} onChange={e => setCategory(e.target.value)}>
                            <option value='DEFAULT'>Wszystko</option>
                            {categories.map(option => (
                                <option value={option.name} key={option._id}>{option.name}</option>
                            ))}
                        </select>
                        <div className='text hide'>
                            Podkategoria:
                        </div>
                        <select name='subcategory' className='hide' defaultValue={'DEFAULT'} onChange={e => setSubcategory(e.target.value)}>
                            <option value='DEFAULT'>Wszystko</option>
                            {categories.map(option => (
                                option.name === category && option.subcategory.map(option => (
                                    <option value={option} key={option}>{option}</option>
                                 ))    
                            ))}
                        </select>
                    </div>
                </div>
                <div className='grid'>
                    <DataTable products={filterProducts} columns={columns}/>
                </div>
            </div>
        </div>
    )
}

export default AdminProducts
