import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/api';
import { clearErr } from '../Redux/userRedux';

const RegisterForm = () => {

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password1, setPassword1 ] = useState("");
    const [ password2, setPassword2 ] = useState("");
    const [ errMsg, setErrMsg ] =useState();
    const [ firstRender, setFirstRender] = useState(false);

    const { fetching, error, reg } = useSelector(state => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     if(password1 === password2){     

    //         register(dispatch, { username, email, password: password1 })
    //     }
    //     else
    //         setErrMsg("Hasła nie są identyczne") 
    // }

    const validMail = (mail) =>
    {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(password1 !== password2)
            setErrMsg("Hasła nie są identyczne") 
        else if(username?.length < 4)
            setErrMsg("Nazwa użytkownika jest za krótka (min. 5 znaków)")
        else if(!validMail(email))
            setErrMsg("Email jest nieprawidłowy")
        else
            register(dispatch, { username, email, password: password1 })
    }

    useEffect(() => {
        if(error){
            if(error.code === 11000){   //11000 duplicate error
                if(error.keyPattern.username === 1)
                    setErrMsg("Nazwa użytkownika jest już zajęta.")
                if(error.keyPattern.email === 1)
                    setErrMsg("Email jest już zajęty.")
            }
        }
        if(reg)
            navigate('/zaloguj', {state: {notification: true}});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error, reg])
    
    useEffect(() => {
        if (!firstRender) {
            dispatch(clearErr())
            setFirstRender(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstRender])

    return (
        <div className='register-form'>
            <div className='title'>
                Utwórz konto
            </div>
            <form>
                <input placeholder='nazwa użytkownika' onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='hasło' type='password' onChange={(e) => setPassword1(e.target.value)}/>
                <input placeholder='potwierdź hasło' type='password' onChange={(e) => setPassword2(e.target.value)}/>
                <button onClick={handleRegister} disabled={fetching}>Utwórz</button>
                {(error || errMsg) && <div className='err'>{errMsg}</div>} 
            </form>
        </div>
    )
}

export default RegisterForm
