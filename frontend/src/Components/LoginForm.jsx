import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { login } from '../Redux/api';
import { clearErr} from '../Redux/userRedux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {

    const location = useLocation();
    const notification = location.state?.notification;

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ firstRender, setFirstRender] = useState(false);
    const [ showToastify, setShowToastify] = useState(notification);
 
    const { fetching, error } = useSelector(state => state.user)

    const dispatch = useDispatch();

    useEffect(() => {
        if (!firstRender) {
            dispatch(clearErr())
            setFirstRender(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstRender])

    useEffect(() => {
        if(showToastify){
        toast.success("Twoje konto zostało założone. Możesz się teraz zalogować.");
        setShowToastify(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                {/* TODO \/\/\/\/ */}
                {/* <Link to={'/'}>Zapomniałeś hasła ?</Link>
                <div> lub </div> */}
                <Link to={'/zarejestruj'}>Stwórz nowe konto</Link>
            </form>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default LoginForm
