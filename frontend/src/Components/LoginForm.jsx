import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/api';

const LoginForm = () => {

    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    const { fetching, error } = useSelector(state => state.user)

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

    return (
        <div className='login-form'>
            <div className='title'>
                Zaloguj się
            </div>
            <form>
                <input placeholder='nazwa użytkownika' onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder='hasło' type='password' onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleLogin} disabled={fetching}>Zaloguj</button>
                {error && <div className='err'>Nieprawidłowa nazwa użytkownika lub hasło.</div>}
                <a href='#'>Zapomniałeś hasła ?</a>
                <div> lub </div>
                <a href='#'>Stwórz nowe konto</a>
            </form>
        </div>
    )
}

export default LoginForm
