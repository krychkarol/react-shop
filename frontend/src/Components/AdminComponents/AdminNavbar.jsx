import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div className='admin-navbar'>
            <div className='wrapper'>
                <div className='title'>
                    <Link to={'/admin'}>
                       Panel Administracyjny 
                    </Link>
                </div>
                <Link to={'/'}>
                    <button>Wróć do sklepu</button>
                </Link>
            </div>
        </div>
    )
}

export default AdminNavbar
