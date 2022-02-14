import React from 'react';
import AdminMenu from '../Components/AdminComponents/AdminMenu';
import AdminEditProduct from '../Components/AdminComponents/AdminEditProduct';
import AdminProducts from '../Components/AdminComponents/AdminProducts';
import AdminCreateProduct from '../Components/AdminComponents/AdminCreateProduct';
import {
    Routes,
    Route
} from 'react-router-dom';
import Home from './Home';





const Admin = ({categories}) => {

    return (
        <div className='admin'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminMenu />} />
                <Route path="/admin/produkty" element={<AdminProducts categories={categories} />} />
                <Route path="/admin/produkt/:id" element={<AdminEditProduct categories={categories}/>} />
                <Route path="/admin/produkt/nowy" element={<AdminCreateProduct categories={categories}/>} />
            </Routes>
        </div>
    )
}

export default Admin
