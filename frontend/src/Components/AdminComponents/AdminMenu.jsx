import React from 'react'
import TitleBar from '../TitleBar'

const AdminMenu = () => {
    return (
        <div className='admin-menu'>
            <div className='wrapper'>
                <TitleBar title='Zarządzaj' subtitle='Wybierz opcje'/>
                <div className='list'>
                    <div className='option'>
                        <div>
                            Produkty
                        </div>
                    </div>
                    <div className='option'>
                        <div>
                            Zamówienia
                        </div>
                    </div>
                    <div className='option'>
                        <div>
                            Użytkownicy
                        </div>
                    </div>
                    <div className='option'>
                        <div>
                            Kategorie
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
