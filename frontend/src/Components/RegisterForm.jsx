import React from 'react'

const RegisterForm = () => {
    return (
        <div className='register-form'>
            <div className='title'>
                Utwórz konto
            </div>
            <form>
                <input placeholder='nazwa użytkownika'/>
                <input placeholder='email'/>
                <input placeholder='hasło'/>
                <input placeholder='potwierdź hasło'/>
                <button>Utwórz</button>
                {/*TODO
                {error && <div className='err'>Błąd.</div>} 
                */}
            </form>
        </div>
    )
}

export default RegisterForm
