import React from 'react';
import TitleBar from '../TitleBar';
import SearchIcon from '@mui/icons-material/Search';
import DataTable from './DataTable';

const AdminProducts = () => {

    //TMP DATA
    const data = [
        {
            id: 1,
            img: 'https://estore.oceanic.com.pl/media/catalog/product/cache/04e4e01fb709bde6b953b045644fd62f/o/l/olejek_do_brody5900116081656_t2.png',
            desc: 'Olejek do brody',
            price: 25.23,
            link: ''
        },
        {
            id: 2,
            img: 'https://cdn.shopify.com/s/files/1/0270/2793/1234/products/0014_olejek-do-brody-MONOLIT_2048x2048.png?v=1601750588',
            desc: 'Olejek do brody',
            price: 35.23,
            link: ''
        },
    ];

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 250, flex: 3 },
        { field: 'desc', headerName: 'Nazwa', minWidth: 250, flex: 3 },
        { field: 'price', headerName: 'Cena', minWidth: 250, flex: 3 },
    ];


    return (
        <div className='admin-products'>
            <div className='top'>
                <TitleBar title='Zarządzaj' subtitle='Produkty'/>  
                <button>Dodaj produkt</button>
            </div>
            <div className="list">
                <div className="filters">
                    <div className='search'>
                        <input type='text' placeholder='Szukaj...' />
                        <SearchIcon className='icon'/>
                    </div>
                    <div className='filter'>
                        <div className='text'>
                            Kategorie:
                        </div>
                        <select defaultValue={'DEFAULT'}>
                            <option value='DEFAULT'>Wszystko</option>
                            <option value='#'>Broda</option>
                            <option value='#'>- Olejek</option>
                            <option value='#'>Włosy</option>
                            <option value='#'>Akcesoria</option>
                        </select>
                    </div>
                </div>
                <div className='grid'>
                    <DataTable products={data} columns={columns}/>
                </div>
                
                
            </div>
        </div>
    )
}

export default AdminProducts
