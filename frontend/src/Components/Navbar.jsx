import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';

const Navbar = () => {

    const toggleMenu = () => {
        const menu = document.getElementById('toggle-button');
        const active = menu.classList.contains('active');
        const content = document.getElementById('toggle-menu');

        if(active){
            menu.classList.remove('active');
            content.style.display = 'none';

        }else{
            menu.classList.add('active');
            content.style.display = 'block';
        }
    }


    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='top'>
                    <div className='left'>
                        <div className='search'>
                            <input type='text' placeholder='Szukaj...' />
                            <SearchIcon className='icon'/>
                        </div>
                    </div>
                    <div className='center'>
                        <img src='https://battleofthebeardswi.com/wp-content/uploads/2019/05/8-1.png' alt='#' />
                        <div className='toggle-btn' onClick={toggleMenu}>
                            <MenuIcon className='icon' id='toggle-button' />
                        </div>
                        <div className='title'>
                            BRODACZ
                        </div>
                    </div>
                    <div className='right'>
                        <PermIdentityIcon className='icon'/>
                        <Badge badgeContent={5} color='error'>
                            <ShoppingCartOutlinedIcon className='icon'/>
                        </Badge>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='category'>
                        <div className='title'>
                            Broda
                        </div>
                        <div className='dropdown-list'>
                            <div className='item'>Olejki</div>
                            <div className='item'>Odżywki</div>
                            <div className='item'>Szampony</div>
                            <div className='item'>Farby</div>
                        </div>
                    </div>
                    <div className='category'>
                        <div className='title'>
                            Włosy
                        </div>
                        <div className='dropdown-list'>
                            <div className='item'>Pasty</div>
                            <div className='item'>Pudry</div>
                            <div className='item'>Szampony</div>
                            <div className='item'>Odżywki</div>
                            <div className='item'>Farby</div>
                        </div>
                    </div>
                    <div className='category'>
                        <div className='title'>
                            Akcesoria
                        </div>
                        <div className='dropdown-list'>
                            <div className='item'>Szczotki</div>
                            <div className='item'>Grzebienie</div>
                            <div className='item'>Kartacze</div>
                            <div className='item'>Inne</div>
                        </div>
                    </div>
                </div>

                {
                //TOGGLE MENU
                }

                <div className='toggle-menu' id='toggle-menu'>
                    <div className='toggle-category'>
                        <div className='title'>
                            Broda
                        </div>
                        <div className='dropdown-list'>
                            <div className='item'>Olejki</div>
                            <div className='item'>Odżywki</div>
                            <div className='item'>Szampony</div>
                            <div className='item'>Farby</div>
                        </div>
                    </div>
                    <div className='toggle-category'>
                        <div className='title'>
                            Włosy
                        </div>
                        <div className='dropdown-list'>
                            <div className='item'>Pasty</div>
                            <div className='item'>Pudry</div>
                            <div className='item'>Szampony</div>
                            <div className='item'>Odżywki</div>
                            <div className='item'>Farby</div>
                        </div>
                    </div>
                    <div className='toggle-category'>
                        <div className='title'>
                            Akcesoria
                        </div>
                        <div className='dropdown-list'>
                            <div className='item'>Szczotki</div>
                            <div className='item'>Grzebienie</div>
                            <div className='item'>Kartacze</div>
                            <div className='item'>Inne</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
