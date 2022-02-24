import React from 'react';
import { Link } from 'react-router-dom';
import TitleBar from '../TitleBar';

const AdminMenu = () => {
    return (
        <div className='admin-menu'>
            <div className='wrapper'>
                <TitleBar title='Zarządzaj' subtitle='Wybierz opcje'/>
                <div className='list'>
                    <div className='option'>
                        <Link to={'/admin/produkty'}>
                            <div>
                                Produkty
                            </div>
                        </Link>
                    </div>
                    <div className='option'>
                        <Link to={'/admin/kategorie'}>
                            <div>
                                Kategorie
                            </div>
                        </Link>
                    </div>
                    <div className='option'>
                        <Link to={'/admin/slajder'}>
                            <div>
                                Slajder
                            </div>
                        </Link>
                    </div>
                    <div className='option'>
                        <Link to={'/admin/uzytkownicy'}>
                            <div>
                                Użytkownicy
                            </div>
                        </Link>
                    </div>
                    <div className='option'>
                        <div>
                            Zamówienia
                        </div>
                    </div>
                    <div className='option'>
                        <div>
                            Płatnośći
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminMenu
