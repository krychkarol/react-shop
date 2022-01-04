import React from 'react'
import AdminMenu from '../Components/AdminComponents/AdminMenu';
import AdminNavbar from '../Components/AdminComponents/AdminNavbar';
import AdminProduct from '../Components/AdminComponents/AdminProduct';
import AdminProducts from '../Components/AdminComponents/AdminProducts';

const Admin = () => {

    document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.getElementsByClassName('navbar');
        const footer = document.getElementsByClassName('footer');
        navbar[0].style.display = 'none';
        footer[0].style.display = 'none';
     }, false);

    return (
        <div className='admin'>
            <AdminNavbar/>
            <AdminProduct/>
        </div>
    )
}

export default Admin
