import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/api';

const Navbar = ({categories}) => {

    const dispatch = useDispatch();

    const [ search, setSearch ] = useState("");

    const qty = useSelector(state => state.cart.cartQty)
    const isLogIn = useSelector(state => state.user.currentUser);
    const isAdmin = useSelector(state => state.user.currentUser?.isAdmin);

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
    };

    const handleLogout = () => {
        logout(dispatch);
    };

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
                                            <div className='item' onClick={() => handleLogout()}>Wyloguj</div>
                                            <Link to='/admin'>
                                                <div className='item'>Panel Admina</div>
                                            </Link>
                                        </>
                                        ) : (
                                        <>
                                            <div className='item' onClick={() => handleLogout()}>Wyloguj</div>
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
                            <Badge badgeContent={qty} color='error'>
                                <ShoppingCartOutlinedIcon className='icon'/>
                            </Badge>
                        </Link>
                    </div>
                </div>
                <div className='bottom'>
                    {categories.map(item => 
                    <div className='category' key={item._id}>
                        <Link to={`/produkty/${item.name}/wszystko`} className='link'>
                            <div className='title'>
                                {item.name}
                            </div>
                        </Link>
                        <div className='dropdown-list'>
                            {item.subcategory.map((items, index) =>
                                <Link to={`/produkty/${item.name}/${items}`} className='link' key={index}>
                                    <div className='item' key={items}>
                                        {items}
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>   
                    )}
                </div>
                {/* TOGGLE MENU */}
                <div className='toggle-menu' id='toggle-menu'>
                    {categories.map(item => 
                        <div className='toggle-category' key={item._id}>
                            <Link to={`/produkty/${item.name}/wszystko`} className='link'>
                                <div className='title'>
                                    {item.name}
                                </div>
                            </Link>
                            <div className='dropdown-list'>
                                {item.subcategory.map((items, index) =>
                                    <Link to={`/produkty/${item.name}/${items}`} className='link' key={index}>
                                        <div className='item'>
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
