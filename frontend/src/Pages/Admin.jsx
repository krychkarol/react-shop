import React from 'react';
import AdminMenu from '../Components/AdminComponents/AdminMenu';
import AdminEditProduct from '../Components/AdminComponents/AdminEditProduct';
import AdminProducts from '../Components/AdminComponents/AdminProducts';
import AdminCreateProduct from '../Components/AdminComponents/AdminCreateProduct';
import AdminCategories from '../Components/AdminComponents/AdminCategories';
import AdminEditCategory from '../Components/AdminComponents/AdminEditCategory';
import AdminCreateCategory from '../Components/AdminComponents/AdminCreateCategory';
import AdminSlider from '../Components/AdminComponents/AdminSlider';
import AdminCreateSlide from '../Components/AdminComponents/AdminCreateSlide';
import AdminEditSlide from '../Components/AdminComponents/AdminEditSlide';

import {
    Routes,
    Route
} from 'react-router-dom';


const Admin = ({categories}) => {

    return (
        <div className='admin'>
            <Routes>
                <Route path="*" element={<></>} />
                <Route path="/admin" element={<AdminMenu />} />
                <Route path="/admin/produkty" element={<AdminProducts categories={categories} />} />
                <Route path="/admin/produkt/:id" element={<AdminEditProduct categories={categories}/>} />
                <Route path="/admin/produkt/nowy" element={<AdminCreateProduct categories={categories}/>} />
                <Route path="/admin/kategorie" element={<AdminCategories/>} />
                <Route path="/admin/kategoria/:id" element={<AdminEditCategory/>} />
                <Route path="/admin/kategoria/nowa" element={<AdminCreateCategory/>} />
                <Route path="/admin/slajder" element={<AdminSlider/>} />
                <Route path="/admin/slajd/:id" element={<AdminEditSlide/>} />
                <Route path="/admin/slajd/nowy" element={<AdminCreateSlide/>} />
            </Routes>
        </div>
    )
}

export default Admin
