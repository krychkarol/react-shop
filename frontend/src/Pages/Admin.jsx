import React from 'react'
import AdminMenu from '../Components/AdminComponents/AdminMenu';
import AdminNavbar from '../Components/AdminComponents/AdminNavbar';
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
            <AdminProducts/>
        </div>
    )
}

export default Admin
