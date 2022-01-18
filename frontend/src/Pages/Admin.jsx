import React from 'react'
import AdminMenu from '../Components/AdminComponents/AdminMenu';
import AdminProduct from '../Components/AdminComponents/AdminProduct';
import AdminProducts from '../Components/AdminComponents/AdminProducts';

import {
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";
import Home from './Home';



const Admin = () => {

    return (
        <div className='admin'>
            <Routes>
                <Route path="*" element={<></>}/>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminMenu />} />
                <Route path="/admin/produkty" element={<AdminProducts />} />
                <Route path="/admin/produkt/:id" element={<AdminProduct />} />
            </Routes>
        </div>
    )
}

export default Admin
