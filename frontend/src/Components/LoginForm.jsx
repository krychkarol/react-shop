import React from 'react'

const LoginForm = () => {
    return (
        <div className='login-form'>
            <div className='title'>
                Zaloguj się
            </div>
            <form>
                <input placeholder='nazwa użytkownika'/>
                <input placeholder='hasło' type='password'/>
                <button>Zaloguj</button>
                {/*TODO
                 {error && <div className="err">Nieprawidłowa nazwa użytkownika lub hasło.</div>} 
                */}
                <a href='#'>Zapomniałeś hasła ?</a>
                <div> lub </div>
                <a href='#'>Stwórz nowe konto</a>
            </form>
            
        </div>
    )
}

export default LoginForm
