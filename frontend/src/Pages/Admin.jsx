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
import AdminUsers from '../Components/AdminComponents/AdminUsers';
import AdminEditUser from '../Components/AdminComponents/AdminEditUser';
import AdminOrders from '../Components/AdminComponents/AdminOrders';
import AdminEditOrder from '../Components/AdminComponents/AdminEditOrder';
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
                <Route path="/admin/uzytkownicy" element={<AdminUsers/>} />
                <Route path="/admin/uzytkownik/:id" element={<AdminEditUser/>} />
                <Route path="/admin/zamowienia" element={<AdminOrders/>} />
                <Route path="/admin/zamowienie/:id" element={<AdminEditOrder/>} />
            </Routes>
        </div>
    )
}

export default Admin
