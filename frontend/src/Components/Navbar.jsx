import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({categories}) => {

    const [ search, setSearch ] = useState("");
    const [ sortedCategories, setSortedCategories ] = useState([])

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

    useEffect(() => {
        setSortedCategories(categories.sort((a, b) => a.order - b.order))

    },[categories]);

    let isLogIn = false;
    let isAdmin = false;

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='top'>
                    <div className='left'>
                        <div className='search'>
                            <input id='search-input' type='text' placeholder='Szukaj...' onChange={e => setSearch(e.target.value)}/>
                            {search.toString().length > 2 ? (
                                <Link to={`/produkty/pokaz/${search}`} className='search-link'>
                                    <SearchIcon className='icon'/> 
                                </Link>
                            ) : <SearchIcon className='icon'/>}
                        </div>
                    </div>
                    <Link to='/'>
                        <div className='center'>
                            <img src='logo.png' alt='#' />
                            <div className='toggle-btn' onClick={toggleMenu}>
                                <MenuIcon className='icon' id='toggle-button' />
                            </div>
                            <div className='title'>
                                BRODACZ
                            </div>
                        </div>
                    </Link>
                    <div className='right'>
                        <div className='login-dropdown'>
                            <PermIdentityIcon className='icon-drop'/>
                            <div className='dropdown-list'>
                                {isLogIn ? (
                                    isAdmin ? (
                                        <>
                                        <div className='item'>Wyloguj</div>
                                        {/* ON CLICK LOGOUT ACTION */}
                                        <Link to='/admin'>
                                            <div className='item'>Panel Admina</div>
                                        </Link>
                                        </>
                                        ) : (
                                        <>
                                        <div className='item'>Wyloguj</div>
                                        {/* ON CLICK LOGOUT ACTION */}
                                        <Link to='#'>
                                            {/* TODO USER ACCOUNT DETAILS */}
                                            <div className='item'>Moje Konto</div>
                                        </Link>
                                        </>
                                    )
                                ) : (
                                    <>
                                    <Link to='/zaloguj'>
                                        <div className='item'>Zaloguj</div>
                                    </Link>
                                    <Link to='/zarejestruj'>
                                        <div className='item'>Zarejestruj</div>
                                    </Link>
                                    
                                    </>
                                )}
                            </div>
                        </div>
                        <Link to='/koszyk'>
                            <Badge badgeContent={5} color='error'>
                                <ShoppingCartOutlinedIcon className='icon'/>
                            </Badge>
                        </Link>
                    </div>
                </div>
                <div className='bottom'>
                    {sortedCategories.map(item => 
                    <div className='category' key={item._id}>
                        <Link to={`/produkty/${item.name}/wszystko`} className='link'>
                            <div className='title'>
                                {item.name}
                            </div>
                        </Link>
                        <div className='dropdown-list'>
                            {item.subcategory.map(items =>
                                <Link to={`/produkty/${item.name}/${items}`} className='link'>
                                    <div className='item' key={items}>
                                        {items}
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>   
                    )}
                </div>

                <div className='toggle-menu' id='toggle-menu'>
                    {sortedCategories.map(item => 
                        <div className='toggle-category' key={item._id}>
                            <Link to={`/produkty/${item.name}/wszystko`} className='link'>
                                <div className='title'>
                                    {item.name}
                                </div>
                            </Link>
                            <div className='dropdown-list'>
                                {item.subcategory.map(items =>
                                    <Link to={`/produkty/${item.name}/${items}`} className='link'>
                                        <div className='item' key={items}>
                                            {items}
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>   
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
